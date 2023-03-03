import React from "react";

export class Klausurspiegel extends React.PureComponent {
    render() {
        const styleTable = { borderCollapse: "collapse", width: "*", height: "*", tableLayout: "fixed", marginLeft: 20 };
        const styleTableNoten = { borderCollapse: "collapse", width: "*", height: "*", tableLayout: "fixed", marginLeft: 0 };
        const styleTitel = { borderBottom: "1px double Black", borderRight: "1px double Black", width: 170, height: 25 };
        const styleFach = { border: "1px double Black", width: 150, height: "*" };
        const styleKursart = { borderTop: "1px double Black", borderLeft: "1px double Black", width: "*", height: 20 };
        const styleKursnummer = { borderTop: "1px double Black", borderRight: "1px double Black", width: "*", height: "*" };
        const styleSchuljahr = { borderBottom: "1px double Black", borderLeft: "1px double Black", width: "*", height: 20 };
        const styleJahrgangsstufe = { borderBottom: "1px double Black", borderRight: "1px double Black", width: "*", height: "*" };
        const styleDatum = { borderTop: "1px double Black", width: "*", height: 18 };
        const styleDatumInhalt = { borderTop: "1px double Black", width: "*", height: "*" };
        const styleBezeichner = { border: "none", width: "*", height: 18 };
        const styleInhalt = { border: "none", width: "*", height: "*" };
        const styleThema = { border: "none", width: "*", height: 18 };
        const styleTextarea = { WebkitAppearance: "none", resize: "none", border: "none", fontSize: "0.9em", fontWeight: "normal", width: 318, height: 34 };
        const styleErgebnis = { borderTop: "1px solid Black", width: "*", height: 18 };
        const styleNotendurchschnitt = { borderTop: "1px solid Black", width: "*", height: "*" };
        const styleNote = { border: "1px double Black", textAlign: "center", verticalAlign: "middle", width: 20, height: 20 };
        const styleNoten = { border: "1px double Black", textAlign: "center", verticalAlign: "middle", width: "*", height: 20 };
        const styleBemerkungen = { border: "none", width: "*", height: 18 };
        const styleKurslehrer = { border: "none", verticalAlign: "bottom", width: 100, height: 18 };
        const styleUnterschrift1 = { borderBottom: "1px solid Black", verticalAlign: "bottom", width: "*", height: "*" };
        const styleGenehmigt = { border: "none", verticalAlign: "bottom", width: 100, height: 25 };
        const styleUnterschrift2 = { borderBottom: "1px solid Black", verticalAlign: "bottom", width: "*", height: 25 };
        const styleSchulleitung = { border: "none", textAlign: "center", verticalAlign: "top", width: "*", height: "*" };
        const styleSpanTitel = { fontSize: "0.8em", fontWeight: "bold", marginLeft: 0 };
        const styleSpanBezeichner1 = { fontSize: "0.8em", fontWeight: "normal", marginLeft: 10 };
        const styleSpanBezeichner2 = { fontSize: "0.8em", fontWeight: "normal", marginLeft: -5 };
        const styleSpanBezeichner = { fontSize: "0.8em", fontWeight: "normal", marginLeft: 0 };
        const styleSpanInhalt = { marginLeft: 8 };
        const styleSpanNotendurchschnitt = { fontSize: "0.8em", fontWeight: "normal", marginLeft: 8 };
        const styleDivTextarea = { marginLeft: 0 };
        const styleDivSchulleitung = { fontSize: "0.8em", fontWeight: "normal", marginLeft: 0 };
        return (
            <table style={styleTable}>
                <tbody>
                    <tr>
                        <td colSpan="2" style={styleTitel}><span style={styleSpanTitel}>{this.props.name.substring(1) + ". Klausur"}</span></td>
                        <td style={styleFach}><span style={styleSpanBezeichner1}>Fach:</span><span style={styleSpanInhalt}>{this.props.fach}</span></td>
                    </tr>
                    <tr>
                        <td colSpan="2" style={styleKursart}><span style={styleSpanBezeichner1}>Kursart:</span><span style={styleSpanInhalt}>{this.props.kursart}</span></td>
                        <td style={styleKursnummer}><span style={styleSpanBezeichner2}>Kursnummer:</span><span style={styleSpanInhalt}>{this.props.kursnummer}</span></td>
                    </tr>
                    <tr>
                        <td colSpan="2" style={styleSchuljahr}><span style={styleSpanBezeichner1}>Schuljahr:</span><span style={styleSpanInhalt}>{this.props.schuljahr}</span></td>
                        <td style={styleJahrgangsstufe}><span style={styleSpanBezeichner2}>Jahrgangsstufe:</span><span style={styleSpanInhalt}>{this.props.jahrgangsstufe}</span></td>
                    </tr>
                    <tr>
                        <td colSpan="2" style={styleDatum}><span style={styleSpanBezeichner}>Datum der Klausur:</span></td>
                        <td style={styleDatumInhalt}><span style={styleSpanInhalt}>{this.props.datum}</span></td>
                    </tr>
                    <tr>
                        <td colSpan="2" style={styleBezeichner}><span style={styleSpanBezeichner}>Dauer der Klausur:</span></td>
                        <td style={styleInhalt}><span style={styleSpanInhalt}>{this.props.dauer + " Minuten"}</span></td>
                    </tr>
                    <tr>
                        <td colSpan="2" style={styleBezeichner}><span style={styleSpanBezeichner}>Zahl der Kursteilnehmer/innen:</span></td>
                        <td style={styleInhalt}><span style={styleSpanInhalt}>{this.props.kursteilnehmer}</span></td>
                    </tr>
                    <tr>
                        <td colSpan="2" style={styleBezeichner}><span style={styleSpanBezeichner}>davon haben mitgeschrieben:</span></td>
                        <td style={styleInhalt}><span style={styleSpanInhalt}>{this.props.schreiber}</span></td>
                    </tr>
                    <tr>
                        <td colSpan="3" style={styleThema}><span style={styleSpanBezeichner}>Thema/Aufgabenbereich:</span></td>
                    </tr>
                    <tr>
                        <td colSpan="3" style={styleTextarea}><div style={styleDivTextarea}><textarea name={"Aufgabenstellung " + this.props.name} onChange={this.props.handleChange} value={this.props.thema} style={styleTextarea}></textarea></div></td>
                    </tr>
                    <tr>
                        <td colSpan="2" style={styleErgebnis}><span style={styleSpanBezeichner}>Ergebnis:</span></td>
                        <td style={styleNotendurchschnitt}><span style={styleSpanNotendurchschnitt}>Notendurchschnitt:&nbsp;&nbsp;{this.props.notendurchschnitt}</span></td>
                    </tr>
                    <tr>
                        <td colSpan="3">
                            <table style={styleTableNoten}>
                                <tbody>
                                    <tr>
                                        <td style={styleNote}>+</td>
                                        <td style={styleNote}>1</td>
                                        <td style={styleNote}>-</td>
                                        <td style={styleNote}>+</td>
                                        <td style={styleNote}>2</td>
                                        <td style={styleNote}>-</td>
                                        <td style={styleNote}>+</td>
                                        <td style={styleNote}>3</td>
                                        <td style={styleNote}>-</td>
                                        <td style={styleNote}>+</td>
                                        <td style={styleNote}>4</td>
                                        <td style={styleNote}>-</td>
                                        <td style={styleNote}>+</td>
                                        <td style={styleNote}>5</td>
                                        <td style={styleNote}>-</td>
                                        <td style={styleNote}>6</td>
                                    </tr>
                                    <tr>
                                        <td style={styleNote}>{this.props.noten[0]}</td>
                                        <td style={styleNote}>{this.props.noten[1]}</td>
                                        <td style={styleNote}>{this.props.noten[2]}</td>
                                        <td style={styleNote}>{this.props.noten[3]}</td>
                                        <td style={styleNote}>{this.props.noten[4]}</td>
                                        <td style={styleNote}>{this.props.noten[5]}</td>
                                        <td style={styleNote}>{this.props.noten[6]}</td>
                                        <td style={styleNote}>{this.props.noten[7]}</td>
                                        <td style={styleNote}>{this.props.noten[8]}</td>
                                        <td style={styleNote}>{this.props.noten[9]}</td>
                                        <td style={styleNote}>{this.props.noten[10]}</td>
                                        <td style={styleNote}>{this.props.noten[11]}</td>
                                        <td style={styleNote}>{this.props.noten[12]}</td>
                                        <td style={styleNote}>{this.props.noten[13]}</td>
                                        <td style={styleNote}>{this.props.noten[14]}</td>
                                        <td style={styleNote}>{this.props.noten[15]}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3" style={styleNoten}>{this.props.noten[0] + this.props.noten[1] + this.props.noten[2]}</td>
                                        <td colSpan="3" style={styleNoten}>{this.props.noten[3] + this.props.noten[4] + this.props.noten[5]}</td>
                                        <td colSpan="3" style={styleNoten}>{this.props.noten[6] + this.props.noten[7] + this.props.noten[8]}</td>
                                        <td colSpan="3" style={styleNoten}>{this.props.noten[9] + this.props.noten[10] + this.props.noten[11]}</td>
                                        <td colSpan="3" style={styleNoten}>{this.props.noten[12] + this.props.noten[13] + this.props.noten[14]}</td>
                                        <td style={styleNote}>{this.props.noten[15]}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="3" style={styleBemerkungen}><span style={styleSpanBezeichner}>Bemerkungen:</span></td>
                    </tr>
                    <tr>
                        <td colSpan="3" style={styleTextarea}><div style={styleDivTextarea}><textarea name={"Klausurbemerkungen " + this.props.name} onChange={this.props.handleChange} value={this.props.bemerkungen} style={styleTextarea}></textarea></div></td>
                    </tr>
                    <tr>
                        <td style={styleKurslehrer}><div style={styleDivSchulleitung}>Kurslehrer/in:</div></td>
                        <td colSpan="2" style={styleUnterschrift1}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={styleGenehmigt}><div style={styleDivSchulleitung}>Nicht genehmigt:</div></td>
                        <td colSpan="2" style={styleUnterschrift2}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={styleKurslehrer}>&nbsp;</td>
                        <td colSpan="2" style={styleSchulleitung}><div style={styleDivSchulleitung}>Schulleitung</div></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}