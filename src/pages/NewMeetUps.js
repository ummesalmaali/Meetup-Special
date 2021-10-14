import { useHistory } from 'react-router-dom'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewMeetUps = () => {
  const history = useHistory()
  const addMeetupHandler = (meetupData) => {
    fetch(
      'https://meetup-project-f0375-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    ).then(() => {
      history.replace('/')
    })
  }
  return (
    <section>
      <h1>Add New Meet Up</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetUps
