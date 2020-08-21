import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    return (
      <div>
        <TodoItem text="안녕" />
        <TodoItem text="테스트" />
        <TodoItem text="테스트 02" />
      </div>
    );
  }
}

export default TodoItemList;