module.exports = {
    jsPromiseTest : function(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>resolve('resolved'), 5000);
        })
    }
}