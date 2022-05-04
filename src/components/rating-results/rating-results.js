import { Card } from "../card/card";
import { CardTitle } from "../card/components/card-title/card-title";
import { CardDescription } from "../card/components/card-description/card-description";
import thankYou from "../../assets/images/illustration-thank-you.svg";
import styles from "./rating-results.module.css";

export function RatingResults({ children }) {
  return (
    <Card className={styles.wrapper}>
      <img src={thankYou} alt="Thank you illustration" />

      <div className={styles.ratingWrapper}>{children}</div>

      <CardTitle>Thank you!</CardTitle>
      <CardDescription>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </CardDescription>
    </Card>
  );
}
