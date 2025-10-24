import characterImg from "../assets/Character.png";

export default function Character() {
  return (
<<<<<<< Updated upstream
    <img
      src={characterImg}
      alt="직원 캐릭터"
      className="w-[625.5px] h-[674px] object-contain"
    />
=======
    <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <img
        src={characterImg}
        alt="직원 캐릭터"
        className="w-[625.5px] h-[674px] object-contain"
      />
    </div>
>>>>>>> Stashed changes
  );
}