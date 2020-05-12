import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { addTask} from '../actions/task';
import Task from '../components/task'

class TaskPage extends React.Component {

  render(){
    const { addTask, taskList } = this.props;
    return(
      <Task addTask={addTask} taskList={taskList}/>
    )
  }

}

const mapStateToProps = (state) => ({
  taskList: state.task.list,
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    addTask,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage)