import styles from "./Hero.module.css";

export function Hero({ heroImage }) {
  return (
    <div
      className={styles.mainHero}
      style={{ backgroundImage: `url(${heroImage})` }}
    ></div>
  );
}
