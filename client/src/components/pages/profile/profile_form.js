import React from 'react';
import { connect } from 'react-redux';

import TextFieldGroup from '../../common/TextFieldGroup';
import { createProfile } from '../../../actions/profileActions';
import sidebarMenu from '../../common/sidebarMenu';

class ProfileForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      first_name: '',
      second_name: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    this.props.createProfile(this.state);
  }

  onChange(e){
    this.setState({ [e.target.name] : e.target.value });
  }

  render(){
    const { errors, first_name, second_name, isLoading } = this.state;
    return (
      <div>
      {sidebarMenu}
      <div className="col-sm-12 col-md-10">
          <div className="panel panel-default">
            <div className="panel-heading"><h4>Your Profile Info</h4></div>
            <div className="panel-body">
              <form onSubmit={this.onSubmit}>

                {errors.form && <div className="alert alert-danger">{errors.form}</div>}

                <TextFieldGroup
                  error={errors.first_name}
                  label="First name:"
                  onChange={this.onChange}
                  value={first_name}
                  fieldName="first_name"
                  type="text"
                />

                <TextFieldGroup
                  error={errors.second_name}
                  label="Second name:"
                  onChange={this.onChange}
                  value={second_name}
                  fieldName="second_name"
                  type="text"
                />

                <div className="form-group">
                  <button className="btn btn-danger btn-lg btn-block" disabled={isLoading}>Save</button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

ProfileForm.propTypes = {
  createProfile: React.PropTypes.func.isRequired
}

ProfileForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null,{ createProfile })(ProfileForm);
