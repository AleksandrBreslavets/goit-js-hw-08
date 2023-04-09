import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");
const KEY_FORM_TO_SAVE = "feedback-form-state";
form.addEventListener("submit", onSubmit);
form.addEventListener("input", throttle(onInput, 500));
const savedFeedback = JSON.parse(localStorage.getItem(KEY_FORM_TO_SAVE));
let formData = savedFeedback ?? {};
updateForm();
function onSubmit(evt) {
    evt.preventDefault();
    console.log(formData);
    evt.currentTarget.reset();
    localStorage.removeItem(KEY_FORM_TO_SAVE);
    formData = {};
}
function onInput(evt) {
    currentElement = evt.target;
    formData[currentElement.name] = currentElement.value;
    localStorage.setItem(KEY_FORM_TO_SAVE, JSON.stringify(formData));
}
function updateForm() {
    const { email, message } = form.elements;
    email.value = formData.email ?? "";
    message.value = formData.message ?? "";
}

