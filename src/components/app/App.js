import styles from "./App.module.css";
import React from "react";
import { RatingForm } from "../rating-form/rating-form";
import { RatingResults } from "../rating-results/rating-results";

const MAX_RATING = 5;

function App() {
  const [rating, setRating] = React.useState();

  function onRate(rating) {
    setRating(Math.min(rating, MAX_RATING));
  }

  return (
    <div className={styles.app}>
      {rating === undefined ? (
        <RatingForm onRateSubmit={(rating) => onRate(rating)} />
      ) : null}

      {rating !== undefined ? (
        <RatingResults>
          You selected {rating} out of {MAX_RATING}
        </RatingResults>
      ) : null}
    </div>
  );
}

export default App;
