
import repo from '../repositories/report.repository.js';

export default {
    getAllBalances() {
        return repo.getAllBalances();
    },

    // getProductBalance() {

    // }

    getProductHistory(productId) {
        return repo.getProductHistory(productId);
    }
};