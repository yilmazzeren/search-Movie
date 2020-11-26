import Link from "next/link";
import styles from "../../../styles/Navi.module.css";
import { MdSearch } from "react-icons/md";
import { useEffect, useState } from "react";
import {getMovie} from "../../redux/actions/getMovie"
import { useDispatch } from "react-redux";

export default function Navigation() {

  const [title,setTitle] =useState("")
  const dispatch =useDispatch();
  const state= title.split(" ").join("+");

  const searchMovieNavi = () => {
        dispatch(getMovie(state,"",""))
  }

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
          <input  onChange={e=>setTitle(e.target.value)} placeholder="Enter movie name here" />
          <Link href="searchResults">
            <a><MdSearch onClick={searchMovieNavi} className={styles.icon} /></a>
          </Link>
        </div>
      </div>
    </div>
  );
}
