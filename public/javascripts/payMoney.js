//payMoney js代码
var popPlanBtn = document.getElementById("popPlan");        //投保计划下拉按钮
var hiddenPlanBtn = document.getElementById("hiddenPlan");  //投保计划收按钮
var insurePlan = document.getElementById("insurePlan");
var popInsurePlan = document.getElementById("popInsurePlan");
var popInsureBtn = document.getElementById("popInsureInform");  //投保人下拉按钮
var hiddenInsureBtn = document.getElementById("hiddenInsureInform");    //投保人收按钮
var insure = document.getElementById("insure");
var popInsure = document.getElementById("popInsure");
var popInsuredBtn = document.getElementById("popInsured");          //被投人下拉按钮
var hiddenInsuredBtn = document.getElementById("hiddenInsured");    //被投人收按钮
var insuredInform = document.getElementById("insuredInform");
var popInsuredInform = document.getElementById("popInsuredInform");
var popInsured2Btn = document.getElementById("popInsured2");
var insuredInform2 = document.getElementById("insuredInform2");
var hiddenInsured2Btn = document.getElementById("hiddenInsured2");
var popInsuredInform2 = document.getElementById("popInsuredInform2");
var checkBox = document.getElementById("checkBox");
var trueImgBox =document.getElementById("trueImgBox");
var payInsureText = document.getElementById("payInsureText");
var popLayer = document.getElementById("popLayer");
var insurePrompt = document.getElementById("insurePrompt");
var insurePromptText = document.getElementById("insurePromptText");

popPlanBtn.onclick=function () {
    insurePlan.style.display="none";
    popInsurePlan.style.display="block";
};
hiddenPlanBtn.onclick=function () {
    insurePlan.style.display="block";
    popInsurePlan.style.display="none";
};
popInsureBtn.onclick=function () {
    insure.style.display="none";
    popInsure.style.display="block";
};
hiddenInsureBtn.onclick=function () {
    insure.style.display="block";
    popInsure.style.display="none";
};
popInsuredBtn.onclick=function () {
    insuredInform.style.display="none";
    popInsuredInform.style.display="block";
};
hiddenInsuredBtn.onclick=function () {
    insuredInform.style.display="block";
    popInsuredInform.style.display="none";
};
popInsured2Btn.onclick=function () {
    insuredInform2.style.display="none";
    popInsuredInform2.style.display="block";
};
hiddenInsured2Btn.onclick=function () {
    insuredInform2.style.display="block";
    popInsuredInform2.style.display="none";
};

checkBox.onclick=function () {
    trueImgBox.style.display = "block";
};
trueImgBox.onclick=function (e) {
    trueImgBox.style.display="none";
    e.stopPropagation();
};
payInsureText.onclick=function () {
    insurePrompt.style.display="block";
    popLayer.style.display="block";
};
document.onclick=function (e) {
    if(insurePrompt.style.display=="block"&&e.target!=insurePrompt&&e.target!=insurePromptText&&e.target!=payInsureText)
    {
        insurePrompt.style.display="none";
        popLayer.style.display="none";
    }
};