import actions from '../lib/actions.js'

describe('actions', () => {
  test('decrease', () => {
    expect(
      actions.decrease(5)({ count: 5 })
    ).toMatchObject({ count: 0 })
  })

  test('increase', () => {
    expect(
      actions.increase(5)({ count: 0 })
    ).toMatchObject({ count: 5 })
  })
})
