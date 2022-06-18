import { useField } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { SingleFileUploadWithProgress } from "./SingleFileUploadWithProgress";
import { UploadError } from "./UploadError";
import styles from "./drop.module.css";
let currentId = 0;
let limit = 5;
function getNewId() {
  return ++currentId;
}

export function MultipleFileUploadField({ name, filesCount }) {
  const [_, __, helpers] = useField(name);
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((accFiles, rejFiles) => {
    console.log(filesCount);
    if (limit < filesCount) {
      console.log("Files Limit Reached!");
      return false;
    }
    const mappedAcc = accFiles.map((file) => ({
      file,
      errors: [],
      id: getNewId(),
    }));
    filesCount++;
    const mappedRej = [];
    setFiles((curr) => [...curr, ...mappedAcc, ...mappedRej]);
    filesCount += [...files, ...mappedAcc, ...mappedRej].length;
    if (rejFiles.length > 0) console.log("files rejected");
  }, []);

  useEffect(() => {
    helpers.setValue(files);
  }, [files]);

  function onUpload(file, url) {
    setFiles((curr) =>
      curr.map((fw) => {
        if (fw.file === file) {
          return { ...fw, url };
        }
        return fw;
      })
    );
  }

  function onDelete(file) {
    setFiles((curr) => curr.filter((fw) => fw.file !== file));
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      image: [".jpeg", ".png"],
      // "image/png": [],
    },
    maxFiles: 5,
  });

  return (
    <React.Fragment>
      <div>
        {files.map((fileWrapper) => (
          <div key={fileWrapper.id}>
            {fileWrapper.errors.length ? (
              <UploadError
                file={fileWrapper.file}
                errors={fileWrapper.errors}
                onDelete={onDelete}
              />
            ) : (
              <SingleFileUploadWithProgress
                onDelete={onDelete}
                onUpload={onUpload}
                file={fileWrapper.file}
              />
            )}
          </div>
        ))}
        <div {...getRootProps({ className: styles.dropzone })}>
          <div className={styles.add_image_icon_wrapper}>
            <img src="/images/add_image.png" alt="image_icon" />
          </div>
          <input {...getInputProps()} />
          <p>Click to Browse or Drop Photo</p>
        </div>
      </div>
    </React.Fragment>
  );
}
