module.exports = {
    thisInsideFunction: (id, num) => {
        this.id = id;
        this.num = num;
        this.getTotalNum = function () {
            return this.id + " " + this.num;
        };
    },

    thisInTheArrowedFunction: () => {
        var globalObject = this;
        var foo = () => this;
        console.log(foo() === globalObject);
        var obj = { foo: foo };
        console.log(foo.call(obj) == globalObject);
        foo = foo.bind(obj);
        console.log(foo() == globalObject);
    },

    thisInTheReturnObject: () => {
        this.d = 37;
        return {
            a: function () {
                return this.b;
            },
            b: this.d
        };
    },

    thisInTheNestedObject: () => {
        var o = { prop: 37 };
        function independent() {
            return this.prop;
        }
        o.f = independent;
        // console.log(o.f()); // 37

        o.b = { g: independent, prop: 42 };
        console.log(o.b.g()); // logs 42

        var globalObject = this;
        var b = {
            bar: function () {
                return this;
            }
        };
        var f = b.bar();
        console.log(f() == globalObject);
    },

    thisAndTernaryOperation: ()=>{
        class User {
            constructor(name){
                this.userName = name;
            }
            sh () {
                console.log(this.userName)
            }

            sayGoodBye () {
                console.log('Goodbye');
            }
        }

        let user = new User("John");
        //(user.userName=="John"? user.sayHi: user.sayGoodBye)(); // in this case is undefinden
        user.userName=="John"? user.sayHi(): user.sayGoodBye(); // this case without errors
    }
}