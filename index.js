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



// let setBtn=document.getElementById("setIntervalBtn");
// let clearBtn=document.getElementById("clearIntervalBtn");

// let clear=null;

// setBtn.onclick=function(){
//     let count=0;
//     clear = setInterval(function(){
//         console.log(count);
//         count=count+1;
// },1000);
// };
// clearBtn.onclick=function(){
//     clearInterval(clear);
//     console.log("Cleared")
// }

//  =============================


// --------Set TimeOut---------
// let count=0;
// setTimeout(function(){
//     console.log(count);
//     count=count+1;
// }, 1000);

// --------Clear TimeOut---------
// let count=0;
// let clear = setTimeout(function(){
//     console.log(count);
//     count=count+1;
// }, 1000);
// clearTimeout(clear);

let setTimeOutBtn = document.getElementById("setTimeOutBtn");

let clear = null;

setTimeOutBtn.onclick = function(){
    setTimeout(() => {
        console.log("Hello");
    }, 3000);
};