import { h } from 'hyperapp'
import './Main.css'

export default (state, actions) => (
  h('div', { class: 'todos' }, [
    h('h1', {}, state.count),
    h('button', { onclick: () => actions.decrease(1) }, '-'),
    h('button', { onclick: () => actions.increase(1) }, '+')
  ])
)
