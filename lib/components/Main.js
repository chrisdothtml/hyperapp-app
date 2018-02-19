import { h } from 'hyperapp'

export default (state, actions) => (
  h('div', {}, [
    h('h1', {}, state.count),
    h('button', { onclick: () => actions.decrease(1) }, '-'),
    h('button', { onclick: () => actions.increase(1) }, '+')
  ])
)
