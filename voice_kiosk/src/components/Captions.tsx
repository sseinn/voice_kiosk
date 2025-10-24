import { useKioskStore } from "@/store/kioskStore";

export default function Captions() {
  const text = useKioskStore((state) => state.captions.join(" "));

  return (
    <div
      className="
        w-[913px] h-56 
        text-center justify-start
        text-neutral-800 text-6xl font-semibold font-[Pretendard]
        leading-snug
      "
    >
      {text}
    </div>
  );
}
