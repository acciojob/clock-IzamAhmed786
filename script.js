//your JS code here. If required.
let date = new Date();

let time=`${date.getMonth()}/${date.getDate()}/${date.getFullYear()},${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

setInterval(()=>{	document.getElementById("timer").innerText = time
},1000)

