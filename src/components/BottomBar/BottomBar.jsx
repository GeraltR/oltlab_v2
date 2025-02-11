import styles from "./BottomBar.module.css";

export function BottomBar({ children, isMobileDevice, isLandScape }) {
  return (
    <div
      className={`${
        isMobileDevice ? styles.bottomBarMobile : styles.bottomBar
      }`}
    >
      {children}
    </div>
  );
}
