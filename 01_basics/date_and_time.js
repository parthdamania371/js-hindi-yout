//date

let mydate = new Date()

// console.log(mydate.toString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toDateString);

//own created date 

let mycreated_date = new Date (2025 ,0 ,28) ;
//console.log(mycreated_date.toDateString());
//console.log(mycreated_date.getTime());

//time

let mytimestap = Date.now()
//console.log(mytimestap.toString());

//console.log(Math.floor( Date.now()/1000));

//date
let date = new Date();
//console.log(date.getMilliseconds());

date.toLocaleString('default',{
    dateStyle:"long"
    
})
//console.log(date);
