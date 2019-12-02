//index.html js代码
var whoInsureBtn = document.getElementById("whoInsureBtn");
var dialog = document.getElementById("dia");
var dialog2 = document.getElementById("dia2");
var content1Btn = document.getElementById("content1");
var content2Btn = document.getElementById("content2");
var content3Btn = document.getElementById("content3");
var tenYearText = document.getElementById("tenYearText");
var money1Btn = document.getElementById("money1");
var money2Btn = document.getElementById("money2");
var money3Btn = document.getElementById("money3");
var money4Btn = document.getElementById("money4");
var money5Btn = document.getElementById("money5");
var money6Btn = document.getElementById("money6");
var money7Btn = document.getElementById("money7");
var money8Btn = document.getElementById("money8");
var money9Btn = document.getElementById("money9");
var money10Btn = document.getElementById("money10");
var moneyText = document.getElementById("moneyText");
var popMoneyBtn = document.getElementById("popMoney");
var insurePrompt = document.getElementById("insurePrompt");
var insurePromptBtn = document.getElementById("insurePromptBtn");
var insurePromptText = document.getElementById("insurePromptText");
var header = document.getElementById("header");
var moneyHeader = document.getElementById("moneyHeader");
var popLayer = document.getElementById("popLayer");
var popBox = document.getElementById("popBox");
var popBox2 = document.getElementById("popBox2");
whoInsureBtn.addEventListener("click",function () {
    dialog.style.display="block";
    popLayer.style.display="block";
});
content1Btn.addEventListener("click",function () {
    dialog.style.display="none";
    popLayer.style.display="none";
    tenYearText.innerText="10周岁以下子女";
});
content2Btn.addEventListener("click",function () {
    dialog.style.display="none";
    popLayer.style.display="none";
    tenYearText.innerText="10-18周岁子女";
});
content3Btn.addEventListener("click",function () {
    dialog.style.display="none";
    popLayer.style.display="none";
    tenYearText.innerText="本人";
});
popMoneyBtn.addEventListener("click",function () {
    dialog2.style.display="block";
    popLayer.style.display="block";
});
money1Btn.addEventListener("click",function () {
    dialog2.style.display="none";
    popLayer.style.display="none";
    moneyText.innerText="10万";
});
money2Btn.addEventListener("click",function () {
    dialog2.style.display="none";
    popLayer.style.display="none";
    moneyText.innerText="20万";
});
money3Btn.addEventListener("click",function () {
    dialog2.style.display="none";
    popLayer.style.display="none";
    moneyText.innerText="30万";
});
money4Btn.addEventListener("click",function () {
    dialog2.style.display="none";
    popLayer.style.display="none";
    moneyText.innerText="40万";
});
money5Btn.addEventListener("click",function () {
    dialog2.style.display="none";
    popLayer.style.display="none";
    moneyText.innerText="50万";
});
money6Btn.addEventListener("click",function () {
    dialog2.style.display="none";
    popLayer.style.display="none";
    moneyText.innerText="60万";
});
money7Btn.addEventListener("click",function () {
    dialog2.style.display="none";
    popLayer.style.display="none";
    moneyText.innerText="70万";
});
money8Btn.addEventListener("click",function () {
    dialog2.style.display="none";
    popLayer.style.display="none";
    moneyText.innerText="80万";
});
money9Btn.addEventListener("click",function () {
    dialog2.style.display="none";
    popLayer.style.display="none";
    moneyText.innerText="90万";
});
money10Btn.addEventListener("click",function () {
    dialog2.style.display="none";
    popLayer.style.display="none";
    moneyText.innerText="100万";
});
insurePromptBtn.addEventListener("click",function () {
    insurePrompt.style.display="block";
    popLayer.style.display="block";
});
document.addEventListener("click",function (e) {
    if(insurePrompt.style.display=="block"&&e.target!=insurePrompt&&e.target!=insurePromptBtn&&e.target!=insurePromptText)
    {
        insurePrompt.style.display="none";
        popLayer.style.display="none";
    }
    else if(dialog.style.display=="block"&&e.target!=dialog&&e.target!=whoInsureBtn&&e.target!=header)
    {
        dialog.style.display="none";
        popLayer.style.display="none";
    }
    else if(dialog2.style.display=="block"&&e.target!=dialog2&&e.target!=popMoneyBtn&&e.target!=moneyHeader)
    {
        dialog2.style.display="none";
        popLayer.style.display="none";
    }
});