import styles from "./SVGPolishFlag.module.css";

export function SVGPolishFlag() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        image-rendering="optimizeQuality"
        fill-rule="evenodd"
        clip-rule="evenodd"
        viewBox="0 0 205.46 143.18"
        className={styles.svgPolishFlag}
      >
        <path
          fill="#fff"
          fill-rule="nonzero"
          d="M11.65.4h182.16c6.19 0 11.25 5.06 11.25 11.25v119.88c0 6.18-5.06 11.25-11.25 11.25H11.65C5.46 142.78.4 137.71.4 131.53V11.65C.4 5.46 5.46.4 11.65.4z"
        />
        <path
          fill="#dc143c"
          fill-rule="nonzero"
          d="M.4 71.59h204.66v59.94c0 6.18-5.06 11.25-11.25 11.25H11.65C5.46 142.78.4 137.71.4 131.53V71.59z"
        />
        <path
          fill="#CCC"
          fill-rule="nonzero"
          d="M11.65 0h182.16c3.21 0 6.12 1.31 8.23 3.42a11.61 11.61 0 0 1 3.42 8.23v119.88c0 3.2-1.31 6.11-3.42 8.22-2.11 2.11-5.02 3.43-8.23 3.43H11.65c-3.2 0-6.12-1.32-8.23-3.43A11.604 11.604 0 0 1 0 131.53V11.65c0-3.21 1.31-6.12 3.42-8.23C5.53 1.31 8.45 0 11.65 0zm182.16.8H11.65c-2.99 0-5.7 1.22-7.66 3.19A10.793 10.793 0 0 0 .8 11.65v119.88c0 2.98 1.22 5.69 3.19 7.66 1.96 1.97 4.67 3.19 7.66 3.19h182.16c2.99 0 5.7-1.22 7.67-3.19 1.96-1.97 3.18-4.68 3.18-7.66V11.65c0-2.98-1.22-5.7-3.19-7.66A10.776 10.776 0 0 0 193.81.8z"
        />
      </svg>
    </>
  );
}
