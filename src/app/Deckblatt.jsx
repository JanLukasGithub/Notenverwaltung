import React from "react";
import { Button } from "./Button";

export class Deckblatt extends React.PureComponent {
    render() {
        const styleTable = { borderCollapse: "collapse", width: "*", height: "*", tableLayout: "fixed", marginLeft: 65 };
        const styleTitel = { border: "1px double Black", width: "*", height: 140 };
        const styleBezeichner = { border: "1px double Black", borderRight: "1px solid White", width: 150, height: 70 };
        const styleInhalt = { border: "1px double Black", borderLeft: "1px solid White", width: 400, height: 70 };
        const styleDivTitel = { fontSize: "2.0em", fontWeight: "bold", textAlign: "center", verticalAlign: "middle", marginLeft: 0 };
        const styleDivBezeichner = { fontSize: "1.0em", fontWeight: "normal", textAlign: "left", verticalAlign: "middle", marginLeft: 20 };
        const styleDivInhalt = { fontSize: "1.2em", fontWeight: "normal", textAlign: "left", verticalAlign: "middle", marginLeft: 20 };
        return (
            <React.Fragment>
                <Button name={"Kursplan"} handleClick={this.props.handleClick} beschriftung={"Kursplan"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <table style={styleTable}>
                    <tbody>
                        <tr>
                            <td colSpan="2" style={styleTitel}><div style={styleDivTitel}>KURSMAPPE</div></td>
                        </tr>
                        <tr>
                            <td style={styleBezeichner}><div style={styleDivBezeichner}>Kurslehrer/in</div></td>
                            <td style={styleInhalt}><div style={styleDivInhalt}>{this.props.kurs.kurslehrer}</div></td>
                        </tr>
                        <tr>
                            <td style={styleBezeichner}><div style={styleDivBezeichner}>Fach</div></td>
                            <td style={styleInhalt}><div style={styleDivInhalt}>{this.props.kurs.fach}</div></td>
                        </tr>
                        <tr>
                            <td style={styleBezeichner}><div style={styleDivBezeichner}>Kursart</div></td>
                            <td style={styleInhalt}><div style={styleDivInhalt}>{this.props.kurs.kursart}</div></td>
                        </tr>
                        <tr>
                            <td style={styleBezeichner}><div style={styleDivBezeichner}>Kursnummer</div></td>
                            <td style={styleInhalt}><div style={styleDivInhalt}>{this.props.kurs.kursnummer}</div></td>
                        </tr>
                        <tr>
                            <td style={styleBezeichner}><div style={styleDivBezeichner}>Jahrgangsstufe</div></td>
                            <td style={styleInhalt}><div style={styleDivInhalt}>{this.props.kurs.jahrgangsstufe}</div></td>
                        </tr>
                        <tr>
                            <td style={styleBezeichner}><div style={styleDivBezeichner}>Schuljahr</div></td>
                            <td style={styleInhalt}><div style={styleDivInhalt}>{this.props.kurs.schuljahr}</div></td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}