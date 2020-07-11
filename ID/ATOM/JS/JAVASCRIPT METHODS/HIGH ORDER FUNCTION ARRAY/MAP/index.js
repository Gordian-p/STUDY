/* *************** MAPS ************ */
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


const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

// NOTE: filter use argument like < > === !== etc and put it int empty array;
// NOTE: map does not use argument because it does not have empty array;
var companyName = companies.map(function (el,i) {
      return el.category;
});
console.log(companyName);

const age2Map = ages.filter(function (el) {
     return el <= 20 ;
});
console.log(age2Map);


const ageMap = age2Map.map(function (el) {
     return el * 10;
});
console.log(ageMap);
