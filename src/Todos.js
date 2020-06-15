import React from 'react';
import {Link} from 'react-router-dom';

const Todos = ({todos, deleteTodo, editTodo}) => {

	const todoList = todos.length > 0 ? (
		todos.map(todo => {
            let editPath = "/" + todo.id;
			return(
				<div key={todo.id}>
						<p>{todo.content}</p>
						<button onClick={() => {
								deleteTodo(todo.id)
						} }><i className="fas fa-trash-alt"></i></button>
						{/* <button onClick={() => editTodo(todo.id)}>
							<i className="fas fa-pen"></i>
						</button> */}
                        <button>
                            <Link to={editPath}>
                                <i className="fas fa-pen"></i>
                            </Link>
						</button>
				</div>
			)
		
		})
	) : (
		<h3>There are no tasks left</h3>
	);

	
		
	return(
		<div className="todos">
				{todoList}
		</div>
	)
}

export default Todos;