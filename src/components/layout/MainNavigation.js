import { useContext } from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'
import FavoritesContext from '../../store/favorites-context'

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext)
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
            <Link to="/favourites">
              My Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
