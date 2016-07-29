import Login from '../components/login';
import * as LoginActions from '../actions/login';
import { connect } from 'react-redux';

const mapStateToProps = ({sessionStatus}) => {
  return ({
    sessionStatus
  })
}

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => {dispatch(LoginActions.login(username, password))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
