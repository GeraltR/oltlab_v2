import styles from "./BottomLogoBar.module.css";

export function BottomLogoBar(props) {
  return (
    <div
      className={`${
        props.isMobileDevice && !props.isLandScape
          ? styles.bottomLogoBarMobile
          : styles.bottomLogoBar
      }`}
    >
      {props.children}
    </div>
  );
}
