

// class Car{
//     constructor(a,b){
//         console.log("calling");
//         this.a=a;
//         this.b=b;
//     }
//     display(){
//         console.log("hello");
//         console.log(this.a,this.b);
//     }
// }

// c=new Car(10,20);
// c.display();

class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
        return proto;
    }
}

t=new Train('blue',false);
t.toggleLights();
t.getSelf();
x=t.getPrototype();
x.lightsOn=true;
x.color="black";
console.log(x);