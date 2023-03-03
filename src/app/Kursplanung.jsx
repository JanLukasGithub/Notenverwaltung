import React from "react";
import { Button } from "./Button";

export class Kursplanung extends React.PureComponent {
    render() {
        const styleTable = { borderCollapse: "collapse", width: "*", height: "*", tableLayout: "fixed", marginLeft: 0 };
        const styleTitel = { borderBottom: "1px double Black", width: "*", height: 30 };
        const styleTermine1 = { borderTop: "1px double Black", borderLeft: "1px double Black", width: 52, height: 20 };
        const styleKursabschnitt1 = { borderTop: "1px double Black", minwidth: 112, height: 20 };
        const styleDatum11 = { borderTop: "1px double Black", width: 66, height: 20 };
        const styleBis1 = { borderTop: "1px double Black", width: 19, height: 20 };
        const styleDatum12 = { borderTop: "1px double Black", borderRight: "1px double Black", width: "*", height: 20 };
        const styleTermine2 = { borderBottom: "1px double Black", borderLeft: "1px double Black", width: 52, height: 20 };
        const styleKursabschnitt2 = { borderBottom: "1px double Black", minwidth: 112, height: 20 };
        const styleDatum21 = { borderBottom: "1px double Black", width: 66, height: 20 };
        const styleBis2 = { borderBottom: "1px double Black", width: 19, height: 20 };
        const styleDatum22 = { borderBottom: "1px double Black", borderRight: "1px double Black", width: "*", height: 20 };
        const styleBezeichner = { borderTop: "1px double Black", borderLeft: "1px double Black", borderRight: "1px double Black", width: "*", height: 20 };
        const styleInhalt = { borderBottom: "1px double Black", borderLeft: "1px double Black", borderRight: "1px double Black", width: 340, height: 265 };
        const styleTextarea = { WebkitAppearance: "none", resize: "none", border: "none", fontSize: "0.81em", fontWeight: "normal", width: 318, height: 250 };
        const styleTextareaAufgabenstellung = { WebkitAppearance: "none", resize: "none", border: "none", fontSize: "0.81em", fontWeight: "normal", width: 318, height: 34 };
        const styleDivTitel = { fontSize: "1.0em", fontWeight: "bold", marginLeft: 0 };
        const styleDivBezeichner = { fontSize: "0.8em", fontWeight: "normal", marginLeft: 10 };
        const styleDivBezeichnerKursabschnitt = { fontSize: "0.8em", fontWeight: "normal", marginLeft: 0 };
        const styleDivInhalt = { marginBottom: 5, marginLeft: 10 };
        let datum11;
        let datum12;
        let datum21;
        let datum22;
        let datum31;
        let datum32;
        let datum41;
        let datum42;
        if (this.props.kurs.unterricht[0].length < 2) {
            datum11 = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
            datum12 = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
        }
        else {
            datum11 = this.props.kurs.unterricht[0][0].datum + this.props.kurs.schuljahr.substring(0, 4);
            if (this.props.kurs.unterricht[0][this.props.kurs.unterricht[0].length - 1].datum.search(".8.") > -1 || this.props.kurs.unterricht[0][this.props.kurs.unterricht[0].length - 1].datum.search(".08.") > -1 || this.props.kurs.unterricht[0][this.props.kurs.unterricht[0].length - 1].datum.search(".9.") > -1 || this.props.kurs.unterricht[0][this.props.kurs.unterricht[0].length - 1].datum.search(".09.") > -1 || this.props.kurs.unterricht[0][this.props.kurs.unterricht[0].length - 1].datum.search(".10.") > -1 || this.props.kurs.unterricht[0][this.props.kurs.unterricht[0].length - 1].datum.search(".11.") > -1 || this.props.kurs.unterricht[0][this.props.kurs.unterricht[0].length - 1].datum.search(".12.") > -1) {
                datum12 = this.props.kurs.unterricht[0][this.props.kurs.unterricht[0].length - 1].datum + this.props.kurs.schuljahr.substring(0, 4);
            }
            else {
                datum12 = this.props.kurs.unterricht[0][this.props.kurs.unterricht[0].length - 1].datum + this.props.kurs.schuljahr.substring(0, 2) + this.props.kurs.schuljahr.substring(5, 7);
            }
        }
        if (this.props.kurs.unterricht[1].length < 2) {
            datum21 = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
            datum22 = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
        }
        else {
            datum21 = this.props.kurs.unterricht[1][0].datum + this.props.kurs.schuljahr.substring(0, 4);
            if (this.props.kurs.unterricht[1][this.props.kurs.unterricht[1].length - 1].datum.search(".8.") > -1 || this.props.kurs.unterricht[1][this.props.kurs.unterricht[1].length - 1].datum.search(".08.") > -1 || this.props.kurs.unterricht[1][this.props.kurs.unterricht[1].length - 1].datum.search(".9.") > -1 || this.props.kurs.unterricht[1][this.props.kurs.unterricht[1].length - 1].datum.search(".09.") > -1 || this.props.kurs.unterricht[1][this.props.kurs.unterricht[1].length - 1].datum.search(".10.") > -1 || this.props.kurs.unterricht[1][this.props.kurs.unterricht[1].length - 1].datum.search(".11.") > -1 || this.props.kurs.unterricht[1][this.props.kurs.unterricht[1].length - 1].datum.search(".12.") > -1) {
                datum22 = this.props.kurs.unterricht[1][this.props.kurs.unterricht[1].length - 1].datum + this.props.kurs.schuljahr.substring(0, 4);
            }
            else {
                datum22 = this.props.kurs.unterricht[1][this.props.kurs.unterricht[1].length - 1].datum + this.props.kurs.schuljahr.substring(0, 2) + this.props.kurs.schuljahr.substring(5, 7);
            }
        }
        if (this.props.kurs.unterricht[2].length < 2) {
            datum31 = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
            datum32 = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
        }
        else {
            datum31 = this.props.kurs.unterricht[2][0].datum + this.props.kurs.schuljahr.substring(0, 2) + this.props.kurs.schuljahr.substring(5, 7);
            datum32 = this.props.kurs.unterricht[2][this.props.kurs.unterricht[2].length - 1].datum + this.props.kurs.schuljahr.substring(0, 2) + this.props.kurs.schuljahr.substring(5, 7);
        }
        if (this.props.kurs.unterricht[3].length < 2) {
            datum41 = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
            datum42 = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
        }
        else {
            datum41 = this.props.kurs.unterricht[3][0].datum + this.props.kurs.schuljahr.substring(0, 2) + this.props.kurs.schuljahr.substring(5, 7);
            datum42 = this.props.kurs.unterricht[3][this.props.kurs.unterricht[3].length - 1].datum + this.props.kurs.schuljahr.substring(0, 2) + this.props.kurs.schuljahr.substring(5, 7);
        }
        return (
            <React.Fragment>
                <Button name={"Kursplan"} handleClick={this.props.handleClick} beschriftung={"Kursplan"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                <br />
                <table style={styleTable}>
                    <tbody>
                        <tr>
                            <td colSpan="5" style={styleTitel}><div style={styleDivTitel}>KURSPLANUNG&nbsp;&nbsp;1. Halbjahr</div></td>
                            <td colSpan="5" style={styleTitel}><div style={styleDivTitel}>KURSPLANUNG&nbsp;&nbsp;2. Halbjahr</div></td>
                        </tr>
                        <tr>
                            <td style={styleTermine1}><div style={styleDivBezeichner}>Termine:</div></td>
                            <td style={styleKursabschnitt1}><div style={styleDivBezeichnerKursabschnitt}>1. Kursabschnitt vom</div></td>
                            <td style={styleDatum11}><div style={styleDivBezeichnerKursabschnitt}>{datum11}</div></td>
                            <td style={styleBis1}><div style={styleDivBezeichnerKursabschnitt}>bis</div></td>
                            <td style={styleDatum12}><div style={styleDivBezeichnerKursabschnitt}>{datum12}</div></td>
                            <td style={styleTermine1}><div style={styleDivBezeichner}>Termine:</div></td>
                            <td style={styleKursabschnitt1}><div style={styleDivBezeichnerKursabschnitt}>1. Kursabschnitt vom</div></td>
                            <td style={styleDatum11}><div style={styleDivBezeichnerKursabschnitt}>{datum31}</div></td>
                            <td style={styleBis1}><div style={styleDivBezeichnerKursabschnitt}>bis</div></td>
                            <td style={styleDatum12}><div style={styleDivBezeichnerKursabschnitt}>{datum32}</div></td>
                        </tr>
                        <tr>
                            <td style={styleTermine2}><div style={styleDivBezeichner}>&nbsp;</div></td>
                            <td style={styleKursabschnitt2}><div style={styleDivBezeichnerKursabschnitt}>2. Kursabschnitt vom</div></td>
                            <td style={styleDatum21}><div style={styleDivBezeichnerKursabschnitt}>{datum21}</div></td>
                            <td style={styleBis2}><div style={styleDivBezeichnerKursabschnitt}>bis</div></td>
                            <td style={styleDatum22}><div style={styleDivBezeichnerKursabschnitt}>{datum22}</div></td>
                            <td style={styleTermine2}><div style={styleDivBezeichner}>&nbsp;</div></td>
                            <td style={styleKursabschnitt2}><div style={styleDivBezeichnerKursabschnitt}>2. Kursabschnitt vom</div></td>
                            <td style={styleDatum21}><div style={styleDivBezeichnerKursabschnitt}>{datum41}</div></td>
                            <td style={styleBis2}><div style={styleDivBezeichnerKursabschnitt}>bis</div></td>
                            <td style={styleDatum22}><div style={styleDivBezeichnerKursabschnitt}>{datum42}</div></td>
                        </tr>
                        <tr>
                            <td colSpan="5" style={styleBezeichner}><div style={styleDivBezeichner}>Kursthema/Unterthemen/Lerninhalte</div></td>
                            <td colSpan="5" style={styleBezeichner}><div style={styleDivBezeichner}>Kursthema/Unterthemen/Lerninhalte</div></td>
                        </tr>
                        <tr>
                            <td colSpan="5" style={styleInhalt}><div style={styleDivInhalt}><textarea name="Kursthema 1" onChange={this.props.handleChange} value={this.props.kurs.kursthema[0]} style={styleTextarea}></textarea></div></td>
                            <td colSpan="5" style={styleInhalt}><div style={styleDivInhalt}><textarea name="Kursthema 2" onChange={this.props.handleChange} value={this.props.kurs.kursthema[1]} style={styleTextarea}></textarea></div></td>
                        </tr>
                        <tr>
                            <td colSpan="5" style={styleBezeichner}><div style={styleDivBezeichner}>Lehrmittel, Lernmittel, Literatur</div></td>
                            <td colSpan="5" style={styleBezeichner}><div style={styleDivBezeichner}>Lehrmittel, Lernmittel, Literatur</div></td>
                        </tr>
                        <tr>
                            <td colSpan="5" style={styleInhalt}><div style={styleDivInhalt}><textarea name="Lehrmittel 1" onChange={this.props.handleChange} value={this.props.kurs.lehrmittel[0]} style={styleTextarea}></textarea></div></td>
                            <td colSpan="5" style={styleInhalt}><div style={styleDivInhalt}><textarea name="Lehrmittel 2" onChange={this.props.handleChange} value={this.props.kurs.lehrmittel[1]} style={styleTextarea}></textarea></div></td>
                        </tr>
                        <tr>
                            <td colSpan="5" style={styleBezeichner}><div style={styleDivBezeichner}>Aufgabenstellung/Themen der Klausuren</div></td>
                            <td colSpan="5" style={styleBezeichner}><div style={styleDivBezeichner}>Aufgabenstellung/Themen der Klausuren</div></td>
                        </tr>
                        <tr>
                            <td colSpan="5" style={styleInhalt}><div style={styleDivInhalt}><textarea name="Aufgabenstellung 11" onChange={this.props.handleChange} value={this.props.kurs.aufgabenstellung[0][0]} style={styleTextareaAufgabenstellung}></textarea><br /><br /><textarea name="Aufgabenstellung 12" onChange={this.props.handleChange} value={this.props.kurs.aufgabenstellung[0][1]} style={styleTextareaAufgabenstellung}></textarea><br /><br /><textarea name="Aufgabenstellung 13" onChange={this.props.handleChange} value={this.props.kurs.aufgabenstellung[0][2]} style={styleTextareaAufgabenstellung}></textarea></div></td>
                            <td colSpan="5" style={styleInhalt}><div style={styleDivInhalt}><textarea name="Aufgabenstellung 21" onChange={this.props.handleChange} value={this.props.kurs.aufgabenstellung[1][0]} style={styleTextareaAufgabenstellung}></textarea><br /><br /><textarea name="Aufgabenstellung 22" onChange={this.props.handleChange} value={this.props.kurs.aufgabenstellung[1][1]} style={styleTextareaAufgabenstellung}></textarea><br /><br /><textarea name="Aufgabenstellung 23" onChange={this.props.handleChange} value={this.props.kurs.aufgabenstellung[1][2]} style={styleTextareaAufgabenstellung}></textarea></div></td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}