function UserTable({ form, content, userInfo, addButton }) {
    this.init = function () {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addUser(
                form.elements['name'].value,
                form.elements['phone'].value,
                form.elements['age'].value
            )
        })
        addButton.addEventListener('click', function () {
            form.reset();
            form.classList.add('open');
        })
        this.loadUsers();
    }
    this.addUser = function (name, phone, age) {
        const user = {
            id: Math.floor(Math.random() * 100),
            name,
            phone,
            age,
        }
        this.userTemplate(user);
        form.reset();
        form.classList.remove('open');
        const currentUsers = JSON.parse(localStorage.getItem('users')) || [];
        currentUsers.push(user);
        localStorage.setItem('users', JSON.stringify(currentUsers));
    }
    this.loadUsers = function () {
        const users = JSON.parse(localStorage.getItem('users'));
        if (users) {
            users.forEach(user => this.userTemplate(user))
        }
    }
    this.userTemplate = function (user) {
        content.insertAdjacentHTML('beforeend', (
            `<tr>`+
                `<td>${user.id}</td>`+
                `<td>${user.name}</td>`+
                `<td>${user.phone}</td>`+
                `<td>${user.age}</td>`+
                `<td><button class="btn btn-primary">View</button><button class="btn btn-primary">Edit</button><button data-id="${user.id}" class="btn btn-primary">Delete</button></td>`+
            `</tr>`
        ))
        const deleteButton = content.querySelector(`[data-id="${user.id}"]`);
        deleteButton.addEventListener('click', () => {
            this.deleteUser(user.id);
            deleteButton.closest('tr').remove();
        });
    }
    this.deleteUser = function (id) {
        let currentUsers = JSON.parse(localStorage.getItem('users')) || [];
        currentUsers = currentUsers.filter(user => user.id !== id);
        localStorage.setItem('users', JSON.stringify(currentUsers));
    }
}

(new UserTable({
    form: document.querySelector('.js--form'),
    userInfo: document.querySelector('.js--user'),
    addButton: document.querySelector('.js--add'),
    content: document.querySelector('.js--content'),
})).init();
