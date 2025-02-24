import styles from "./BottomLogoBar.module.css";

export function BottomLogoBar(props) {
  return (
    <div
      className={styles.bottomLogoBar}
      style={{
        position: `${
          props.isMobileDevice && !props.isLandScape ? "absolute" : "relative"
        }`,
        top: `${props.isMobileDevice && !props.isLandScape ? "170%" : "0"}`,
      }}
    >
      {props.children}
    </div>
  );
}
