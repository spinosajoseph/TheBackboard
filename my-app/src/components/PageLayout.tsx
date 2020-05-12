import React from "react";
import { Container, Box } from "@material-ui/core";
import { NavBar } from "./NavBar";

interface Props {
  title: string;
}

export const PageLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <Container maxWidth="xl">
      <Box>
        <NavBar />
      </Box>
      <Box>
        <h2>{title}</h2>
      </Box>
      <Box>{children}</Box>
    </Container>
  );
};
