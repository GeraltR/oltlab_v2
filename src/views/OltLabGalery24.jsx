import styles from "./OltLabGalery24.module.css";

export function OltLabGalery24(props) {
  return (
    <div
      className={`${
        props.isMobileDevice && !props.isLandScape
          ? styles.oltLabGalery24Mobile
          : styles.oltLabGalery24
      } ${
        props.visible
          ? styles.oltLabGalery24Showing
          : styles.oltLabGalery24Hidden
      }`}
      onClick={props.onClick}
    >
      <div
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery24ImgMainMobile
            : styles.oltLabGalery24ImgMain
        }`}
      >
        <img
          className={styles.oltLabGalery24Main}
          src={import.meta.env.VITE_BASE_URL + "/img/mainprojects.png"}
        />
      </div>
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery24Img_1Mobile
            : styles.oltLabGalery24Img_1
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/streching/1.png"}
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery24Img_2Mobile
            : styles.oltLabGalery24Img_2
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/streching/2.png"}
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery24Img_3Mobile
            : styles.oltLabGalery24Img_3
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/streching/3.png"}
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery24Img_4Mobile
            : styles.oltLabGalery24Img_4
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/streching/4.png"}
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery24Img_5Mobile
            : styles.oltLabGalery24Img_5
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/streching/5.png"}
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery24Img_6Mobile
            : styles.oltLabGalery24Img_6
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/streching/6.png"}
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery24Img_7Mobile
            : styles.oltLabGalery24Img_7
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/streching/7.png"}
      />
    </div>
  );
}
