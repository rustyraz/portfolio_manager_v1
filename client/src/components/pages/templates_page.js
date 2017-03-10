import React from 'react';
import sidebarMenu from '../common/sidebarMenu';

class templatesPage extends React.Component{
  render(){
    return(
      <div>
        {sidebarMenu}
        <div className="col-sm-12 col-md-10">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-titles">List of Templates</h3></div>
              <div className="panel-body">This will have a list of templates both bought and available templates</div>
            </div>
          </div>
        </div>
    );
  }
}

export default templatesPage;
