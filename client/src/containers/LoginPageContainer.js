import React from 'react';
import LoginForm from '../components/pages/account_pages/login_form';
import { connect } from 'react-redux';
import { login as loginActions } from '../actions/authActions';

import { addFlashMessage } from '../actions/flashMessages';
import topPageLogo from '../components/common/topPageLogo';

class LoginPage extends React.Component {
  render(){
    const { addFlashMessage, loginActions } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4 col-sm-12">
          {topPageLogo}
          <LoginForm loginActions={loginActions} addFlashMessage={addFlashMessage}/>
        </div>
      </div>
    );
  }
}

export default connect(null, {
  addFlashMessage,
  loginActions
})(LoginPage);
