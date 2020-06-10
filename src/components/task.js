import React from 'react';
import 'antd/dist/antd.css';
import {List, Button, Input } from 'antd';

class Task extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            taskName: null,
            isAddingNewTask: false,
        }
    }

   toggleTask = () => {
        this.setState(prevState => ({
            ...prevState,
            isAddingNewTask: !prevState.isAddingNewTask,
        }));
   }

   onInputChange = (event) => {
       const value = event.target.value;
        this.setState(prevState => ({
            ...prevState,
            taskName: value,
        }));
    }

    addNewTask = () => {
        const { taskName} = this.state;
        const { addTask } = this.props;
        addTask({taskName});
        this.toggleTask();
    }

    render(){
        const { isAddingNewTask, taskName } = this.state;
        const { taskList } = this.props;
        return(
            <div>
                {
                    isAddingNewTask ?
                    <div>
                        <Input type = "text"  onChange = {this.onInputChange}></Input>
                        <Button type = "primary" onClick = {this.addNewTask}>OK</Button>
                    </div>
                    : <Button type = "primary" onClick = {this.toggleTask}>Add Task</Button>
                }
                <List
                    itemLayout="horizontal"
                    dataSource={taskList}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        title={item.taskName}
                        />
                    </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default Task;
