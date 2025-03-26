import styles from "./GifLogo.module.css";

export function GifLogo(props) {
  const gifPath = "/img/olt_mini.gif";
  return (
    <div
      className={`${
        props.isMobileDevice && !props.isLandScape
          ? styles.gifLogo
          : props.isMobileDevice && props.isLandScape
          ? styles.gifLandScape
          : styles.gifHiden
      }`}
    >
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.gifLogo
            : props.isMobileDevice && props.isLandScape
            ? styles.gifLandScape
            : styles.gifHiden
        }`}
        src={`${import.meta.env.VITE_BASE_URL}${gifPath}`}
      ></img>
    </div>
  );
}
