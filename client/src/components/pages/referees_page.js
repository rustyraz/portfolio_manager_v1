import React from 'react';
import sidebarMenu from '../common/sidebarMenu';

class refereesPage extends React.Component{
  render(){
    return(
      <div className="row">
        {sidebarMenu}
        <div className="col-md-10 col-sm-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-titles">Referees details</h3></div>
            <div className="panel-body">This will be the area we put out referees details</div>
          </div>
        </div>
      </div>

    );
  }
}

export default refereesPage;
