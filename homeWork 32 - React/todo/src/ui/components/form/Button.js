import React from "react";
import cx from "classnames";

export default class Button extends React.Component {
    render() {
        const { text, customClass, onClick } = this.props;
        const className = cx(
            'form__btn',
            {
                [customClass]: customClass,
                // 'string': Boolean(JS)
            }
        )
        return (
            <button className={className} onClick={onClick}>{text}</button>
        )
    }
}
