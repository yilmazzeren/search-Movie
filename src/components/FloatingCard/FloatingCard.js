import Link from "next/link"
import styles from "../../../styles/Floating.module.css"
import {searchAction} from "../../redux/actions/searchActions";
import { useDispatch } from 'react-redux'
import { useEffect, useState } from "react";


 function FloatingCard() {
    

    const [values,setValues] = useState({name:"",year:"",type:""}) 
    const dispatch = useDispatch()
    useEffect(() => {
    dispatch(searchAction(values))
  })

    return (
          <div className={styles.main__floatingCard}>
            <div className={styles.main__floatingCardGroup}>
              <div className={styles.main__floatingCardGroupYear}><input value={values.year} onChange={e=>setValues({...values,year:e.target.value})} placeholder="Year"/></div>
              <div >
              <select value={values.type} onChange={e=>setValues({...values,type:e.target.value})}  className={styles.main__floatingCardGroupType}>
                <option value="type">Type</option>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="game">Game</option>
              </select>
              </div>
              <div style={{display:"flex"}}><input value={values.name} onChange={e=>setValues({...values,name:e.target.value})} style={{width:"40vh"}} placeholder="Enter movie name here"/> </div>
              <div >
                <Link href="searchResults"><a><button className={styles.main__floatingCardGroupButton}>Search</button></a></Link>
                </div>
            </div>
          </div>
     
    )
}


export default FloatingCard;