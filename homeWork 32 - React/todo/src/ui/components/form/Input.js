import React, { useState } from "react";

const Input = () => {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <input
            type="text"
            name="value"
            required
            className="form__input"
            value={value}
            onChange={handleChange}
        />
    );
};

export default Input;
