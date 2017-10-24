import React, {propTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state={Object.assign({}, this.props.course)} ,
    errors {}
  }
  render() {
    return(
    <div>
      <h1>Manage Courses!</h1>
      <CourseForm course={this.props.course}/>
    </div>
  );
  }
}
ManageCoursePage.PropTypes={
  //myProps:propTypes.string.isRequired
}
function mapStatetoProps(state, ownProps){
  let course={id:'', whatchHref:'', title:'', authorId:'', lenght:'', category:''}
  return {
    course:course
  };
}
function mapDispatchToProps(dispatch){
  return{
    actions:bindActionCreators(courseActions, dispatch)
  };
}
export default connect(mapStatetoProps,mapDispatchToProps)(ManageCoursePage)
