const smooth = require('./sqrSmooth');
module.exports = {
    runAma : function (){
        let data = [
            {
                close:6063,
            },
            {
                close:6041,
            },
            {
                close:6065,
            },
            {
                close:6078,
            },
            {
                close:6114,
            },
            {
                close:6121,
            },
            {
                close:6106,
            },
            {
                close:6101,
            },
            {
                close:6166,
            },
            {
                close:6169,
            },
            {
                close:6195,
            },
            {
                close:6222,
            },
            {
                close:6186,
            },
            {
                close:6214,
            }
        ]
        let smoothVals = smooth.getSqrSmoothVals(data);
    }
}