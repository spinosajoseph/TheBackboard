import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Grid, Box } from "@material-ui/core";
import { ExerciseRow } from "../components/ExerciseRow";

export const Backboard: React.FC = () => {
  return (
    <PageLayout title="What is the Backboard?">
      <p>
        For many people exercising on the floor is difficult and de-motivationg.
        The Backboard transforms the bed into an effective surface on which 10
        key exercises can be performed. They are:
      </p>

      <Box padding={"30px"}>
        <Grid container xs={12} spacing={5}>
          <Grid container item xs={12} spacing={4} justify="center">
            <ExerciseRow
              exercises={[
                { heading: "Double Knee to Chest", imgPath: "/images/Joe.jpg" },
                { heading: "Side Bending", imgPath: "/images/Joe.jpg" },
                { heading: "Hip Flexor Stretch", imgPath: "/images/Joe.jpg" },
              ]}
            />
          </Grid>
          <Grid container item xs={12} spacing={4} justify="center">
            <ExerciseRow
              exercises={[
                { heading: "Hamstring Stretch", imgPath: "/images/Joe.jpg" },
                { heading: "Quadriceps Stretch", imgPath: "/images/Joe.jpg" },
                { heading: "Pointers", imgPath: "/images/Joe.jpg" },
              ]}
            />
          </Grid>
          <Grid container item xs={12} spacing={4} justify="center">
            <ExerciseRow
              exercises={[
                { heading: "Planks", imgPath: "/images/Joe.jpg" },
                { heading: "Roman Back Extension", imgPath: "/images/Joe.jpg" },
                { heading: "Crunches", imgPath: "/images/Joe.jpg" },
              ]}
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <p>
         The Backboard is patent protected. It has adjustable legs to accomodate beds of various height. The leg retainer is also adjustable to accomodate persons of various height. For many people stretching and strengthiening key muscle groups is highly effectivein protecting the body from injury and managing pain due to chronic degenerative changes.
        </p>
      </Box>
    </PageLayout>
  );
};
