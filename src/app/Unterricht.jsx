import React from "react";
import { Sitzplatz } from "./Sitzplatz";
import { Button } from "./Button";
import { Select } from "./Select";

export class Unterricht extends React.PureComponent {
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
        let index = 0;
        let dargestellteSitzplaetze = [];
        let dargestellteSitzplaetzeZeile;
        let sitzplatzVisible;
        let checkboxDisabled;
        let indexSchueler;
        let sitzplatzDisabled;
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
                sitzplatzVisible = false;
                checkboxDisabled = true;
                indexSchueler = false;
                if (this.props.raum === "Raum 1") {
                    sitzplatzVisible = this.props.kurs.sitzplaetze[index].aktiv;
                    indexSchueler = this.props.kurs.sitzplaetze[index].schueler;
                }
                else if (this.props.raum === "Raum 2") {
                    sitzplatzVisible = this.props.kurs.sitzplaetze2[index].aktiv;
                    indexSchueler = this.props.kurs.sitzplaetze2[index].schueler;
                }
                if (indexSchueler < 0) {
                    sitzplatzDisabled = true;
                    schuelername = "Leerer Platz";
                    schuelernameFarbe = "black";
                    stricheFarbe = "black";
                    stricheGewertet = 0;
                    minitest = false;
                    stricheMinitest = 0;
                    stricheMuendlich = 0;
                }
                else if (indexSchueler === 99) {
                    sitzplatzDisabled = false;
                    schuelername = "Lehrer";
                    schuelernameFarbe = "black";
                    stricheFarbe = "black";
                    stricheGewertet = 0;
                    minitest = false;
                    stricheMinitest = 0;
                    stricheMuendlich = 0;
                }
                else {
                    if (this.props.kurs.schueler[indexSchueler].anwesenheit[this.props.quartal - 1][this.props.indexUnterricht].length === this.props.kurs.unterricht[this.props.quartal - 1][this.props.indexUnterricht].dauerIst) {
                        sitzplatzDisabled = true;
                    }
                    else {
                        sitzplatzDisabled = false;
                    }
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
        let stricheHeute = 0;
        for (let i = 0; i < this.props.kurs.schueler.length - 1; i++) {
            stricheHeute = stricheHeute + this.props.kurs.schueler[i].stricheMuendlich[this.props.quartal - 1][this.props.indexUnterricht];
        }
        let minitestQuoteHeute = this.props.kurs.unterricht[this.props.quartal - 1][this.props.indexUnterricht].minitestQuote;
        let minitestQuoteQuartal = this.props.kurs.minitestQuote[this.props.quartal - 1];
        let anzeige;
        if (this.props.kurs.unterricht[this.props.quartal - 1][this.props.indexUnterricht].stricheMinitestErreichbar === 0) {
            anzeige = " Striche: " + stricheHeute.toString();
        }
        else {
            anzeige = " Heute: " + minitestQuoteHeute + "%  Quartal: " + minitestQuoteQuartal + "%";
        }
        return (
            <table style={styleTable}>
                <tbody>
                    <tr>
                        <td colSpan={xMax.toString()}>
                            <Button name={"Kursplan"} handleClick={this.props.handleClick} beschriftung={"Kursplan"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                            <Button name={"Raumwechsel"} handleClick={this.props.handleClick} beschriftung={this.props.raum} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={70} minHeight={40} />
                            <Button name={"Markieren"} handleClick={this.props.handleClick} beschriftung={"Markiert"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={this.props.unterrichtModus === "Markieren"} minWidth={70} minHeight={40} />
                            <Button name={"Strich Plus"} handleClick={this.props.handleClick} beschriftung={"+"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={this.props.unterrichtModus === "Strich Plus"} minWidth={70} minHeight={40} />
                            <Button name={"Strich Minus"} handleClick={this.props.handleClick} beschriftung={"-"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={this.props.unterrichtModus === "Strich Minus"} minWidth={70} minHeight={40} />
                            <Button name={"Defizit Plus"} handleClick={this.props.handleClick} beschriftung={"6+"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={this.props.unterrichtModus === "Defizit Plus"} minWidth={70} minHeight={40} />
                            <Button name={"Defizit Minus"} handleClick={this.props.handleClick} beschriftung={"6-"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={this.props.unterrichtModus === "Defizit Minus"} minWidth={70} minHeight={40} />
                            <span>&nbsp;</span>
                            <Select name={"Minitest Wahl"} handleChange={this.props.handleChange} value={this.props.kurs.unterricht[this.props.quartal - 1][this.props.indexUnterricht].stricheMinitestErreichbar} options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]} optionsBeschriftung={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]} selectDisabled={false} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={20} maxWidth={20} />
                            <span>&nbsp;</span>
                            <Button name={"Minitest"} handleClick={this.props.handleClick} beschriftung={"M"} buttonDisabled={this.props.kurs.unterricht[this.props.quartal - 1][this.props.indexUnterricht].stricheMinitestErreichbar === 0} buttonVisible={true} buttonAppearance={true} buttonRot={this.props.unterrichtModus === "Minitest"} minWidth={70} minHeight={40} />
                            <Button name={"Minitest Plus"} handleClick={this.props.handleClick} beschriftung={"M+"} buttonDisabled={this.props.kurs.unterricht[this.props.quartal - 1][this.props.indexUnterricht].stricheMinitestErreichbar === 0} buttonVisible={true} buttonAppearance={true} buttonRot={this.props.unterrichtModus === "Minitest Plus"} minWidth={70} minHeight={40} />
                            <Button name={"Minitest Minus"} handleClick={this.props.handleClick} beschriftung={"M-"} buttonDisabled={this.props.kurs.unterricht[this.props.quartal - 1][this.props.indexUnterricht].stricheMinitestErreichbar === 0} buttonVisible={true} buttonAppearance={true} buttonRot={this.props.unterrichtModus === "Minitest Minus"} minWidth={70} minHeight={40} />
                            <span>&nbsp;{anzeige}</span>
                        </td>
                    </tr>
                    {dargestellteSitzplaetze}
                </tbody>
            </table>
        );
    }
}