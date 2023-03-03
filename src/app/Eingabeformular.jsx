import React from "react";
import "./Button.css";

export class Eingabeformular extends React.PureComponent {
    render() {
        const myCSSInput = { visibility: "visible", textAlign: "left", fontWeight: "normal", color: "black", minWidth: 204, maxWidth: 204 };
        const myCSSButton = { WebkitAppearance: "none", visibility: "visible", minWidth: 184, minHeight: 40, margin: 20 };
        if (this.props.nameInput.substring(0, 8) === "Passwort") {
            return (
                <form name={this.props.nameSubmit} onSubmit={this.props.handleSubmit}>
                    <input type="password" name={this.props.nameInput} autoCapitalize="none" autoComplete="off" autoFocus value={this.props.eingabewert} onChange={this.props.handleChange} style={myCSSInput} />
                    <br />
                    <button type="submit" style={myCSSButton} className="button">OK</button>
                </form>
            );
        }
        else {
            return (
                <form name={this.props.nameSubmit} onSubmit={this.props.handleSubmit}>
                    <input type="text" name={this.props.nameInput} autoCapitalize="none" autoComplete="off" autoFocus value={this.props.eingabewert} onChange={this.props.handleChange} style={myCSSInput} />
                    <br />
                    <button type="submit" style={myCSSButton} className="button">OK</button>
                </form>
            );
        }
    }
}