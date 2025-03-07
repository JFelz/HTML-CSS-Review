import { submitBtn } from "./submitBtn.js";

export const loginForm = (arr) => {

const newMember = {
    name: document.querySelector('#name').value,
    email: document.querySelector('#email').value,
    phone: document.querySelector('#phone').value
};

const subBtn = document.querySelector('#submitBtn');
subBtn.addEventListener('click', (e) => {
    e.preventDefault;
    submitBtn(newMember, arr);
})

}
