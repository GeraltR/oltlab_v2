import styles from "./MainCenterLayout.module.css";

export function MainCenterLayout({ children }, props) {
  return (
    <div
      className={`${props.isMobileDevice} ? ${styles.mainCenterLayoutMobile} : ${styles.mainCenterLayout}`}
    >
      {children}
    </div>
  );
}
