import styles from "../../../Styling/TabsStyle/Followers.module.css";
import {} from "react-bootstrap";
import { MdRemoveCircleOutline } from "react-icons/md";
import { GoCircleSlash } from "react-icons/go";

import DummyData from "./dummydata";
const All = () => {
  const firstInteger = String(DummyData?.length).charAt(0);
  const restIntegers = String(DummyData?.length).slice(1, DummyData.length);

  return (
    <>
      <div className={styles.total_followers_count}>
        {DummyData?.length <= 9 ? (
          <span>{DummyData.length}</span>
        ) : (
          <>
            <span>{firstInteger}</span>
            <span>{restIntegers}</span>
          </>
        )}
      </div>
      <div className={styles.card_wrapper}>
        {DummyData.map((a) => (
          <div className={styles.main_card_wrapper}>
            <div className={styles.card_inner_wrapper}>
              <img src={a.image} alt="user_image" />
              <h6 className={styles.card_name}>{a.name}</h6>
              <div className={styles.card_icon_wrapper}>
                <MdRemoveCircleOutline
                  className={`${styles.card_icon} ${styles.subtract_circle}`}
                />
                <GoCircleSlash
                  className={`${styles.card_icon} ${styles.slash_circle}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default All;
