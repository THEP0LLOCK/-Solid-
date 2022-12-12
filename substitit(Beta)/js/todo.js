const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

//li 엘리멘트 생성
function paintToDo(newTodo) {
  const li = document.createElement("li");

}

//toDo 입력 => newTodo
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
