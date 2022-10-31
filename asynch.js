/* Quand une tâche est exécutée de manière synchrone, vous attendez la fin d'une
 tâche avant de passer à une autre. Asynchrone : Quand une tâche est exécutée de manière asynchrone,
 vous pouvez directement passer à une autre tâche avant qu'elle ne soit terminée. */



 console.log("errami1");
 console.log("errami2");
 console.log("errami3");
 /*
    ==>
    errami1
    errami2
    errami3
 
 */

    console.log("errami1");
    setTimeout(()=>console.log("errami fadlolah"),4000)
    console.log("errami2");
    console.log("errami3");
/*
    ==>
    errami1
    errami2
    errami3
    errami fadlolah

*/
