import styles from "./Hero.module.css";

export function Hero(props) {
  let pathImage = import.meta.env.VITE_BASE_URL + props.heroImage;
  if (props.heroHidden)
    pathImage = import.meta.env.VITE_BASE_URL + "/img/olt.gif";
  return (
    <div className={`${styles.mainHero}`}>
      <img
        className={`${styles.mainHero} ${
          props.heighDeviceSize == 3
            ? styles.mainHeroBig
            : props.heighDeviceSize == 2
            ? styles.mainHeroMedium
            : styles.mainHeroSmall
        }`}
        src={`${pathImage}`}
        style={{ width: `${props.heroWidth}`, height: `${props.heroHeight}` }}
      ></img>
    </div>
  );
}
