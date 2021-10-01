const App = (() => {
  // Caching the DOM
  const inputEl = document.querySelector("input");
  const ulEl = document.querySelector(".task__list");

  const eventListeners = () => {
    inputEl.addEventListener("keypress", (e) => {
      if (e.keyCode === 13) {
        render();
        addTaskFunctionality();
        inputEl.value = "";
      }
    });
  };

  const addTaskFunctionality = () => {
    const tasks = ulEl.children;
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].addEventListener("click", (e) => {
        // console.log(e.target.className);
        if (e.target.className == "remove") {
          tasks[i].remove();
        } else {
          tasks[i].classList.toggle("done");
        }
      });
    }
  };

  const render = () => {
    ulEl.innerHTML += `
      <li class="task__item">
        ${inputEl.value} <button class="remove">Complete</button>
      </li>`;
  };

  const init = () => {
    eventListeners();
  };

  return {
    init: init,
  };
})();

App.init();
