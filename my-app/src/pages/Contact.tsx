import React from "react";
import { PageLayout } from "../components/PageLayout";
import { useFormik, FormikConsumer } from "formik";
import { Box } from "@material-ui/core";

export const Contact: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      body: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <PageLayout title="Contact">
      <form onSubmit={formik.handleSubmit}>
        <Box display="flex" flexDirection="column" padding="50px">
          <Box flex="0 1 auto" paddingBottom="50px">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              style={{ display: "inlineBlock" }}
            />
          </Box>
          <Box flex="0 1 auto" paddingBottom="50px">
            <label htmlFor="body">Send me a Message!</label>
            <textarea
              style={{
                height: "200px",
                width: "500px",
                display: "inlineBlock",
                resize: "none",
              }}
              id="body"
              name="body"
              onChange={formik.handleChange}
              value={formik.values.body}
            ></textarea>
          </Box>
          <Box flex="0 1 auto">
            <button type="submit">Submit</button>
          </Box>
        </Box>
      </form>
    </PageLayout>
  );
};
