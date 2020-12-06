import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import styles from "../../styles/viewDetails.module.css"
import {useDispatch} from "react-redux"
import { useSelector } from "react-redux";
import {addFavorites} from "../redux/actions/addFavorites"

function viewDetails() {
  const detail = useSelector((state) => state.viewDetailReducer);
  const dispatch = useDispatch()


  return (
    <>
      <Navigation />
      <Head>
        <title>{detail.Title}</title>
      </Head>
      <div className={styles.detailWrapper}>
        <div ><img src={detail.Poster}></img></div>
        <div className={styles.detailMain}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}> 
                <p> <span style={{fontSize:"18px",backgroundColor:"#F5C518",fontWeight:"bolder"}}> IMDb </span>{detail.imdbRating}</p>
                <a className={styles.addFavoriButton} onClick={()=>dispatch(addFavorites(detail))}>Add to favorites</a>
            </div>
            <div>
                <p style={{color:"#F5C518",fontSize:"18px",fontWeight:"600"}}>{detail.Year}</p>
                <h3>{detail.Title}</h3>
                <p>{detail.Plot}</p>
            </div>
            <div>{detail.Genre}</div>
        </div>
      </div>
    </>
  );
}

export default viewDetails;
