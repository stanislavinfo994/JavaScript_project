import React from "react";

export default function Home() {
    return (
        <div>
            <h1>Головна сторінка</h1>
            <form>
                <label htmlFor="todo">ToDo:</label>
                <input type="text" id="todo" />
                <button type="submit">Додати</button>
            </form>
        </div>
    );
}
