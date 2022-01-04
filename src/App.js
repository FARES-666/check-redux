import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './Comp/TaskList';
import AddTask from './Comp/AddTask';
function App() {
  return (
    <div className="App">
      <h1> ToDo App </h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
