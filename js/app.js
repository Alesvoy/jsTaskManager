const App = (() => {
  // Caching the DOM
  const inputEl = document.querySelector("input");
  const ulEl = document.querySelector(".task__list");
  const removeBtn = document.querySelector(".complete");

  const eventListeners = () => {
    inputEl.addEventListener("keypress", (e) => {
      if (e.keyCode === 13) {
        render();
        inputEl.value = "";
      }
    });
  };

  const render = () => {
    ulEl.innerHTML += `
      <li class="task__item">
        ${inputEl.value} <button class="complete">Complete</button>
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
