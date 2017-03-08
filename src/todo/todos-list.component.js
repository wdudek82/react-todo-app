import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header.component';
import TodoListItem from './todos-list-item.component';


class TodosList extends React.Component {
  renderItems(){
     const props = _.omit(this.props, 'todos');

     return _.map(this.props.todos, (todo, index) =>
        <TodoListItem key={index} {...todo} {...props} />);
  }

  render(){
    console.log(this.props);

    return (
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    )
  }
}

export default TodosList;