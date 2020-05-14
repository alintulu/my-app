import { connect } from 'react-redux'
import SecondPage from '../components/SecondPage'

const mapStateToProps = (state) => {
  return {
    details: state.details,
    demo: state.demo
  }
}

const SecondPageContainer = connect(
  mapStateToProps,
  null
)(SecondPage)

export default SecondPageContainer