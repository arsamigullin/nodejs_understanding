module.exports = {
    oldFassionClasses : function(){
        function User (name){
            this.name = name;
        }
        User.sayHi = function(){
            console.log(this.name);
        }
        let user1 = new User ("Jhon");
        try{
            user1.sayHi();
        }catch (e){

        }


        User.sayHi();
        User.prototype.sayHi = function(){
            console.log(this.name);
        }
        user1.sayHi();
        // User is a constructor
        let isAConstructor = User == User.prototype.constructor;
        let ownProperties = Object.getOwnPropertyNames(User);
        ownProperties = Object.getOwnPropertyNames(User.prototype);
    },
    
    twoFunctionsOneObject: function (){
        var ob = {"a":4};
        function A (){
            return ob;
        }
        function B(){
            return ob;
        }
        let a = new A;
        let b = new B;
        let isEqual = (a==b);
    }
}