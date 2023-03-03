import React from "react";
import "./Button.css";

export class Eingabeformularpasswort extends React.PureComponent {
    render() {
        const myCSSInput = { visibility: "visible", textAlign: "left", fontWeight: "normal", color: "black", minWidth: 204, maxWidth: 204 };
        const myCSSButton = { WebkitAppearance: "none", visibility: "visible", minWidth: 184, minHeight: 40, margin: 20 };
        return (
            <form name={this.props.nameSubmit} onSubmit={this.props.handleSubmit}>
                Altes Passwort: <input type="password" name={this.props.nameInput} autoCapitalize="none" autoComplete="off" autoFocus value={this.props.eingabewert} onChange={this.props.handleChange} style={myCSSInput} />
                <br />
                <br />
                Neues Passwort: <input type="password" name={this.props.nameInput2} autoCapitalize="none" autoComplete="off" value={this.props.eingabewert2} onChange={this.props.handleChange} style={myCSSInput} />
                <br />
                <br />
                Neues Passwort: <input type="password" name={this.props.nameInput3} autoCapitalize="none" autoComplete="off" value={this.props.eingabewert3} onChange={this.props.handleChange} style={myCSSInput} />
                <br />
                <br />
                <button type="submit" style={myCSSButton} className="button">OK</button>
            </form>
        );
    }
}