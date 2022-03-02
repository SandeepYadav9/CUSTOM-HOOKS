import  './TaskItem.css';

const TaskItem = (props) => {
  return <li className="task">{props.children}</li>
};

export default TaskItem;