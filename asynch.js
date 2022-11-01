/* Quand une tâche est exécutée de manière synchrone, vous attendez la fin d'une
 tâche avant de passer à une autre. Asynchrone : Quand une tâche est exécutée de manière asynchrone,
 vous pouvez directement passer à une autre tâche avant qu'elle ne soit terminée. */



//  console.log("errami1");
//  console.log("errami2");
//  console.log("errami3");
 /*
    ==>
    errami1
    errami2
    errami3
 
 */

    // console.log("errami1");
    // setTimeout(()=>console.log("errami fadlolah"),4000)
    // console.log("errami2");
    // console.log("errami3");
/*
    ==>
    errami1
    errami2
    errami3
    errami fadlolah

*/
// console.log("errami1");
// console.log("errami2");
// let user = getUser(7);
// console.log(user);

// console.log("errami3");
// function getUser(id){
//     setTimeout(()=>{
//         console.log("Bonjour monsieur ERRAMI Fadel Ellah");
//         return {id: id,name: "Fadel Ellah ERRAMI",}
//     });
// }
/*
    errami1
    errami2
    undefined
    errami3
    Bonjour monsieur ERRAMI Fadel Ellah

*/


// callBack :
/*
    Une fonction de rappel (aussi appelée callback en anglais) est une fonction passée dans une autre 
    fonction en tant qu'argument, qui est ensuite invoquée à l'intérieur de la fonction externe pour 
    accomplir une sorte de routine ou d'action

*/
// console.log("errami1");
// console.log("errami2");
// let user = getUser(7,user=>{
//     console.log(user);
// });


// console.log("errami3");
// function getUser(id,callBack){
//     setTimeout(()=>{
//         console.log("Bonjour monsieur ERRAMI Fadel Ellah");
//         return callBack({id: id,name: "Fadel Ellah ERRAMI",})//la fonction callBack s'écecute aprés l'éxecution de la fonction getUser()
//     });
// }

/*
==>
    errami1
    errami2
    undefined
    errami3
    Bonjour monsieur ERRAMI Fadel Ellah
    {id: 7, name: 'Fadel Ellah ERRAMI'}

*/

// console.log("errami1");
// console.log("errami2");
// let user = getUser(7,user=>{
//     console.log(user);
//     getProduct(user.id,products=>console.log("products"+products));
// });


// console.log("errami3");
// function getUser(id,callBack){
//     setTimeout(()=>{
//         console.log("Bonjour monsieur ERRAMI Fadel Ellah");
//         return callBack({id: id,name: "Fadel Ellah ERRAMI",})//la fonction callBack s'écecute aprés l'éxecution de la fonction getUser()
//     });
// }
// function getProduct(userId,callBack){
//     setTimeout(()=>{
//         console.log("Bonjour Errami .......");
//         return callBack(['p1','p2']);
//     },2000);
// }

/*
==>
    errami1
    errami2
    undefined
    errami3
    Bonjour monsieur ERRAMI Fadel Ellah
    {id: 7, name: 'Fadel Ellah ERRAMI'}
    Bonjour Errami .......
    productsp1,p2

    callBack n'est pas une bonne pratique car si on a beucoup des fonctions callBack ,on va avoir un code trés complexe
*/




// Alors la meilleur technique est promises :
//promise : est une classe prédéfinis en js

let user = getUser(7)
    .then((user)=>{
        console.log(user);
        return getProduct(user.id);
    }
    ).then(products => console.log(products))
    .catch((err)=>console.warn(err))



function getUser(id){
    return new Promise((resolve,reject)=>{
        let status=true;
        setTimeout(()=>{
            console.log("Bonjour monsieur ERRAMI Fadel Ellah");
    
    if(status){
        return resolve({id: id,name: "Fadel Ellah ERRAMI",})
    }else {
        reject("user not found !!!")
    } },2000);
    });
}

function getProduct(userId){
    let status = true;
    console.log("Bonjour Errami .......");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Bonjour mi");
   
    if(status){
        return resolve(["p1","p2","p3","p4"])
    }else {
        reject("product not found !!!")
    }  },2000);
    });
   
}

/*
    Bonjour monsieur ERRAMI Fadel Ellah
    {id: 7, name: 'Fadel Ellah ERRAMI'}
    Bonjour Errami .......
    Bonjour mi
    ['p1', 'p2', 'p3', 'p4']


*/




// let p = new Promise((resolve,reject)=>{
//     let status=true;
//     if(status==true){
//         resolve("ok");
//     }else{
//         reject("ko");
//     }
// })
// p
// .then(res=>console.log(res))
// .catch(err=>console.warn(err))