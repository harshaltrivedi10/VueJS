import HTTP from "../axios";
export const loadData = ({ commit }) => {
  HTTP.get("data.json")
    .then((response) => {
      if (response.data) {
        const stocks = response.data.stocks;
        const funds = response.data.funds;
        const stockPortfolio = response.data.stockPortfolio;

        const portfolio = {
          stockPortfolio,
          funds,
        };
        commit("SET_STOCKS", stocks);
        commit("SET_PORTFOLIO", portfolio);
      }
    })
    .catch((error) => console.log(error));
};
