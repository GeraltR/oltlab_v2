import styles from "./OltLabGalery27.module.css";

export function OltLabGalery27(props) {
  return (
    <div
      className={`${
        props.isMobileDevice && !props.isLandScape
          ? styles.oltLabGalery27Mobile
          : styles.oltLabGalery27
      } ${
        props.visible
          ? styles.oltLabGalery27Showing
          : styles.oltLabGalery27Hidden
      }`}
      onClick={props.onClick}
    >
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery27Img_1Mobile
            : styles.oltLabGalery27Img_1
        }`}
        src={
          import.meta.env.VITE_BASE_URL + "/img/galery/fr_arch_pom_2024/1.png"
        }
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery27Img_2Mobile
            : styles.oltLabGalery27Img_2
        }`}
        src={
          import.meta.env.VITE_BASE_URL + "/img/galery/fr_arch_pom_2024/2.png"
        }
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery27Img_3Mobile
            : styles.oltLabGalery27Img_3
        }`}
        src={
          import.meta.env.VITE_BASE_URL + "/img/galery/fr_arch_pom_2024/3.png"
        }
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery27Img_4Mobile
            : styles.oltLabGalery27Img_4
        }`}
        src={
          import.meta.env.VITE_BASE_URL + "/img/galery/fr_arch_pom_2024/4.png"
        }
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery27Img_5Mobile
            : styles.oltLabGalery27Img_5
        }`}
        src={
          import.meta.env.VITE_BASE_URL + "/img/galery/fr_arch_pom_2024/5.png"
        }
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery27Img_6Mobile
            : styles.oltLabGalery27Img_6
        }`}
        src={
          import.meta.env.VITE_BASE_URL + "/img/galery/fr_arch_pom_2024/6.png"
        }
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery27Img_7Mobile
            : styles.oltLabGalery27Img_7
        }`}
        src={
          import.meta.env.VITE_BASE_URL +
          `${
            props.isMobileDevice && !props.isLandScape
              ? "/img/mainfr_arch_pom_2024.png"
              : "/img/mainfr_arch_pom_2024.png"
          }`
        }
      />
    </div>
  );
}
