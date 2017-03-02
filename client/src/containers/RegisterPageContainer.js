import React from 'react';
import RegisterForm from '../components/pages/account_pages/register_form';
import { connect } from 'react-redux';
import { userRegisterRequest, isUserExists } from '../actions/registerUserActions';
import { addFlashMessage } from '../actions/flashMessages';
import topPageLogo from '../components/common/topPageLogo';

class RegisterPage extends React.Component {
  render(){
    const { userRegisterRequest, addFlashMessage, isUserExists } = this.props;
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3 col-sm-12">
          {topPageLogo}
          <RegisterForm
            userRegisterRequest={userRegisterRequest}
            addFlashMessage={addFlashMessage}
            isUserExists={isUserExists}
          />
        </div>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  userRegisterRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired
}

export default connect(null, {
  userRegisterRequest,
  addFlashMessage,
  isUserExists
})(RegisterPage);
