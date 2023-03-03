import React from "react";
import { Sitzplatz } from "./Sitzplatz";
import { Button } from "./Button";
import { Select } from "./Select";
import { Input } from "./Input";

export class Sitzplan extends React.PureComponent {
    render() {
        const styleTable = { borderCollapse: "collapse", width: "*", height: "*", tableLayout: "fixed" };
        let xMax;
        let yMax;
        if (this.props.raum === "Raum 1") {
            if (this.props.kurs.formatSitzordnung === "Querformat") {
                xMax = 11;
                yMax = 11;
            }
            else {
                xMax = 9;
                yMax = 19;
            }
        }
        else if (this.props.raum === "Raum 2") {
            if (this.props.kurs.formatSitzordnung2 === "Querformat") {
                xMax = 11;
                yMax = 11;
            }
            else {
                xMax = 9;
                yMax = 19;
            }
        }
        let lehrer = false;
        let index = 0;
        let dargestellteSitzplaetze = [];
        let dargestellteSitzplaetzeZeile;
        let sitzplatzDisabled;
        let sitzplatzVisible;
        let checkboxDisabled;
        let indexSchueler;
        let schuelername;
        let schuelernameFarbe;
        let stricheFarbe;
        let stricheGewertet;
        let minitest;
        let stricheMinitest;
        let stricheMuendlich;
        for (let y = 1; y < yMax + 1; y++) {
            const keyZeile = "sitzplatzZeile" + y;
            dargestellteSitzplaetzeZeile = [];
            for (let x = 1; x < xMax + 1; x++) {
                const key = "sitzplatz" + x;
                sitzplatzDisabled = false;
                sitzplatzVisible = false;
                checkboxDisabled = true;
                indexSchueler = false;
                if (this.props.raum === "Raum 1") {
                    sitzplatzDisabled = this.props.sitzplaetzeAktivieren && !this.props.kurs.sitzplaetze[index].aktiv;
                    sitzplatzVisible = this.props.sitzplaetzeAktivieren || this.props.kurs.sitzplaetze[index].aktiv;
                    indexSchueler = this.props.kurs.sitzplaetze[index].schueler;
                }
                else if (this.props.raum === "Raum 2") {
                    sitzplatzDisabled = this.props.sitzplaetzeAktivieren && !this.props.kurs.sitzplaetze2[index].aktiv;
                    sitzplatzVisible = this.props.sitzplaetzeAktivieren || this.props.kurs.sitzplaetze2[index].aktiv;
                    indexSchueler = this.props.kurs.sitzplaetze2[index].schueler;
                }
                if (indexSchueler < 0) {
                    schuelername = "Leerer Platz";
                    schuelernameFarbe = "black";
                    stricheFarbe = "black";
                    stricheGewertet = 0;
                    minitest = false;
                    stricheMinitest = 0;
                    stricheMuendlich = 0;
                }
                else if (indexSchueler === 99) {
                    lehrer = true;
                    schuelername = "Lehrer";
                    schuelernameFarbe = "black";
                    stricheFarbe = "black";
                    stricheGewertet = 0;
                    minitest = false;
                    stricheMinitest = 0;
                    stricheMuendlich = 0;
                }
                else {
                    schuelername = this.props.kurs.schueler[indexSchueler].rufname;
                    stricheGewertet = this.props.kurs.schueler[indexSchueler].stricheGewertet[this.props.quartal - 1];
                    if (stricheGewertet <= 0) {
                        schuelernameFarbe = "red";
                    }
                    else if (this.props.kurs.schueler[indexSchueler].markiert) {
                        schuelernameFarbe = "blue";
                    }
                    else {
                        schuelernameFarbe = "black";
                    }
                    if (this.props.kurs.schueler[indexSchueler].stricheMinitestErreichbar[this.props.quartal - 1][this.props.indexUnterricht] === 0) {
                        minitest = false;
                    }
                    else {
                        minitest = true;
                    }
                    stricheMinitest = this.props.kurs.schueler[indexSchueler].stricheMinitest[this.props.quartal - 1][this.props.indexUnterricht];
                    stricheMuendlich = this.props.kurs.schueler[indexSchueler].stricheMuendlich[this.props.quartal - 1][this.props.indexUnterricht] - this.props.kurs.minusStricheDefizit[this.props.quartal - 1] * this.props.kurs.schueler[indexSchueler].defizite[this.props.quartal - 1][this.props.indexUnterricht];
                    if (stricheMuendlich < 0) {
                        stricheFarbe = "red";
                    }
                    else {
                        stricheFarbe = "black";
                    }
                }
                dargestellteSitzplaetzeZeile.push(
                    <td key={key}><Sitzplatz name={"Sitzplatz " + index.toString()} handleClickSitzplatz={this.props.handleClickSitzplatz} handleChange={this.props.handleChange} sitzplatzDisabled={sitzplatzDisabled} sitzplatzVisible={sitzplatzVisible} checkboxDisabled={checkboxDisabled} schuelername={schuelername} schuelernameFarbe={schuelernameFarbe} stricheFarbe={stricheFarbe} stricheGewertet={stricheGewertet} minitest={minitest} stricheMinitest={stricheMinitest} stricheMuendlich={stricheMuendlich} /></td>
                );
                index = index + 1;
            }
            dargestellteSitzplaetze.push(
                <tr key={keyZeile}>
                    {dargestellteSitzplaetzeZeile}
                </tr>
            );
        }
        let optionsSchuelerWahl;
        let optionsBeschriftungSchuelerWahl;
        if (this.props.sitzplanModus === "Schülerzuweisungen") {
            if (this.props.raum === "Raum 1") {
                if (lehrer) {
                    optionsSchuelerWahl = [-1].concat(this.props.kurs.schuelerSitzplatzlos.map((x) => x));
                    optionsBeschriftungSchuelerWahl = ["Leerer Platz"].concat(this.props.kurs.schuelerSitzplatzlos.map((x) => this.props.kurs.schueler[x].rufname));
                }
                else {
                    optionsSchuelerWahl = [-1, 99].concat(this.props.kurs.schuelerSitzplatzlos.map((x) => x));
                    optionsBeschriftungSchuelerWahl = ["Leerer Platz", "Lehrer"].concat(this.props.kurs.schuelerSitzplatzlos.map((x) => this.props.kurs.schueler[x].rufname));
                }
            }
            else if (this.props.raum === "Raum 2") {
                if (lehrer) {
                    optionsSchuelerWahl = [-1].concat(this.props.kurs.schuelerSitzplatzlos2.map((x) => x));
                    optionsBeschriftungSchuelerWahl = ["Leerer Platz"].concat(this.props.kurs.schuelerSitzplatzlos2.map((x) => this.props.kurs.schueler[x].rufname));
                }
                else {
                    optionsSchuelerWahl = [-1, 99].concat(this.props.kurs.schuelerSitzplatzlos2.map((x) => x));
                    optionsBeschriftungSchuelerWahl = ["Leerer Platz", "Lehrer"].concat(this.props.kurs.schuelerSitzplatzlos2.map((x) => this.props.kurs.schueler[x].rufname));
                }
            }
            if (this.props.raum === "Raum 1") {
                return (
                    <table style={styleTable}>
                        <tbody>
                            <tr>
                                <td colSpan={xMax.toString()}>
                                    <Button name={"1Kursplan Vom Sitzplan"} handleClick={this.props.handleClick} beschriftung={"Kursplan"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                    <Button name={"Raumwechsel"} handleClick={this.props.handleClick} beschriftung={this.props.raum} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={70} minHeight={40} />
                                    <Button name={"Format Sitzordnung"} handleClick={this.props.handleClick} beschriftung={this.props.kurs.formatSitzordnung.toString().substring(0, 4)} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={70} minHeight={40} />
                                    <Button name={"Sitzplätze Aktivieren"} handleClick={this.props.handleClick} beschriftung={"Sitzplätze aktivieren"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={this.props.sitzplaetzeAktivieren} minWidth={144} minHeight={40} />
                                    <Button name={"Schülerzuweisungen"} handleClick={this.props.handleClick} beschriftung={this.props.sitzplanModus} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                    <Button name={"Sitzordnung Flippen"} handleClick={this.props.handleClick} beschriftung={"Sitzordnung flippen"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                    <Button name={"Schüler Aktivieren"} handleClick={this.props.handleClick} beschriftung={"Schüler aktivieren"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={this.props.schuelerAktivieren} minWidth={144} minHeight={40} />
                                    <span>&nbsp;</span>
                                    <Select name={"Schüler Wahl"} handleChange={this.props.handleChange} value={this.props.indexSchueler} options={optionsSchuelerWahl} optionsBeschriftung={optionsBeschriftungSchuelerWahl} selectDisabled={false} selectVisible={true} selectAppearance={false} textAlign="left" fontWeight="normal" color="black" minWidth={82} maxWidth={82} />
                                </td>
                            </tr>
                            {dargestellteSitzplaetze}
                        </tbody>
                    </table>
                );
            }
            else if (this.props.raum === "Raum 2") {
                return (
                    <table style={styleTable}>
                        <tbody>
                            <tr>
                                <td colSpan={xMax.toString()}>
                                    <Button name={"1Kursplan Vom Sitzplan"} handleClick={this.props.handleClick} beschriftung={"Kursplan"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                    <Button name={"Raumwechsel"} handleClick={this.props.handleClick} beschriftung={this.props.raum} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={70} minHeight={40} />
                                    <Button name={"Format Sitzordnung"} handleClick={this.props.handleClick} beschriftung={this.props.kurs.formatSitzordnung2.toString().substring(0, 4)} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={70} minHeight={40} />
                                    <Button name={"Sitzplätze Aktivieren"} handleClick={this.props.handleClick} beschriftung={"Sitzplätze aktivieren"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={this.props.sitzplaetzeAktivieren} minWidth={144} minHeight={40} />
                                    <Button name={"Schülerzuweisungen"} handleClick={this.props.handleClick} beschriftung={this.props.sitzplanModus} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                    <Button name={"Sitzordnung Flippen"} handleClick={this.props.handleClick} beschriftung={"Sitzordnung flippen"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                    <Button name={"Schüler Aktivieren"} handleClick={this.props.handleClick} beschriftung={"Schüler aktivieren"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={this.props.schuelerAktivieren} minWidth={144} minHeight={40} />
                                    <span>&nbsp;</span>
                                    <Select name={"Schüler Wahl"} handleChange={this.props.handleChange} value={this.props.indexSchueler} options={optionsSchuelerWahl} optionsBeschriftung={optionsBeschriftungSchuelerWahl} selectDisabled={false} selectVisible={true} selectAppearance={false} textAlign="left" fontWeight="normal" color="black" minWidth={82} maxWidth={82} />
                                </td>
                            </tr>
                            {dargestellteSitzplaetze}
                        </tbody>
                    </table>
                );
            }
        }
        else if (this.props.sitzplanModus === "Sitzordnungen") {
            if (this.props.raum === "Raum 1") {
                return (
                    <table style={styleTable}>
                        <tbody>
                            <tr>
                                <td colSpan={xMax.toString()}>
                                    <Button name={"1Kursplan Vom Sitzplan"} handleClick={this.props.handleClick} beschriftung={"Kursplan"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                    <Button name={"Raumwechsel"} handleClick={this.props.handleClick} beschriftung={this.props.raum} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={70} minHeight={40} />
                                    <Button name={"Format Sitzordnung"} handleClick={this.props.handleClick} beschriftung={this.props.kurs.formatSitzordnung.toString().substring(0, 4)} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={70} minHeight={40} />
                                    <Button name={"Sitzplätze Aktivieren"} handleClick={this.props.handleClick} beschriftung={"Sitzplätze aktivieren"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={this.props.sitzplaetzeAktivieren} minWidth={144} minHeight={40} />
                                    <Button name={"Schülerzuweisungen"} handleClick={this.props.handleClick} beschriftung={this.props.sitzplanModus} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                    <Button name={"Sitzordnung Laden"} handleClick={this.props.handleClick} beschriftung={"Sitzordnung laden"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                    <Button name={"Sitzordnung Speichern"} handleClick={this.props.handleClick} beschriftung={"Sitzordnung speichern"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                    <span>&nbsp;</span>
                                    <Select name={"Sitzordnungen Wahl"} handleChange={this.props.handleChange} value={this.props.indexSitzordnungen} options={this.props.sitzordnungen.map((x, index) => index)} optionsBeschriftung={this.props.sitzordnungen.map((x, index) => this.props.sitzordnungen[index].nameSitzordnung)} selectDisabled={false} selectVisible={true} selectAppearance={false} textAlign="left" fontWeight="normal" color="black" minWidth={40} maxWidth={40} />
                                    <span>&nbsp;</span>
                                    <Input name={"Sitzordnungen Eingabe"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.nameSitzordnung} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="left" fontWeight="normal" color="black" minWidth={40} maxWidth={40} />
                                </td>
                            </tr>
                            {dargestellteSitzplaetze}
                        </tbody>
                    </table>
                );
            }
            else if (this.props.raum === "Raum 2") {
                return (
                    <table style={styleTable}>
                        <tbody>
                            <tr>
                                <td colSpan={xMax.toString()}>
                                    <Button name={"1Kursplan Vom Sitzplan"} handleClick={this.props.handleClick} beschriftung={"Kursplan"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                    <Button name={"Raumwechsel"} handleClick={this.props.handleClick} beschriftung={this.props.raum} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={70} minHeight={40} />
                                    <Button name={"Format Sitzordnung"} handleClick={this.props.handleClick} beschriftung={this.props.kurs.formatSitzordnung2.toString().substring(0, 4)} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={70} minHeight={40} />
                                    <Button name={"Sitzplätze Aktivieren"} handleClick={this.props.handleClick} beschriftung={"Sitzplätze aktivieren"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={this.props.sitzplaetzeAktivieren} minWidth={144} minHeight={40} />
                                    <Button name={"Schülerzuweisungen"} handleClick={this.props.handleClick} beschriftung={this.props.sitzplanModus} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                    <Button name={"Sitzordnung Laden"} handleClick={this.props.handleClick} beschriftung={"Sitzordnung laden"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                    <Button name={"Sitzordnung Speichern"} handleClick={this.props.handleClick} beschriftung={"Sitzordnung speichern"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                    <span>&nbsp;</span>
                                    <Select name={"Sitzordnungen Wahl"} handleChange={this.props.handleChange} value={this.props.indexSitzordnungen} options={this.props.sitzordnungen.map((x, index) => index)} optionsBeschriftung={this.props.sitzordnungen.map((x, index) => this.props.sitzordnungen[index].nameSitzordnung)} selectDisabled={false} selectVisible={true} selectAppearance={false} textAlign="left" fontWeight="normal" color="black" minWidth={40} maxWidth={40} />
                                    <span>&nbsp;</span>
                                    <Input name={"Sitzordnungen Eingabe"} handleChange={this.props.handleChange} eingabewert={this.props.kurs.nameSitzordnung} inputDisabled={false} inputVisible={true} inputAppearance={true} textAlign="left" fontWeight="normal" color="black" minWidth={40} maxWidth={40} />
                                </td>
                            </tr>
                            {dargestellteSitzplaetze}
                        </tbody>
                    </table>
                );
            }
        }
    }
}