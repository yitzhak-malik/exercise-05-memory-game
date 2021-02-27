var arr=[];
var _arr=[];
var gameCard;
var _gameCard;
var lengthArr=8;
start();
function start(){
    arr=[];
    _arr=[]; 
    gameCard=null;
    _gameCard=null;
//var lengther=Math.floor( Math.sqrt(lengthArr));
for(let i=0;i<lengthArr;){
    let num = Math.floor(Math.random()*10)+1;
    let j = arr.filter(item=>item==num)
    if(!j[0]){
        arr[i]=num; 
        _arr[i]=0; 
        arr[++i]=num;
        _arr[i++]=0;
      }

    }
    for(i=0;i<lengthArr;i++){
        arr.sort((a,b)=>0.5-Math.random());

    }
var card=window.document.getElementById("card");
card.innerHTML="";

    for(i=0;i<lengthArr;i++){
        
     card.innerHTML+= ` <img src="images/blank.png" class="card" name=${arr[i]} id=${i} onclick="addclick(event)">`; 
   }

}
function addclick(e){
   if(_arr[e.target.attributes.id.nodeValue]==0){
   
    if(!gameCard){
        _arr[e.target.attributes.id.nodeValue]=1;
        e.target.attributes.src.nodeValue=`images/${e.target.attributes.name.nodeValue}.png`
        gameCard=e;
    }else if(!_gameCard){
        e.target.attributes.src.nodeValue=`images/${e.target.attributes.name.nodeValue}.png`
        _gameCard=e;
        if(gameCard.target.attributes.name.nodeValue==_gameCard.target.attributes.name.nodeValue){
            _arr[gameCard.target.attributes.id.nodeValue]=gameCard;
            _arr[_gameCard.target.attributes.id.nodeValue]=_gameCard;
            gameCard=null;
            _gameCard=null;
        }else{
            setTimeout(function(){
                gameCard.target.attributes.src.nodeValue=`images/blank.png`; 
                _gameCard.target.attributes.src.nodeValue=`images/blank.png`;
                _arr[gameCard.target.attributes.id.nodeValue]=0; 
                gameCard=null;
                _gameCard=null;
            },2000)
           
        }
    }
   }
   
    console.log(e.target.attributes.id.nodeValue)
    console.log(e.target.attributes.name.nodeValue)
    console.log(e)
}
