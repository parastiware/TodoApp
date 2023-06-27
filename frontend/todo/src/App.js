import logo from './logo.svg';
import './App.css';
import AddTodo from './AddTodo';
import FilterTodos from './FilterTodos';
import TodoList from './TodoList';

function App() {
  return (
    <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card" id="list1" style={{borderRadius: .75+'rem', backGroundColor: "#eff1f2"}}>
            <div class="card-body py-4 px-4 px-md-5">
  
              <p class="h1 text-center mt-3 mb-4 pb-3 text-primary">
                <i class="fas fa-check-square me-1"></i>
                <u>My Todo-s</u>
              </p>
  
              <AddTodo></AddTodo>
  
              <hr class="my-4"/>
  
              <FilterTodos></FilterTodos>
  
              <TodoList></TodoList>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default App;
