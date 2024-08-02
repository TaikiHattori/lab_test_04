import { useState } from "react";
import "./App.css";
import Test from "./Test";
import Button from "./components/Button";
import Form from "./components/Form";

//下に <Test/>書いた時に自動でimportしてくれるかチェック

function App() {
  //↓[]の左は中身、右は更新するためのおまじない
  //↓命名規則あり[aa,setAa]となる
  const [test, setTest] = useState(100);

  //追加。条件分岐練。
  const [flag, setFlag] = useState(false);





  //新しいuseStateを追加。条件分岐練の後。じゃんけん
  const [num, setNum] = useState();




  //更新の処理の練習
  const handleClick = () => {
    setTest("変更したよ");
  };
  

  //更新処理の反転テク。条件分岐練
  const handleFlagClick = () => {
    setFlag(!flag);
  };


  //条件分岐練の後。じゃんけん
   // 新しくおまじないを作ります🤗
  const handleNumClick = () => {
    const random = Math.floor(Math.random() * 3); //0,1,2
    setNum(random); //ボタンが押されるたびにランダムな数字が作られて、それが設定される
  };



  //↓props（目印gs（あんこを渡したらあんこになる））で受け渡し
  return (
    <>
      
<h1>デプロイチェック！！！</h1>


      {/* Form.jsxを読み込むreact③ */}
    <Form />

      <br />
      <hr />




      {/* 条件分岐練の後。じゃんけん */}
      {/* <h1>{num}</h1> */}

      {num == 0 && <h1>大吉</h1>}
      {num == 1 && <h1>中吉</h1>}
      {num == 2 && <h1>小吉</h1>}
      <button onClick={handleNumClick}>ボタン押せ</button>






      {/* 条件分岐の練習 */}
{flag && <h1>今はtrueです</h1>}
{!flag && <h1>今はfalseです</h1>}
      


      

      <div>{test}</div>
      
      {/* <button onClick={handleClick}>ボタンを押せ</button> */}

      {/* 条件分岐練↓ */}
      <button onClick={handleFlagClick}>ボタンを押せ</button>

      
      <Test gs="07月30日react2回目" lab={17} react="目じるしの練習をしています"/>
     
      <Button text="送信" color="red" />
      <br />
      <Button text="登録"/>
    
    </>
  );
}

export default App;