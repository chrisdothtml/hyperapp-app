export default {
  decrease: value => state => ({ count: state.count - value }),
  increase: value => state => ({ count: state.count + value })
}
