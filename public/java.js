
function valid(){
var a=document.getElementById("phno");
var b1 =document.getElementById("org-pass");
var b2=document.getElementById("pass-check");
if(b1.value !== b2.value){
  alert("Invalid Password");
  }
if(a.value.length<10 && a.value.length>0){
  alert("Invalid Phone Number");
}
}


function cmpcheck(){
  var c1=document.getElementById("c1");
  var c2=document.getElementById("c2");
  var c3=document.getElementById("c3");
  var c4=document.getElementById("c4");
  var c5=document.getElementById("c5");

  var cgpa =document.getElementById("cgpa").value;
  if(c1.checked && cgpa<9.5){
    alert("Not Eligible for Google");
  }
  if(c2.checked && cgpa<9.0){
    alert("Not Eligible for Microsoft");
  }
  if(c3.checked && cgpa<8.5){
    alert("Not Eligible for Arcesium");
  }
  if(c4.checked && cgpa<8.0){
    alert("Not Eligible for Infosys");
  }
  if(c5.checked && cgpa<7.5){
    alert("Not Eligible for TCS");
  }
}


function admincheck(){

var m=document.getElementById("cname").value;
var b=document.getElementById("companyID").value;
var f =document.getElementById("cmppass").value;
if(m == "Google" ){
  if( b !== '16Z200' || f !== 'pass1'){
    alert("Invalid Login");
  }
}
if(m == "Microsoft" ){
  if( b !== '16Z300' || f !== 'pass2'){
    alert("Invalid Login");
  }
}
if(m == "Arcesium" ){
  if( b !== '16Z400' || f !== 'pass3'){
    alert("Invalid Login");
  }
}
if(m == "Infosys" ){
  if( b !== '16Z500' || f !== 'pass4'){
    alert("Invalid Login");
  }
}
if(m == "TCS" ){
  if( b !== '16Z600' || f !== 'pass5'){
    alert("Invalid Login");
  }
}
}


function rdirect(){
window.location.href="admin";

}

function cdirect(){
  window.location.href="index";

}
