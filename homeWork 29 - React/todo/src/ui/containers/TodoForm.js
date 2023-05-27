import React from "react";
import '../../main.css';
// Parts
import Input from "../components/form/Input";
import Button from "../components/form/Button";

class TodoForm extends React.Component {
    render() {
        const { handleAdd } = this.props;
        return (
            <form
                className="form"
                onSubmit={handleAdd}
            >
                <Input />
                <Button text="Додати" />
            </form>
        );
    }
}

export default TodoForm;
