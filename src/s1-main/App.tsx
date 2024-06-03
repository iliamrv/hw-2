import React from "react";
import s from "./App.module.css";
import HW5 from "../s2-homeworks/hw05/HW5";
import HW8 from "../s2-homeworks/hw08/HW8";
import HW9 from "../s2-homeworks/hw09/HW9";

function App() {
  return (
    <div className={s.App}>
      {/* <HW1/> */}
      {/*раскомментировать по ходу выполнения*/}
      {/* <HW2 /> */}
      {/* <HW3 /> */}
      <HW5 />
      <HW8 />
      <HW9 />

      {/*при выполнении дз 5 и более - закомментировать здесь дз 1-4, так как они есть внутри дз 5*/}
      {/*<HW5/>*/}
    </div>
  );
}

export default App;
