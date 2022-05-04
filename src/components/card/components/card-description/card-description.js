import styles from "./card-description.module.css";

export function CardDescription({ children }) {
  return <p className={styles.description}>{children}</p>;
}
