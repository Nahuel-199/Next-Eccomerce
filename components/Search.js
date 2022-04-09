import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import filterSearch from '../utils/filterSearch'
import styles from "../styles/Search.module.css";
import { BiSearchAlt } from "react-icons/bi";

const Search = () => {
    const router = useRouter()
    const [search, setSearch] = useState('')

    useEffect(() => {
        filterSearch({router, search: search ? search.toLowerCase() : 'all'})
    },[search])


  return (
    <div className={styles.containerSearch}> 
        <form autoComplete="on" className="mt-2 col-md-8 px-0" style={{color: "white"}}>

                <input type="text" className={styles.ipt} list="title_product"
                placeholder='Busque el producto por su nombre....'
                value={search.toLowerCase()} onChange={e => setSearch(e.target.value)}
                style={{backgroundColor: "#212529"}} />
                <BiSearchAlt className={styles.iconS}/>
              
            </form>
            </div>
  )
}

export default Search