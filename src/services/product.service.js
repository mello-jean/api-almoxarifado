import repo from '../repositories/product.repository.js';
import createError from '../utils/app-error.js';

function ensureValidPayload({ name, description, price }) {
  if (!name?.trim()) throw createError('Nome é obrigatório.', 400);
  if (!description?.trim()) throw createError('Descrição é obrigatório.', 400);
  if (!price || price < 0) throw createError('Preço inválido.', 400);
}

export default {
  async createProduct(data) {
    ensureValidPayload(data);
    
    return repo.create({
      name: data.name.trim(),
      description: data.description.trim(),
      price: data.price,
      categories: data.categories
    });
  },

  async listProducts() {
    return repo.findAll();
  },

  async getProduct(id) {
    const product = await repo.findById(id);
    if (!product) throw createError('Produto não encontrado.', 404);
    return product;
  },

  // async updateUser(id, data) {
  //   const payload = { ...data };

  //   if (payload.email) {
  //     if (!payload.email.includes('@')) {
  //       throw createError('E-mail inválido.', 400);
  //     }
  //     const existing = await repo.findByEmail(payload.email);
  //     if (existing && existing.id !== id) {
  //       throw createError('E-mail já cadastrado.', 409);
  //     }
  //     payload.email = payload.email.trim().toLowerCase();
  //   }

  //   if (payload.name) {
  //     payload.name = payload.name.trim();
  //   }

  //   Object.keys(payload).forEach((key) => {
  //     if (payload[key] === undefined) delete payload[key];
  //   });

  //   if (Object.keys(payload).length === 0) {
  //     throw createError('Nenhum campo informado para atualização.', 400);
  //   }

  //   const updated = await repo.updateById(id, payload);
  //   if (!updated) throw createError('Usuário não encontrado.', 404);
  //   return updated;
  // },

  // async removeUser(id) {
  //   const deleted = await repo.deleteById(id);
  //   if (!deleted) throw createError('Usuário não encontrado.', 404);
  // },
};
