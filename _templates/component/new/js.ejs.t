---
to: lib/components/<%= name %>/<%= name %>.js
---
import { h } from 'hyperapp'
import './<%= name %>.css'

export default (state, actions) => (
  h('div', { class: '<%= name %>' }, '')
)
