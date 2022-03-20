const bglist = ["0.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png"];
const bgtoday = "img/" + bglist[Math.floor(Math.random()*bglist.length)];

const bgimg = document.createElement("img");
bgimg.className = "bg";
bgimg.src = bgtoday;
document.body.appendChild(bgimg);

//document.body.style.backgroundImage = bgtoday;