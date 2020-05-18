import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Box } from "@material-ui/core";

export const AboutMe: React.FC = () => {
  return (
    <PageLayout title="About Me">
      <Box flex textAlign="center">
        <img
          style={{display: 'inline-block'}}
          height={"250px"}
          width={"300px"}
          src={"/images/Joe.jpg"}
        />
      </Box>
      <Box paddingTop={'40px'} margin="auto" maxWidth="80%" textAlign="center">
        <p >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
          sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur
          tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
          Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc
          egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis,
          luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris
          ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
          nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec
          ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing
          diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla.
          Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
          Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu
          magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.
          Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at
          interdum magna augue eget diam. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia
          molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet
          augue congue elementum. Morbi in ipsum sit amet pede facilisis
          laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et,
          augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices
          enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar
          ullamcorper.{" "}
        </p>
      </Box>
    </PageLayout>
  );
};
