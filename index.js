// ---------Set Interval--------
// let count=0;
// setInterval(function(){
//     console.log(count);
//     count=count+1;
// },1000);

// ---------Clear Interval-------
// let count=0;
// let clear = setInterval(function(){
//     console.log(count);
//     count=count+1;
// },1000);
// clearInterval(clear);

let setBtn=document.getElementById("setIntervalBtn");
let clearBtn=document.getElementById("clearIntervalBtn");

let clear=null;

setBtn.onclick=function(){
    let count=0;
    clear = setInterval(function(){
        console.log(count);
        count=count+1;
},1000);
};
clearBtn.onclick=function(){
    clearInterval(clear);
    console.log("Cleared")
}
