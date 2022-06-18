import { ProgressBar } from "react-bootstrap";
import styles from "./drop.module.css";
import React from "react";
export function FileHeader({ file, onDelete, progress }) {
  return (
    <div className={styles.file_main_wrapper}>
      {file.type === "image/png" ? (
        <div className={styles.icon_wrapper}>
          <img src="/images/PNG_Icon.png" alt="png_icon" />
        </div>
      ) : (
        <>
          {file.type === "image/jpeg" ? (
            <div className={styles.icon_wrapper}>
              <img src="/images/JPG_Icon.png" alt="jpg_icon" />
            </div>
          ) : (
            <></>
          )}
        </>
      )}
      <div className={styles.file_header_wrapper}>
        <div className={styles.inner_file_header_wrapper}>
          <div className={styles.file_info_wrapper}>
            <p>{file.name}</p>
            {progress ? <p>{progress}%</p> : <p>0%</p>}
          </div>
          <ProgressBar now={progress} className={styles.progress_bar} />
        </div>
        <div className={styles.close_icon_wrapper}>
          <img
            src="/images/Cancel_icon.png"
            onClick={() => onDelete(file)}
            className={styles.close_icon}
          />
        </div>
      </div>
    </div>
  );
}
