import { useState } from "react";
import Header from "../components/Header";
import Character from "../components/Character";
import Text from "../components/Text";
import clickImg from "../assets/Click.png";

export default function OrderPage() {
  const [isIdle, setIsIdle] = useState(true); // 대기 상태

  const handleStart = () => {
    setIsIdle(false); // 터치 시 대기 해제
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-100 overflow-hidden flex flex-col items-center justify-start">
      <Header />
      <Character />
      <Text />

      {isIdle && (
        <div
          onClick={handleStart}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/65 cursor-pointer"
        >
          <div className="text-center text-yellow-300 text-7xl font-extrabold font-['Pretendard'] mb-8">
            주문을 원하시면<br />
            화면을 터치해주세요
          </div>

          <img
            className="w-96 h-96 animate-bounce"
            src={clickImg}
            alt="터치 아이콘"
          />
        </div>
      )}
    </div>
  );
}
