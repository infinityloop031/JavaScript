
const person ={
name:'bilal',       // -> properties
walk: function(){
    console.log(this);
}
};

person.walk();
    
const walk=person.walk;
console.log(walk);

// by using bind

const w=person.walk.bind(person);
w();

// Arrow function

const square =n=> n*n;
console.log(square(6));


const jobs=[
    {id:1,isActive:true},
    {id:2,isActive:true},
    {id:3,isActive:false}
    ];
    
//const activeJobs=jobs.filter(function(job){return job.isActive});
    
const activeJobs=jobs.filter(job=>job.isActive);
console.log(activeJobs);

const double=activeJobs.map(job=>job.id*2);
console.log(double);



// Arrow function with this
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------");
 console.log("Arrow function with this keyword\n");
const p={
	talk(){
        var self=this;
        setTimeout(()=>{
            console.log("this",this);
        },1000);
}

};

// p.talk();

// Map function
console.log("--------------------------------------------------------------------------------------------------------------------------------------------");
console.log("Map functions");
const colors=["blue","green","red","yellow"];

const items=colors.map(color=>`<li>${color}</li>`);
console.log(items);




// object destructing
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("Object Destructing");
const address={
    street:'bilal',
    city:'fjk.dhgjks',
    country:''
};

const {city:st,street}=address;
console.log(st);

console.log(street);

// Spread Operator

// const first =[1,3,4]
// const second=[5,6,7]

// //const combined=[...first,100,...second,'c'];


// const clone=[...first];
