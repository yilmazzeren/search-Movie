import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import FloatingCard from "../components/FloatingCard/FloatingCard";
import Link from "next/link"
import {useDispatch} from "react-redux"
import {addFavorites} from "../redux/actions/addFavorites"
import {viewDetail} from "../redux/actions/viewDetails"
import { useState } from "react";

 function HomePage({movie}) {

  const [changeColor,setChangeColor] =useState(true)
  const [favori, setFavori] = useState("Add to favorites");
  const dispatch = useDispatch()

  const addFavorite = (e) => {
    dispatch(addFavorites(movie))
    if(changeColor){
      setFavori("Added to favorites")
      e.target.style.backgroundColor="#ffeeb3"
      e.target.style.color="#F5C518"
      setChangeColor(false)
    }else {
      setFavori("Add to favorites")
      e.target.style.color="white"
      e.target.style.backgroundColor="#F5C518"
      setChangeColor(true)
    }

  }

 
  return (
    <div className="app__wrapper">
      <Head>
        <title>Home Page</title>
      </Head>
      <Navigation />
      <main style={{position:"relative",backgroundSize:"contain"}}>
          <div style={{background:"#F5C518",position:"relative"}}>
            <div className={styles.main}></div>
            <div className={styles.main__text}> 
            <span style={{fontSize:"35px"}}>Welcome to</span> <br/> <span style={{fontWeight:"bold",fontSize:"35px"}}>MovieUp</span>
            <div >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </div>
            </div>
          </div>
          <FloatingCard/>
          
      </main>
      <h4 style={{margin:"100px 0 0 170px",fontSize:"24px",fontWeight:"700"}}>Populer Movies</h4>
      <div className={styles.populerMovies_wrapper}>
     
            <div className={styles.populerMovies}>
          
              <div className={styles.populerMovies__image}>
                <img src={movie.Poster}></img>
              </div>
              <div className={styles.populerMovies__descriptions}>
                <div className={styles.populerMovies__top}>
                  <p >IMDb  </p>
                  <p style={{margin:"0 260px 0 15px",alignSelf:"center",fontWeight:"bold"}}>9.5</p>
                  <p>{movie.Type}</p>
                </div>
                <div className={styles.populerMovies__main}>
                  <h5 style={{color:"#F5C518"}}>{movie.Year}</h5>
                  <h4 style={{fontSize:"30px",marginTop:"-20px"}}>{movie.Title}</h4>
                  <p>{movie.Plot}</p>
                </div>
                <div className={styles.populerMovies__footer}>
                  <button className="asd" onClick={addFavorite}>{favori}</button>
                  <Link href="viewDetails"><a onClick={()=>dispatch(viewDetail(movie.Title))} style={{marginLeft:"30px",alignSelf:"center",color:"#F5C518"}}>View Details</a></Link>
                </div>
            </div>
          </div>
      
     
       </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch('http://www.omdbapi.com/?t=The+godfather&apikey=d03ca61b')
  const movie = await data.json()
  return {
    props: {
      movie
    }
  }
}


export default HomePage;