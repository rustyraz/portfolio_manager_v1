import React from 'react';

class homePage extends React.Component{
  render(){
    return(

      <div >
        <div className="col-md-12 col-sm-12">
          <div>
            <div className="jumbotron">
              <h1>Welcome to the Portfolio Manager</h1>
              <p>Easy to generate a work resume using easy to follow steps.</p>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-titles">Home details</h3></div>
              <div className="panel-body">
                This will be the home page
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default homePage;
