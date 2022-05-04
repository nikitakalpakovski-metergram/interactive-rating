import React from "react";
import star from "../../assets/images/icon-star.svg";
import commonStyles from "../../utils/common-styles.module.css";
import { CardTitle } from "../card/components/card-title/card-title";
import { CardDescription } from "../card/components/card-description/card-description";
import { Rating } from "../rating/rating";
import { Spacer } from "../spacer/spacer";
import { Button } from "../button/button";
import { Card } from "../card/card";

const ratingScale = [1, 2, 3, 4, 5];

export function RatingForm({ onRateSubmit }) {
  const [selectedRating, setSelectedRating] = React.useState();

  return (
    <Card>
      <img src={star} alt="Star" className={commonStyles.iconWrapper} />
      <CardTitle>How did we do?</CardTitle>
      <CardDescription>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </CardDescription>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {ratingScale.map((rating) => (
          <Rating
            onClick={() => setSelectedRating(rating)}
            isActive={rating === selectedRating}
          >
            {rating}
          </Rating>
        ))}
      </div>

      <Spacer y={32} />

      <Button onClick={() => onRateSubmit(selectedRating)}>Submit</Button>
    </Card>
  );
}
