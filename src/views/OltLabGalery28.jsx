import styles from "./OltLabGalery28.module.css";

export function OltLabGalery28(props) {
  return (
    <div
      className={`${
        props.isMobileDevice && !props.isLandScape
          ? styles.oltLabGalery28Mobile
          : styles.oltLabGalery28
      } ${
        props.visible
          ? styles.oltLabGalery28Showing
          : styles.oltLabGalery28Hidden
      }`}
      onClick={props.onClick}
    >
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery28Img_1Mobile
            : styles.oltLabGalery28Img_1
        }`}
        src={
          import.meta.env.VITE_BASE_URL + "/img/galery/fr_3d_gtobc_2024/1.png"
        }
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery28Img_2Mobile
            : styles.oltLabGalery28Img_2
        }`}
        src={
          import.meta.env.VITE_BASE_URL + "/img/galery/fr_3d_gtobc_2024/2.png"
        }
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery28Img_3Mobile
            : styles.oltLabGalery28Img_3
        }`}
        src={
          import.meta.env.VITE_BASE_URL + "/img/galery/fr_3d_gtobc_2024/3.png"
        }
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery28Img_4Mobile
            : styles.oltLabGalery28Img_4
        }`}
        src={
          import.meta.env.VITE_BASE_URL + "/img/galery/fr_3d_gtobc_2024/4.png"
        }
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery28Img_5Mobile
            : styles.oltLabGalery28Img_5
        }`}
        src={
          import.meta.env.VITE_BASE_URL +
          `${
            props.isMobileDevice && !props.isLandScape
              ? "/img/mainfr_3d_gtobc_2024.png"
              : "/img/galery/fr_3d_gtobc_2024/5.png"
          }`
        }
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery28Img_6Mobile
            : styles.oltLabGalery28Img_6
        }`}
        src={
          import.meta.env.VITE_BASE_URL + "/img/galery/fr_3d_gtobc_2024/6.png"
        }
      />
    </div>
  );
}
