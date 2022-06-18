import { Form, Formik } from "formik";
import { Card, Button } from "react-bootstrap";
import React from "react";
import { array, object, string } from "yup";
import { MultipleFileUploadField } from "./Components/upload/MultipleFileUploadField";

export default function FileUploader(props) {
  return (
    <div>
      <Formik initialValues={{ uploadFiles: [] }}>
        <Form>
          <div>
            <MultipleFileUploadField
              name="uploadedFiles"
              filesCount={props.filesCount}
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
}
