import { useState } from "react";
import styles from "./SideBsr.module.css";
import ResidentialSideBar from "./ResidentialSideBar";

export default function SideBar({ isOpen, setIsOpen }) {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <>
      {isOpen && (
        <div className={styles.sideBarMain}>
          <div className={styles.menuDIv}>
            <div className={styles.menu}>MENU</div>

            <div className={styles.times}>
              <p onClick={() => setIsOpen((is) => !is)}>&times;</p>
            </div>
          </div>

          <div>
            <div></div>
            <img
              className={styles.logo}
              alt="Logo"
              src="https://cdn3.vectorstock.com/i/1000x1000/66/62/house-cleaning-logo-vector-47536662.jpg"
            />
          </div>

          <div className={styles.SubHeader2}>
            <div className={styles.sub1}>
              <i class="fa fa-calendar" aria-hidden="true"></i>

              <p className={styles.subP}>Request a Free Estimate</p>
            </div>

            <div className={styles.sub2}>
              <i class="fa fa-phone" aria-hidden="true"></i>
              <p>Call Us</p>
            </div>
          </div>

          <div>
            <div className={styles.resident}>
              <p>Residential</p>
              <p
                className={styles.greater}
                onClick={() => setIsOpen2((is) => !is)}
              >
                >
              </p>
            </div>

            <div>
              {isOpen2 && (
                <div>
                  <ResidentialSideBar />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
