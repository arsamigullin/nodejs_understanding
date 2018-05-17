const request = require('request');

module.exports = {
    requestData: function () {
        request({
            url: 'https://api.binance.com/api/v1/klines?symbol=ETHBTC&interval=1h'
        }, function optionalCallback(err, httpResponse, body) {
            if (err) {
                return console.error('upload failed:', err);
            }
            console.log('Upload successful!  Server responded with:', body);
        });
    }
}