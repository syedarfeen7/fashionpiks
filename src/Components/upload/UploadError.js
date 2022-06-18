import React from "react";
import { FileError } from "react-dropzone";
import { FileHeader } from "./FileHeader";
import { ProgressBar } from "react-bootstrap";


export function UploadError({ file, onDelete, errors }) {
  return (
    <React.Fragment>
      <FileHeader file={file} onDelete={onDelete} />
      <ProgressBar variant="warning" now={100} />
      {errors.map((error) => (
        <div key={error.code}>
          <div>{error.message} </div>
        </div>
      ))}
    </React.Fragment>
  );
}
