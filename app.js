var name;
console.log(process.env);
if(process.env!="PRODUCTION"){
    name = require('./config').name;
    console.log(name);
}else{
    name = process.env.name;
}

console.log(name);