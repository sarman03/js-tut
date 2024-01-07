//stack(primitive) - pass by value systum
//heap(non-primitive)  - pass by reference systum

let myYoutube="sarman"
let anotherName= myYoutube
 
anotherName= "chetan"

console.log(anotherName);
console.log(myYoutube);

let userone= {
    name :"aamil",
    upi :"aamil@ybi"
}
let usertwo=userone
usertwo.name= "mullu"

console.log(userone.name);
console.log(usertwo.name);

