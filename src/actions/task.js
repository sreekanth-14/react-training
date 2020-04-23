
const addNewTask = (task) => ({
    type: 'ADD_NEW_TASK',
    task,
})
export const addTask = (task) => dispatch => {
    dispatch(addNewTask(task));
}