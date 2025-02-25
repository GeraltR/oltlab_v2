import styles from "./OltLabGalery21.module.css";

export function OltLabGalery21(props) {
  return (
    <div
      className={`${
        props.isMobileDevice && !props.isLandScape
          ? styles.oltLabGalery21Mobile
          : styles.oltLabGalery21
      } ${
        props.visible
          ? styles.oltLabGalery21Showing
          : styles.oltLabGalery21Hidden
      }`}
      onClick={props.onClick}
    >
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery21Img_1Mobile
            : styles.oltLabGalery21Img_1
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/14by5/1.png"}
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery21Img_2Mobile
            : styles.oltLabGalery21Img_2
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/14by5/2.png"}
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery21Img_3Mobile
            : styles.oltLabGalery21Img_3
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/14by5/3.png"}
      />
    </div>
  );
}
