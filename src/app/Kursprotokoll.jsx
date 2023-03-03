import React from "react";
import "./Kursprotokoll.css";
import { Button } from "./Button";

export class Kursprotokoll extends React.PureComponent {
    componentDidMount() {
        for (let i = 0; i < this.props.kurs.unterricht[this.props.quartal - 1].length; i++) {
            document.getElementById("Textarea " + i.toString()).style.height = "2px";
            document.getElementById("Textarea " + i.toString()).style.height = document.getElementById("Textarea " + i.toString()).scrollHeight + "px";
        }
        this.forceUpdate();
    }

    componentDidUpdate() {
        for (let i = 0; i < this.props.kurs.unterricht[this.props.quartal - 1].length; i++) {
            document.getElementById("Textarea " + i.toString()).style.height = "2px";
            document.getElementById("Textarea " + i.toString()).style.height = document.getElementById("Textarea " + i.toString()).scrollHeight + "px";
        }
    }

    render() {
        const styleTable = { borderCollapse: "collapse", width: "*", height: "*", tableLayout: "fixed" };
        const myCSSDatum1 = { border: "none", backgroundColor: "white", visibility: "visible", textAlign: "left", fontFamily: "inherit", fontSize: "80%", fontWeight: "normal", color: "black", minWidth: 36, maxWidth: 36 };
        const myCSSDatum2 = { border: "none", backgroundColor: "lightgray", visibility: "visible", textAlign: "left", fontFamily: "inherit", fontSize: "80%", fontWeight: "normal", color: "black", minWidth: 36, maxWidth: 36 };
        const myCSSStundenthema1 = { border: "none", backgroundColor: "white", visibility: "visible", textAlign: "left", fontFamily: "inherit", fontSize: "80%", fontWeight: "normal", color: "black", minWidth: 220, maxWidth: 220 };
        const myCSSStundenthema2 = { border: "none", backgroundColor: "lightgray", visibility: "visible", textAlign: "left", fontFamily: "inherit", fontSize: "80%", fontWeight: "normal", color: "black", minWidth: 220, maxWidth: 220 };
        const myCSSStundeninhalt1 = { border: "none", backgroundColor: "white", whiteSpace: "pre", overflow: "hidden", visibility: "visible", textAlign: "left", fontFamily: "inherit", fontSize: "80%", fontWeight: "normal", color: "black", resize: "none", minWidth: 650, maxWidth: 650 };
        const myCSSStundeninhalt2 = { border: "none", backgroundColor: "lightgray", whiteSpace: "pre", overflow: "hidden", visibility: "visible", textAlign: "left", fontFamily: "inherit", fontSize: "80%", fontWeight: "normal", color: "black", resize: "none", minWidth: 650, maxWidth: 650 };
        const myCSSHausaufgabe1 = { border: "none", backgroundColor: "white", visibility: "visible", textAlign: "left", fontFamily: "inherit", fontSize: "80%", fontWeight: "normal", color: "black", minWidth: 220, maxWidth: 220 };
        const myCSSHausaufgabe2 = { border: "none", backgroundColor: "lightgray", visibility: "visible", textAlign: "left", fontFamily: "inherit", fontSize: "80%", fontWeight: "normal", color: "black", minWidth: 220, maxWidth: 220 };
        let zeilen = [];
        for (let i = 0; i < this.props.kurs.unterricht[this.props.quartal - 1].length; i++) {
            const key = "zeilen" + i;
            if (i % 2 === 0) {
                zeilen.push(
                    <tr key={key} className="grauerHintergrundKursprotokoll">
                        <td valign={"middle"} align={"left"}><input id={"Input1 " + i.toString()} type="text" name={"1Datum Eingabe " + i.toString()} autoCapitalize="none" autoComplete="off" value={this.props.kurs.unterricht[this.props.quartal - 1][i].datum} onChange={this.props.handleChange} style={myCSSDatum2} /></td>
                        <td valign={"middle"} align={"left"}><input id={"Input2 " + i.toString()} type="text" name={"1Stundenthema Eingabe " + i.toString()} autoCapitalize="none" autoComplete="off" value={this.props.kurs.unterricht[this.props.quartal - 1][i].stundenthema} onChange={this.props.handleChange} style={myCSSStundenthema2} /></td>
                        <td valign={"middle"} align={"left"}><textarea id={"Textarea " + i.toString()} name={"1Stundeninhalt Eingabe " + i.toString()} autoCapitalize="none" autoComplete="off" value={this.props.kurs.unterricht[this.props.quartal - 1][i].stundeninhalt} onChange={this.props.handleChange} style={myCSSStundeninhalt2} /></td>
                        <td valign={"middle"} align={"left"}><input id={"Input3 " + i.toString()} type="text" name={"1Hausaufgabe Eingabe " + i.toString()} autoCapitalize="none" autoComplete="off" value={this.props.kurs.unterricht[this.props.quartal - 1][i].hausaufgabe} onChange={this.props.handleChange} style={myCSSHausaufgabe2} /></td>
                    </tr>
                );
            }
            else {
                zeilen.push(
                    <tr key={key} className="grauerHintergrundKursprotokoll">
                        <td valign={"middle"} align={"left"}><input id={"Input1 " + i.toString()} type="text" name={"1Datum Eingabe " + i.toString()} autoCapitalize="none" autoComplete="off" value={this.props.kurs.unterricht[this.props.quartal - 1][i].datum} onChange={this.props.handleChange} style={myCSSDatum1} /></td>
                        <td valign={"middle"} align={"left"}><input id={"Input2 " + i.toString()} type="text" name={"1Stundenthema Eingabe " + i.toString()} autoCapitalize="none" autoComplete="off" value={this.props.kurs.unterricht[this.props.quartal - 1][i].stundenthema} onChange={this.props.handleChange} style={myCSSStundenthema1} /></td>
                        <td valign={"middle"} align={"left"}><textarea id={"Textarea " + i.toString()} name={"1Stundeninhalt Eingabe " + i.toString()} autoCapitalize="none" autoComplete="off" value={this.props.kurs.unterricht[this.props.quartal - 1][i].stundeninhalt} onChange={this.props.handleChange} style={myCSSStundeninhalt1} /></td>
                        <td valign={"middle"} align={"left"}><input id={"Input3 " + i.toString()} type="text" name={"1Hausaufgabe Eingabe " + i.toString()} autoCapitalize="none" autoComplete="off" value={this.props.kurs.unterricht[this.props.quartal - 1][i].hausaufgabe} onChange={this.props.handleChange} style={myCSSHausaufgabe1} /></td>
                    </tr>
                );
            }
            if (i === this.props.kurs.unterricht[this.props.quartal - 1].length - 1 && i === 0) {
                zeilen.push(
                    <tr key={key + "x1"}>
                        <td colSpan={4}>&nbsp;</td>
                    </tr>
                );
                zeilen.push(
                    <tr key={key + "x2"}>
                        <td colSpan={4}>&nbsp;</td>
                    </tr>
                );
                zeilen.push(
                    <tr key={key + "x3"}>
                        <td colSpan={4}>&nbsp;</td>
                    </tr>
                );
            }
            else if (i === this.props.kurs.unterricht[this.props.quartal - 1].length - 1 && i === 1) {
                zeilen.push(
                    <tr key={key + "x1"}>
                        <td colSpan={4}>&nbsp;</td>
                    </tr>
                );
                zeilen.push(
                    <tr key={key + "x2"}>
                        <td colSpan={4}>&nbsp;</td>
                    </tr>
                );
            }
            else if (i === this.props.kurs.unterricht[this.props.quartal - 1].length - 1 && i === 2) {
                zeilen.push(
                    <tr key={key + "x1"}>
                        <td colSpan={4}>&nbsp;</td>
                    </tr>
                );
            }
        }
        return (
            <table style={styleTable}>
                <tbody>
                    <tr className="grauerHintergrundKursprotokoll">
                        <td rowSpan={100} valign={"top"} align={"left"}>
                            <Button name={"Kursplan"} handleClick={this.props.handleClick} beschriftung={"Kursplan"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                            <br />
                            <Button name={"Quartal"} handleClick={this.props.handleClick} beschriftung={this.props.quartal.toString() + ". Quartal"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                        </td>
                        <td valign={"top"} align={"center"}>Datum</td>
                        <td valign={"top"} align={"center"}>Stundenthema</td>
                        <td valign={"top"} align={"center"}>Stundeninhalte</td>
                        <td valign={"top"} align={"center"}>Hausaufgabe</td>
                    </tr>
                    {zeilen}
                </tbody>
            </table>
        );
    }
}