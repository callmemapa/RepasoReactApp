import React, {Fragment} from 'react';
import Task from './Task'

function TaskList(props) {
    return (
        <Fragment>
            {props.tasks.map((task,id) =>
                <Task  
                    key={id}
                    handleDelete={props.handleDelete}
                    value={task}
                />
            )}
        </Fragment>
    )
}

export default TaskList;