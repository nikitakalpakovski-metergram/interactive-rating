import styles from "./card-title.module.css";

export function CardTitle({ children }) {
  return <h1 className={styles.title}>{children}</h1>;
}
