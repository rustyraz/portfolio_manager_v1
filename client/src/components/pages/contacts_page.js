import React from 'react';
import sidebarMenu from '../common/sidebarMenu';

class contanctsPage extends React.Component{
  render(){
    return(
      <div>
        {sidebarMenu}
        <div className="col-sm-12 col-md-10">
            <div className="panel panel-default z-depth-4">
              <div className="panel-heading">
                <h3 className="panel-titles">Contacts details</h3></div>
              <div className="panel-body">This will be the area we put out contacts details</div>
            </div>
        </div>
      </div>

    );
  }
}

export default contanctsPage;
