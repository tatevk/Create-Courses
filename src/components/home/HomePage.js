import React from 'react';
import {Link} from 'react-router';

 class HomePage extends React.Component{
render(){
    return(
      <div className="jumbotron">
        <h1>Home page</h1>
        <p>asdasds</p>
        <Link to="about" className="btn btn-primary">asdada</Link>
      </div>
    );
}
 }
 export default HomePage;
