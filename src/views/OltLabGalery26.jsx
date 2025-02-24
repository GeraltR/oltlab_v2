import styles from "./OltLabGalery26.module.css";

export function OltLabGalery26(props) {
  return (
    <div
      className={`${
        props.isMobileDevice && !props.isLandScape
          ? styles.oltLabGalery26Mobile
          : styles.oltLabGalery26
      } ${
        props.visible
          ? styles.oltLabGalery26Showing
          : styles.oltLabGalery26Hidden
      }`}
      onClick={props.onClick}
    >
      <div
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery26ImgMainMobile
            : styles.oltLabGalery26ImgMain
        }`}
      ></div>
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery26Img_1Mobile
            : styles.oltLabGalery26Img_1
        }`}
        src={
          import.meta.env.VITE_BASE_URL + "/img/galery/pl_urb_kat_2024/1.png"
        }
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery26Img_2Mobile
            : styles.oltLabGalery26Img_2
        }`}
        src={
          import.meta.env.VITE_BASE_URL + "/img/galery/pl_urb_kat_2024/2.png"
        }
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery26Img_3Mobile
            : styles.oltLabGalery26Img_3
        }`}
        src={
          import.meta.env.VITE_BASE_URL + "/img/galery/pl_urb_kat_2024/3.png"
        }
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery26Img_4Mobile
            : styles.oltLabGalery26Img_4
        }`}
        src={
          import.meta.env.VITE_BASE_URL + "/img/galery/pl_urb_kat_2024/4.png"
        }
      />
    </div>
  );
}
