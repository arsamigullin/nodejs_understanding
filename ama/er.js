const amaConfig = require("./amaConfig");

module.exports = {
  getERvals: function(data) {
    let erCount = amaConfig.erRange;
    let ERvals = [];
    for (let i = erCount; i < data.length; i++) {
      let startIndex = i - erCount;
      let endIndex = startIndex + erCount;
      let direction = Math.abs(data[startIndex].close - data[endIndex].close);
      let volatility = 0;
      for (let j = startIndex; j < endIndex; j++) {
        volatility += Math.abs(data[j].close - data[j + 1].close);
      }
      ERvals.push(direction / volatility);
    }
    return ERvals;
  }
};
