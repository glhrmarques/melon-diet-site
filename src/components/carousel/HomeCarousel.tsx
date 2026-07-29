import HomeCard from "../card/HomeCard";
import styles from "./HomeCarousel.module.css";

const orbitCards = [
  { id: "card-one", orbitClass: styles.orbitOne, color: "#FFCCCB" },
  { id: "card-two", orbitClass: styles.orbitTwo, color: "#FED9A2" },
  { id: "card-three", orbitClass: styles.orbitThree, color: "#96F4FE" },
  { id: "card-four", orbitClass: styles.orbitFour, color: "#C8FFEC" },
];

export default function HomeCarousel() {
  return (
    <div
      aria-label="Home card gallery"
      className={styles.orbitStage}
      role="region"
    >
      {orbitCards.map((card) => (
        <div key={card.id} className={`${styles.orbit} ${card.orbitClass}`}>
          <div className={styles.orbitCard}>
            <HomeCard backgroundColor={card.color} />
          </div>
        </div>
      ))}
    </div>
  );
}
