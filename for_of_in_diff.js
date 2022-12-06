

var c={
    love:true
}
console.log(typeof(c));
var l=Object.create(c);
l.name="Bilal";
console.log(typeof(l));

for (var x of Object.keys(l)){
    console.log(x,":",l[x]);
}

console.log("******************************************************************************************************");

for (var x in l){
    console.log(x,":",l[x]);
}