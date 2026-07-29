type HomeCardProps = {
  backgroundColor?: string;
};

export default function HomeCard({
  backgroundColor = "#FFCCCB",
}: HomeCardProps) {
  return (
    <div
      className="
      flex flex-col gap-10
      h-[400px] w-[400px] rounded-[16px] p-[40px]"
      style={{ backgroundColor }}
    >
      <div className="
      flex flex-row justify-between items-center">
        <p className="font-black text-[48px] leading-none">
          7:00
        </p>
        <p className="font-medium text-[18px] leading-none">
          Café da manhã
        </p>
      </div>
      <p> Ovo de galinha refogado (2 unidades)</p>
    </div>
  );
}
