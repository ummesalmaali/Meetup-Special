// import { Todo } from './components/Todo'
import { Route, Switch } from 'react-router-dom'
import Favourites from './pages/Favourites'
import AllMeetUp from './pages/AllMeetUp'
import NewMeetUps from './pages/NewMeetUps'
import MainNavigation from './components/layout/MainNavigation'
import Layout from './components/layout/Layout'

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <AllMeetUp />
        </Route>
        <Route path="/new-meetups">
          <NewMeetUps />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
