import styles from "./OltLabGalery25.module.css";

export function OltLabGalery25(props) {
  return (
    <div
      className={`${
        props.isMobileDevice && !props.isLandScape
          ? styles.oltLabGalery25Mobile
          : styles.oltLabGalery25
      } ${
        props.visible
          ? styles.oltLabGalery25Showing
          : styles.oltLabGalery25Hidden
      }`}
      onClick={props.onClick}
    >
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery25Img_1Mobile
            : styles.oltLabGalery25Img_1
        }`}
        src={
          import.meta.env.VITE_BASE_URL + "/img/galery/fr_arch_conc_2024/1.png"
        }
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery25Img_2Mobile
            : styles.oltLabGalery25Img_2
        }`}
        src={
          import.meta.env.VITE_BASE_URL + "/img/galery/fr_arch_conc_2024/2.png"
        }
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery25Img_3Mobile
            : styles.oltLabGalery25Img_3
        }`}
        src={
          import.meta.env.VITE_BASE_URL + "/img/galery/fr_arch_conc_2024/3.png"
        }
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery25Img_4Mobile
            : styles.oltLabGalery25Img_4
        }`}
        src={
          import.meta.env.VITE_BASE_URL + "/img/galery/fr_arch_conc_2024/4.png"
        }
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery25Img_5Mobile
            : styles.oltLabGalery25Img_5
        }`}
        src={
          import.meta.env.VITE_BASE_URL + "/img/galery/fr_arch_conc_2024/5.png"
        }
      />
    </div>
  );
}
