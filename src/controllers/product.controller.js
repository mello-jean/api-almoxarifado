import productService from '../services/product.service.js';

export default {
  async create(req, res, next) {
    try {
      const product = await productService.createProduct(req.body);

      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  },

  async list(req, res, next) {
    try {
      const product = await productService.listUsers();
      res.json(product);
    } catch (error) {
      next(error);
    }
  },

  async get(req, res, next) {
    try {
      const product = await productService.getUser(req.params.id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  },

  // async update(req, res, next) {
  //   try {
  //     const user = await userService.updateUser(req.params.id, req.body);
  //     res.json(user);
  //   } catch (error) {
  //     next(error);
  //   }
  // },

  // Só poderá excluir os produtos se não tiver saldo e não tiver nenhuma movimentação
  // async remove(req, res, next) {
  //   try {
  //     await userService.removeUser(req.params.id);
  //     res.status(204).end();
  //   } catch (error) {
  //     next(error);
  //   }
  // },
};
