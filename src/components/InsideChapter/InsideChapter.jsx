import styles from "./InsideChapter.module.css";

export function InsideChapter({ children, isMobileDevice, isLandScape }) {
  return (
    <div
      className={`${
        isMobileDevice && isLandScape
          ? styles.insideChapterMobileLandscape
          : styles.insideChapter
      }`}
    >
      {children}
    </div>
  );
}
