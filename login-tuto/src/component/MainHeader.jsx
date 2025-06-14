import FirstHeader from "./FirstHeader";
import SubHeader from "./SubHeader";
import ThirdHeader from "./ThirdHeader";
import styles from "./MainHeader.module.css";

export default function MainHeader() {
  return (
    <>
      <div className={styles.main}>
        <FirstHeader />
        <SubHeader />
        <ThirdHeader />

        <div className={styles.main2}></div>
      </div>
    </>
  );
}
