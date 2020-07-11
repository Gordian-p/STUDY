/* ************* ASYNCHRONOUS ******** */
// const second = () => {
//     setTimeout(() => {
//        console.log('Asyn Hey there!');
//     },2000);
// }
// const  first = () => {
//     console.log('Hey there');
//     second();
//     console.log('The end!');
// }
// first();




// EXMPLE 2

function getRecipe(){
    setTimeout(() => {
        let recipeId = [230,350,610,470];
        console.log(recipeId);


        setTimeout(id => {
           const recipe = {
              title: 'Fresh Tomato paste',
              puplisher: 'Jonas'
           }
           console.log(`${id}: ${recipe.title}`);

           setTimeout(publisher => {
              const recipe2 = {
                title: 'Italian Pizza',
                publisher: 'Jonas'
              }
              console.log(recipe);
           },1500,recipeId[2]);

        },1000,recipeId[3]);
    },1500);
}
getRecipe();






















































































































//
