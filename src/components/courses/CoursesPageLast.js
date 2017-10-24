import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';


class CoursePage extends React.Component{
  constructor(props, context){
    super(props, context);
    // this.state = {
    //   course: {title:""}
    // };
    // this.onTitleChange=this.onTitleChange.bind(this);
    // this.onClickSave=this.onClickSave.bind(this);
  }
  // onTitleChange(event){
  //   const course=this.state.course;
  //   course.title=event.target.value;
  //   this.setState({course});
  // }
//   onTitleChange(event){
// const course = this.state.course;
// course.title = event.target.value;
// this.setState=({course: course});
// }
// const course = this.state.course;
// course.title = event.target.value;
// this.setState({course});

  // onClickSave(){
  //
  //   this.props.actions.createCourse(this.state.course);
  // }
  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }
  render() {
    const {courses}=this.props
    return(
      <div>
        <h1>Courses</h1>
       <CourseList courses={courses}/>
        </div>
        // <h2>Add Course</h2>
        // <input
        //   type="text"
        //   value={this.state.course.title}
        //   onChange={this.onTitleChange.bind(this)}/>
        // <input
        //   type="button"
        //   value="Save"
        //   onClick={this.onClickSave.bind(this)}
        //   />

    );
  }
}
CoursePage.propTypes={
//  dispatch:PropTypes.func.isRequired,
  courses:PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps){
  return{
    courses:state.courses
  };
}
function mapDispatchToProps (dispatch){
  return{
//createCourse:course =>dispatch(courseActions.createCourse(course))
actions:bindActionCreators(courseActions, dispatch)
  };
}
// const connectedStateAndProps=connect(mapStateProps, mapDispatchProps);
// export default  connectedStateAndProps(Courses);
export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
