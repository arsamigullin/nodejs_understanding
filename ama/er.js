const amaConfig = require('./amaConfig');

module.exports = {
    getERvals: function(data) {
        let endIndex = amaConfig.erRange;
        let ERvals = [];
        for (let i = endIndex; i<data.length; i++){
            let index = i-endIndex;
            let direction = data[index].close-data[endIndex].close;
            let volatility = 0;
            for (let j = index; j<index + endIndex; j++){
                volatility+=Math.abs(data[j].close - data[j+1].close)
            }
            ERvals.push(direction/volatility);
        }
        return ERvals;
    }
}