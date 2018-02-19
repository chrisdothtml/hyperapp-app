import actions from './actions.js'
import Main from './components/Main.js'
import { app } from 'hyperapp'

const initialState = {
  count: 0
}

app(
  initialState,
  actions,
  Main,
  document.getElementById('app')
)
