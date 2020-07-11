
const companies = [
  {name:'company one',category:'Finance',start:1981,end:2003},
  {name:'company two',category:'Retail',start:1992,end:2008},
  {name:'company three',category:'Auto',start:1999,end:2007},
  {name:'company four',category:'Retail',start:1989,end:2010},
  {name:'company five',category:'Technology',start:2009,end:2014},
  {name:'company six',category:'Finance',start:1987,end:2010},
  {name:'company seven',category:'Auto',start:1986,end:1996},
  {name:'company eight',category:'Technology',start:2011,end:2016},
  {name:'company nine',category:'Retail',start:1981,end:1989},
];
/* ********** FORECH ******** */
const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

// OLD WAY
// for(let i = 0; i < companies.length; i++){
//    console.log(companies[i]);
// }



//NEW WAY
//EXMPLE 1
companies.forEach(function (el) {
    console.log(el);
});

//EXMPLE 2
let answ = [];
ages.forEach(function (el) {
    if(el <= 20){
      answ.push(el);
    }
});
console.log(answ);
