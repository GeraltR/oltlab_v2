import styles from "./InsideChapter.module.css";

export function InsideChapter({ children }) {
  return <div className={styles.insideChapter}>{children}</div>;
}
