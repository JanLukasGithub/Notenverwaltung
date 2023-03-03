import React from "react";
import "./Button.css";

export class Eingabeformulardatum extends React.PureComponent {
    componentDidMount() {
        document.getElementById("Textarea").style.height = "2px";
        document.getElementById("Textarea").style.height = document.getElementById("Textarea").scrollHeight + "px";
    }

    componentDidUpdate() {
        document.getElementById("Textarea").style.height = "2px";
        document.getElementById("Textarea").style.height = document.getElementById("Textarea").scrollHeight + "px";
    }

    render() {
        const myCSSDatum = { visibility: "visible", textAlign: "left", fontFamily: "inherit", fontSize: "80%", fontWeight: "normal", color: "black", minWidth: 36, maxWidth: 36 };
        const myCSSStundenthema = { visibility: "visible", textAlign: "left", fontFamily: "inherit", fontSize: "80%", fontWeight: "normal", color: "black", minWidth: 220, maxWidth: 220 };
        const myCSSStundeninhalt = { whiteSpace: "pre", overflow: "hidden", visibility: "visible", textAlign: "left", fontFamily: "inherit", fontSize: "80%", fontWeight: "normal", color: "black", resize: "none", minWidth: 800, maxWidth: 800 };
        const myCSSHausaufgabe = { visibility: "visible", textAlign: "left", fontFamily: "inherit", fontSize: "80%", fontWeight: "normal", color: "black", minWidth: 220, maxWidth: 220 };
        const myCSSButton = { WebkitAppearance: "none", visibility: "visible", minWidth: 184, minHeight: 40, margin: 24 };
        return (
            <form name={this.props.nameSubmit} onSubmit={this.props.handleSubmit}>
                Datum
                <br />
                <input type="text" name={this.props.nameInputDatum} autoCapitalize="none" autoComplete="off" autoFocus={this.props.focus === "Datum"} value={this.props.eingabewert} onChange={this.props.handleChange} style={myCSSDatum} />
                <br />
                <br />
                Stundenthema
                <br />
                <input type="text" name={this.props.nameInputStundenthema} autoCapitalize="none" autoComplete="off" autoFocus={this.props.focus === "Stundenthema"} value={this.props.eingabewert2} onChange={this.props.handleChange} style={myCSSStundenthema} />
                <br />
                <br />
                Stundeninhalte
                <br />
                <textarea id="Textarea" name={this.props.nameInputStundeninhalt} autoCapitalize="none" autoComplete="off" autoFocus={this.props.focus === "Stundeninhalt"} value={this.props.eingabewert3} onChange={this.props.handleChange} style={myCSSStundeninhalt} />
                <br />
                <br />
                Hausaufgabe
                <br />
                <input type="text" name={this.props.nameInputHausaufgabe} autoCapitalize="none" autoComplete="off" autoFocus={this.props.focus === "Hausaufgabe"} value={this.props.eingabewert4} onChange={this.props.handleChange} style={myCSSHausaufgabe} />
                <br />
                <button type="submit" style={myCSSButton} className="button">OK</button>
            </form>
        );
    }
}