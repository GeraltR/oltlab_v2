import styles from "./Hero.module.css";

export function Hero(props) {
  return (
    <div className={`${styles.mainHero}`}>
      <img
        className={`${styles.mainHero} ${
          props.heighDeviceSize == 3
            ? styles.mainHeroBig
            : props.heighDeviceSize == 2
            ? styles.mainHeroMedium
            : styles.mainHeroSmall
        }  ${
          props.heroHidden ? styles.mainHeroHidden : styles.mainHeroShowing
        }`}
        src={`${import.meta.env.VITE_BASE_URL}${
          props.heroHidden ? "/img/mainblack.png" : props.heroImage
        }`}
      ></img>
    </div>
  );
}
