import { connect } from 'react-redux'
import ThirdPage from '../components/ThirdPage'

const mapStateToProps = (state) => {
  return {
    demo: state.demo,
    table: state.table,
    show: state.show
  }
}

const ThirdPageContainer = connect(
  mapStateToProps,
  null
)(ThirdPage)

export default ThirdPageContainer