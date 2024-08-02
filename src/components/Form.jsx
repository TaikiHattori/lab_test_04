//フォーム入力はこの方法しかない
import React, { useState, useEffect } from "react";
import { useForm } from "../hooks/useForm";



const Form = () => {
    //カスタムフックという仕組みで別ファイルに切り出したものを呼び出す
    const{name, email, data, handleNameChange, handleEmailChange} = useForm();





    
  //手順1.useStateを使って、inputタグの入力欄を制御
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   //↑左も右も箱。慣習的な命名規則あり

//   //33-1.API連携
//   const [data, setData] = useState("");

//   // 3.名前を入力する用のおまじない
//   //↓eは何でもいい。setNameの一番左と一致すればいい
//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   // Emailを入力する用のおまじない
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   // 22.useEffectのお勉強をしましょう🤗
//   useEffect(() => {
//     //どのような挙動になるかチェックしてみましょう🤗
//     // console.log("発火！！！");

//     //実行順番の確認のために、console.logを追加
//     //発火が一番最後に反応する
//     // console.log("確認");

//     // 33-2.apiの通信の処理を記入します🤗
//     //"https://jsonplaceholder.typicode.com/todos/"はブラウザをオブジェクト風に書いてるだけのやつ
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/todos/"
//         );
//         console.log(
//           response,
//           "APIに頂戴言って返ってくるresponseデータをチェック"
//         );
//         const data = await response.json(); //必須！ jsonの形式にする必要があります🤗
//         console.log(data, "jsonに変化したJSデータ中身をチェック");
//         setData(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

    
  return (
    <div>
      {/* データを表示 */}
          {/* ↓「data &&」⇒データがあればという意味 */}
          {/* reactのお作法：map使う時keyをつけろ */}
      {data &&
        data.map((i, index) => (
          <div key={index}>
            <h1>{index}番目</h1>
            <p>{i.id}</p>
            <p>{i.title}</p>
            <p>{i.userId}</p>
          </div>
        ))}

      {/*  */}
      {/* 2.フォームのサンプルを記述 */}
      <div>
        <p>名前入力欄</p>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>

      <div>
        <p>メールアドレス入力欄</p>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>

      {/*  */}

      <hr />
      <p>名前入力：{name}</p>
      <p>email入力：{email}</p>
    </div>
  );
};

export default Form;
