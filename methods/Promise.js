let mypromise = new Promise((resolve, reject) => {
 console.log("promise pending");
 setTimeout(() => {
  resolve(["Dua Ramasha"]);
 }, 3000);



});

// Handing the resolved value

mypromise.then((result) => {
 console.log(result); 
});