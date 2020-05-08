import React from "react";
import { Container, Box } from "@material-ui/core";

interface Props {
  title: string;
}

export const PageLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <Container maxWidth="xl">
      <Box>
        <h2>{title}</h2>
      </Box>
      <Box>{children}</Box>
    </Container>
  );
};
