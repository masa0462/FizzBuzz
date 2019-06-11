'use strict';

{
  const btn =document.getElementById('btn');

  btn.addEventListener('click',()=>{
    //変数の取得
    var fizzLabel =document.getElementById('fizz');
    var buzzLabel =document.getElementById('buzz');
    var displayLabel =document.getElementById('display');
    var fizzNum = fizzLabel.value;
    var buzzNum = buzzLabel.value;

    //初期化処理
     if (displayLabel.hasChildNodes()){
       for (var i =displayLabel.childNodes.length-1; i>=0; i--) {
        displayLabel.removeChild(displayLabel.childNodes[i]);
      }
     }

　　//メイン処理
    if(!(isNumber(fizzNum) && isNumber(buzzNum))){
      displayLabel.textContent = "整数を入力してください"
      return;
    }
    for(var i=1; i<=100; i++){
      if(i%fizzNum===0 && i%buzzNum===0){
        var liElement = document.createElement('li');
        displayLabel.appendChild(liElement);
        liElement.textContent=`fizzbuzz ${i}`;
      }else if (i%fizzNum===0) {
        var liElement = document.createElement('li');
        displayLabel.appendChild(liElement);
        liElement.textContent=`fizz ${i}`;
      }else if (i%buzzNum===0) {
        var liElement = document.createElement('li');
        displayLabel.appendChild(liElement);
        liElement.textContent=`buzz ${i}`;
      }else{
        var liElement = document.createElement('li');
        displayLabel.appendChild(liElement);
        liElement.textContent=i;
      }
    }
  });



//整数チェック
function isNumber(numVal){
  // チェック条件パターン
  var pattern = /^[-]?([1-9]\d*|0)(\.\d+)?$/;
  // 数値チェック
  return pattern.test(numVal);
}


}
