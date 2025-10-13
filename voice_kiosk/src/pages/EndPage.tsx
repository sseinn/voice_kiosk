import Header from "../components/Header";
import Character from "../components/Character";
import completeImg from "../assets/Check.png"; // 결제 완료 아이콘

export default function EndPage() {
  return (
    <div className="relative w-full min-h-screen bg-gray-100 overflow-hidden flex flex-col items-center justify-start">
      <Header />
      <Character />
        <div className="w-56 h-56 flex justify-center items-center mt-8">
          <img
            className="w-56 h-56"
            src={completeImg}
            alt="결제 완료"
          />
        </div>
        <div className="w-[913px] h-56 text-center text-neutral-800 text-6xl font-semibold font-['Pretendard'] mt-8">
          결제가 완료되었습니다.<br />
          이용해주셔서 감사합니다.
        </div>
      </div>
  );
}