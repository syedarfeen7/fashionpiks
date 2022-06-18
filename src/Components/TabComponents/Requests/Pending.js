import styles from "../../../Styling/TabsStyle/Followers.module.css";
import {} from "react-bootstrap";
import { BsSlashCircle, BsXLg } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { GoCircleSlash } from "react-icons/go";
import DummyData from "../Followers/dummydata";
const Pending = () => {
  return (
    <>
      <div className={styles.total_followers_count}>
        <span>1</span>
        <span>2</span>
      </div>
      <div className={styles.card_wrapper}>
        {DummyData.map((a) => (
          <div className={styles.main_card_wrapper}>
            <div className={styles.card_inner_wrapper}>
              <img src={a.image} alt="user_image" />
              <h6 className={styles.card_name}>{a.name}</h6>
              <div className={styles.card_icon_wrapper}>
                <AiOutlineCheck
                  className={`${styles.card_icon} ${styles.check}`}
                />
                <BsXLg className={`${styles.card_icon} ${styles.cross}`} />
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

export default Pending;
