import styles from "./Hero.module.css";

export function Hero(props) {
  return (
    <div
      className={`${styles.mainHero} ${
        props.heroHidden ? styles.mainHeroHidden : styles.mainHeroShowing
      }`}
    >
      <img
        className={`${styles.mainHero} ${
          props.heighDeviceSize == 3
            ? styles.mainHeroBig
            : props.heighDeviceSize == 2
            ? styles.mainHeroMedium
            : styles.mainHeroSmall
        }`}
        src={`${import.meta.env.VITE_BASE_URL}${props.heroImage}`}
      ></img>
    </div>
  );
}
