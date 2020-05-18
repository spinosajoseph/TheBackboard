import React from "react";
import { Container, Box } from "@material-ui/core";


interface Props {
  title: string;
}

export const PageLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <Container>
      <Box maxWidth="xl" display={"flex"} flexDirection="column" alignItems="center" paddingTop='5%'>
        <Box paddingBottom='20px' >
          <h2>{title}</h2>
        </Box>
        <Box>{children}</Box>
      </Box>
    </Container>
  );
};
