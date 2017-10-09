import EventEmitter from 'events';
import assign from 'object-assign';
import uuid from 'uuid';
import AppDispatcher from '../dispatcher/AppDispatcher'

const TodoStore = assign({}, EventEmitter.prototype, {
  todos: [{ id: uuid.v4(), content: 'first one' }, { id: uuid.v4(), content: '2nd one' }],
  getAll() {
    return this.todos;
  },
  addTodo(todo) {
    this.todos.push(todo);
  },
  deleteTodo(id) {
    this.todos = this.todos.filter(t => t.id !== id);
  },
  emitChange() {
    this.emit('change');
  },
  addChangeListener(callback) {
    this.on('change', callback);
  },
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
});

AppDispatcher.register((action) => {
  switch (action.actionType) {
    case 'CREATE_TODO':
      TodoStore.addTodo(action.todo);
      TodoStore.emitChange();
      break;
    case 'DELETE_TODO':
      TodoStore.deleteTodo(action.id);
      TodoStore.emitChange();
      break;
    default:
    //  nothing to do here

  }
});
export default TodoStore;
