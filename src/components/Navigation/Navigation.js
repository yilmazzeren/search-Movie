import Link from "next/link";
import styles from "../../../styles/Navi.module.css";
import { MdSearch } from "react-icons/md";
import { useState } from "react";
import {getMovie} from "../../redux/actions/getMovie"
import { useDispatch } from "react-redux";

export default function Navigation() {

  const [name,setName] =useState()

  const searchIcon = () => {
    let title= name.split(" ").join("+");
    console.log(title)
  }

  // const dispatch =useDispatch();
  // dispatch(getMovie(title))

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
          <input onChange={e=>setName(e.target.value)} placeholder="Enter movie name here" />
          <Link href="searchResults">
            <a><MdSearch onClick={searchIcon} className={styles.icon} /></a>
          </Link>
        </div>
      </div>
    </div>
  );
}
