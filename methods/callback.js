// function hello (callback,fname){
//     callback(fname)
// }

// let arrowfun = (fname)=>{
//     console.log(`this is arrow fun ${fname}`)
// }

// hello(arrowfun, "ali") // Output: this is arrow fun John



function hello (callback,fname,lname,arr){
    callback(fname,lname,arr)
}
let arrowfun= (fname,lname,arr)=>{
    console.log(`this is my full name ${fname} ${lname}, your array is ${arr}`)
}
hello(arrowfun,"ali", "khan",[1,2,3,34])