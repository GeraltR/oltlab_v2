import styles from "./MainCenterLayout.module.css";

export function MainCenterLayout({ children }) {
  return <div className={styles.mainCenterLayout}>{children}</div>;
}
