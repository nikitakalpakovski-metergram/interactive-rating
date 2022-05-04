import commonStyles from "../../utils/common-styles.module.css";
import styles from "./rating.module.css";
import classNames from "classnames";

export function Rating({ children, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={classNames(commonStyles.iconWrapper, styles.ratingButton, {
        [styles.active]: isActive,
      })}
    >
      {children}
    </button>
  );
}
