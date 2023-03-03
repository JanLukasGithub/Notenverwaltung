import React from "react";

export class Select extends React.PureComponent {
    render() {
        let myCSS;
        if (this.props.selectVisible) {
            if (this.props.selectAppearance) {
                myCSS = { visibility: "visible", appearance: "auto", textAlign: this.props.textAlign, fontWeight: this.props.fontWeight, color: this.props.color, minWidth: this.props.minWidth, maxWidth: this.props.maxWidth };
            }
            else {
                myCSS = { visibility: "visible", appearance: "none", backgroundColor: "inherit", border: "none", textAlign: this.props.textAlign, fontWeight: this.props.fontWeight, color: this.props.color, minWidth: this.props.minWidth, maxWidth: this.props.maxWidth };
            }
        }
        else {
            myCSS = { visibility: "hidden" };
        }
        const options = this.props.options.map((option, index) => {
            const key = "option" + index;
            return (
                <option key={key} value={option}>{this.props.optionsBeschriftung[index]}</option>
            )
        });
        if (!this.props.selectDisabled) {
            return (
                <select name={this.props.name} onChange={this.props.handleChange} value={this.props.value} style={myCSS}>
                    {options}
                </select>
            );
        }
        else {
            return (
                <select name={this.props.name} onChange={this.props.handleChange} value={this.props.value} style={myCSS} disabled>
                    {options}
                </select>
            );
        }
    }
}