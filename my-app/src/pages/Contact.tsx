import React from "react";
import { PageLayout } from "../components/PageLayout";
import { useFormik } from "formik";
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
        <Box
          display="flex"
          flexDirection="column"
          padding="50px"
          alignItems="center"
        >
          <Box
            flex="0 1 auto"
            paddingBottom="50px"
            display="flex"
            flexWrap="wrap"
            alignItems="center"
          >
            <label
              style={{ flex: "1 0 120px", maxWidth: "120px", margin: 0 }}
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              style={{ display: "inlineBlock" }}
            />
          </Box>
          <Box
            flex="0 1 auto"
            paddingBottom="50px"
            display="flex"
            flexWrap="wrap"
            alignItems="center"
          >
            <label
              style={{ flex: "1 0 120px", maxWidth: "120px", margin: 0 }}
              htmlFor="body"
            >
             Message
            </label>
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
              placeholder="Enter your message here"
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
