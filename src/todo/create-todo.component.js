import _ from 'lodash';
import React from 'react';


class CreateTodo extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         error: null
      };
   }

   validateInput(createInput){
      if(!createInput){
         return 'Please enter a task.'
      } else if(_.find(this.props.todos, todo => todo.task === createInput)){
         return 'Task already exists';
      } else {
         return null;
      }
   }

   handleCreate(event){
      event.preventDefault();

      const createInput = this.refs.createInput.value;
      const validateInput = this.validateInput(createInput);

      if(validateInput){
         this.setState({ error: validateInput });
         return;
      }
      this.setState({ error: null });  // to reset state to null

      if(createInput){
         this.props.createTask(createInput);
         this.refs.createInput.value = '';
      }
   }

   renderError(){
      if(!this.state.error){ return null; }

      return <div style={{ fontSize: 12, color: 'red' }}>{this.state.error}</div>;
   }

   render(){
      return(
         <form onSubmit={this.handleCreate.bind(this)}>
            <input type="text" placeholder="What do I need to do?" ref="createInput" />
            <button>Create</button>
            {this.renderError()}
         </form>
      )
   }
}

export default CreateTodo;