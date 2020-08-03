var jogger = document.getElementById("jogger");
var cafarenas = document.getElementById("cafarenas");
var beanies = document.getElementById("beanies");
var beaniesClose =document.getElementById("beanies-close");
var cafarenasClose =document.getElementById("cafarenas-close");
var joggersClose =document.getElementById("joggers-close");

jogger.addEventListener("click", showInfo);
cafarenas.addEventListener("click", showInfo);
beanies.addEventListener("click", showInfo);
beaniesClose.addEventListener("click" , hideInfo);
cafarenasClose.addEventListener("click" , hideInfo);
joggersClose.addEventListener("click" , hideInfo);


function showInfo() {
    var reset = document.querySelectorAll(".modal-content");
    var reset2 = document.querySelectorAll(".card");

    for (var i = 0; i < reset2.length; i++) {
        reset2[i].className = "hideC";
   }
    for (var i = 0; i < reset.length; i++) {
         reset[i].className = "hide";
    }
    var info = this.attributes["data-info"].value;
    var infoId = document.getElementById(info);
    if (infoId.className === "hide") {
        infoId.className = "modal-content";
    } else {
        infoId.className = "hide";
    }
};

function hideInfo() {
    var reset2 = document.querySelectorAll(".hideC");

    for (var i = 0; i < reset2.length; i++) {
        reset2[i].className = "card";
   }
    var info = this.attributes["data-info"].value;
    var infoId = document.getElementById(info);
    if (infoId.className === "modal-content") {
        infoId.className = "hide";
    }
};