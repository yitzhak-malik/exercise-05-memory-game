var arr=[];
var _arr=[];
var number=0;
var lengthArr=8;
//var lengther=Math.floor( Math.sqrt(lengthArr));
for(let i=0;i<lengthArr;i++){
    let num =Math.floor(Math.random()*10)+1;
    arr[i]=num; 
    arr[++i]=num;
    _arr[i]=0; 
    _arr[++i]=0;
}
arr.sort((a,b)=>0.5-Math.random());
var card=window.document.getElementById("card");
{
    var _card;
    for(i=0;i<lengthArr;i++){
        
     card.innerHTML+= ` <img src="images/blank.png" class="card" name=${arr[i]} id=${i} onclick="addclick(event)">`; 
   }
}
function addclick(e){
   
   if(number==0 && _arr[e.target.attributes.id.nodeValue]==0){
    e.target.attributes.src.nodeValue=`images/${e.target.attributes.name.nodeValue}.png`
    number=e.target.attributes.name.nodeValue;
   }
    console.log(e.target.attributes.id.nodeValue)
    console.log(e.target.attributes.name.nodeValue)
    console.log(e)
}
