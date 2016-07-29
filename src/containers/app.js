import App from '../components/app';
import { connect } from 'react-redux';

const mapStateToProps = ({sessionStatus}) => {
  return ({
    sessionStatus
  })
}

export default connect(mapStateToProps)(App);
