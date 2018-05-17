const amaConfig = require('./amaConfig');
const er = require('./er');

module.exports = {
    getSqrSmoothVals : function(data){
        let fastest = 2/(amaConfig.shortPeriod+1);
        let slowest = 2/(amaConfig.longPeriod+1);
        let erVals = er.getERvals(data);
        let sqrSmoothVals= [];
        for (let i=0;i<erVals.length;i++){
            let smooth = erVals[i]*(fastest-slowest)+slowest;
            sqrSmoothVals.push(Math.pow(smooth,2));
        }
        return sqrSmoothVals;
    }
}