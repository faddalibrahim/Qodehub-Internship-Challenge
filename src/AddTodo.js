import React, {Component} from 'react';

class AddTodo extends Component {
	state = {
		content:''
	}

	updateContent = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleForm = e => {
		e.preventDefault();
		this.props.addTodo(this.state);
		this.setState({
			content: ''
		})
	}


	render(){
		return(
			<>
				<form onSubmit={this.handleForm} autoComplete="off">
                    <h2>Add Todo</h2>
					<input type="text" id="content" onChange={this.updateContent} placeholder="task" value={this.state.content}/>
					<button>Add</button>
				</form>
			</>
		)
	}
}


export default AddTodo;