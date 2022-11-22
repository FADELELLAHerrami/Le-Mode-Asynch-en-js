




// let fs = require("fs");
// console.log("Avant");
// getData("file.txt",data=>{
//     console.log(data);
// });
// console.log("apres");
// function getData(path,callback){
//     fs.readFile(path,'utf-8',(err,data)=>{
//         if(err) console.log("error");
//         return callback(data);
//     });
// }

// ==> Un autre exemple avec une autre manière pour bien comprendre

// let fs = require("fs");
// console.log("avant");
// let data = fs.readFile("file.txt",(err,data)=>{
//     if(err) console.log("error");
//     console.log("lu");
// })
// console.log("après");


//Callback imbriqué

let fs = require("fs");
console.log("avant");
let data = fs.readFile("file.txt",(err,data)=>{
    fs.writeFile("file1.txt",data,(err)=>{
        if(err)console.log("error");
        console.log("data saved")
    })
    if(err) console.log("error");
    console.log("lu");
})
console.log("après");

    //==> Pour éviter ce problème on utilise les promesses 