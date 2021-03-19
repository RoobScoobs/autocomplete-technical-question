import states from './states.js';

const createStateHashMap = (states) => {
    const list = new Map();

    for (const state of states) {
        const lowerCasedState = state.toLowerCase();
        list.set(lowerCasedState, undefined);
    }

    return list;
}

const inputListener = (states) => {
  const inputElement = document.querySelector("input");
  const listContainer = inputElement.nextElementSibling.firstElementChild;
  
  const statesList = createStateHashMap(states);
  
  inputElement.addEventListener("keyup", (event) => {
    const char = event.currentTarget.value.toLowerCase();

    for (const [state, listItem] of statesList) {

        if (listItem !== undefined) {
            listContainer.removeChild(listItem);
        }

        statesList.set(state, undefined);

        if (state.includes(char)) {
            const stateNode = document.createElement("li");
            stateNode.innerText = state;
            statesList.set(state, stateNode);
            listContainer.insertAdjacentElement('beforeEnd', stateNode);
        }
    }
  });
};

inputListener(states);
