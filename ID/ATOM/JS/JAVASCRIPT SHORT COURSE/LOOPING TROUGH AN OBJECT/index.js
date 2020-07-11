const person = {
   name: "Dom",
   age: 29
}

let arryPerson = Object.entries(person);
console.log(arryPerson);

// LOOPING TROUGH AND OBJECT
for(let [key,value] of arryPerson){
    // console.log(`Key: ${key} || value: ${value}`);


    // console.log(key); return name,age;
    // console.log(value); return Dom,29;
}


arryPerson.forEach((value, key) => {
      // console.log(`Key: ${key} || value: ${value}`);

      // console.log(key); return 0 , 1 on which it conut the length of an object;

      // console.log(value);  return ["name","Dom"],["age",29];
      // console.log(value[1]); return Dom and 29;
});
