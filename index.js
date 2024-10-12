/*import { boston } from "./boston.js";
//console.log(JSON.stringify(boston.data))
let data=boston.data
let top=[]
for (let i=0;i<data.length;i++){
if(data[i][11]>200000){
    top.push({name:data[i][8],salary:data[i][11]})
   
}
}
console.log(top)

document.getElementById("app").innerHTML=`<h1>Top Earner:${top[0].name}Salary:${top[0].salary}Top 5:${top[0].name}</h1>`
//document.getElementById("app").innerHTML=JSON.stringify(boston.data[0][11])

*/
// import {boston} from "./boston.js";

// let data=boston.data
// let top=[]
// for(let i=0;i<data.length;i++){
//     if(data[i][11]<200000){
//         top.push({name:data[i][8],salary:data[i][11]})
//     }
// }
//     for(let x=0;x<data.length;x++)
//     {
//         document.getElementById("app").innerHTML=`<h1> Top earner  : ${top[0].name} salary : ${top[0].salary}</h1>`
//         document.getElementById("app1").innerHTML=`<h1> Top earner : ${top[1].name} salary : ${top[1].salary}</h1>`
//         document.getElementById("app2").innerHTML=`<h1> Top earner : ${top[2].name} salary : ${top[2].salary}</h1>`
//         document.getElementById("app3").innerHTML=`<h1> Top earner : ${top[3].name} salary : ${top[3].salary}</h1>`
//         document.getElementById("app4").innerHTML=`<h1> Top earner : ${top[4].name} salary : ${top[4].salary}</h1>`
// console.log(top[x])
// x.sort();
// }
import { boston } from "./boston.js";

let data = boston.data;
let topearners = [];

for (let i = 0; i < data.length; i++) {
  if (data[i][11] < 20000000) {
    topearners.push({ name: data[i][8], salary: data[i][11] });
  }
}

topearners.sort(function (a, b) {
  return b.salary - a.salary;
});

topearners = topearners.slice(0, 5);

let Earners = "<h1><u>Top salary:</u></h1>";
for (let i = 0; i < topearners.length; i++) {
  Earners += `<h2>Top salary ${i + 1}: ${topearners[i].name} - Salary: ${
    topearners[i].salary
  }</h2>`;
}
document.getElementById("app").innerHTML = Earners;
console.log(topearners);



