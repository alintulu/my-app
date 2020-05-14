import { connect } from 'react-redux'
import ThirdPage from '../components/ThirdPage'

const mapStateToProps = (state) => {
  return {
    details: state.details,
    demo: state.demo
  }
}

const ThirdPageContainer = connect(
  mapStateToProps,
  null
)(ThirdPage)

export default ThirdPageContainer