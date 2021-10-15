import Card from '../ui/Card'
import classes from './MeetupItem.module.css'
import FavoritesContext from '../../store/favorites-context'
import { useContext } from 'react'

const MeetupItem = (props) => {
  const favoriteCtx = useContext(FavoritesContext)

  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id)
  function toggleFavoritesHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id)
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      })
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesHandler}>
            {itemIsFavorite ? 'Remove From Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
