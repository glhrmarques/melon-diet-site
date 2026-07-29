type HomeCardProps = {
  backgroundColor?: string;
};

export default function HomeCard({
  backgroundColor = "#FFCCCB",
}: HomeCardProps) {
  return (
    <div
      className="h-[400px] w-[400px] rounded-[16px] p-component-default"
      style={{ backgroundColor }}
    >

    </div>
  );
}
