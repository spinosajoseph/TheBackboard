import React from "react";
import { Container, Box } from "@material-ui/core";
import { NavBar } from "./NavBar";

interface Props {
  title: string;
}

export const PageLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <Container
      maxWidth="xl"
      style={{
        height: "100%",
        minHeight: "100%",
        color: "#f0ffff",
        backgroundColor: "#446065",
      }}
    >
      <Box
        maxWidth="xl"
        display={"flex"}
        flexDirection="column"
        alignItems="center"
        paddingTop="5%"
      >
        <Box paddingBottom="20px">
          <h2>{title}</h2>
        </Box>
        <Box>{children}</Box>
      </Box>
    </Container>
  );
};
