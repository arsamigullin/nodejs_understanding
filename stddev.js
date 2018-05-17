module.exports = {
    stdDev: function (data){
        let sum = 0 
        for (let i = 0; i<data.length; i++){
            sum += data[i]
        }
        let m = sum/data.length;
        sum = 0;
        for (let i =0; i<data.length; i++){
            sum+= Math.pow(Math.abs(data[i]-m),2);
        }
        sum=sum/data.length;
        sum = Math.sqrt(sum);
    }
}