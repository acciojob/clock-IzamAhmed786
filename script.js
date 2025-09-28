//your JS code here. If required.
let date = new Date();
let ap=date.getHours()<12 ? "AM" : "PM"

let time=`${date.getMonth()}/${date.getDate()}/${date.getFullYear()},${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}${ap}`;

setInterval(()=>{	document.getElementById("timer").innerText = time
},1000)

