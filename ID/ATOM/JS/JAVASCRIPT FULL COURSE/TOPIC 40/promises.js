
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




/* **************** PROMISES ****************** */
let getIDs = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve([230,350,610,470]);
            // reject([230,350,610,470]);
        },1500);
});


const getRecipe = recID => {
    return new Promise((resolve,reject) => {
          setTimeout(ID => {
            const recipe = {
               title: 'Fresh Tomato paste',
               puplisher: 'Jonas'
            };
            resolve(`${ID}: ${recipe.title}`);
          },1000,recID);
    });
}


const publisher = (publisher) => {
     return new Promise((resolve,reject) => {
       setTimeout((pub) => {
         const recipe = {
           title: 'Italian Pizza',
           publisher: 'Jonas'
         }
         resolve(`${pub} : ${recipe.title}`);
       },1000,publisher)
     })
}


getIDs.
then(IDs => {
     console.log(IDs);
     return getRecipe(IDs[2]);
})
.then(recipe => {
     console.log(recipe);
     return publisher('Jonas Schmedmann');
})
.then(publ => {
    console.log(publ);
})
.catch(error => {
   console.log('Error!!');
})
























































//
