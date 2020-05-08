import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Avatar } from "@material-ui/core";

export const AboutMe: React.FC = () => {
  return (
    <PageLayout title="About Me">
      <Avatar src="my-app/src/images/Joe.jpg" />
      <p>Hello, welcome to my website. I am Joe.</p>
    </PageLayout>
  );
};
