let getIDs = () => {
      return new Promise((resolve,reject) => {
       setTimeout(() => {
           resolve([  10,70,30,40,50]);
       },1500)
 });
}
let calc = arry => {
    return new Promise((resolve,reject) => {
          setTimeout(arry => {
               let arryAnsw = arry.map(el => el * 10);
               resolve(arryAnsw);
          },1000,arry)
    });
}

let filter = filtArry => {
    return new Promise((resolve,reject) => {
         setTimeout(filtArry => {
             let filtArryAnsw = filtArry.filter(el => el > 300);
             resolve(filtArryAnsw);
         },1000,filtArry);
    })
}
s

function doc(){
    getIDs().then((IDs) => {
         console.log(IDs);
         return calc(IDs);
    })
    .then(answ => {
       console.log(answ);
       return filter(answ);
    })
    .then(final => {
        console.log(final);
    });
    // }).then(IDs => {                           // NOTE U CAN  NOTE GET THE IDS array data BY USING THIS METHOD
    //     console.log(a[3]);
    // })
}
// doc();

async function fun(){
     let ids = await getIDs();
     // function doc(a){
     //     console.log(a[3]);
     // }
     // doc(ids);
     console.log(ids);

     let answ = await calc(ids);
     console.log(answ);

     let final = await filter(answ);
     console.log(final);

     // function doc(a){                       // NOTE: U CAN GET THE IDS array data BY USING THIS METHOD
     //     console.log(a[3]);
     // }
     // doc(ids);

     // OR //
     return ids;   // NOTE: it return promise
}
fun().then(a => {console.log(a[3])});






































//
