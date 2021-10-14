import classes from './NewMeetup.module.css'
import Card from '../ui/Card'
import { useRef } from 'react'

const NewMeetupForm = (props) => {
  const titleInputRef = useRef()
  const imageInputRef = useRef()
  const adddressInputRef = useRef()
  const descInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()
    const enteredTitle = titleInputRef.current.value
    const enteredImage = imageInputRef.current.value
    const enteredAddress = adddressInputRef.current.value
    const enteredDesc = descInputRef.current.value
    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDesc,
    }
    props.onAddMeetup(meetupData)
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.form}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.form}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.form}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={adddressInputRef} />
        </div>
        <div className={classes.form}>
          <label htmlFor="description">Description</label>
          <textarea
            required
            id="description"
            required
            rows="5"
            ref={descInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm
