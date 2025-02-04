import styles from "./InsideMainLayout.module.css";

export function InsideMainLayout({ children }) {
  return <div className={styles.InsideMainLayout}>{children}</div>;
}
