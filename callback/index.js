/*
        Dans la programmetion on trouve 2 types des languages , 
    *Language Synchrone ou bloquant (par exemple : java , python ,php) 
    *Language asynchrone comme javascript
    */


    // console.log("Avant");
    // let user=getUser(10,user=>{
    //     console.log(user);
    // });
    // console.log("apres");
    // function getUser(id,callback){
    //     setTimeout(()=>{
    //         return callback({id: id});
    //     },2000)
    // }

// ==> le probléme de callback (Les callBack imbriqué)

    console.log("Avant");
    let user=getUser(10,user=>{
        console.log(user);
        let products = getProduct(user.id,product=>{
            console.log(product);
        })
    });
    console.log("apres");
    function getUser(id,callback){
        setTimeout(()=>{
            return callback({id: id});
        },2000)
    }
    function getProduct(idUser,callback){
        setTimeout(()=>{
            return callback(['p1','p2']);
        },2000)
    }


    //==> Pour éviter ce problème on utilise les promesses 


    


   