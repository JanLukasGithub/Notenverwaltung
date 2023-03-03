import React from "react";

export class Input extends React.PureComponent {
    render() {
        let myCSS;
        if (this.props.inputVisible) {
            if (this.props.inputAppearance) {
                myCSS = { visibility: "visible", textAlign: this.props.textAlign, fontWeight: this.props.fontWeight, color: this.props.color, minWidth: this.props.minWidth, maxWidth: this.props.maxWidth };
            }
            else {
                myCSS = { visibility: "visible", backgroundColor: "inherit", border: "none", textAlign: this.props.textAlign, fontWeight: this.props.fontWeight, color: this.props.color, minWidth: this.props.minWidth, maxWidth: this.props.maxWidth };
            }
        }
        else {
            myCSS = { visibility: "hidden" };
        }
        if (!this.props.inputDisabled) {
            return (
                <input type="text" name={this.props.name} autoComplete="off" value={this.props.eingabewert} onChange={this.props.handleChange} style={myCSS} />
            );
        }
        else {
            return (
                <input type="text" name={this.props.name} autoComplete="off" value={this.props.eingabewert} onChange={this.props.handleChange} style={myCSS} disabled />
            );
        }
    }
}