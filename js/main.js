'use strict';

{
  const excuteBtn = document.getElementById('excuteBtn');
    //実行ボタン押下処理
    excuteBtn.addEventListener('click',()=>{
    //変数の取得
    var fizzLabel = document.getElementById('fizz');
    var buzzLabel = document.getElementById('buzz');
    var displayLabel = document.getElementById('display');
    var fizzNum = fizzLabel.value;
    var buzzNum = buzzLabel.value;
    var ary= new Array();

    //表示内容初期化処理
    displayLabel.textContent="";


　　//整数チェック処理
    if(!(isNumber(fizzNum) && isNumber(buzzNum))){
      displayLabel.textContent = "整数を入力してください"
      return;
    }
    //配列に値を設定する処理
    for(var i=1; i<=100; i++){
      if(i % fizzNum === 0 && i % buzzNum === 0){
        ary.push(`FizzBuzz ${i}`);
      }else if (i % fizzNum === 0) {
        ary.push(`Fizz ${i}`);
      }else if (i % buzzNum === 0) {
        ary.push(`Buzz ${i}`);
      }
    }
    //表示処理
    ary.forEach(content=>{
      var li = document.createElement('li');
      displayLabel.appendChild(li);
      li.textContent = content;
    })
  });

//整数チェック関数
function isNumber(numVal){
  // チェック条件パターン
  var pattern = /^[-]?([1-9]\d*|0)(\.\d+)?$/;
  // 数値チェック
  return pattern.test(numVal);
}

}
