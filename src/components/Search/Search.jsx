import React, {useRef} from 'react'
import styles from './Search.module.scss'
import { setSearch } from '../../redux/slices/filterSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import searchImg from '../../assets/img/search.svg'
import closeImg from '../../assets/img/close.svg'

const Search = () => {
    const search = useSelector(state => state.filter.search)
    const dispatch = useDispatch()
    const inputRef = useRef()


    const clearSearch = () => {
        dispatch(setSearch(''))
        inputRef.current.focus()
    }



    return (
        <div className={styles.search}>
            <img
                className={styles.searchImg}
                src={searchImg} 
                alt="search" />
            <input
                ref={inputRef}
                value={search}
                onChange={(e) => dispatch(setSearch(e.target.value))}
                placeholder='Найти пиццу...'/>
            {search &&             
            <div className={styles.close}>
                <img
                    onClick={clearSearch}
                    className={styles.closeImg} 
                    src={closeImg} 
                    alt="close" />
            </div>}
        </div>
    )
}

export default Search
