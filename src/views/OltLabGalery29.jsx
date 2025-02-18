import styles from "./OltLabGalery29.module.css";

export function OltLabGalery29(props) {
  return (
    <div
      className={`${
        props.isMobileDevice && !props.isLandScape
          ? styles.oltLabGalery29Mobile
          : styles.oltLabGalery29
      } ${
        props.visible
          ? styles.oltLabGalery29Showing
          : styles.oltLabGalery29Hidden
      }`}
      onClick={props.onClick}
    >
      <div
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery29ImgMainMobile
            : styles.oltLabGalery29ImgMain
        }`}
      ></div>
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery29Img_1Mobile
            : styles.oltLabGalery29Img_1
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/pl_3d_1_5_2024/1.png"}
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery29Img_2Mobile
            : styles.oltLabGalery29Img_2
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/pl_3d_1_5_2024/2.png"}
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery29Img_3Mobile
            : styles.oltLabGalery29Img_3
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/pl_3d_1_5_2024/3.png"}
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery29Img_4Mobile
            : styles.oltLabGalery29Img_4
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/pl_3d_1_5_2024/4.png"}
      />
    </div>
  );
}
