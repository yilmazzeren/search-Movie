import styles from "../../styles/SearchResults.module.css";
import Head from "next/head";

import { useSelector, useDispatch } from "react-redux";
import Navigation from "../components/Navigation/Navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getMovie } from "../redux/actions/getMovie";
import {addFavorites} from "../redux/actions/addFavorites"
import {MdFavoriteBorder} from "react-icons/md"

function SearchResults() {
  const state = useSelector((state) => state.searchReducer);
  const movie = useSelector((state) => state.getMovieReducer);

  // const [heart,setHeart] = useState(true)
  const dispatch = useDispatch();
 
  useEffect(async () => {
    const title = state.name.split(" ").join("+");
    const year = state.year;
    dispatch(getMovie(title, year,state.type));
  }, []);


  const addFavoritte = (item) => {
   
    dispatch(addFavorites(item))
    
  }

  return (
    <div>
      <Head>
        <title>Search Results</title>
      </Head>
      
      <Navigation />
      <h4
        style={{
          margin: "100px 0 0 170px",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        Search Results- <span style={{ color: "#F5C518" }}>{state.name}</span>
      </h4>
        <div className={styles.searchContainer}>
      {movie.Response==="True" ? 
      movie.Search.map(item=>(
         <div key={item.imdbID} className={styles.searchWrapper}>
          <div style={{position:"relative",width:"300px"}}>
            {item.Poster==="N/A"?  <img src="https://seattletarp.com/wp-content/uploads/2016/07/imageComingSoon.jpg"></img>: <img src={item.Poster}></img>} 
            <MdFavoriteBorder onClick={()=>addFavoritte(item)} className={styles.searchIcon}/>
          </div>
          <p>IMDb :{item.imdbRating ?item.imdbRating:<span style={{color:"#F5C518"}}> no imdb information</span> }</p>
          <p>Year : <span style={{color:"#F5C518"}}>{item.Year}</span></p>
          <p>Title : <span style={{color:"#F5C518"}}>{item.Title}</span></p>
          <p>Desriptions :{item.Plot ? item.Plot :<span style={{color:"#F5C518"}}> no description information</span>} </p>
         
        </div>
      ))
       : 
        <div style={{marginTop:"20px"}}>Received error =&gt; <span style={{color:"red"}}>{movie.Error}</span></div> 
      }
      </div>
    </div>
  );
}

export default SearchResults;
