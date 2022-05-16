import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback - form - state';

let formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(onFormInput, 500));

populateForm();

refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  // console.log(evt.target.name);
  // console.log(evt.target.value);
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData);
  if (parsedData) {
    refs.input.value = parsedData.email || '';
    refs.textarea.value = parsedData.message || '';
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const email = refs.form.elements.email.value;
  const message = refs.form.message.value;

  console.log({ email, message });
  // console.log('sending a form');
  // console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  // formData = {};
}

// ------
//  function  populateTextarea{
//   const savedMessage = localStorage.getItem(STORAGE_KEY);
//   if (savedMessage) {
//     refs.textarea.value = savedMessage;
//   }
// }
// -------

// refs.form.addEventListener('input', e => {
//   //   console.log(e.target.name);
//   //   console.log(e.target.value);
//   formData[e.target.name] = e.target.value;
//   console.log(formData);
// });
// -------
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
// function onTextareaInput(evt) {
//   const message = evt.target.value;
//   localStorage.setItem(STORAGE_KEY, message);
// }
