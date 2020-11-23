import styles from "../../styles/SearchResults.module.css";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "../components/Navigation/Navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getMovie } from "../redux/actions/getMovie";

function SearchResults() {
  const state = useSelector((state) => state.searchReducer);
  const movie = useSelector((state) => state.getMovieReducer);

  const dispatch = useDispatch();

  useEffect(async () => {
    const title = state.name.split(" ").join("+");
    const year = state.year;
    dispatch(getMovie(title, year));
  }, []);

  

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
        Search Results- <span style={{ color: "#F5C518" }}>{state.name}</span>
      </h4>

      {movie.Response ? (
        <div className={styles.searchWrapper}>
          <div>
            <img src={movie.Poster}></img>
          </div>
          <p>IMDb {movie.imdbRating}</p>
          <p>{movie.Year}</p>
          <p>{movie.Plot}</p>
        </div>
      ) : (
        console.log("a")
      )}

      {
        console.log(movie.Response)
      }
    </div>
  );
}

export default SearchResults;
