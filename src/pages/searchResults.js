import { useSelector } from "react-redux";
import Navigation from "../components/Navigation/Navigation";
import styles from "../../styles/Home.module.css";
import {useEffect, useState} from "react"
import Link from "next/link"
function SearchResults() {
  const state = useSelector((state) => state.searchReducer);

  const [search,setSearch] = useState()
  // useEffect(async () => {
  //   const kelime = state.name;
  //   let title = kelime.split(" ").join("+")
  //   const data = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=d03ca61b`)
  //   const searchMovie = await data.json()
  //   setSearch(searchMovie)
   
  // },[]);

  return (
    <div>
    
      <Navigation />
      <h4
        style={{
          margin: "100px 0 0 170px",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        Search Results- <span style={{color:"#F5C518"}}>{state.name}</span> 
      </h4>
      {/* <div className={styles.populerMovies}>
        
        <div className={styles.populerMovies__image}>
          <img src={search.Poster}></img>
        </div>
        <div className={styles.populerMovies__descriptions}>
        <div className={styles.populerMovies__top}>
          <p >IMDb  </p>
          <p style={{marginRight:"300px",alignSelf:"center",fontWeight:"bold"}}>{search.imdbRating}</p>
          <p>{search.Genre}</p>
        </div>
        <div className={styles.populerMovies__main}>
          <h5 style={{color:"#F5C518"}}>{search.Year}</h5>
          <h4 style={{fontSize:"30px",marginTop:"-20px"}}>{search.Title}</h4>
          <p>{search.Plot}</p>
        </div>
        <div className={styles.populerMovies__footer}>
          <button>Add to favorites</button>
          <Link href="/"><a style={{marginLeft:"30px",alignSelf:"center",color:"#F5C518"}}>View Details</a></Link>
        </div>
      </div>
      </div> */}
      
    
    </div>
  );
}

export default SearchResults;
