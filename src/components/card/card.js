import styles from "./card.module.css";
import classNames from "classnames";

export function Card({ children, className }) {
  return (
    <div className={classNames(styles.wrapper, className)}>{children}</div>
  );
}
