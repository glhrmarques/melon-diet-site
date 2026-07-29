import HomeCard from "../card/HomeCard";

const orbitCards = [
  { className: "orbit-one", color: "#FFCCCB" },
  { className: "orbit-two", color: "#FED9A2" },
  { className: "orbit-three", color: "#96F4FE" },
  { className: "orbit-four", color: "#C8FFEC" },
];

export default function HomeCarousel() {
  return (
    <div
      aria-label="Home card gallery"
      className="orbit-stage"
      role="region"
    >
      {orbitCards.map((card) => (
        <div key={card.className} className={`orbit ${card.className}`}>
          <div className="orbit-card">
            <HomeCard backgroundColor={card.color} />
          </div>
        </div>
      ))}
    </div>
  );
}
