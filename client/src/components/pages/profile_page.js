import React from 'react';
import sidebarMenu from '../common/sidebarMenu';

class profilePage extends React.Component{
  render(){
    return(
      <div className="row">
        {sidebarMenu}
        <div className="col-md-10 col-sm-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-titles">Profile details</h3></div>
            <div className="panel-body">
              Please fill in the details required
              <hr/>
              <div className="row">
                <div className="col-md-2">
                  <img className="img-circle" alt="" width="100%" src="https://avatars3.githubusercontent.com/u/1265786?v=3&s=460" />
                  <form>
                    <div className="form-group">
                      <label htmlFor="photo_url" >Photo url</label>
                      <input type="text" name="photo_url" className="form-control" />
                    </div>
                  </form>

                </div>
                <div className="col-md-10">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="first_name">First name</label>
                          <input type="text" name="first_name" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="last_name">Last name</label>
                            <input type="text" name="last_name" className="form-control" />
                          </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="job_title">Job title</label>
                          <input type="text" name="job_title" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="photo_url">Photo</label>
                          <input type="text" name="photo_url" className="form-control" />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="first_name">About me.</label>
                          <textarea rows="20" name="about_me" className="form-control"></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <button type="submit" className="btn btn-primary">Save</button>
                      </div>
                    </div>


                  </form>
                </div>
              </div>

              </div>
          </div>
        </div>
      </div>


    );
  }
}

export default profilePage;
