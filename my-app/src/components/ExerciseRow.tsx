import React from "react";
import { Grid, Box } from "@material-ui/core";

interface Props {
  exercises: { heading: string; imgPath: string }[];
}

export const ExerciseRow: React.FC<Props> = ({ exercises }) => {
  return (
    <>
      {exercises.map((item, index) => {
        return (
          <Grid key={index} item xs={4}>
            <Box textAlign="center">
              <img src={item.imgPath} height={"200px"} width={"300px"} />
              <p>{item.heading}</p>
            </Box>
          </Grid>
        );
      })}
    </>
  );
};
