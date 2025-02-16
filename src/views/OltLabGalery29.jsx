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
      >
        <img
          src={import.meta.env.VITE_BASE_URL + "/img/mainpl_3d_145_2024.png"}
        />
      </div>
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
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery29Img_5Mobile
            : styles.oltLabGalery29Img_5
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/pl_3d_1_5_2024/5.png"}
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery29Img_6Mobile
            : styles.oltLabGalery29Img_6
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/pl_3d_1_5_2024/6.png"}
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery29Img_7Mobile
            : styles.oltLabGalery29Img_7
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/pl_3d_1_5_2024/7.png"}
      />
    </div>
  );
}
