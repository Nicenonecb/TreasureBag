import type { NextPage } from 'next'

import styles from '../parts/NavBar.module.css'

import SearchInput from '../components/searchInput/SearchInput';

// const { Search } = Input;

const NavBar: NextPage = () => {
  return (
    <div className={styles.main}>
      <div>
        <span className={styles.gradientText}>周记</span>

        <span className={styles.leftSpace}> 首页</span>

        <span className={styles.leftSpace}>会员</span>

        <span  className={styles.leftSpace}>
          等你来记
        </span>


      </div>

      <div className={styles.search}>
      <SearchInput></SearchInput>

 
      </div>

      <div>

      </div>
    </div>
  )
}

export default NavBar