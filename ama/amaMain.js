const smooth = require('./sqrSmooth');
const testData = require('./amaTestData');
const amaConfing = require('./amaConfig');
const stdDev = require('./../stddev');


module.exports = {
    runAma : function (){
        let data = testData.getClosePrices();
        let smoothVals = smooth.getSqrSmoothVals(data);
        let range = amaConfing.erRange; 
        let maxIndex = range-1;
        let AMA = [];
        for (let i = 0; i< range;i++){
            AMA.push(data[i].close);
        }
        stdDev.stdDev(AMA);
        for(let i = 1; i<=data.length-range; i++){
            AMA.push(AMA[i+maxIndex-2]+ smoothVals[i-1]*(data[i+maxIndex].close-AMA[i+maxIndex-2]));
        }
        stdDev.stdDev(AMA);
    }
}