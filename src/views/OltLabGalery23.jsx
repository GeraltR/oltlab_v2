import styles from "./OltLabGalery23.module.css";

export function OltLabGalery23(props) {
  return (
    <div
      className={`${
        props.isMobileDevice && !props.isLandScape
          ? styles.oltLabGalery23Mobile
          : styles.oltLabGalery23
      } ${
        props.visible
          ? styles.oltLabGalery23Showing
          : styles.oltLabGalery23Hidden
      }`}
      onClick={props.onClick}
    >
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery23Img_1Mobile
            : styles.oltLabGalery23Img_1
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/belgrade/1.png"}
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery23Img_2Mobile
            : styles.oltLabGalery23Img_2
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/belgrade/2.png"}
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery23Img_3Mobile
            : styles.oltLabGalery23Img_3
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/belgrade/3.png"}
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery23Img_4Mobile
            : styles.oltLabGalery23Img_4
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/belgrade/4.png"}
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery23Img_5Mobile
            : styles.oltLabGalery23Img_5
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/mainbelgrade.png"}
      />
    </div>
  );
}
