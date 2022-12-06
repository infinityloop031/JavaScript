

// var a={
//     1:"bilal",
//     2:"shabbir"
// }

// console.log(a);
// console.log(typeof(a))   // object

// var b=new Object()

// b.name="bill"
// console.log(b);

// var car = {};
// car.mileage = 98765;
// car.color = "red";
// console.log(car);
// car.turnTheKey = function() {
//     console.log("The engine is running")
// }
// console.log(car);
// car.turnTheKey();


var c={

    name:"honda",
    colour:"black",
    start:function myfunc(x) {
        if (x){
            console.log("Car Engine is Start");
        }else{
            console.log("Engine is Off");
        }
    }
};

console.log(c);
c.start(false);




