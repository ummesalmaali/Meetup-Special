import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meet ups</Link>
          </li>
          <li>
            <Link to="/new-meetups">New Meet ups</Link>
          </li>
          <li>
            <Link to="/favourites">favourites Meet ups</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
