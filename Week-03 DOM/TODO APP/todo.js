// function addTodo() {
//     const getEl = document.getElementById("input");
//     const newDiv = document.createElement("div");
//     newDiv.setAttribute("id" , ctr);

//     let cid = ctr;
//     ctr = ctr+1;
//     newDiv.innerHTML = `
//         <div> ${getEl.value} </div>
//         <button onclick="callDelete(${cid})" > delete </button>
//     `;

//     document.querySelector("body").appendChild(newDiv);
//     getEl.value = '';
// }

// let ctr =1;
// function callDelete(ind) {
//     let ele = document.getElementById(ind);
//     if(ele) {
//         ele.parentNode.removeChild(ele);
//     }
    
// }

let todos = [];
function addTodo() {
  todos.push({
    title: document.querySelector("input").value
  })
  render()
}

function deleteLastTodo() {
  todos.splice(todos.length - 1, 1) // remove the last element from the arr
  render()
}


function deleteFirstTodo() {
  todos.shift() // remove the last element from the arr
  render()
}


function createTodoComponent(todo) {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const button = document.createElement("button");
  button.innerHTML = "Delete"
  h1.innerHTML = todo.title;
  div.append(h1)
  div.append(button)
  return div
}

// react 
function render() {
  document.querySelector("#todos").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const element = createTodoComponent(todos[i]);
    document.querySelector("#todos").appendChild(element)
  }
}