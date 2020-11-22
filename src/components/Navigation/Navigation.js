import Link from "next/link";
import styles from "../../../styles/Navi.module.css";
import { MdSearch } from "react-icons/md";

export default function Navigation() {
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.links}>
        <div>
  
          <Link href="/">
            <a style={{ fontSize: "40px" }}>
              Movie<span style={{ color: "#F5C518" }}>UP</span>
            </a>
          </Link>
        </div>
        <div style={{ marginLeft: "30px", marginRight: "30px" }}>
          <Link href="/">
            <a className={styles.home}>Home</a>
          </Link>
        </div>
        <div>
          <Link href="/favorite">
            <a className={styles.favorite}>Favorite</a>
          </Link>
        </div>
        <div className={styles.input__wrapper}>
          <input placeholder="Enter movie name here" />
          <MdSearch className={styles.icon} />
        </div>
      </div>
    </div>
  );
}
