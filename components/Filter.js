import React, {useState} from 'react'
import filterSearch from '../utils/filterSearch'
import {useRouter} from 'next/router'
import styles from "../styles/Filtros.module.css";

const Filter = ({state}) => {
    // const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')
    const [category, setCategory] = useState('')

    const {categories} = state

    const router = useRouter()


    const handleCategory = (e) => {
        setCategory(e.target.value)
        filterSearch({router, category: e.target.value})
    }

    const handleSort = (e) => {
        setSort(e.target.value)
        filterSearch({router, sort: e.target.value})
    }


    return (
        <div className={styles.containerFil}>
            <div className="input-group-prepend col-md-2 px-0 mt-2">
                <select className="custom-select text-capitalize"
                value={category} onChange={handleCategory}>

                    <option value="all">Todos los Productos</option>

                    {
                        categories.map(item => (
                            <option key={item._id} value={item._id}>{item.name}</option>
                        ))
                    }
                </select>
            </div>

            <div className="input-group-prepend col-md-2 px-0 mt-2">
                <select className="custom-select text-capitalize"
                value={sort} onChange={handleSort}>

                     <option value="-createdAt">Nuevos</option>
                     <option value="oldest">Antiguos</option>
                     <option value="-sold">Lo que mas sale</option>
                     <option value="-price">Precio: Alto-Bajo</option>
                     <option value="price">Precio: Bajo-Alto</option>

                </select>
            </div>


        </div>
    )
}

export default Filter