import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import { useSelector } from "react-redux";
import styles from "../../styles/SearchResults.module.css"
import Link from "next/link";

export default function Favorite() {
  const movie = useSelector((state) => state.addFavoritesReducer);
  return (
    <div>
      <Head>
        <title>Favorite</title>
      </Head>
      <Navigation />
      <h4 style={{ margin: "50px 170px", fontSize: "24px", letterSpacing: "1px" }}>
        Favorites
      </h4>
      
    {
        movie.length ===0 ? <div style={{marginLeft:"170px"}}>No movies have been added to favorites.</div>:
        <div className={styles.searchContainer}>
      {
      movie.map((item,key)=>(
         <div key={key} className={styles.searchWrapper}>
          <div style={{position:"relative",width:"300px"}}>
            {item.Poster==="N/A"?  <img src="https://seattletarp.com/wp-content/uploads/2016/07/imageComingSoon.jpg"></img>: <img src={item.Poster}></img>} 
          </div>
          <p>IMDb :{item.imdbRating ?item.imdbRating:<span style={{color:"#F5C518"}}> no imdb information</span> }</p>
          <p>Year : <span style={{color:"#F5C518"}}>{item.Year}</span></p>
          <p>Title : <span style={{color:"#F5C518"}}>{item.Title}</span></p>
          <p>Desriptions :{item.Plot ? item.Plot :<span style={{color:"#F5C518"}}> no description information</span>} </p>
        </div>
      ))}
      </div>
    }
      
    </div>
  );
}
