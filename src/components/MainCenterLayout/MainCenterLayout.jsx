import styles from "./MainCenterLayout.module.css";

export function MainCenterLayout({ children, isMobileDevice }) {
  return (
    <div
      className={`${
        isMobileDevice ? styles.mainCenterLayoutMobile : styles.mainCenterLayout
      }`}
    >
      {children}
    </div>
  );
}
