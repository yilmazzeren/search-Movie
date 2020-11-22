import {Link} from "react-router-dom"
import styles from "../../../styles/Floating.module.css"
import {searchAction} from "../../redux/actions/searchActions";
import { useDispatch } from 'react-redux'
import { useEffect, useState } from "react";


 function FloatingCard() {
  const dispatch = useDispatch()
  const [values,setValues] = useState({name:"",year:""}) 

  useEffect(() => {
     dispatch(searchAction(values))
  })


    return (
          <div className={styles.main__floatingCard}>
            <div className={styles.main__floatingCardGroup}>
              <div className={styles.main__floatingCardGroupYear}><input value={values.year} onChange={e=>setValues({...values,year:e.target.value})} placeholder="Year"/></div>
              <div >
              <select className={styles.main__floatingCardGroupType}>
                <option>Aksiyon</option>
                <option>Dram</option>
                <option>Fantastik</option>
                <option>Bilim kurgu</option>
              </select>
              </div>
              <div style={{display:"flex"}}><input value={values.name} onChange={e=>setValues({...values,name:e.target.value})} style={{width:"40vh"}} placeholder="Enter movie name here"/> </div>
              <div >
                <Link ><a><button className={styles.main__floatingCardGroupButton}>Search</button></a></Link>
                
                </div>
            </div>
          </div>
     
    )
}


export default FloatingCard;