module.exports = {
    //https://www.khanacademy.org/math/probability/data-distributions-a1/summarizing-spread-distributions/a/calculating-standard-deviation-step-by-step
    stdDev: function (data){
        let sum = 0 
        for (let i = 0; i<data.length; i++){
            sum += data[i];
        }
        let m = sum/data.length;
        sum = 0;
        for (let i =0; i<data.length; i++){
            sum+= Math.pow(Math.abs(data[i]-m),2);
        }
        sum=sum/data.length;
        return Math.sqrt(sum);
    }
}