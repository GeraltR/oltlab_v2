import styles from "./Hero.module.css";

export function Hero(props) {
  return (
    <div
      className={`${styles.mainHero} ${
        props.heighDeviceSize == 3
          ? styles.mainHeroBig
          : props.heighDeviceSize == 2
          ? styles.mainHeroMedium
          : styles.mainHeroSmall
      }`}
      style={{ backgroundImage: `url(${props.heroImage})` }}
    ></div>
  );
}
