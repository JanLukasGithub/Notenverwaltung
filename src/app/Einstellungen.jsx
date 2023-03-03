import React from "react";
import { Button } from "./Button";
import { Select } from "./Select";
import { Input } from "./Input";
import { Checkbox } from "./Checkbox";

export class Einstellungen extends React.PureComponent {
    render() {
        const styleTable = { borderCollapse: "collapse", width: "*", height: "*", tableLayout: "fixed" };
        const styleTd1 = { width: 200 };
        const styleTd2 = { width: 145 };
        const styleTd3 = { width: "*" };
        let note = "";
        if (this.props.kurs.agNoten) {
            note = "E2";
        }
        else if (this.props.kurs.fakeNoten) {
            note = "1-";
        }
        else {
            note = "2-";
        }
        let dargestellteSchueler = this.props.kurs.schueler.slice(0, this.props.kurs.schueler.length - 1).map((schueler, index) => {
            const key = "schueler" + index;
            return (
                <tr key={key}>
                    <td colSpan="3"><Input name={"Nachname " + index.toString()} handleChange={this.props.handleChange} eingabewert={schueler.nachname} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="left" fontWeight="normal" color="black" minWidth={135} maxWidth={135} /> <Input name={"Vorname " + index.toString()} handleChange={this.props.handleChange} eingabewert={schueler.vorname} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="left" fontWeight="normal" color="black" minWidth={135} maxWidth={135} /> <Input name={"Rufname " + index.toString()} handleChange={this.props.handleChange} eingabewert={schueler.rufname} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="left" fontWeight="normal" color="black" minWidth={74} maxWidth={74} /> <Checkbox name={"Aktiv 1" + index.toString()} handleChange={this.props.handleChange} checked={schueler.aktiv[0]} checkboxDisabled={false} checkboxVisible={true} /> <Checkbox name={"Aktiv 2" + index.toString()} handleChange={this.props.handleChange} checked={schueler.aktiv[1]} checkboxDisabled={false} checkboxVisible={true} /> <Checkbox name={"Aktiv 3" + index.toString()} handleChange={this.props.handleChange} checked={schueler.aktiv[2]} checkboxDisabled={false} checkboxVisible={true} /> <Checkbox name={"Aktiv 4" + index.toString()} handleChange={this.props.handleChange} checked={schueler.aktiv[3]} checkboxDisabled={false} checkboxVisible={true} /></td>
                </tr>
            );
        });
        return (
            <table style={styleTable}>
                <tbody>
                    <tr>
                        <td colSpan="3"><Button name={"Kursplan"} handleClick={this.props.handleClick} beschriftung={"Kursplan"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} /></td>
                    </tr>
                    <tr>
                        <td><Button name={"Kurs Kopieren"} handleClick={this.props.handleClick} beschriftung={"Kurs kopieren"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} /></td>
                        <td colSpan="2"><Select name={"Position Wahl"} handleChange={this.props.handleChange} value={this.props.positionNeu} options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83]} optionsBeschriftung={["Zeile 1, Spalte 1", "Zeile 1, Spalte 2", "Zeile 1, Spalte 3", "Zeile 1, Spalte 4", "Zeile 1, Spalte 5", "Zeile 1, Spalte 6", "Zeile 1, Spalte 7", "Zeile 2, Spalte 1", "Zeile 2, Spalte 2", "Zeile 2, Spalte 3", "Zeile 2, Spalte 4", "Zeile 2, Spalte 5", "Zeile 2, Spalte 6", "Zeile 2, Spalte 7", "Zeile 3, Spalte 1", "Zeile 3, Spalte 2", "Zeile 3, Spalte 3", "Zeile 3, Spalte 4", "Zeile 3, Spalte 5", "Zeile 3, Spalte 6", "Zeile 3, Spalte 7", "Zeile 4, Spalte 1", "Zeile 4, Spalte 2", "Zeile 4, Spalte 3", "Zeile 4, Spalte 4", "Zeile 4, Spalte 5", "Zeile 4, Spalte 6", "Zeile 4, Spalte 7", "Zeile 5, Spalte 1", "Zeile 5, Spalte 2", "Zeile 5, Spalte 3", "Zeile 5, Spalte 4", "Zeile 5, Spalte 5", "Zeile 5, Spalte 6", "Zeile 5, Spalte 7", "Zeile 6, Spalte 1", "Zeile 6, Spalte 2", "Zeile 6, Spalte 3", "Zeile 6, Spalte 4", "Zeile 6, Spalte 5", "Zeile 6, Spalte 6", "Zeile 6, Spalte 7", "Zeile 7, Spalte 1", "Zeile 7, Spalte 2", "Zeile 7, Spalte 3", "Zeile 7, Spalte 4", "Zeile 7, Spalte 5", "Zeile 7, Spalte 6", "Zeile 7, Spalte 7", "Zeile 8, Spalte 1", "Zeile 8, Spalte 2", "Zeile 8, Spalte 3", "Zeile 8, Spalte 4", "Zeile 8, Spalte 5", "Zeile 8, Spalte 6", "Zeile 8, Spalte 7", "Zeile 9, Spalte 1", "Zeile 9, Spalte 2", "Zeile 9, Spalte 3", "Zeile 9, Spalte 4", "Zeile 9, Spalte 5", "Zeile 9, Spalte 6", "Zeile 9, Spalte 7", "Zeile 10, Spalte 1", "Zeile 10, Spalte 2", "Zeile 10, Spalte 3", "Zeile 10, Spalte 4", "Zeile 10, Spalte 5", "Zeile 10, Spalte 6", "Zeile 10, Spalte 7", "Zeile 11, Spalte 1", "Zeile 11, Spalte 2", "Zeile 11, Spalte 3", "Zeile 11, Spalte 4", "Zeile 11, Spalte 5", "Zeile 11, Spalte 6", "Zeile 11, Spalte 7", "Zeile 12, Spalte 1", "Zeile 12, Spalte 2", "Zeile 12, Spalte 3", "Zeile 12, Spalte 4", "Zeile 12, Spalte 5", "Zeile 12, Spalte 6", "Zeile 12, Spalte 7"]} selectDisabled={false} selectVisible={true} selectAppearance={false} textAlign="left" fontWeight="normal" color="black" minWidth={10} maxWidth={120} /></td>
                    </tr>
                    <tr>
                        <td><Button name={"Voreinstellung Ändern"} handleClick={this.props.handleClick} beschriftung={"Voreinstellung"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} /></td>
                        <td colSpan="2"><Select name={"Voreinstellung Wahl"} handleChange={this.props.handleChange} value={this.props.voreinstellungNeu} options={["Keine", "Sek I Mathematik", "Sek I Physik", "Sek I Informatik", "Sek II Mathematik", "Sek II Physik", "Sek II Informatik", "AG", "Benutzerdefiniert"]} optionsBeschriftung={["Keine", "Sek I Mathematik", "Sek I Physik", "Sek I Informatik", "Sek II Mathematik", "Sek II Physik", "Sek II Informatik", "AG", "Benutzerdefiniert"]} selectDisabled={false} selectVisible={true} selectAppearance={false} textAlign="left" fontWeight="normal" color="black" minWidth={10} maxWidth={130} /></td>
                    </tr>
                    <tr>
                        <td colSpan="3"><Button name={"Unterricht Löschen"} handleClick={this.props.handleClick} beschriftung={"Unterricht löschen"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} /></td>
                    </tr>
                    <tr>
                        <td colSpan="3"><Button name={"Kurs Löschen"} handleClick={this.props.handleClick} beschriftung={"Kurs löschen"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} /></td>
                    </tr>
                    <tr>
                        <td colSpan="3">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Jahrgangsstufe:</td>
                        <td colSpan="2"><Input name={"Jahrgangsstufe"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.jahrgangsstufe} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /></td>
                    </tr>
                    <tr>
                        <td>Fach:</td>
                        <td colSpan="2"><Select name={"Fach Wahl"} handleChange={this.props.handleChange} value={this.props.kurs.fach} options={["", "Mathematik", "Physik", "Informatik"]} optionsBeschriftung={["", "Mathematik", "Physik", "Informatik"]} selectDisabled={false} selectVisible={true} selectAppearance={false} textAlign="left" fontWeight="normal" color="black" minWidth={10} maxWidth={110} /></td>
                    </tr>
                    <tr>
                        <td>Kursart:</td>
                        <td colSpan="2"><Select name={"Kursart Wahl"} handleChange={this.props.handleChange} value={this.props.kurs.kursart} options={["", "Sek I", "GK", "LK", "AG"]} optionsBeschriftung={["", "Sek I", "GK", "LK", "AG"]} selectDisabled={false} selectVisible={true} selectAppearance={false} textAlign="left" fontWeight="normal" color="black" minWidth={10} maxWidth={50} /></td>
                    </tr>
                    <tr>
                        <td>Kursnummer:</td>
                        <td colSpan="2"><Input name={"Kursnummer"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.kursnummer} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="left" fontWeight="normal" color="black" minWidth={10} maxWidth={40} /></td>
                    </tr>
                    <tr>
                        <td>Klausurschiene:</td>
                        <td colSpan="2"><Input name={"Klausurschiene"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.klausurschiene} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="left" fontWeight="normal" color="black" minWidth={10} maxWidth={40} /></td>
                    </tr>
                    <tr>
                        <td>Lehrer:</td>
                        <td colSpan="2"><Input name={"Kurslehrer"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.kurslehrer} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="left" fontWeight="normal" color="black" minWidth={10} maxWidth={100} /></td>
                    </tr>
                    <tr>
                        <td>Schuljahr:</td>
                        <td colSpan="2"><Input name={"Schuljahr"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.schuljahr} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="left" fontWeight="normal" color="black" minWidth={10} maxWidth={50} /></td>
                    </tr>
                    <tr>
                        <td>Quartalseinstellungen:</td>
                        <td colSpan="2"><Checkbox name={"Quartalseinstellungen"} handleChange={this.props.handleChange} checked={this.props.kurs.quartalseinstellungen} checkboxDisabled={false} checkboxVisible={true} /></td>
                    </tr>
                    <tr>
                        <td style={styleTd1}>Klausurlängen:</td>
                        <td style={styleTd2}><Input name={"Klausurdauer 11"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.klausurdauer[0][0]} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /> <Input name={"Klausurdauer 12"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.klausurdauer[0][1]} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /> <Input name={"Klausurdauer 13"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.klausurdauer[0][2]} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /></td>
                        <td style={styleTd3}><Input name={"Klausurdauer 21"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.klausurdauer[1][0]} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /> <Input name={"Klausurdauer 22"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.klausurdauer[1][1]} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /> <Input name={"Klausurdauer 23"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.klausurdauer[1][2]} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /></td>
                    </tr>
                    <tr>
                        <td>Anzahl Tests:</td>
                        <td><Input name={"Tests 1"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.tests[0]} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /> <Input name={"Tests 2"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.tests[1]} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /></td>
                        <td><Input name={"Tests 3"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.tests[2]} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /> <Input name={"Tests 4"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.tests[3]} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /></td>
                    </tr>
                    <tr>
                        <td>Anzahl Referate:</td>
                        <td><Input name={"Referate 1"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.referate[0]} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /> <Input name={"Referate 2"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.referate[1]} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /></td>
                        <td><Input name={"Referate 3"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.referate[2]} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /> <Input name={"Referate 4"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.referate[3]} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /></td>
                    </tr>
                    <tr>
                        <td>Gewichtung Halbjahresnote:</td>
                        <td colSpan="2"><Input name={"1Halbjahresnoteneinfluss"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.halbjahresnoteneinfluss} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /></td>
                    </tr>
                    <tr>
                        <td>Gewichtung Klausurnoten:</td>
                        <td><Input name={"1Klausurnoteneinfluss 1"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.klausurnoteneinfluss[0]} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /></td>
                        <td><Input name={"1Klausurnoteneinfluss 2"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.klausurnoteneinfluss[1]} inputDisabled={!this.props.kurs.quartalseinstellungen} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /></td>
                    </tr>
                    <tr>
                        <td>Gewichtung Tests &amp; Referate:</td>
                        <td><Input name={"1Testnoteneinfluss 1"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.testnoteneinfluss[0]} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /> <Input name={"1Testnoteneinfluss 2"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.testnoteneinfluss[1]} inputDisabled={!this.props.kurs.quartalseinstellungen} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /></td>
                        <td><Input name={"1Testnoteneinfluss 3"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.testnoteneinfluss[2]} inputDisabled={!this.props.kurs.quartalseinstellungen} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /> <Input name={"1Testnoteneinfluss 4"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.testnoteneinfluss[3]} inputDisabled={!this.props.kurs.quartalseinstellungen} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /></td>
                    </tr>
                    <tr>
                        <td>Geschönte Noten:</td>
                        <td colSpan="2"><Checkbox name={"Fakenoten"} handleChange={this.props.handleChange} checked={this.props.kurs.fakeNoten} checkboxDisabled={false} checkboxVisible={true} /></td>
                    </tr>
                    <tr>
                        <td>Mindeststriche für Note {note}:</td>
                        <td><Input name={"1Strichegrenze 1"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.stricheGrenze[0]} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /> <Input name={"1Strichegrenze 2"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.stricheGrenze[1]} inputDisabled={!this.props.kurs.quartalseinstellungen} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /></td>
                        <td><Input name={"1Strichegrenze 3"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.stricheGrenze[2]} inputDisabled={!this.props.kurs.quartalseinstellungen} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /> <Input name={"1Strichegrenze 4"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.stricheGrenze[3]} inputDisabled={!this.props.kurs.quartalseinstellungen} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /></td>
                    </tr>
                    <tr>
                        <td>Stricheabzug je Defizit:</td>
                        <td><Input name={"Minusstrichedefizit 1"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.minusStricheDefizit[0]} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /> <Input name={"Minusstrichedefizit 2"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.minusStricheDefizit[1]} inputDisabled={!this.props.kurs.quartalseinstellungen} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /></td>
                        <td><Input name={"Minusstrichedefizit 3"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.minusStricheDefizit[2]} inputDisabled={!this.props.kurs.quartalseinstellungen} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /> <Input name={"Minusstrichedefizit 4"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.minusStricheDefizit[3]} inputDisabled={!this.props.kurs.quartalseinstellungen} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /></td>
                    </tr>
                    <tr>
                        <td>Freidefizite je Quartal:</td>
                        <td><Input name={"Freidefizite 1"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.freidefizite[0]} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /> <Input name={"Freidefizite 2"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.freidefizite[1]} inputDisabled={!this.props.kurs.quartalseinstellungen} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /></td>
                        <td><Input name={"Freidefizite 3"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.freidefizite[2]} inputDisabled={!this.props.kurs.quartalseinstellungen} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /> <Input name={"Freidefizite 4"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.freidefizite[3]} inputDisabled={!this.props.kurs.quartalseinstellungen} inputVisible={true} inputAppearance={true} textAlign="center" fontWeight="normal" color="black" minWidth={10} maxWidth={25} /></td>
                    </tr>
                    <tr>
                        <td colSpan="3">&nbsp;</td>
                    </tr>
                    <tr>
                        <td colSpan="3"><Button name={"Schüler Hinzufügen"} handleClick={this.props.handleClick} beschriftung={"Schüler hinzufügen"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} /></td>
                    </tr>
                    <tr>
                        <td><Button name={"Schüler Entfernen"} handleClick={this.props.handleClick} beschriftung={"Schüler entfernen"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} /></td>
                        <td colSpan="2"><Select name={"Schüler Wahl 1"} handleChange={this.props.handleChange} value={this.props.positionSchueler1} options={this.props.kurs.schueler.slice(0, this.props.kurs.schueler.length - 1).map((x, index) => index)} optionsBeschriftung={this.props.kurs.schueler.slice(0, this.props.kurs.schueler.length - 1).map((x, index) => this.props.kurs.schueler[index].vorname + " " + this.props.kurs.schueler[index].nachname)} selectDisabled={false} selectVisible={true} selectAppearance={false} textAlign="left" fontWeight="normal" color="black" minWidth={10} maxWidth={120} /></td>
                    </tr>
                    <tr>
                        <td><Button name={"Schüler Einsortieren"} handleClick={this.props.handleClick} beschriftung={"Einsortieren nach"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} /></td>
                        <td colSpan="2"><Select name={"Schüler Wahl 2"} handleChange={this.props.handleChange} value={this.props.positionSchueler2} options={[-1].concat(this.props.kurs.schueler.slice(0, this.props.kurs.schueler.length - 1).map((x, index) => index))} optionsBeschriftung={["Anfang"].concat(this.props.kurs.schueler.slice(0, this.props.kurs.schueler.length - 1).map((x, index) => this.props.kurs.schueler[index].vorname + " " + this.props.kurs.schueler[index].nachname))} selectDisabled={false} selectVisible={true} selectAppearance={false} textAlign="left" fontWeight="normal" color="black" minWidth={10} maxWidth={120} /></td>
                    </tr>
                    <tr>
                        <td colSpan="3">&nbsp;</td>
                    </tr>
                    {dargestellteSchueler}
                </tbody>
            </table>
        );
    }
}