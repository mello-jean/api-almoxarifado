import repo from '../repositories/stock-movement.repository.js';
import repoProduct from '../repositories/product.repository.js';
import createError from '../utils/app-error.js';

function ensureValidPayload({ productId, type, quantity }) {
  if (!productId) throw createError('Produto é obrigatório.', 400);
  if (!type || ['IN', 'OUT'].indexOf(type) === -1 ) throw createError('Tipo é inválido.', 400);
  if (!quantity || quantity <= 0) throw createError('Quantidade inválida.', 400);
}

export default {
  async createStockMovement(data, _userId) {
    ensureValidPayload(data);
    const product = await repoProduct.findById(data.productId);
    if (!product) throw createError('Produto não cadastrado.', 409);

    let newStock;

    if (data.type === 'OUT') {
      newStock = product.stock - data.quantity;
    } else {
      newStock = product.stock + data.quantity;
    }

    // validar saldo
    if (newStock < 0) throw createError('Quantidade insuficiente no estoque.', 400);
    
    const stockMovement = await repo.create({
      productId: data.productId,
      userId: _userId,
      type: data.type.trim().toUpperCase(),
      quantity: data.quantity
    });

    if (stockMovement) {
      await repoProduct.updateById(
        data.productId,
        {
          stock: newStock
        }
      );
    }

    return stockMovement;
  },

  async listStockMovements() {
    return repo.findAll();
  },

};
