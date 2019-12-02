//registInformation js代码
var relationPop = document.getElementById("relationPop");
var dialog3 = document.getElementById("dia3");
var relationHeader = document.getElementById("relationHeader");
var my = document.getElementById("my");
var dadSon = document.getElementById("dadSon");
var dadGril = document.getElementById("dadGril");
var momSon = document.getElementById("momSon");
var momGril = document.getElementById("momGril");
var myText = document.getElementById("myText");
var popLayer = document.getElementById("popLayer");
relationPop.addEventListener("click",function () {
    dialog3.style.display="block";
    popLayer.style.display="block";
});
document.addEventListener("click",function (e) {
    if(dialog3.style.display=="block"&&e.target!=dialog3&&e.target!=relationPop&&e.target!=relationHeader){
        dialog3.style.display="none";
        popLayer.style.display="none";
    }
});
my.addEventListener("click",function () {
    myText.innerText="本人";
    popLayer.style.display="none";
});
dadSon.addEventListener("click",function () {
    myText.innerText="父子";
    popLayer.style.display="none";
});
dadGril.addEventListener("click",function () {
    myText.innerText="父女";
    popLayer.style.display="none";
});
momSon.addEventListener("click",function () {
    myText.innerText="母子";
    popLayer.style.display="none";
});
momGril.addEventListener("click",function () {
    myText.innerText="母女";
    popLayer.style.display="none";
});