import React, {Component} from 'react';

class Edit extends Component {

    componentDidMount(){
        console.log(typeof +this.props.match.params.todo_id)
    }


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

        let id = +this.props.match.params.todo_id
        
        this.props.editTodo(id, this.state.content);
      
    
		this.setState({
			content: ''
        })
    }
    
    goHome = () => {
          this.props.history.goBack();
    }


	render(){
		return(
			<div className="editForm fadeIn">
				<form onSubmit={this.handleForm} autoComplete="off">
                    <h2>Update Todo</h2>
					<input type="text" id="content" onChange={this.updateContent} placeholder="update task" value={this.state.content}/>
					<button>Update</button>
                    <i className="fas fa-times" onClick={this.goHome}></i>
                    <br></br>
                   
				</form>
			</div>
		)
	}
}


export default Edit;