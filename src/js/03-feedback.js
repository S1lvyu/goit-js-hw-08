import throttle from 'lodash.throttle';

const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');
const submitBtn = document.querySelector('button');
const feedbackFormState = {};

function getEmail(event) {
  feedbackFormState.email = event.target.value;
  updateLocalStorage();
}
const throttledGetEmail = throttle(getEmail, 500, {
  leading: false,
  trailing: true,
});

function getMessage(event) {
  feedbackFormState.message = event.target.value;
  updateLocalStorage();
}
const throttledGetMessage = throttle(getMessage, 500, {
  leading: false,
  trailing: true,
});

function updateLocalStorage() {
  const feedbackFormStateJSON = JSON.stringify(feedbackFormState);
  localStorage.setItem('feedback-form-state', feedbackFormStateJSON);
}

function loadFromStorage() {
  event.preventDefault();
  const itemFromStorage = localStorage.getItem('feedback-form-state');
  const itemParsed = JSON.parse(itemFromStorage);
  console.log(itemParsed);
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
}

function reloadFromStorage() {
  const itemFromStorage = localStorage.getItem('feedback-form-state');
  const itemParsed = JSON.parse(itemFromStorage);
  if (itemParsed) {
    emailInput.value = itemParsed.email;
    messageInput.value = itemParsed.message;
  }
}
emailInput.addEventListener('input', throttledGetEmail);
messageInput.addEventListener('input', throttledGetMessage);
submitBtn.addEventListener('click', loadFromStorage);
reloadFromStorage();
