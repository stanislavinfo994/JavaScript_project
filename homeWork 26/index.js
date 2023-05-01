class FormElement {
    constructor(name, label) {
        this.name = name;
        this.label = label;
    }

    render() {
        const container = document.createElement('div');
        container.classList.add('form-element');

        const labelEl = document.createElement('label');
        labelEl.innerText = this.label;
        labelEl.setAttribute('for', this.name);

        const inputEl = document.createElement('input');
        inputEl.setAttribute('name', this.name);

        container.appendChild(labelEl);
        container.appendChild(inputEl);

        return container;
    }
}

class TextElement extends FormElement {
    constructor(name, label, placeholder) {
        super(name, label);
        this.placeholder = placeholder;
    }

    render() {
        const container = super.render();
        const inputEl = container.querySelector('input');

        inputEl.setAttribute('type', 'text');
        inputEl.setAttribute('placeholder', this.placeholder);

        return container;
    }
}

class CheckboxElement extends FormElement {
    constructor(name, label, checked) {
        super(name, label);
        this.checked = checked;
    }

    render() {
        const container = super.render();
        const inputEl = container.querySelector('input');

        inputEl.setAttribute('type', 'checkbox');
        inputEl.checked = this.checked;

        return container;
    }
}

class ButtonElement extends FormElement {
    render() {
        const buttonEl = document.createElement('button');
        buttonEl.innerText = this.label;

        return buttonEl;
    }
}

const form = document.createElement('form');
form.addEventListener('submit', handleSubmit);

const firstName = new TextElement('your name', '', 'Your Name');
form.appendChild(firstName.render());

const email = new TextElement('email', '', 'Your Email');
form.appendChild(email.render());

const password = new TextElement('password', '', 'Password');
form.appendChild(password.render());

const repeatPassword = new TextElement('repeatPassword', '', 'Repeat your password');
form.appendChild(repeatPassword.render());

const newsletter = new CheckboxElement('newsletter', 'I agree all statements in Terms of service', true);
form.appendChild(newsletter.render());

const registerButton = new ButtonElement('registerButton', 'REGISTER');
form.appendChild(registerButton.render());

function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};

    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }

    console.log(data);
}

document.body.appendChild(form);
