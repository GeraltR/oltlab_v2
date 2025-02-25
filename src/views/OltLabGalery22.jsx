import styles from "./OltLabGalery22.module.css";

export function OltLabGalery22(props) {
  return (
    <div
      className={`${
        props.isMobileDevice && !props.isLandScape
          ? styles.oltLabGalery22Mobile
          : styles.oltLabGalery22
      } ${
        props.visible
          ? styles.oltLabGalery22Showing
          : styles.oltLabGalery22Hidden
      }`}
      onClick={props.onClick}
    >
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery22Img_1Mobile
            : styles.oltLabGalery22Img_1
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/adrianzert/1.png"}
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery22Img_2Mobile
            : styles.oltLabGalery22Img_2
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/adrianzert/2.png"}
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery22Img_3Mobile
            : styles.oltLabGalery22Img_3
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/adrianzert/3.png"}
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery22Img_4Mobile
            : styles.oltLabGalery22Img_4
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/adrianzert/4.png"}
      />
      <img
        className={`${
          props.isMobileDevice && !props.isLandScape
            ? styles.oltLabGalery22Img_5Mobile
            : styles.oltLabGalery22Img_5
        }`}
        src={import.meta.env.VITE_BASE_URL + "/img/galery/adrianzert/5.png"}
      />
    </div>
  );
}
