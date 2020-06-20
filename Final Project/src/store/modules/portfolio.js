const state = {
  funds: 10000,
  stocks: [],
};

const mutations = {
  BUY_STOCK(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(
      (element) => Number(element.id) === Number(stockId)
    );
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity: Number(quantity),
      });
    }
    state.funds -= stockPrice * quantity;
  },
  SELL_STOCK(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(
      (element) => Number(element.id) === Number(stockId)
    );
    // console.log(record);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  },
};

const actions = {
  sellStock: ({ commit }, order) => {
    commit("SELL_STOCK", order);
  },
};

const getters = {
  stockPortfolio: (state, getters) => {
    return state.stocks.map((stock) => {
      const record = getters.stocks.find(
        (element) => Number(element.id) === Number(stock.id)
      );
      return {
        id: stock.id,
        quantity: Number(stock.quantity),
        name: record.name,
        price: record.price,
      };
    });
  },
  funds: (state) => {
    return state.funds;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
