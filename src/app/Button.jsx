import React from "react";
import "./Button.css";

export class Button extends React.PureComponent {
    render() {
        let myCSS;
        if (this.props.buttonVisible) {
            if (this.props.buttonAppearance) {
                myCSS = { WebkitAppearance: "none", visibility: "visible", minWidth: this.props.minWidth, minHeight: this.props.minHeight, margin: 6 };
            }
            else {
                myCSS = { WebkitAppearance: "none", visibility: "visible", backgroundColor: "inherit", border: "none", minWidth: this.props.minWidth, minHeight: this.props.minHeight, margin: 6 };
            }
        }
        else {
            myCSS = { WebkitAppearance: "none", visibility: "hidden", minWidth: this.props.minWidth, minHeight: this.props.minHeight, margin: 6 };
        }
        if (!this.props.buttonDisabled) {
            if (this.props.buttonRot) {
                return (
                    <button name={this.props.name} onClick={this.props.handleClick} style={myCSS} className="buttonRot">{this.props.beschriftung}</button>
                );
            }
            else {
                return (
                    <button name={this.props.name} onClick={this.props.handleClick} style={myCSS} className="button">{this.props.beschriftung}</button>
                );
            }
        }
        else {
            return (
                <button name={this.props.name} onClick={this.props.handleClick} style={myCSS} className="buttonDisabled" disabled>{this.props.beschriftung}</button>
            );
        }
    }
}