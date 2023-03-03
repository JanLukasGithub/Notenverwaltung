import React from "react";

export class Checkbox extends React.PureComponent {
    render() {
        let myCSS;
        if (this.props.checkboxVisible) {
            myCSS = { visibility: "visible" };
        }
        else {
            myCSS = { visibility: "hidden" };
        }
        if (!this.props.checkboxDisabled) {
            return (
                <input type="checkbox" name={this.props.name} onChange={this.props.handleChange} checked={this.props.checked} style={myCSS} />
            );
        }
        else {
            return (
                <input type="checkbox" name={this.props.name} onChange={this.props.handleChange} checked={this.props.checked} style={myCSS} disabled />
            );
        }
    }
}