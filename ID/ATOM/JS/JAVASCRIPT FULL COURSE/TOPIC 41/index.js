// function getRecipe(){
//     setTimeout(() => {
//         let recipeId = [230,350,610,470];
//         console.log(recipeId);
//
//
//         setTimeout(id => {
//            const recipe = {
//               title: 'Fresh Tomato paste',
//               puplisher: 'Jonas'
//            }
//            console.log(`${id}: ${recipe.title}`);
//
//            setTimeout(publisher => {
//               const recipe2 = {
//                 title: 'Italian Pizza',
//                 publisher: 'Jonas'
//               }
//               console.log(recipe2);
//            },1500,recipeId[2]);
//
//         },1000,recipeId[3]);
//     },1500);
// }
// getRecipe();

let getIDs = () => {
      return new Promise((resolve,reject) => {
       setTimeout(() => {
           resolve([10,70,30,40,50]);
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
})








































































//
