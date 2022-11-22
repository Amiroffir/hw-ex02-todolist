import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { ToDoList } from "./comps/todoList/todoList.component";

function App() {
  return (
    <div className="app">
      <ToDoList />
    </div>
  );
}

export default App;
