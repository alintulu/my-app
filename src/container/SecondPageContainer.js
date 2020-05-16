import { connect } from 'react-redux'
import SecondPage from '../components/SecondPage'

const mapStateToProps = (state) => {
  return {
    demo: state.demo,
    downShift: state.downShift,
    buildImage: state.buildImage
  }
}

const SecondPageContainer = connect(
  mapStateToProps,
  null
)(SecondPage)

export default SecondPageContainer