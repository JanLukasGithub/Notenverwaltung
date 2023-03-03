import React from "react";
import "./Kursplan.css";
import { Button } from "./Button";
import { Select } from "./Select";
import { Checkbox } from "./Checkbox";

export class Kursplan extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleClickBemerkungen1 = this.props.handleClickBemerkungen.bind(this, 1);
        this.handleClickBemerkungen2 = this.props.handleClickBemerkungen.bind(this, 2);
    }

    render() {
        const laengeInhalt = 220;
        const laengeDatum = 36;
        const laengeDauer = 22;
        const laengeName = 180;
        const laengeKursmappe = 135;
        const laengeStriche = 125;
        const hoehe = 22;
        const rand = 2;
        const breiteLeer = 2;
        const hoeheLeer = hoehe / 2;
        const styleTable = { borderCollapse: "collapse", width: "*", height: "*", tableLayout: "fixed" };
        const styleUeberblick = { border: "1px solid White", width: "*", height: "*", textAlign: "left", verticalAlign: "top", paddingLeft: String(rand) + "px" };
        const styleNote = { border: "1px double Black", width: hoehe, height: 2 * laengeInhalt + laengeDatum + 2 * laengeDauer + 36 };
        const styleNoteBorderless = { border: "1px solid White", width: breiteLeer, height: 2 * laengeInhalt + laengeDatum + 2 * laengeDauer + 36 };
        const styleInhalt = { border: "1px double Black", width: hoehe, height: laengeInhalt };
        const styleDatum = { border: "1px double Black", width: hoehe, height: laengeDatum };
        const styleDauer = { border: "1px double Black", width: hoehe, height: laengeDauer };
        const styleName = { border: "1px double Black", width: laengeName, height: hoehe };
        const styleNameLeer = { border: "1px solid White", width: laengeName, height: hoeheLeer };
        const styleZelle = { border: "1px double Black", width: hoehe, height: hoehe };
        const styleZelleBorderless = { border: "1px solid White", backgroundColor: "White", width: breiteLeer, height: hoehe };
        const styleUnterrichtSoll = { borderTop: "1px double Black", borderBottom: "1px solid White", borderLeft: "1px double Black", borderRight: "1px double Black", width: 2 * hoehe, height: hoehe };
        const styleUnterrichtIst = { borderTop: "1px solid White", borderBottom: "1px double Black", borderLeft: "1px double Black", borderRight: "1px double Black", width: 2 * hoehe, height: hoehe };
        const styleZelleLeer = { border: "1px solid White", width: hoehe, height: hoeheLeer };
        const styleZelleLeerBorderless = { border: "1px solid White", width: breiteLeer, height: hoeheLeer };
        const styleDivNote = { width: hoehe - 2 * rand, height: 2 * laengeInhalt + laengeDatum + 3 * laengeDauer - 2 * rand, overflow: "hidden", whiteSpace: "nowrap", fontSize: "0.8em", writingMode: "vertical-rl", transform: "rotate(180deg)", marginLeft: String(1.5 * rand) + "px", marginBottom: String(0 * rand) + "px" };
        const styleDivInhalt = { width: hoehe - 2 * rand, height: laengeInhalt - 2 * rand, overflow: "hidden", whiteSpace: "nowrap", fontSize: "0.8em", writingMode: "vertical-rl", transform: "rotate(180deg)", marginLeft: String(1.5 * rand) + "px", marginBottom: String(0 * rand) + "px" };
        const styleDivDatum = { width: hoehe - 2 * rand, height: laengeDatum - 2 * rand, overflow: "hidden", whiteSpace: "nowrap", fontSize: "0.8em", writingMode: "vertical-rl", transform: "rotate(180deg)", marginLeft: String(1.5 * rand) + "px", marginBottom: String(0 * rand) + "px" };
        const styleDivDauer = { width: hoehe - 2 * rand, height: laengeDauer - 2 * rand, overflow: "hidden", whiteSpace: "nowrap", transform: "rotate(-90deg)", marginLeft: String(0 * rand) + "px", marginBottom: String(-1 * rand) + "px" };
        const styleDivName = { width: laengeName - 2 * rand, height: hoehe - 1 * rand, overflow: "hidden", whiteSpace: "nowrap", marginLeft: String(1 * rand) + "px", marginBottom: String(0.5 * rand) + "px" };
        const styleDivZelle = { width: hoehe - 0 * rand, height: hoehe - 2 * rand, overflow: "hidden", whiteSpace: "nowrap", marginLeft: String(-0.5 * rand) + "px", marginBottom: String(2 * rand) + "px" };
        const styleDivZelleCheckbox = { width: hoehe - 0 * rand, height: hoehe - 1 * rand, overflow: "hidden", whiteSpace: "nowrap", marginLeft: String(0.5 * rand) + "px", marginBottom: String(1 * rand) + "px" };
        const styleDivZelleBemerkungen = { minwidth: hoehe - 0 * rand, height: hoehe - 1 * rand, overflow: "hidden", whiteSpace: "nowrap", marginLeft: String(1 * rand) + "px", marginBottom: String(0.5 * rand) + "px" };
        const styleDivUnterrichtStunden = { width: 2 * hoehe - 0 * rand, height: hoehe - 2 * rand, overflow: "hidden", whiteSpace: "nowrap", fontSize: "0.8em", marginLeft: String(0.5 * rand) + "px", marginBottom: String(-1.5 * rand) + "px" };
        const styleSpanDatumwahl = { width: laengeDatum - 0 * rand + 24, height: hoehe - 2 * rand, overflow: "hidden", whiteSpace: "nowrap", marginLeft: String(1 * rand) + "px", marginBottom: String(-1.5 * rand) + "px", display: "inline-block" };
        const styleSpanKursmappewahl = { width: laengeKursmappe - 2 * rand, height: hoehe - 2 * rand, overflow: "hidden", whiteSpace: "nowrap", marginLeft: String(1 * rand) + "px", marginBottom: String(-2 * rand) + "px", display: "inline-block" };
        const styleSpanStrichewahl = { width: laengeStriche - 2 * rand, height: hoehe - 2 * rand, overflow: "hidden", whiteSpace: "nowrap", marginLeft: String(1 * rand) + "px", marginBottom: String(-2 * rand) + "px", display: "inline-block" };
        let styleNoteQuote;
        let styleZelleQuote;
        let styleZelleLeerQuote;
        let styleNoteLeer;
        let styleNoteLeerZelle;
        let styleNoteLeerZelleLeer;
        let styleKlausurfach1;
        let styleKlausurfach1Zelle;
        let styleKlausurfach1ZelleLeer;
        let styleKlausurnoten11;
        let styleKlausurnoten11Zelle;
        let styleKlausurnoten11ZelleLeer;
        let styleKlausurnoten12;
        let styleKlausurnoten12Zelle;
        let styleKlausurnoten12ZelleLeer;
        let styleKlausurnoten13;
        let styleKlausurnoten13Zelle;
        let styleKlausurnoten13ZelleLeer;
        let styleKlausurnoteHJ1;
        let styleKlausurnoteHJ1Zelle;
        let styleKlausurnoteHJ1ZelleLeer;
        let styleKlausurenLeer;
        let styleKlausurenLeerZelle;
        let styleKlausurenLeerZelleLeer;
        let styleSominoten1;
        let styleSominoten1Zelle;
        let styleSominoten1ZelleLeer;
        let styleSominoten2;
        let styleSominoten2Zelle;
        let styleSominoten2ZelleLeer;
        let styleSominoteHJ1;
        let styleSominoteHJ1Zelle;
        let styleSominoteHJ1ZelleLeer;
        let styleZeugnisnoteHJ1;
        let styleZeugnisnoteHJ1Zelle;
        let styleZeugnisnoteHJ1ZelleLeer;
        let styleZeugnisnoteHJPunkte1;
        let styleZeugnisnoteHJPunkte1Zelle;
        let styleZeugnisnoteHJPunkte1ZelleLeer;
        let styleFehlstundenG1;
        let styleFehlstundenG1Zelle;
        let styleFehlstundenG1ZelleLeer;
        let styleFehlstundenU1;
        let styleFehlstundenU1Zelle;
        let styleFehlstundenU1ZelleLeer;
        let styleFehlstundenG2;
        let styleFehlstundenG2Zelle;
        let styleFehlstundenG2ZelleLeer;
        let styleFehlstundenU2;
        let styleFehlstundenU2Zelle;
        let styleFehlstundenU2ZelleLeer;
        let styleFehlstundenGHJ1;
        let styleFehlstundenGHJ1Zelle;
        let styleFehlstundenGHJ1ZelleLeer;
        let styleFehlstundenUHJ1;
        let styleFehlstundenUHJ1Zelle;
        let styleFehlstundenUHJ1ZelleLeer;
        let styleTestnoten11;
        let styleTestnoten11Zelle;
        let styleTestnoten11ZelleLeer;
        let styleTestnoten12;
        let styleTestnoten12Zelle;
        let styleTestnoten12ZelleLeer;
        let styleTestnoten21;
        let styleTestnoten21Zelle;
        let styleTestnoten21ZelleLeer;
        let styleTestnoten22;
        let styleTestnoten22Zelle;
        let styleTestnoten22ZelleLeer;
        let styleReferatnoten11;
        let styleReferatnoten11Zelle;
        let styleReferatnoten11ZelleLeer;
        let styleReferatnoten12;
        let styleReferatnoten12Zelle;
        let styleReferatnoten12ZelleLeer;
        let styleReferatnoten21;
        let styleReferatnoten21Zelle;
        let styleReferatnoten21ZelleLeer;
        let styleReferatnoten22;
        let styleReferatnoten22Zelle;
        let styleReferatnoten22ZelleLeer;
        let styleBemerkungen1;
        let styleBemerkungen1Zelle;
        let styleBemerkungen1ZelleLeer;
        let styleKlausurfach2;
        let styleKlausurfach2Zelle;
        let styleKlausurfach2ZelleLeer;
        let styleKlausurnoten21;
        let styleKlausurnoten21Zelle;
        let styleKlausurnoten21ZelleLeer;
        let styleKlausurnoten22;
        let styleKlausurnoten22Zelle;
        let styleKlausurnoten22ZelleLeer;
        let styleKlausurnoten23;
        let styleKlausurnoten23Zelle;
        let styleKlausurnoten23ZelleLeer;
        let styleKlausurnoteHJ2;
        let styleKlausurnoteHJ2Zelle;
        let styleKlausurnoteHJ2ZelleLeer;
        let styleSominoten3;
        let styleSominoten3Zelle;
        let styleSominoten3ZelleLeer;
        let styleSominoten4;
        let styleSominoten4Zelle;
        let styleSominoten4ZelleLeer;
        let styleSominoteHJ2;
        let styleSominoteHJ2Zelle;
        let styleSominoteHJ2ZelleLeer;
        let styleZeugnisnoteHJ2;
        let styleZeugnisnoteHJ2Zelle;
        let styleZeugnisnoteHJ2ZelleLeer;
        let styleZeugnisnoteHJPunkte2;
        let styleZeugnisnoteHJPunkte2Zelle;
        let styleZeugnisnoteHJPunkte2ZelleLeer;
        let styleZeugnisnoteSJ;
        let styleZeugnisnoteSJZelle;
        let styleZeugnisnoteSJZelleLeer;
        let styleFehlstundenG3;
        let styleFehlstundenG3Zelle;
        let styleFehlstundenG3ZelleLeer;
        let styleFehlstundenU3;
        let styleFehlstundenU3Zelle;
        let styleFehlstundenU3ZelleLeer;
        let styleFehlstundenG4;
        let styleFehlstundenG4Zelle;
        let styleFehlstundenG4ZelleLeer;
        let styleFehlstundenU4;
        let styleFehlstundenU4Zelle;
        let styleFehlstundenU4ZelleLeer;
        let styleFehlstundenGHJ2;
        let styleFehlstundenGHJ2Zelle;
        let styleFehlstundenGHJ2ZelleLeer;
        let styleFehlstundenUHJ2;
        let styleFehlstundenUHJ2Zelle;
        let styleFehlstundenUHJ2ZelleLeer;
        let styleTestnoten31;
        let styleTestnoten31Zelle;
        let styleTestnoten31ZelleLeer;
        let styleTestnoten32;
        let styleTestnoten32Zelle;
        let styleTestnoten32ZelleLeer;
        let styleTestnoten41;
        let styleTestnoten41Zelle;
        let styleTestnoten41ZelleLeer;
        let styleTestnoten42;
        let styleTestnoten42Zelle;
        let styleTestnoten42ZelleLeer;
        let styleReferatnoten31;
        let styleReferatnoten31Zelle;
        let styleReferatnoten31ZelleLeer;
        let styleReferatnoten32;
        let styleReferatnoten32Zelle;
        let styleReferatnoten32ZelleLeer;
        let styleReferatnoten41;
        let styleReferatnoten41Zelle;
        let styleReferatnoten41ZelleLeer;
        let styleReferatnoten42;
        let styleReferatnoten42Zelle;
        let styleReferatnoten42ZelleLeer;
        let styleBemerkungen2;
        let styleBemerkungen2Zelle;
        let styleBemerkungen2ZelleLeer;
        let indexLeer;
        let dargestellteSchueler;
        let dargestellteAnwesenheitLeer;
        let dargestellteAnwesenheit;
        let indexAnwesenheitString;
        let dargestellteStricheLeer;
        let dargestellteStriche;
        let indexStricheString;
        let colorG1;
        let colorU1;
        let colorG2;
        let colorU2;
        let colorGHJ1;
        let colorUHJ1;
        let colorG3;
        let colorU3;
        let colorG4;
        let colorU4;
        let colorGHJ2;
        let colorUHJ2;
        let dargestellteHausaufgaben;
        let dargestellteStundenthemen;
        let dargestellteDaten;
        let dargestellteDauerSoll;
        let dargestellteDauerIst;
        let dargestellteDauerStriche;
        if (this.props.ansicht === "Striche") {
            if (this.props.kurs.minitestQuote[this.props.quartal - 1] === 0) {
                styleNoteQuote = { display: "none" };
                styleZelleQuote = { display: "none" };
                styleZelleLeerQuote = { display: "none" };
            }
            else {
                styleNoteQuote = styleNote;
                styleZelleQuote = styleZelle;
                styleZelleLeerQuote = styleZelleLeer;
            }
        }
        else if (this.props.ansicht === "Noten" && this.props.halbjahr === 1) {
            styleNoteLeer = styleNoteBorderless;
            styleNoteLeerZelle = styleZelleBorderless;
            styleNoteLeerZelleLeer = styleZelleLeerBorderless;
            if (this.props.kurs.klausuren[0] === 0) {
                styleKlausurfach1 = { display: "none" };
                styleKlausurfach1Zelle = { display: "none" };
                styleKlausurfach1ZelleLeer = { display: "none" };
                styleKlausurnoten11 = { display: "none" };
                styleKlausurnoten11Zelle = { display: "none" };
                styleKlausurnoten11ZelleLeer = { display: "none" };
                styleKlausurnoten12 = { display: "none" };
                styleKlausurnoten12Zelle = { display: "none" };
                styleKlausurnoten12ZelleLeer = { display: "none" };
                styleKlausurnoten13 = { display: "none" };
                styleKlausurnoten13Zelle = { display: "none" };
                styleKlausurnoten13ZelleLeer = { display: "none" };
                styleKlausurnoteHJ1 = { display: "none" };
                styleKlausurnoteHJ1Zelle = { display: "none" };
                styleKlausurnoteHJ1ZelleLeer = { display: "none" };
                styleKlausurenLeer = { display: "none" };
                styleKlausurenLeerZelle = { display: "none" };
                styleKlausurenLeerZelleLeer = { display: "none" };
            }
            else if (this.props.kurs.klausuren[0] === 1) {
                styleKlausurfach1 = styleNote;
                styleKlausurfach1Zelle = styleZelle;
                styleKlausurfach1ZelleLeer = styleZelleLeer;
                styleKlausurnoten11 = styleNote;
                styleKlausurnoten11Zelle = styleZelle;
                styleKlausurnoten11ZelleLeer = styleZelleLeer;
                styleKlausurnoten12 = { display: "none" };
                styleKlausurnoten12Zelle = { display: "none" };
                styleKlausurnoten12ZelleLeer = { display: "none" };
                styleKlausurnoten13 = { display: "none" };
                styleKlausurnoten13Zelle = { display: "none" };
                styleKlausurnoten13ZelleLeer = { display: "none" };
                styleKlausurnoteHJ1 = styleNote;
                styleKlausurnoteHJ1Zelle = styleZelle;
                styleKlausurnoteHJ1ZelleLeer = styleZelleLeer;
                styleKlausurenLeer = styleNoteBorderless;
                styleKlausurenLeerZelle = styleZelleBorderless;
                styleKlausurenLeerZelleLeer = styleZelleLeerBorderless;
            }
            else if (this.props.kurs.klausuren[0] === 2) {
                styleKlausurfach1 = styleNote;
                styleKlausurfach1Zelle = styleZelle;
                styleKlausurfach1ZelleLeer = styleZelleLeer;
                styleKlausurnoten11 = styleNote;
                styleKlausurnoten11Zelle = styleZelle;
                styleKlausurnoten11ZelleLeer = styleZelleLeer;
                styleKlausurnoten12 = styleNote;
                styleKlausurnoten12Zelle = styleZelle;
                styleKlausurnoten12ZelleLeer = styleZelleLeer;
                styleKlausurnoten13 = { display: "none" };
                styleKlausurnoten13Zelle = { display: "none" };
                styleKlausurnoten13ZelleLeer = { display: "none" };
                styleKlausurnoteHJ1 = styleNote;
                styleKlausurnoteHJ1Zelle = styleZelle;
                styleKlausurnoteHJ1ZelleLeer = styleZelleLeer;
                styleKlausurenLeer = styleNoteBorderless;
                styleKlausurenLeerZelle = styleZelleBorderless;
                styleKlausurenLeerZelleLeer = styleZelleLeerBorderless;
            }
            else if (this.props.kurs.klausuren[0] === 3) {
                styleKlausurfach1 = styleNote;
                styleKlausurfach1Zelle = styleZelle;
                styleKlausurfach1ZelleLeer = styleZelleLeer;
                styleKlausurnoten11 = styleNote;
                styleKlausurnoten11Zelle = styleZelle;
                styleKlausurnoten11ZelleLeer = styleZelleLeer;
                styleKlausurnoten12 = styleNote;
                styleKlausurnoten12Zelle = styleZelle;
                styleKlausurnoten12ZelleLeer = styleZelleLeer;
                styleKlausurnoten13 = styleNote;
                styleKlausurnoten13Zelle = styleZelle;
                styleKlausurnoten13ZelleLeer = styleZelleLeer;
                styleKlausurnoteHJ1 = styleNote;
                styleKlausurnoteHJ1Zelle = styleZelle;
                styleKlausurnoteHJ1ZelleLeer = styleZelleLeer;
                styleKlausurenLeer = styleNoteBorderless;
                styleKlausurenLeerZelle = styleZelleBorderless;
                styleKlausurenLeerZelleLeer = styleZelleLeerBorderless;
            }
            styleSominoten1 = styleNote;
            styleSominoten1Zelle = styleZelle;
            styleSominoten1ZelleLeer = styleZelleLeer;
            styleSominoten2 = styleNote;
            styleSominoten2Zelle = styleZelle;
            styleSominoten2ZelleLeer = styleZelleLeer;
            styleSominoteHJ1 = styleNote;
            styleSominoteHJ1Zelle = styleZelle;
            styleSominoteHJ1ZelleLeer = styleZelleLeer;
            styleZeugnisnoteHJ1 = styleNote;
            styleZeugnisnoteHJ1Zelle = styleZelle;
            styleZeugnisnoteHJ1ZelleLeer = styleZelleLeer;
            if (this.props.kurs.jahrgangsstufe.substring(0, 1) === "Q") {
                styleZeugnisnoteHJPunkte1 = styleNote;
                styleZeugnisnoteHJPunkte1Zelle = styleZelle;
                styleZeugnisnoteHJPunkte1ZelleLeer = styleZelleLeer;
            }
            else {
                styleZeugnisnoteHJPunkte1 = { display: "none" };
                styleZeugnisnoteHJPunkte1Zelle = { display: "none" };
                styleZeugnisnoteHJPunkte1ZelleLeer = { display: "none" };
            }
            styleFehlstundenG1 = styleNote;
            styleFehlstundenG1Zelle = styleZelle;
            styleFehlstundenG1ZelleLeer = styleZelleLeer;
            styleFehlstundenU1 = styleNote;
            styleFehlstundenU1Zelle = styleZelle;
            styleFehlstundenU1ZelleLeer = styleZelleLeer;
            styleFehlstundenG2 = styleNote;
            styleFehlstundenG2Zelle = styleZelle;
            styleFehlstundenG2ZelleLeer = styleZelleLeer;
            styleFehlstundenU2 = styleNote;
            styleFehlstundenU2Zelle = styleZelle;
            styleFehlstundenU2ZelleLeer = styleZelleLeer;
            styleFehlstundenGHJ1 = styleNote;
            styleFehlstundenGHJ1Zelle = styleZelle;
            styleFehlstundenGHJ1ZelleLeer = styleZelleLeer;
            styleFehlstundenUHJ1 = styleNote;
            styleFehlstundenUHJ1Zelle = styleZelle;
            styleFehlstundenUHJ1ZelleLeer = styleZelleLeer;
            if (this.props.kurs.tests[0] > 0) {
                styleTestnoten11 = styleNote;
                styleTestnoten11Zelle = styleZelle;
                styleTestnoten11ZelleLeer = styleZelleLeer;
            }
            else {
                styleTestnoten11 = { display: "none" };
                styleTestnoten11Zelle = { display: "none" };
                styleTestnoten11ZelleLeer = { display: "none" };
            }
            if (this.props.kurs.tests[0] > 1) {
                styleTestnoten12 = styleNote;
                styleTestnoten12Zelle = styleZelle;
                styleTestnoten12ZelleLeer = styleZelleLeer;
            }
            else {
                styleTestnoten12 = { display: "none" };
                styleTestnoten12Zelle = { display: "none" };
                styleTestnoten12ZelleLeer = { display: "none" };
            }
            if (this.props.kurs.tests[1] > 0) {
                styleTestnoten21 = styleNote;
                styleTestnoten21Zelle = styleZelle;
                styleTestnoten21ZelleLeer = styleZelleLeer;
            }
            else {
                styleTestnoten21 = { display: "none" };
                styleTestnoten21Zelle = { display: "none" };
                styleTestnoten21ZelleLeer = { display: "none" };
            }
            if (this.props.kurs.tests[1] > 1) {
                styleTestnoten22 = styleNote;
                styleTestnoten22Zelle = styleZelle;
                styleTestnoten22ZelleLeer = styleZelleLeer;
            }
            else {
                styleTestnoten22 = { display: "none" };
                styleTestnoten22Zelle = { display: "none" };
                styleTestnoten22ZelleLeer = { display: "none" };
            }
            if (this.props.kurs.referate[0] > 0) {
                styleReferatnoten11 = styleNote;
                styleReferatnoten11Zelle = styleZelle;
                styleReferatnoten11ZelleLeer = styleZelleLeer;
            }
            else {
                styleReferatnoten11 = { display: "none" };
                styleReferatnoten11Zelle = { display: "none" };
                styleReferatnoten11ZelleLeer = { display: "none" };
            }
            if (this.props.kurs.referate[0] > 1) {
                styleReferatnoten12 = styleNote;
                styleReferatnoten12Zelle = styleZelle;
                styleReferatnoten12ZelleLeer = styleZelleLeer;
            }
            else {
                styleReferatnoten12 = { display: "none" };
                styleReferatnoten12Zelle = { display: "none" };
                styleReferatnoten12ZelleLeer = { display: "none" };
            }
            if (this.props.kurs.referate[1] > 0) {
                styleReferatnoten21 = styleNote;
                styleReferatnoten21Zelle = styleZelle;
                styleReferatnoten21ZelleLeer = styleZelleLeer;
            }
            else {
                styleReferatnoten21 = { display: "none" };
                styleReferatnoten21Zelle = { display: "none" };
                styleReferatnoten21ZelleLeer = { display: "none" };
            }
            if (this.props.kurs.referate[1] > 1) {
                styleReferatnoten22 = styleNote;
                styleReferatnoten22Zelle = styleZelle;
                styleReferatnoten22ZelleLeer = styleZelleLeer;
            }
            else {
                styleReferatnoten22 = { display: "none" };
                styleReferatnoten22Zelle = { display: "none" };
                styleReferatnoten22ZelleLeer = { display: "none" };
            }
            styleBemerkungen1 = styleNote;
            styleBemerkungen1Zelle = styleZelle;
            styleBemerkungen1ZelleLeer = styleZelleLeer;
        }
        else if (this.props.ansicht === "Noten" && this.props.halbjahr === 2) {
            styleNoteLeer = styleNoteBorderless;
            styleNoteLeerZelle = styleZelleBorderless;
            styleNoteLeerZelleLeer = styleZelleLeerBorderless;
            if (this.props.kurs.klausuren[1] === 0) {
                styleKlausurfach2 = { display: "none" };
                styleKlausurfach2Zelle = { display: "none" };
                styleKlausurfach2ZelleLeer = { display: "none" };
                styleKlausurnoten21 = { display: "none" };
                styleKlausurnoten21Zelle = { display: "none" };
                styleKlausurnoten21ZelleLeer = { display: "none" };
                styleKlausurnoten22 = { display: "none" };
                styleKlausurnoten22Zelle = { display: "none" };
                styleKlausurnoten22ZelleLeer = { display: "none" };
                styleKlausurnoten23 = { display: "none" };
                styleKlausurnoten23Zelle = { display: "none" };
                styleKlausurnoten23ZelleLeer = { display: "none" };
                styleKlausurnoteHJ2 = { display: "none" };
                styleKlausurnoteHJ2Zelle = { display: "none" };
                styleKlausurnoteHJ2ZelleLeer = { display: "none" };
                styleKlausurenLeer = { display: "none" };
                styleKlausurenLeerZelle = { display: "none" };
                styleKlausurenLeerZelleLeer = { display: "none" };
            }
            else if (this.props.kurs.klausuren[1] === 1) {
                styleKlausurfach2 = styleNote;
                styleKlausurfach2Zelle = styleZelle;
                styleKlausurfach2ZelleLeer = styleZelleLeer;
                styleKlausurnoten21 = styleNote;
                styleKlausurnoten21Zelle = styleZelle;
                styleKlausurnoten21ZelleLeer = styleZelleLeer;
                styleKlausurnoten22 = { display: "none" };
                styleKlausurnoten22Zelle = { display: "none" };
                styleKlausurnoten22ZelleLeer = { display: "none" };
                styleKlausurnoten23 = { display: "none" };
                styleKlausurnoten23Zelle = { display: "none" };
                styleKlausurnoten23ZelleLeer = { display: "none" };
                styleKlausurnoteHJ2 = styleNote;
                styleKlausurnoteHJ2Zelle = styleZelle;
                styleKlausurnoteHJ2ZelleLeer = styleZelleLeer;
                styleKlausurenLeer = styleNoteBorderless;
                styleKlausurenLeerZelle = styleZelleBorderless;
                styleKlausurenLeerZelleLeer = styleZelleLeerBorderless;
            }
            else if (this.props.kurs.klausuren[1] === 2) {
                styleKlausurfach2 = styleNote;
                styleKlausurfach2Zelle = styleZelle;
                styleKlausurfach2ZelleLeer = styleZelleLeer;
                styleKlausurnoten21 = styleNote;
                styleKlausurnoten21Zelle = styleZelle;
                styleKlausurnoten21ZelleLeer = styleZelleLeer;
                styleKlausurnoten22 = styleNote;
                styleKlausurnoten22Zelle = styleZelle;
                styleKlausurnoten22ZelleLeer = styleZelleLeer;
                styleKlausurnoten23 = { display: "none" };
                styleKlausurnoten23Zelle = { display: "none" };
                styleKlausurnoten23ZelleLeer = { display: "none" };
                styleKlausurnoteHJ2 = styleNote;
                styleKlausurnoteHJ2Zelle = styleZelle;
                styleKlausurnoteHJ2ZelleLeer = styleZelleLeer;
                styleKlausurenLeer = styleNoteBorderless;
                styleKlausurenLeerZelle = styleZelleBorderless;
                styleKlausurenLeerZelleLeer = styleZelleLeerBorderless;
            }
            else if (this.props.kurs.klausuren[1] === 3) {
                styleKlausurfach2 = styleNote;
                styleKlausurfach2Zelle = styleZelle;
                styleKlausurfach2ZelleLeer = styleZelleLeer;
                styleKlausurnoten21 = styleNote;
                styleKlausurnoten21Zelle = styleZelle;
                styleKlausurnoten21ZelleLeer = styleZelleLeer;
                styleKlausurnoten22 = styleNote;
                styleKlausurnoten22Zelle = styleZelle;
                styleKlausurnoten22ZelleLeer = styleZelleLeer;
                styleKlausurnoten23 = styleNote;
                styleKlausurnoten23Zelle = styleZelle;
                styleKlausurnoten23ZelleLeer = styleZelleLeer;
                styleKlausurnoteHJ2 = styleNote;
                styleKlausurnoteHJ2Zelle = styleZelle;
                styleKlausurnoteHJ2ZelleLeer = styleZelleLeer;
                styleKlausurenLeer = styleNoteBorderless;
                styleKlausurenLeerZelle = styleZelleBorderless;
                styleKlausurenLeerZelleLeer = styleZelleLeerBorderless;
            }
            styleSominoten3 = styleNote;
            styleSominoten3Zelle = styleZelle;
            styleSominoten3ZelleLeer = styleZelleLeer;
            styleSominoten4 = styleNote;
            styleSominoten4Zelle = styleZelle;
            styleSominoten4ZelleLeer = styleZelleLeer;
            styleSominoteHJ2 = styleNote;
            styleSominoteHJ2Zelle = styleZelle;
            styleSominoteHJ2ZelleLeer = styleZelleLeer;
            styleZeugnisnoteHJ2 = styleNote;
            styleZeugnisnoteHJ2Zelle = styleZelle;
            styleZeugnisnoteHJ2ZelleLeer = styleZelleLeer;
            if (this.props.kurs.jahrgangsstufe.substring(0, 1) === "Q") {
                styleZeugnisnoteHJPunkte2 = styleNote;
                styleZeugnisnoteHJPunkte2Zelle = styleZelle;
                styleZeugnisnoteHJPunkte2ZelleLeer = styleZelleLeer;
                styleZeugnisnoteSJ = { display: "none" };
                styleZeugnisnoteSJZelle = { display: "none" };
                styleZeugnisnoteSJZelleLeer = { display: "none" };
            }
            else {
                styleZeugnisnoteHJPunkte2 = { display: "none" };
                styleZeugnisnoteHJPunkte2Zelle = { display: "none" };
                styleZeugnisnoteHJPunkte2ZelleLeer = { display: "none" };
                styleZeugnisnoteSJ = styleNote;
                styleZeugnisnoteSJZelle = styleZelle;
                styleZeugnisnoteSJZelleLeer = styleZelleLeer;
            }
            styleFehlstundenG3 = styleNote;
            styleFehlstundenG3Zelle = styleZelle;
            styleFehlstundenG3ZelleLeer = styleZelleLeer;
            styleFehlstundenU3 = styleNote;
            styleFehlstundenU3Zelle = styleZelle;
            styleFehlstundenU3ZelleLeer = styleZelleLeer;
            styleFehlstundenG4 = styleNote;
            styleFehlstundenG4Zelle = styleZelle;
            styleFehlstundenG4ZelleLeer = styleZelleLeer;
            styleFehlstundenU4 = styleNote;
            styleFehlstundenU4Zelle = styleZelle;
            styleFehlstundenU4ZelleLeer = styleZelleLeer;
            styleFehlstundenGHJ2 = styleNote;
            styleFehlstundenGHJ2Zelle = styleZelle;
            styleFehlstundenGHJ2ZelleLeer = styleZelleLeer;
            styleFehlstundenUHJ2 = styleNote;
            styleFehlstundenUHJ2Zelle = styleZelle;
            styleFehlstundenUHJ2ZelleLeer = styleZelleLeer;
            if (this.props.kurs.tests[2] > 0) {
                styleTestnoten31 = styleNote;
                styleTestnoten31Zelle = styleZelle;
                styleTestnoten31ZelleLeer = styleZelleLeer;
            }
            else {
                styleTestnoten31 = { display: "none" };
                styleTestnoten31Zelle = { display: "none" };
                styleTestnoten31ZelleLeer = { display: "none" };
            }
            if (this.props.kurs.tests[2] > 1) {
                styleTestnoten32 = styleNote;
                styleTestnoten32Zelle = styleZelle;
                styleTestnoten32ZelleLeer = styleZelleLeer;
            }
            else {
                styleTestnoten32 = { display: "none" };
                styleTestnoten32Zelle = { display: "none" };
                styleTestnoten32ZelleLeer = { display: "none" };
            }
            if (this.props.kurs.tests[3] > 0) {
                styleTestnoten41 = styleNote;
                styleTestnoten41Zelle = styleZelle;
                styleTestnoten41ZelleLeer = styleZelleLeer;
            }
            else {
                styleTestnoten41 = { display: "none" };
                styleTestnoten41Zelle = { display: "none" };
                styleTestnoten41ZelleLeer = { display: "none" };
            }
            if (this.props.kurs.tests[3] > 1) {
                styleTestnoten42 = styleNote;
                styleTestnoten42Zelle = styleZelle;
                styleTestnoten42ZelleLeer = styleZelleLeer;
            }
            else {
                styleTestnoten42 = { display: "none" };
                styleTestnoten42Zelle = { display: "none" };
                styleTestnoten42ZelleLeer = { display: "none" };
            }
            if (this.props.kurs.referate[2] > 0) {
                styleReferatnoten31 = styleNote;
                styleReferatnoten31Zelle = styleZelle;
                styleReferatnoten31ZelleLeer = styleZelleLeer;
            }
            else {
                styleReferatnoten31 = { display: "none" };
                styleReferatnoten31Zelle = { display: "none" };
                styleReferatnoten31ZelleLeer = { display: "none" };
            }
            if (this.props.kurs.referate[2] > 1) {
                styleReferatnoten32 = styleNote;
                styleReferatnoten32Zelle = styleZelle;
                styleReferatnoten32ZelleLeer = styleZelleLeer;
            }
            else {
                styleReferatnoten32 = { display: "none" };
                styleReferatnoten32Zelle = { display: "none" };
                styleReferatnoten32ZelleLeer = { display: "none" };
            }
            if (this.props.kurs.referate[3] > 0) {
                styleReferatnoten41 = styleNote;
                styleReferatnoten41Zelle = styleZelle;
                styleReferatnoten41ZelleLeer = styleZelleLeer;
            }
            else {
                styleReferatnoten41 = { display: "none" };
                styleReferatnoten41Zelle = { display: "none" };
                styleReferatnoten41ZelleLeer = { display: "none" };
            }
            if (this.props.kurs.referate[3] > 1) {
                styleReferatnoten42 = styleNote;
                styleReferatnoten42Zelle = styleZelle;
                styleReferatnoten42ZelleLeer = styleZelleLeer;
            }
            else {
                styleReferatnoten42 = { display: "none" };
                styleReferatnoten42Zelle = { display: "none" };
                styleReferatnoten42ZelleLeer = { display: "none" };
            }
            styleBemerkungen2 = styleNote;
            styleBemerkungen2Zelle = styleZelle;
            styleBemerkungen2ZelleLeer = styleZelleLeer;
        }
        if (this.props.ansicht === "Fehlstunden") {
            indexLeer = -1;
            dargestellteSchueler = this.props.kurs.schueler.slice(0, this.props.kurs.schueler.length - 1).map((schueler, index) => {
                const key = "schueler" + index;
                if (schueler.aktiv[this.props.quartal - 1]) {
                    indexLeer = indexLeer + 1;
                    dargestellteAnwesenheitLeer = schueler.anwesenheit[this.props.quartal - 1].map((anwesenheitLeer, indexAnwesenheitLeer) => {
                        const keyAnwesenheitLeer = "anwesenheitLeer" + indexAnwesenheitLeer;
                        if (indexAnwesenheitLeer === 0) {
                            return (
                                <React.Fragment key={keyAnwesenheitLeer}>
                                    <td style={styleNameLeer}></td>
                                    <td style={styleNameLeer}></td>
                                    <td style={styleZelleLeer}></td>
                                </React.Fragment>
                            );
                        }
                        else {
                            return (
                                <td key={keyAnwesenheitLeer} style={styleZelleLeer}></td>
                            );
                        }
                    });
                    dargestellteAnwesenheit = schueler.anwesenheit[this.props.quartal - 1].map((anwesenheit, indexAnwesenheit) => {
                        const keyAnwesenheit = "anwesenheit" + indexAnwesenheit;
                        if (indexAnwesenheit < 10) {
                            indexAnwesenheitString = "0" + indexAnwesenheit.toString();
                        }
                        else {
                            indexAnwesenheitString = indexAnwesenheit.toString();
                        }
                        if (indexAnwesenheit === 0) {
                            return (
                                <React.Fragment key={keyAnwesenheit}>
                                    <td style={styleName}><div style={styleDivName}>{schueler.nachname}</div></td>
                                    <td style={styleName}><div style={styleDivName}>{schueler.vorname}</div></td>
                                    <td style={styleZelle}><div style={styleDivZelle}><Select name={"Anwesenheit " + indexAnwesenheitString + index.toString()} handleChange={this.props.handleChange} value={anwesenheit} options={this.props.optionsAnwesenheiten.slice(0, 1 + 3 * this.props.kurs.unterricht[this.props.quartal - 1][indexAnwesenheit].dauerIst)} optionsBeschriftung={this.props.optionsAnwesenheiten.slice(0, 1 + 3 * this.props.kurs.unterricht[this.props.quartal - 1][indexAnwesenheit].dauerIst)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={100} /></div></td>
                                </React.Fragment>
                            );
                        }
                        else {
                            return (
                                <td key={keyAnwesenheit} style={styleZelle}><div style={styleDivZelle}><Select name={"Anwesenheit " + indexAnwesenheitString + index.toString()} handleChange={this.props.handleChange} value={anwesenheit} options={this.props.optionsAnwesenheiten.slice(0, 1 + 3 * this.props.kurs.unterricht[this.props.quartal - 1][indexAnwesenheit].dauerIst)} optionsBeschriftung={this.props.optionsAnwesenheiten.slice(0, 1 + 3 * this.props.kurs.unterricht[this.props.quartal - 1][indexAnwesenheit].dauerIst)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={100} /></div></td>
                            );
                        }
                    });
                    if (indexLeer % 5 === 0) {
                        return (
                            <React.Fragment key={key}>
                                <tr>{dargestellteAnwesenheitLeer}</tr>
                                <tr className="grauerHintergrundFehlstunden">{dargestellteAnwesenheit}</tr>
                            </React.Fragment>
                        );
                    }
                    else {
                        return (
                            <tr key={key} className="grauerHintergrundFehlstunden">{dargestellteAnwesenheit}</tr>
                        );
                    }
                }
            });
        }
        else if (this.props.ansicht === "Striche") {
            indexLeer = -1;
            dargestellteSchueler = this.props.kurs.schueler.slice(0, this.props.kurs.schueler.length - 1).map((schueler, index) => {
                const key = "schueler" + index;
                if (schueler.aktiv[this.props.quartal - 1]) {
                    indexLeer = indexLeer + 1;
                    dargestellteStricheLeer = schueler.stricheGesamt[this.props.quartal - 1].map((stricheLeer, indexStricheLeer) => {
                        const keyStricheLeer = "stricheLeer" + indexStricheLeer;
                        if (indexStricheLeer === 0) {
                            if (indexStricheLeer === schueler.stricheGesamt[this.props.quartal - 1].length - 1) {
                                return (
                                    <React.Fragment key={keyStricheLeer}>
                                        <td style={styleNameLeer}></td>
                                        <td style={styleNameLeer}></td>
                                        <td style={styleZelleLeer}></td>
                                        <td style={styleZelleLeerBorderless}></td>
                                        <td style={styleZelleLeerQuote}></td>
                                        <td style={styleZelleLeer}></td>
                                        <td style={styleZelleLeer}></td>
                                    </React.Fragment>
                                );
                            }
                            else {
                                return (
                                    <React.Fragment key={keyStricheLeer}>
                                        <td style={styleNameLeer}></td>
                                        <td style={styleNameLeer}></td>
                                        <td style={styleZelleLeer}></td>
                                    </React.Fragment>
                                );
                            }
                        }
                        else if (indexStricheLeer === schueler.stricheGesamt[this.props.quartal - 1].length - 1) {
                            return (
                                <React.Fragment key={keyStricheLeer}>
                                    <td style={styleZelleLeer}></td>
                                    <td style={styleZelleLeerBorderless}></td>
                                    <td style={styleZelleLeerQuote}></td>
                                    <td style={styleZelleLeer}></td>
                                    <td style={styleZelleLeer}></td>
                                </React.Fragment>
                            );
                        }
                        else {
                            return (
                                <td key={keyStricheLeer} style={styleZelleLeer}></td>
                            );
                        }
                    });
                    dargestellteStriche = schueler.stricheGesamt[this.props.quartal - 1].map((striche, indexStriche) => {
                        const keyStriche = "striche" + indexStriche;
                        if (indexStriche < 10) {
                            indexStricheString = "0" + indexStriche.toString();
                        }
                        else {
                            indexStricheString = indexStriche.toString();
                        }
                        if (indexStriche === 0) {
                            if (indexStriche === schueler.stricheGesamt[this.props.quartal - 1].length - 1) {
                                return (
                                    <React.Fragment key={keyStriche}>
                                        <td style={styleName}><div style={styleDivName}>{schueler.nachname}</div></td>
                                        <td style={styleName}><div style={styleDivName}>{schueler.vorname}</div></td>
                                        <td style={styleZelle}><div style={styleDivZelle}><Select name={"Striche " + indexStricheString + index.toString()} handleChange={this.props.handleChange} value={striche} options={[striche]} optionsBeschriftung={[striche]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={100} /></div></td>
                                        <td style={styleZelleBorderless}></td>
                                        <td style={styleZelleQuote}><div style={styleDivZelle}><Select name={"MinitestQuote " + index.toString()} handleChange={this.props.handleChange} value={schueler.minitestQuote[this.props.quartal - 1]} options={[schueler.minitestQuote[this.props.quartal - 1]]} optionsBeschriftung={[schueler.minitestQuote[this.props.quartal - 1]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={100} /></div></td>
                                        <td style={styleZelle}><div style={styleDivZelle}><Select name={"StricheAddiert " + index.toString()} handleChange={this.props.handleChange} value={schueler.stricheAddiert[this.props.quartal - 1]} options={[schueler.stricheAddiert[this.props.quartal - 1]]} optionsBeschriftung={[schueler.stricheAddiert[this.props.quartal - 1]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={100} /></div></td>
                                        <td style={styleZelle}><div style={styleDivZelle}><Select name={"StricheGewertet " + index.toString()} handleChange={this.props.handleChange} value={schueler.stricheGewertet[this.props.quartal - 1]} options={[schueler.stricheGewertet[this.props.quartal - 1]]} optionsBeschriftung={[schueler.stricheGewertet[this.props.quartal - 1]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={100} /></div></td>
                                    </React.Fragment>
                                );
                            }
                            else {
                                return (
                                    <React.Fragment key={keyStriche}>
                                        <td style={styleName}><div style={styleDivName}>{schueler.nachname}</div></td>
                                        <td style={styleName}><div style={styleDivName}>{schueler.vorname}</div></td>
                                        <td style={styleZelle}><div style={styleDivZelle}><Select name={"Striche " + indexStricheString + index.toString()} handleChange={this.props.handleChange} value={striche} options={[striche]} optionsBeschriftung={[striche]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={100} /></div></td>
                                    </React.Fragment>
                                );
                            }
                        }
                        else if (indexStriche === schueler.stricheGesamt[this.props.quartal - 1].length - 1) {
                            return (
                                <React.Fragment key={keyStriche}>
                                    <td style={styleZelle}><div style={styleDivZelle}><Select name={"Striche " + indexStricheString + index.toString()} handleChange={this.props.handleChange} value={striche} options={[striche]} optionsBeschriftung={[striche]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={100} /></div></td>
                                    <td style={styleZelleBorderless}></td>
                                    <td style={styleZelleQuote}><div style={styleDivZelle}><Select name={"MinitestQuote " + index.toString()} handleChange={this.props.handleChange} value={schueler.minitestQuote[this.props.quartal - 1]} options={[schueler.minitestQuote[this.props.quartal - 1]]} optionsBeschriftung={[schueler.minitestQuote[this.props.quartal - 1]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={100} /></div></td>
                                    <td style={styleZelle}><div style={styleDivZelle}><Select name={"StricheAddiert " + index.toString()} handleChange={this.props.handleChange} value={schueler.stricheAddiert[this.props.quartal - 1]} options={[schueler.stricheAddiert[this.props.quartal - 1]]} optionsBeschriftung={[schueler.stricheAddiert[this.props.quartal - 1]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={100} /></div></td>
                                    <td style={styleZelle}><div style={styleDivZelle}><Select name={"StricheGewertet " + index.toString()} handleChange={this.props.handleChange} value={schueler.stricheGewertet[this.props.quartal - 1]} options={[schueler.stricheGewertet[this.props.quartal - 1]]} optionsBeschriftung={[schueler.stricheGewertet[this.props.quartal - 1]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={100} /></div></td>
                                </React.Fragment>
                            );
                        }
                        else {
                            return (
                                <td key={keyStriche} style={styleZelle}><div style={styleDivZelle}><Select name={"Striche " + indexStricheString + index.toString()} handleChange={this.props.handleChange} value={striche} options={[striche]} optionsBeschriftung={[striche]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={100} /></div></td>
                            );
                        }
                    });
                    if (indexLeer % 5 === 0) {
                        return (
                            <React.Fragment key={key}>
                                <tr>{dargestellteStricheLeer}</tr>
                                <tr className="grauerHintergrundFehlstunden">{dargestellteStriche}</tr>
                            </React.Fragment>
                        );
                    }
                    else {
                        return (
                            <tr key={key} className="grauerHintergrundFehlstunden">{dargestellteStriche}</tr>
                        );
                    }
                }
            });
        }
        else if (this.props.ansicht === "Noten" && this.props.halbjahr === 1) {
            indexLeer = -1;
            dargestellteSchueler = this.props.kurs.schueler.slice(0, this.props.kurs.schueler.length - 1).map((schueler, index) => {
                const key = "schueler" + index;
                if (schueler.aktiv[0] || schueler.aktiv[1]) {
                    indexLeer = indexLeer + 1;
                    if (schueler.fehlstundenG[0] / Math.max(1, this.props.kurs.stundenIst[0]) > 0.25) {
                        colorG1 = "red";
                    }
                    else {
                        colorG1 = "black";
                    }
                    if (schueler.fehlstundenU[0] / Math.max(1, this.props.kurs.stundenIst[0]) > 0.25) {
                        colorU1 = "red";
                    }
                    else {
                        colorU1 = "black";
                    }
                    if (schueler.fehlstundenG[1] / Math.max(1, this.props.kurs.stundenIst[1]) > 0.25) {
                        colorG2 = "red";
                    }
                    else {
                        colorG2 = "black";
                    }
                    if (schueler.fehlstundenU[1] / Math.max(1, this.props.kurs.stundenIst[1]) > 0.25) {
                        colorU2 = "red";
                    }
                    else {
                        colorU2 = "black";
                    }
                    if (schueler.fehlstundenGHJ[0] / Math.max(1, this.props.kurs.stundenIst[0] + this.props.kurs.stundenIst[1]) > 0.25) {
                        colorGHJ1 = "red";
                    }
                    else {
                        colorGHJ1 = "black";
                    }
                    if (schueler.fehlstundenUHJ[0] / Math.max(1, this.props.kurs.stundenIst[0] + this.props.kurs.stundenIst[1]) > 0.25) {
                        colorUHJ1 = "red";
                    }
                    else {
                        colorUHJ1 = "black";
                    }
                    if (indexLeer % 5 === 0) {
                        return (
                            <React.Fragment key={key}>
                                <tr>
                                    <td style={styleNameLeer}></td>
                                    <td style={styleNameLeer}></td>
                                    <td style={styleNoteLeerZelleLeer}></td>
                                    <td style={styleKlausurfach1ZelleLeer}></td>
                                    <td style={styleKlausurnoten11ZelleLeer}></td>
                                    <td style={styleKlausurnoten12ZelleLeer}></td>
                                    <td style={styleKlausurnoten13ZelleLeer}></td>
                                    <td style={styleKlausurnoteHJ1ZelleLeer}></td>
                                    <td style={styleKlausurenLeerZelleLeer}></td>
                                    <td style={styleSominoten1ZelleLeer}></td>
                                    <td style={styleSominoten2ZelleLeer}></td>
                                    <td style={styleSominoteHJ1ZelleLeer}></td>
                                    <td style={styleNoteLeerZelleLeer}></td>
                                    <td style={styleZeugnisnoteHJ1ZelleLeer}></td>
                                    <td style={styleZeugnisnoteHJPunkte1ZelleLeer}></td>
                                    <td style={styleNoteLeerZelleLeer}></td>
                                    <td style={styleFehlstundenG1ZelleLeer}></td>
                                    <td style={styleFehlstundenU1ZelleLeer}></td>
                                    <td style={styleFehlstundenG2ZelleLeer}></td>
                                    <td style={styleFehlstundenU2ZelleLeer}></td>
                                    <td style={styleFehlstundenGHJ1ZelleLeer}></td>
                                    <td style={styleFehlstundenUHJ1ZelleLeer}></td>
                                    <td style={styleNoteLeerZelleLeer}></td>
                                    <td style={styleTestnoten11ZelleLeer}></td>
                                    <td style={styleTestnoten12ZelleLeer}></td>
                                    <td style={styleTestnoten21ZelleLeer}></td>
                                    <td style={styleTestnoten22ZelleLeer}></td>
                                    <td style={styleReferatnoten11ZelleLeer}></td>
                                    <td style={styleReferatnoten12ZelleLeer}></td>
                                    <td style={styleReferatnoten21ZelleLeer}></td>
                                    <td style={styleReferatnoten22ZelleLeer}></td>
                                    <td style={styleBemerkungen1ZelleLeer}></td>
                                </tr>
                                <tr className="grauerHintergrundNoten">
                                    <td style={styleName}><div style={styleDivName}>{schueler.nachname}</div></td>
                                    <td style={styleName}><div style={styleDivName}>{schueler.vorname}</div></td>
                                    <td style={styleNoteLeerZelle}></td>
                                    <td style={styleKlausurfach1Zelle}><div style={styleDivZelleCheckbox}><Checkbox name={"Klausurfach1 " + index.toString()} handleChange={this.props.handleChange} checked={schueler.klausurfach[0]} checkboxDisabled={this.props.checkboxesDisabled} checkboxVisible={true} /></div></td>
                                    <td style={styleKlausurnoten11Zelle}><div style={styleDivZelle}><Select name={"Klausurnoten11 " + index.toString()} handleChange={this.props.handleChange} value={schueler.klausurnoten[0][0]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleKlausurnoten12Zelle}><div style={styleDivZelle}><Select name={"Klausurnoten12 " + index.toString()} handleChange={this.props.handleChange} value={schueler.klausurnoten[0][1]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleKlausurnoten13Zelle}><div style={styleDivZelle}><Select name={"Klausurnoten13 " + index.toString()} handleChange={this.props.handleChange} value={schueler.klausurnoten[0][2]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleKlausurnoteHJ1Zelle}><div style={styleDivZelle}><Select name={"KlausurnoteHJ1 " + index.toString()} handleChange={this.props.handleChange} value={schueler.klausurnoteHJ[0]} options={this.props.kurs.optionsNotenS} optionsBeschriftung={[schueler.klausurnoteHJBeschriftung[0]].concat(this.props.kurs.optionsNotenS.slice(1))} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleKlausurenLeerZelle}></td>
                                    <td style={styleSominoten1Zelle}><div style={styleDivZelle}><Select name={"Sominoten1 " + index.toString()} handleChange={this.props.handleChange} value={schueler.sominoten[0]} options={this.props.kurs.optionsNotenM} optionsBeschriftung={[schueler.sominotenBeschriftung[0]].concat(this.props.kurs.optionsNotenM.slice(1))} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleSominoten2Zelle}><div style={styleDivZelle}><Select name={"Sominoten2 " + index.toString()} handleChange={this.props.handleChange} value={schueler.sominoten[1]} options={this.props.kurs.optionsNotenM} optionsBeschriftung={[schueler.sominotenBeschriftung[1]].concat(this.props.kurs.optionsNotenM.slice(1))} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleSominoteHJ1Zelle}><div style={styleDivZelle}><Select name={"SominoteHJ1 " + index.toString()} handleChange={this.props.handleChange} value={schueler.sominoteHJ[0]} options={this.props.kurs.optionsNotenM} optionsBeschriftung={[schueler.sominoteHJBeschriftung[0]].concat(this.props.kurs.optionsNotenM.slice(1))} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleNoteLeerZelle}></td>
                                    <td style={styleZeugnisnoteHJ1Zelle}><div style={styleDivZelle}><Select name={"ZeugnisnoteHJ1 " + index.toString()} handleChange={this.props.handleChange} value={schueler.zeugnisnoteHJ[0]} options={this.props.kurs.optionsNotenM} optionsBeschriftung={[schueler.zeugnisnoteHJBeschriftung[0]].concat(this.props.kurs.optionsNotenM.slice(1))} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleZeugnisnoteHJPunkte1Zelle}><div style={styleDivZelle}><Select name={"ZeugnisnoteHJPunkte1 " + index.toString()} handleChange={this.props.handleChange} value={schueler.zeugnisnoteHJPunkte[0]} options={[schueler.zeugnisnoteHJPunkte[0]]} optionsBeschriftung={[schueler.zeugnisnoteHJPunkte[0]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleNoteLeerZelle}></td>
                                    <td style={styleFehlstundenG1Zelle}><div style={styleDivZelle}><Select name={"FehlstundenG1 " + index.toString()} handleChange={this.props.handleChange} value={schueler.fehlstundenG[0]} options={[schueler.fehlstundenG[0]]} optionsBeschriftung={[schueler.fehlstundenG[0]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color={colorG1} minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleFehlstundenU1Zelle}><div style={styleDivZelle}><Select name={"FehlstundenU1 " + index.toString()} handleChange={this.props.handleChange} value={schueler.fehlstundenU[0]} options={[schueler.fehlstundenU[0]]} optionsBeschriftung={[schueler.fehlstundenU[0]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color={colorU1} minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleFehlstundenG2Zelle}><div style={styleDivZelle}><Select name={"FehlstundenG2 " + index.toString()} handleChange={this.props.handleChange} value={schueler.fehlstundenG[1]} options={[schueler.fehlstundenG[1]]} optionsBeschriftung={[schueler.fehlstundenG[1]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color={colorG2} minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleFehlstundenU2Zelle}><div style={styleDivZelle}><Select name={"FehlstundenU2 " + index.toString()} handleChange={this.props.handleChange} value={schueler.fehlstundenU[1]} options={[schueler.fehlstundenU[1]]} optionsBeschriftung={[schueler.fehlstundenU[1]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color={colorU2} minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleFehlstundenGHJ1Zelle}><div style={styleDivZelle}><Select name={"FehlstundenGHJ1 " + index.toString()} handleChange={this.props.handleChange} value={schueler.fehlstundenGHJ[0]} options={[schueler.fehlstundenGHJ[0]]} optionsBeschriftung={[schueler.fehlstundenGHJ[0]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color={colorGHJ1} minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleFehlstundenUHJ1Zelle}><div style={styleDivZelle}><Select name={"FehlstundenUHJ1 " + index.toString()} handleChange={this.props.handleChange} value={schueler.fehlstundenUHJ[0]} options={[schueler.fehlstundenUHJ[0]]} optionsBeschriftung={[schueler.fehlstundenUHJ[0]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color={colorUHJ1} minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleNoteLeerZelle}></td>
                                    <td style={styleTestnoten11Zelle}><div style={styleDivZelle}><Select name={"Testnoten11 " + index.toString()} handleChange={this.props.handleChange} value={schueler.testnoten[0][0]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleTestnoten12Zelle}><div style={styleDivZelle}><Select name={"Testnoten12 " + index.toString()} handleChange={this.props.handleChange} value={schueler.testnoten[0][1]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleTestnoten21Zelle}><div style={styleDivZelle}><Select name={"Testnoten21 " + index.toString()} handleChange={this.props.handleChange} value={schueler.testnoten[1][0]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleTestnoten22Zelle}><div style={styleDivZelle}><Select name={"Testnoten22 " + index.toString()} handleChange={this.props.handleChange} value={schueler.testnoten[1][1]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleReferatnoten11Zelle}><div style={styleDivZelle}><Select name={"Referatnoten11 " + index.toString()} handleChange={this.props.handleChange} value={schueler.referatnoten[0][0]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleReferatnoten12Zelle}><div style={styleDivZelle}><Select name={"Referatnoten12 " + index.toString()} handleChange={this.props.handleChange} value={schueler.referatnoten[0][1]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleReferatnoten21Zelle}><div style={styleDivZelle}><Select name={"Referatnoten21 " + index.toString()} handleChange={this.props.handleChange} value={schueler.referatnoten[1][0]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleReferatnoten22Zelle}><div style={styleDivZelle}><Select name={"Referatnoten22 " + index.toString()} handleChange={this.props.handleChange} value={schueler.referatnoten[1][1]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleBemerkungen1Zelle}><div name={index} style={styleDivZelleBemerkungen} onClick={this.handleClickBemerkungen1}>{schueler.bemerkungen[0]}</div></td>
                                </tr>
                            </React.Fragment>
                        )
                    }
                    else {
                        return (
                            <tr className="grauerHintergrundNoten" key={key}>
                                <td style={styleName}><div style={styleDivName}>{schueler.nachname}</div></td>
                                <td style={styleName}><div style={styleDivName}>{schueler.vorname}</div></td>
                                <td style={styleNoteLeerZelle}></td>
                                <td style={styleKlausurfach1Zelle}><div style={styleDivZelleCheckbox}><Checkbox name={"Klausurfach1 " + index.toString()} handleChange={this.props.handleChange} checked={schueler.klausurfach[0]} checkboxDisabled={this.props.checkboxesDisabled} checkboxVisible={true} /></div></td>
                                <td style={styleKlausurnoten11Zelle}><div style={styleDivZelle}><Select name={"Klausurnoten11 " + index.toString()} handleChange={this.props.handleChange} value={schueler.klausurnoten[0][0]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleKlausurnoten12Zelle}><div style={styleDivZelle}><Select name={"Klausurnoten12 " + index.toString()} handleChange={this.props.handleChange} value={schueler.klausurnoten[0][1]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleKlausurnoten13Zelle}><div style={styleDivZelle}><Select name={"Klausurnoten13 " + index.toString()} handleChange={this.props.handleChange} value={schueler.klausurnoten[0][2]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleKlausurnoteHJ1Zelle}><div style={styleDivZelle}><Select name={"KlausurnoteHJ1 " + index.toString()} handleChange={this.props.handleChange} value={schueler.klausurnoteHJ[0]} options={this.props.kurs.optionsNotenS} optionsBeschriftung={[schueler.klausurnoteHJBeschriftung[0]].concat(this.props.kurs.optionsNotenS.slice(1))} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleKlausurenLeerZelle}></td>
                                <td style={styleSominoten1Zelle}><div style={styleDivZelle}><Select name={"Sominoten1 " + index.toString()} handleChange={this.props.handleChange} value={schueler.sominoten[0]} options={this.props.kurs.optionsNotenM} optionsBeschriftung={[schueler.sominotenBeschriftung[0]].concat(this.props.kurs.optionsNotenM.slice(1))} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleSominoten2Zelle}><div style={styleDivZelle}><Select name={"Sominoten2 " + index.toString()} handleChange={this.props.handleChange} value={schueler.sominoten[1]} options={this.props.kurs.optionsNotenM} optionsBeschriftung={[schueler.sominotenBeschriftung[1]].concat(this.props.kurs.optionsNotenM.slice(1))} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleSominoteHJ1Zelle}><div style={styleDivZelle}><Select name={"SominoteHJ1 " + index.toString()} handleChange={this.props.handleChange} value={schueler.sominoteHJ[0]} options={this.props.kurs.optionsNotenM} optionsBeschriftung={[schueler.sominoteHJBeschriftung[0]].concat(this.props.kurs.optionsNotenM.slice(1))} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleNoteLeerZelle}></td>
                                <td style={styleZeugnisnoteHJ1Zelle}><div style={styleDivZelle}><Select name={"ZeugnisnoteHJ1 " + index.toString()} handleChange={this.props.handleChange} value={schueler.zeugnisnoteHJ[0]} options={this.props.kurs.optionsNotenM} optionsBeschriftung={[schueler.zeugnisnoteHJBeschriftung[0]].concat(this.props.kurs.optionsNotenM.slice(1))} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleZeugnisnoteHJPunkte1Zelle}><div style={styleDivZelle}><Select name={"ZeugnisnoteHJPunkte1 " + index.toString()} handleChange={this.props.handleChange} value={schueler.zeugnisnoteHJPunkte[0]} options={[schueler.zeugnisnoteHJPunkte[0]]} optionsBeschriftung={[schueler.zeugnisnoteHJPunkte[0]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleNoteLeerZelle}></td>
                                <td style={styleFehlstundenG1Zelle}><div style={styleDivZelle}><Select name={"FehlstundenG1 " + index.toString()} handleChange={this.props.handleChange} value={schueler.fehlstundenG[0]} options={[schueler.fehlstundenG[0]]} optionsBeschriftung={[schueler.fehlstundenG[0]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color={colorG1} minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleFehlstundenU1Zelle}><div style={styleDivZelle}><Select name={"FehlstundenU1 " + index.toString()} handleChange={this.props.handleChange} value={schueler.fehlstundenU[0]} options={[schueler.fehlstundenU[0]]} optionsBeschriftung={[schueler.fehlstundenU[0]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color={colorU1} minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleFehlstundenG2Zelle}><div style={styleDivZelle}><Select name={"FehlstundenG2 " + index.toString()} handleChange={this.props.handleChange} value={schueler.fehlstundenG[1]} options={[schueler.fehlstundenG[1]]} optionsBeschriftung={[schueler.fehlstundenG[1]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color={colorG2} minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleFehlstundenU2Zelle}><div style={styleDivZelle}><Select name={"FehlstundenU2 " + index.toString()} handleChange={this.props.handleChange} value={schueler.fehlstundenU[1]} options={[schueler.fehlstundenU[1]]} optionsBeschriftung={[schueler.fehlstundenU[1]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color={colorU2} minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleFehlstundenGHJ1Zelle}><div style={styleDivZelle}><Select name={"FehlstundenGHJ1 " + index.toString()} handleChange={this.props.handleChange} value={schueler.fehlstundenGHJ[0]} options={[schueler.fehlstundenGHJ[0]]} optionsBeschriftung={[schueler.fehlstundenGHJ[0]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color={colorGHJ1} minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleFehlstundenUHJ1Zelle}><div style={styleDivZelle}><Select name={"FehlstundenUHJ1 " + index.toString()} handleChange={this.props.handleChange} value={schueler.fehlstundenUHJ[0]} options={[schueler.fehlstundenUHJ[0]]} optionsBeschriftung={[schueler.fehlstundenUHJ[0]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color={colorUHJ1} minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleNoteLeerZelle}></td>
                                <td style={styleTestnoten11Zelle}><div style={styleDivZelle}><Select name={"Testnoten11 " + index.toString()} handleChange={this.props.handleChange} value={schueler.testnoten[0][0]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleTestnoten12Zelle}><div style={styleDivZelle}><Select name={"Testnoten12 " + index.toString()} handleChange={this.props.handleChange} value={schueler.testnoten[0][1]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleTestnoten21Zelle}><div style={styleDivZelle}><Select name={"Testnoten21 " + index.toString()} handleChange={this.props.handleChange} value={schueler.testnoten[1][0]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleTestnoten22Zelle}><div style={styleDivZelle}><Select name={"Testnoten22 " + index.toString()} handleChange={this.props.handleChange} value={schueler.testnoten[1][1]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleReferatnoten11Zelle}><div style={styleDivZelle}><Select name={"Referatnoten11 " + index.toString()} handleChange={this.props.handleChange} value={schueler.referatnoten[0][0]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleReferatnoten12Zelle}><div style={styleDivZelle}><Select name={"Referatnoten12 " + index.toString()} handleChange={this.props.handleChange} value={schueler.referatnoten[0][1]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleReferatnoten21Zelle}><div style={styleDivZelle}><Select name={"Referatnoten21 " + index.toString()} handleChange={this.props.handleChange} value={schueler.referatnoten[1][0]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleReferatnoten22Zelle}><div style={styleDivZelle}><Select name={"Referatnoten22 " + index.toString()} handleChange={this.props.handleChange} value={schueler.referatnoten[1][1]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleBemerkungen1Zelle}><div name={index} style={styleDivZelleBemerkungen} onClick={this.handleClickBemerkungen1}>{schueler.bemerkungen[0]}</div></td>
                            </tr>
                        )
                    }
                }
            });
        }
        else if (this.props.ansicht === "Noten" && this.props.halbjahr === 2) {
            indexLeer = -1;
            dargestellteSchueler = this.props.kurs.schueler.slice(0, this.props.kurs.schueler.length - 1).map((schueler, index) => {
                const key = "schueler" + index;
                if (schueler.aktiv[2] || schueler.aktiv[3]) {
                    indexLeer = indexLeer + 1;
                    if (schueler.fehlstundenG[2] / Math.max(1, this.props.kurs.stundenIst[2]) > 0.25) {
                        colorG3 = "red";
                    }
                    else {
                        colorG3 = "black";
                    }
                    if (schueler.fehlstundenU[2] / Math.max(1, this.props.kurs.stundenIst[2]) > 0.25) {
                        colorU3 = "red";
                    }
                    else {
                        colorU3 = "black";
                    }
                    if (schueler.fehlstundenG[3] / Math.max(1, this.props.kurs.stundenIst[3]) > 0.25) {
                        colorG4 = "red";
                    }
                    else {
                        colorG4 = "black";
                    }
                    if (schueler.fehlstundenU[3] / Math.max(1, this.props.kurs.stundenIst[3]) > 0.25) {
                        colorU4 = "red";
                    }
                    else {
                        colorU4 = "black";
                    }
                    if (schueler.fehlstundenGHJ[1] / Math.max(1, this.props.kurs.stundenIst[2] + this.props.kurs.stundenIst[3]) > 0.25) {
                        colorGHJ2 = "red";
                    }
                    else {
                        colorGHJ2 = "black";
                    }
                    if (schueler.fehlstundenUHJ[1] / Math.max(1, this.props.kurs.stundenIst[2] + this.props.kurs.stundenIst[3]) > 0.25) {
                        colorUHJ2 = "red";
                    }
                    else {
                        colorUHJ2 = "black";
                    }
                    if (indexLeer % 5 === 0) {
                        return (
                            <React.Fragment key={key}>
                                <tr>
                                    <td style={styleNameLeer}></td>
                                    <td style={styleNameLeer}></td>
                                    <td style={styleNoteLeerZelleLeer}></td>
                                    <td style={styleKlausurfach2ZelleLeer}></td>
                                    <td style={styleKlausurnoten21ZelleLeer}></td>
                                    <td style={styleKlausurnoten22ZelleLeer}></td>
                                    <td style={styleKlausurnoten23ZelleLeer}></td>
                                    <td style={styleKlausurnoteHJ2ZelleLeer}></td>
                                    <td style={styleKlausurenLeerZelleLeer}></td>
                                    <td style={styleSominoten3ZelleLeer}></td>
                                    <td style={styleSominoten4ZelleLeer}></td>
                                    <td style={styleSominoteHJ2ZelleLeer}></td>
                                    <td style={styleNoteLeerZelleLeer}></td>
                                    <td style={styleZeugnisnoteHJ2ZelleLeer}></td>
                                    <td style={styleZeugnisnoteHJPunkte2ZelleLeer}></td>
                                    <td style={styleZeugnisnoteSJZelleLeer}></td>
                                    <td style={styleNoteLeerZelleLeer}></td>
                                    <td style={styleFehlstundenG3ZelleLeer}></td>
                                    <td style={styleFehlstundenU3ZelleLeer}></td>
                                    <td style={styleFehlstundenG4ZelleLeer}></td>
                                    <td style={styleFehlstundenU4ZelleLeer}></td>
                                    <td style={styleFehlstundenGHJ2ZelleLeer}></td>
                                    <td style={styleFehlstundenUHJ2ZelleLeer}></td>
                                    <td style={styleNoteLeerZelleLeer}></td>
                                    <td style={styleTestnoten31ZelleLeer}></td>
                                    <td style={styleTestnoten32ZelleLeer}></td>
                                    <td style={styleTestnoten41ZelleLeer}></td>
                                    <td style={styleTestnoten42ZelleLeer}></td>
                                    <td style={styleReferatnoten31ZelleLeer}></td>
                                    <td style={styleReferatnoten32ZelleLeer}></td>
                                    <td style={styleReferatnoten41ZelleLeer}></td>
                                    <td style={styleReferatnoten42ZelleLeer}></td>
                                    <td style={styleBemerkungen2ZelleLeer}></td>
                                </tr>
                                <tr className="grauerHintergrundNoten">
                                    <td style={styleName}><div style={styleDivName}>{schueler.nachname}</div></td>
                                    <td style={styleName}><div style={styleDivName}>{schueler.vorname}</div></td>
                                    <td style={styleNoteLeerZelle}></td>
                                    <td style={styleKlausurfach2Zelle}><div style={styleDivZelleCheckbox}><Checkbox name={"Klausurfach2 " + index.toString()} handleChange={this.props.handleChange} checked={schueler.klausurfach[1]} checkboxDisabled={this.props.checkboxesDisabled} checkboxVisible={true} /></div></td>
                                    <td style={styleKlausurnoten21Zelle}><div style={styleDivZelle}><Select name={"Klausurnoten21 " + index.toString()} handleChange={this.props.handleChange} value={schueler.klausurnoten[1][0]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleKlausurnoten22Zelle}><div style={styleDivZelle}><Select name={"Klausurnoten22 " + index.toString()} handleChange={this.props.handleChange} value={schueler.klausurnoten[1][1]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleKlausurnoten23Zelle}><div style={styleDivZelle}><Select name={"Klausurnoten23 " + index.toString()} handleChange={this.props.handleChange} value={schueler.klausurnoten[1][2]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleKlausurnoteHJ2Zelle}><div style={styleDivZelle}><Select name={"KlausurnoteHJ2 " + index.toString()} handleChange={this.props.handleChange} value={schueler.klausurnoteHJ[1]} options={this.props.kurs.optionsNotenS} optionsBeschriftung={[schueler.klausurnoteHJBeschriftung[1]].concat(this.props.kurs.optionsNotenS.slice(1))} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleKlausurenLeerZelle}></td>
                                    <td style={styleSominoten3Zelle}><div style={styleDivZelle}><Select name={"Sominoten3 " + index.toString()} handleChange={this.props.handleChange} value={schueler.sominoten[2]} options={this.props.kurs.optionsNotenM} optionsBeschriftung={[schueler.sominotenBeschriftung[2]].concat(this.props.kurs.optionsNotenM.slice(1))} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleSominoten4Zelle}><div style={styleDivZelle}><Select name={"Sominoten4 " + index.toString()} handleChange={this.props.handleChange} value={schueler.sominoten[3]} options={this.props.kurs.optionsNotenM} optionsBeschriftung={[schueler.sominotenBeschriftung[3]].concat(this.props.kurs.optionsNotenM.slice(1))} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleSominoteHJ2Zelle}><div style={styleDivZelle}><Select name={"SominoteHJ2 " + index.toString()} handleChange={this.props.handleChange} value={schueler.sominoteHJ[1]} options={this.props.kurs.optionsNotenM} optionsBeschriftung={[schueler.sominoteHJBeschriftung[1]].concat(this.props.kurs.optionsNotenM.slice(1))} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleNoteLeerZelle}></td>
                                    <td style={styleZeugnisnoteHJ2Zelle}><div style={styleDivZelle}><Select name={"ZeugnisnoteHJ2 " + index.toString()} handleChange={this.props.handleChange} value={schueler.zeugnisnoteHJ[1]} options={this.props.kurs.optionsNotenM} optionsBeschriftung={[schueler.zeugnisnoteHJBeschriftung[1]].concat(this.props.kurs.optionsNotenM.slice(1))} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleZeugnisnoteHJPunkte2Zelle}><div style={styleDivZelle}><Select name={"ZeugnisnoteHJPunkte2 " + index.toString()} handleChange={this.props.handleChange} value={schueler.zeugnisnoteHJPunkte[1]} options={[schueler.zeugnisnoteHJPunkte[1]]} optionsBeschriftung={[schueler.zeugnisnoteHJPunkte[1]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleZeugnisnoteSJZelle}><div style={styleDivZelle}><Select name={"ZeugnisnoteSJ " + index.toString()} handleChange={this.props.handleChange} value={schueler.zeugnisnoteSJ} options={this.props.kurs.optionsNotenM} optionsBeschriftung={[schueler.zeugnisnoteSJBeschriftung].concat(this.props.kurs.optionsNotenM.slice(1))} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleNoteLeerZelle}></td>
                                    <td style={styleFehlstundenG3Zelle}><div style={styleDivZelle}><Select name={"FehlstundenG3 " + index.toString()} handleChange={this.props.handleChange} value={schueler.fehlstundenG[2]} options={[schueler.fehlstundenG[2]]} optionsBeschriftung={[schueler.fehlstundenG[2]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color={colorG3} minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleFehlstundenU3Zelle}><div style={styleDivZelle}><Select name={"FehlstundenU3 " + index.toString()} handleChange={this.props.handleChange} value={schueler.fehlstundenU[2]} options={[schueler.fehlstundenU[2]]} optionsBeschriftung={[schueler.fehlstundenU[2]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color={colorU3} minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleFehlstundenG4Zelle}><div style={styleDivZelle}><Select name={"FehlstundenG4 " + index.toString()} handleChange={this.props.handleChange} value={schueler.fehlstundenG[3]} options={[schueler.fehlstundenG[3]]} optionsBeschriftung={[schueler.fehlstundenG[3]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color={colorG4} minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleFehlstundenU4Zelle}><div style={styleDivZelle}><Select name={"FehlstundenU4 " + index.toString()} handleChange={this.props.handleChange} value={schueler.fehlstundenU[3]} options={[schueler.fehlstundenU[3]]} optionsBeschriftung={[schueler.fehlstundenU[3]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color={colorU4} minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleFehlstundenGHJ2Zelle}><div style={styleDivZelle}><Select name={"FehlstundenGHJ2 " + index.toString()} handleChange={this.props.handleChange} value={schueler.fehlstundenGHJ[1]} options={[schueler.fehlstundenGHJ[1]]} optionsBeschriftung={[schueler.fehlstundenGHJ[1]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color={colorGHJ2} minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleFehlstundenUHJ2Zelle}><div style={styleDivZelle}><Select name={"FehlstundenUHJ2 " + index.toString()} handleChange={this.props.handleChange} value={schueler.fehlstundenUHJ[1]} options={[schueler.fehlstundenUHJ[1]]} optionsBeschriftung={[schueler.fehlstundenUHJ[1]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color={colorUHJ2} minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleNoteLeerZelle}></td>
                                    <td style={styleTestnoten31Zelle}><div style={styleDivZelle}><Select name={"Testnoten31 " + index.toString()} handleChange={this.props.handleChange} value={schueler.testnoten[2][0]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleTestnoten32Zelle}><div style={styleDivZelle}><Select name={"Testnoten32 " + index.toString()} handleChange={this.props.handleChange} value={schueler.testnoten[2][1]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleTestnoten41Zelle}><div style={styleDivZelle}><Select name={"Testnoten41 " + index.toString()} handleChange={this.props.handleChange} value={schueler.testnoten[3][0]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleTestnoten42Zelle}><div style={styleDivZelle}><Select name={"Testnoten42 " + index.toString()} handleChange={this.props.handleChange} value={schueler.testnoten[3][1]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleReferatnoten31Zelle}><div style={styleDivZelle}><Select name={"Referatnoten31 " + index.toString()} handleChange={this.props.handleChange} value={schueler.referatnoten[2][0]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleReferatnoten32Zelle}><div style={styleDivZelle}><Select name={"Referatnoten32 " + index.toString()} handleChange={this.props.handleChange} value={schueler.referatnoten[2][1]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleReferatnoten41Zelle}><div style={styleDivZelle}><Select name={"Referatnoten41 " + index.toString()} handleChange={this.props.handleChange} value={schueler.referatnoten[3][0]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleReferatnoten42Zelle}><div style={styleDivZelle}><Select name={"Referatnoten42 " + index.toString()} handleChange={this.props.handleChange} value={schueler.referatnoten[3][1]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                    <td style={styleBemerkungen2Zelle}><div name={index} style={styleDivZelleBemerkungen} onClick={this.handleClickBemerkungen2}>{schueler.bemerkungen[1]}</div></td>
                                </tr>
                            </React.Fragment>
                        )
                    }
                    else {
                        return (
                            <tr className="grauerHintergrundNoten" key={key}>
                                <td style={styleName}><div style={styleDivName}>{schueler.nachname}</div></td>
                                <td style={styleName}><div style={styleDivName}>{schueler.vorname}</div></td>
                                <td style={styleNoteLeerZelle}></td>
                                <td style={styleKlausurfach2Zelle}><div style={styleDivZelleCheckbox}><Checkbox name={"Klausurfach2 " + index.toString()} handleChange={this.props.handleChange} checked={schueler.klausurfach[1]} checkboxDisabled={this.props.checkboxesDisabled} checkboxVisible={true} /></div></td>
                                <td style={styleKlausurnoten21Zelle}><div style={styleDivZelle}><Select name={"Klausurnoten21 " + index.toString()} handleChange={this.props.handleChange} value={schueler.klausurnoten[1][0]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleKlausurnoten22Zelle}><div style={styleDivZelle}><Select name={"Klausurnoten22 " + index.toString()} handleChange={this.props.handleChange} value={schueler.klausurnoten[1][1]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleKlausurnoten23Zelle}><div style={styleDivZelle}><Select name={"Klausurnoten23 " + index.toString()} handleChange={this.props.handleChange} value={schueler.klausurnoten[1][2]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleKlausurnoteHJ2Zelle}><div style={styleDivZelle}><Select name={"KlausurnoteHJ2 " + index.toString()} handleChange={this.props.handleChange} value={schueler.klausurnoteHJ[1]} options={this.props.kurs.optionsNotenS} optionsBeschriftung={[schueler.klausurnoteHJBeschriftung[1]].concat(this.props.kurs.optionsNotenS.slice(1))} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleKlausurenLeerZelle}></td>
                                <td style={styleSominoten3Zelle}><div style={styleDivZelle}><Select name={"Sominoten3 " + index.toString()} handleChange={this.props.handleChange} value={schueler.sominoten[2]} options={this.props.kurs.optionsNotenM} optionsBeschriftung={[schueler.sominotenBeschriftung[2]].concat(this.props.kurs.optionsNotenM.slice(1))} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleSominoten4Zelle}><div style={styleDivZelle}><Select name={"Sominoten4 " + index.toString()} handleChange={this.props.handleChange} value={schueler.sominoten[3]} options={this.props.kurs.optionsNotenM} optionsBeschriftung={[schueler.sominotenBeschriftung[3]].concat(this.props.kurs.optionsNotenM.slice(1))} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleSominoteHJ2Zelle}><div style={styleDivZelle}><Select name={"SominoteHJ2 " + index.toString()} handleChange={this.props.handleChange} value={schueler.sominoteHJ[1]} options={this.props.kurs.optionsNotenM} optionsBeschriftung={[schueler.sominoteHJBeschriftung[1]].concat(this.props.kurs.optionsNotenM.slice(1))} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleNoteLeerZelle}></td>
                                <td style={styleZeugnisnoteHJ2Zelle}><div style={styleDivZelle}><Select name={"ZeugnisnoteHJ2 " + index.toString()} handleChange={this.props.handleChange} value={schueler.zeugnisnoteHJ[1]} options={this.props.kurs.optionsNotenM} optionsBeschriftung={[schueler.zeugnisnoteHJBeschriftung[1]].concat(this.props.kurs.optionsNotenM.slice(1))} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleZeugnisnoteHJPunkte2Zelle}><div style={styleDivZelle}><Select name={"ZeugnisnoteHJPunkte2 " + index.toString()} handleChange={this.props.handleChange} value={schueler.zeugnisnoteHJPunkte[1]} options={[schueler.zeugnisnoteHJPunkte[1]]} optionsBeschriftung={[schueler.zeugnisnoteHJPunkte[1]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleZeugnisnoteSJZelle}><div style={styleDivZelle}><Select name={"ZeugnisnoteSJ " + index.toString()} handleChange={this.props.handleChange} value={schueler.zeugnisnoteSJ} options={this.props.kurs.optionsNotenM} optionsBeschriftung={[schueler.zeugnisnoteSJBeschriftung].concat(this.props.kurs.optionsNotenM.slice(1))} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleNoteLeerZelle}></td>
                                <td style={styleFehlstundenG3Zelle}><div style={styleDivZelle}><Select name={"FehlstundenG3 " + index.toString()} handleChange={this.props.handleChange} value={schueler.fehlstundenG[2]} options={[schueler.fehlstundenG[2]]} optionsBeschriftung={[schueler.fehlstundenG[2]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color={colorG3} minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleFehlstundenU3Zelle}><div style={styleDivZelle}><Select name={"FehlstundenU3 " + index.toString()} handleChange={this.props.handleChange} value={schueler.fehlstundenU[2]} options={[schueler.fehlstundenU[2]]} optionsBeschriftung={[schueler.fehlstundenU[2]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color={colorU3} minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleFehlstundenG4Zelle}><div style={styleDivZelle}><Select name={"FehlstundenG4 " + index.toString()} handleChange={this.props.handleChange} value={schueler.fehlstundenG[3]} options={[schueler.fehlstundenG[3]]} optionsBeschriftung={[schueler.fehlstundenG[3]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color={colorG4} minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleFehlstundenU4Zelle}><div style={styleDivZelle}><Select name={"FehlstundenU4 " + index.toString()} handleChange={this.props.handleChange} value={schueler.fehlstundenU[3]} options={[schueler.fehlstundenU[3]]} optionsBeschriftung={[schueler.fehlstundenU[3]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color={colorU4} minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleFehlstundenGHJ2Zelle}><div style={styleDivZelle}><Select name={"FehlstundenGHJ2 " + index.toString()} handleChange={this.props.handleChange} value={schueler.fehlstundenGHJ[1]} options={[schueler.fehlstundenGHJ[1]]} optionsBeschriftung={[schueler.fehlstundenGHJ[1]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color={colorGHJ2} minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleFehlstundenUHJ2Zelle}><div style={styleDivZelle}><Select name={"FehlstundenUHJ2 " + index.toString()} handleChange={this.props.handleChange} value={schueler.fehlstundenUHJ[1]} options={[schueler.fehlstundenUHJ[1]]} optionsBeschriftung={[schueler.fehlstundenUHJ[1]]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="bold" color={colorUHJ2} minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleNoteLeerZelle}></td>
                                <td style={styleTestnoten31Zelle}><div style={styleDivZelle}><Select name={"Testnoten31 " + index.toString()} handleChange={this.props.handleChange} value={schueler.testnoten[2][0]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleTestnoten32Zelle}><div style={styleDivZelle}><Select name={"Testnoten32 " + index.toString()} handleChange={this.props.handleChange} value={schueler.testnoten[2][1]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleTestnoten41Zelle}><div style={styleDivZelle}><Select name={"Testnoten41 " + index.toString()} handleChange={this.props.handleChange} value={schueler.testnoten[3][0]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleTestnoten42Zelle}><div style={styleDivZelle}><Select name={"Testnoten42 " + index.toString()} handleChange={this.props.handleChange} value={schueler.testnoten[3][1]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleReferatnoten31Zelle}><div style={styleDivZelle}><Select name={"Referatnoten31 " + index.toString()} handleChange={this.props.handleChange} value={schueler.referatnoten[2][0]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleReferatnoten32Zelle}><div style={styleDivZelle}><Select name={"Referatnoten32 " + index.toString()} handleChange={this.props.handleChange} value={schueler.referatnoten[2][1]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleReferatnoten41Zelle}><div style={styleDivZelle}><Select name={"Referatnoten41 " + index.toString()} handleChange={this.props.handleChange} value={schueler.referatnoten[3][0]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleReferatnoten42Zelle}><div style={styleDivZelle}><Select name={"Referatnoten42 " + index.toString()} handleChange={this.props.handleChange} value={schueler.referatnoten[3][1]} options={this.props.kurs.optionsNotenS.slice(1)} optionsBeschriftung={this.props.kurs.optionsNotenS.slice(1)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={hoehe + rand} /></div></td>
                                <td style={styleBemerkungen2Zelle}><div name={index} style={styleDivZelleBemerkungen} onClick={this.handleClickBemerkungen2}>{schueler.bemerkungen[1]}</div></td>
                            </tr>
                        )
                    }
                }
            });
        }
        if (this.props.ansicht === "Fehlstunden") {
            dargestellteHausaufgaben = this.props.kurs.unterricht[this.props.quartal - 1].map((unterricht, indexUnterricht) => {
                const keyUnterricht = "unterricht" + indexUnterricht;
                return (
                    <td key={keyUnterricht} style={styleInhalt}><div name={indexUnterricht} style={styleDivInhalt} onClick={this.props.handleClickHausaufgabe}>{unterricht.hausaufgabe}</div></td>
                );
            });
            dargestellteStundenthemen = this.props.kurs.unterricht[this.props.quartal - 1].map((unterricht, indexUnterricht) => {
                const keyUnterricht = "unterricht" + indexUnterricht;
                return (
                    <td key={keyUnterricht} style={styleInhalt}><div name={indexUnterricht} style={styleDivInhalt} onClick={this.props.handleClickStundenthema}>{unterricht.stundenthema}</div></td>
                );
            });
            dargestellteDaten = this.props.kurs.unterricht[this.props.quartal - 1].map((unterricht, indexUnterricht) => {
                const keyUnterricht = "unterricht" + indexUnterricht;
                return (
                    <td key={keyUnterricht} style={styleDatum}><div name={indexUnterricht} style={styleDivDatum} onClick={this.props.handleClickDatum}>{unterricht.datum}</div></td>
                );
            });
            dargestellteDauerSoll = this.props.kurs.unterricht[this.props.quartal - 1].map((unterricht, indexUnterricht) => {
                const keyUnterricht = "unterricht" + indexUnterricht;
                return (
                    <td key={keyUnterricht} style={styleDauer}><div style={styleDivDauer}><Select name={"Dauer Soll " + indexUnterricht.toString()} handleChange={this.props.handleChange} value={unterricht.dauerSoll} options={this.props.optionsDauer} optionsBeschriftung={this.props.optionsDauer} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={100} /></div></td>
                );
            });
            dargestellteDauerIst = this.props.kurs.unterricht[this.props.quartal - 1].map((unterricht, indexUnterricht) => {
                const keyUnterricht = "unterricht" + indexUnterricht;
                return (
                    <td key={keyUnterricht} style={styleDauer}><div style={styleDivDauer}><Select name={"Dauer Ist " + indexUnterricht.toString()} handleChange={this.props.handleChange} value={unterricht.dauerIst} options={this.props.optionsDauer} optionsBeschriftung={this.props.optionsDauer} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={100} /></div></td>
                );
            });
            dargestellteDauerStriche = this.props.kurs.unterricht[this.props.quartal - 1].map((unterricht, indexUnterricht) => {
                const keyUnterricht = "unterricht" + indexUnterricht;
                return (
                    <td key={keyUnterricht} style={styleDauer}><div style={styleDivDauer}><Select name={"Dauer Striche " + indexUnterricht.toString()} handleChange={this.props.handleChange} value={unterricht.dauerStriche} options={this.props.optionsDauer.slice(0, 1 + unterricht.dauerIst)} optionsBeschriftung={this.props.optionsDauer.slice(0, 1 + unterricht.dauerIst)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={100} /></div></td>
                );
            });
            return (
                <table style={styleTable}>
                    <tbody>
                        <tr>
                            <td style={styleUeberblick} rowSpan="6" colSpan="2">
                                <Button name={"Hauptmenü"} handleClick={this.props.handleClick} beschriftung={"Hauptmenü"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <br />
                                <Button name={"Unterricht"} handleClick={this.props.handleClick} beschriftung={"Unterricht"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <span style={styleSpanDatumwahl}> am<Select name={"Datum Wahl"} handleChange={this.props.handleChange} value={this.props.indexUnterricht} options={this.props.kurs.unterricht[this.props.quartal - 1].map((x, index) => this.props.kurs.unterricht[this.props.quartal - 1].length - 1 - index)} optionsBeschriftung={this.props.kurs.unterricht[this.props.quartal - 1].map((x, index) => this.props.kurs.unterricht[this.props.quartal - 1][this.props.kurs.unterricht[this.props.quartal - 1].length - 1 - index].datum)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="left" fontWeight="normal" color="black" minWidth={laengeDatum - 2 * rand} maxWidth={100} /></span>
                                <br />
                                <Button name={"Sitzplan"} handleClick={this.props.handleClick} beschriftung={"Sitzplan"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <br />
                                <Button name={"Einstellungen"} handleClick={this.props.handleClick} beschriftung={"Einstellungen"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <br />
                                <Button name={"Kursmappe"} handleClick={this.props.handleClick} beschriftung={"Kursmappe"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <span style={styleSpanKursmappewahl}> Seite<Select name={"Kursmappe Wahl"} handleChange={this.props.handleChange} value={this.props.kursmappeWahl} options={["Deckblatt", "Kursplanung", "Kursprotokoll", "Ergebnisspiegel"]} optionsBeschriftung={["Deckblatt", "Kursplanung", "Kursprotokoll", "Ergebnisspiegel"]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="left" fontWeight="normal" color="black" minWidth={10} maxWidth={120} /></span>
                                <br />
                                <Button name={"Quartal"} handleClick={this.props.handleClick} beschriftung={this.props.quartal.toString() + ". Quartal"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <br />
                                <Button name={"Ansicht"} handleClick={this.props.handleClick} beschriftung={this.props.ansicht.toString()} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <br />
                                <br />
                                Jahrgangsstufe: {this.props.kurs.jahrgangsstufe}
                                <br />
                                <br />
                                Fach: {this.props.kurs.fach}
                                <br />
                                <br />
                                Kursnummer: {this.props.kurs.kursnummer}
                                <br />
                                <br />
                                Klausurschiene: {this.props.kurs.klausurschiene}
                            </td>
                            {dargestellteHausaufgaben}
                        </tr>
                        <tr>
                            {dargestellteStundenthemen}
                        </tr>
                        <tr>
                            {dargestellteDaten}
                        </tr>
                        <tr>
                            {dargestellteDauerSoll}
                        </tr>
                        <tr>
                            {dargestellteDauerIst}
                        </tr>
                        <tr>
                            {dargestellteDauerStriche}
                        </tr>
                        {dargestellteSchueler}
                    </tbody>
                </table>
            );
        }
        else if (this.props.ansicht === "Striche") {
            dargestellteHausaufgaben = this.props.kurs.unterricht[this.props.quartal - 1].map((unterricht, indexUnterricht) => {
                const keyUnterricht = "unterricht" + indexUnterricht;
                if (indexUnterricht === this.props.kurs.unterricht[this.props.quartal - 1].length - 1) {
                    return (
                        <React.Fragment key={keyUnterricht}>
                            <td style={styleInhalt}><div name={indexUnterricht} style={styleDivInhalt} onClick={this.props.handleClickHausaufgabe}>{unterricht.hausaufgabe}</div></td>
                            <td style={styleNoteBorderless} rowSpan="6"></td>
                            <td style={styleNoteQuote} rowSpan="6"><div style={styleDivNote}>Mini-Test-Quote in Prozent</div></td>
                            <td style={styleNote} rowSpan="6"><div style={styleDivNote}>Striche addiert</div></td>
                            <td style={styleNote} rowSpan="6"><div style={styleDivNote}>Striche gewertet</div></td>
                        </React.Fragment>
                    );
                }
                else {
                    return (
                        <td key={keyUnterricht} style={styleInhalt}><div name={indexUnterricht} style={styleDivInhalt} onClick={this.props.handleClickHausaufgabe}>{unterricht.hausaufgabe}</div></td>
                    );
                }
            });
            dargestellteStundenthemen = this.props.kurs.unterricht[this.props.quartal - 1].map((unterricht, indexUnterricht) => {
                const keyUnterricht = "unterricht" + indexUnterricht;
                return (
                    <td key={keyUnterricht} style={styleInhalt}><div name={indexUnterricht} style={styleDivInhalt} onClick={this.props.handleClickStundenthema}>{unterricht.stundenthema}</div></td>
                );
            });
            dargestellteDaten = this.props.kurs.unterricht[this.props.quartal - 1].map((unterricht, indexUnterricht) => {
                const keyUnterricht = "unterricht" + indexUnterricht;
                return (
                    <td key={keyUnterricht} style={styleDatum}><div name={indexUnterricht} style={styleDivDatum} onClick={this.props.handleClickDatum}>{unterricht.datum}</div></td>
                );
            });
            dargestellteDauerSoll = this.props.kurs.unterricht[this.props.quartal - 1].map((unterricht, indexUnterricht) => {
                const keyUnterricht = "unterricht" + indexUnterricht;
                return (
                    <td key={keyUnterricht} style={styleDauer}><div style={styleDivDauer}><Select name={"Dauer Soll " + indexUnterricht.toString()} handleChange={this.props.handleChange} value={unterricht.dauerSoll} options={this.props.optionsDauer} optionsBeschriftung={this.props.optionsDauer} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={100} /></div></td>
                );
            });
            dargestellteDauerIst = this.props.kurs.unterricht[this.props.quartal - 1].map((unterricht, indexUnterricht) => {
                const keyUnterricht = "unterricht" + indexUnterricht;
                return (
                    <td key={keyUnterricht} style={styleDauer}><div style={styleDivDauer}><Select name={"Dauer Ist " + indexUnterricht.toString()} handleChange={this.props.handleChange} value={unterricht.dauerIst} options={this.props.optionsDauer} optionsBeschriftung={this.props.optionsDauer} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={100} /></div></td>
                );
            });
            dargestellteDauerStriche = this.props.kurs.unterricht[this.props.quartal - 1].map((unterricht, indexUnterricht) => {
                const keyUnterricht = "unterricht" + indexUnterricht;
                return (
                    <td key={keyUnterricht} style={styleDauer}><div style={styleDivDauer}><Select name={"Dauer Striche " + indexUnterricht.toString()} handleChange={this.props.handleChange} value={unterricht.dauerStriche} options={this.props.optionsDauer.slice(0, 1 + unterricht.dauerIst)} optionsBeschriftung={this.props.optionsDauer.slice(0, 1 + unterricht.dauerIst)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="center" fontWeight="normal" color="black" minWidth={hoehe + rand} maxWidth={100} /></div></td>
                );
            });
            return (
                <table style={styleTable}>
                    <tbody>
                        <tr>
                            <td style={styleUeberblick} rowSpan="6" colSpan="2">
                                <Button name={"Hauptmenü"} handleClick={this.props.handleClick} beschriftung={"Hauptmenü"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <br />
                                <Button name={"Unterricht"} handleClick={this.props.handleClick} beschriftung={"Unterricht"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <span style={styleSpanDatumwahl}> am<Select name={"Datum Wahl"} handleChange={this.props.handleChange} value={this.props.indexUnterricht} options={this.props.kurs.unterricht[this.props.quartal - 1].map((x, index) => this.props.kurs.unterricht[this.props.quartal - 1].length - 1 - index)} optionsBeschriftung={this.props.kurs.unterricht[this.props.quartal - 1].map((x, index) => this.props.kurs.unterricht[this.props.quartal - 1][this.props.kurs.unterricht[this.props.quartal - 1].length - 1 - index].datum)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="left" fontWeight="normal" color="black" minWidth={laengeDatum - 2 * rand} maxWidth={100} /></span>
                                <br />
                                <Button name={"Sitzplan"} handleClick={this.props.handleClick} beschriftung={"Sitzplan"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <br />
                                <Button name={"Einstellungen"} handleClick={this.props.handleClick} beschriftung={"Einstellungen"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <br />
                                <Button name={"Kursmappe"} handleClick={this.props.handleClick} beschriftung={"Kursmappe"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <span style={styleSpanKursmappewahl}> Seite<Select name={"Kursmappe Wahl"} handleChange={this.props.handleChange} value={this.props.kursmappeWahl} options={["Deckblatt", "Kursplanung", "Kursprotokoll", "Ergebnisspiegel"]} optionsBeschriftung={["Deckblatt", "Kursplanung", "Kursprotokoll", "Ergebnisspiegel"]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="left" fontWeight="normal" color="black" minWidth={10} maxWidth={120} /></span>
                                <br />
                                <Button name={"Quartal"} handleClick={this.props.handleClick} beschriftung={this.props.quartal.toString() + ". Quartal"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <br />
                                <Button name={"Ansicht"} handleClick={this.props.handleClick} beschriftung={this.props.ansicht.toString()} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <span style={styleSpanStrichewahl}> <Select name={"Striche Wahl"} handleChange={this.props.handleChange} value={this.props.stricheWahl} options={["Mündlich", "Mini-Tests", "Defizite", "Gesamt"]} optionsBeschriftung={["Mündlich", "Mini-Tests", "Defizite", "Gesamt"]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="left" fontWeight="normal" color="black" minWidth={10} maxWidth={100} /></span>
                                <br />
                                <br />
                                Jahrgangsstufe: {this.props.kurs.jahrgangsstufe}
                                <br />
                                <br />
                                Fach: {this.props.kurs.fach}
                                <br />
                                <br />
                                Kursnummer: {this.props.kurs.kursnummer}
                                <br />
                                <br />
                                Klausurschiene: {this.props.kurs.klausurschiene}
                            </td>
                            {dargestellteHausaufgaben}
                        </tr>
                        <tr>
                            {dargestellteStundenthemen}
                        </tr>
                        <tr>
                            {dargestellteDaten}
                        </tr>
                        <tr>
                            {dargestellteDauerSoll}
                        </tr>
                        <tr>
                            {dargestellteDauerIst}
                        </tr>
                        <tr>
                            {dargestellteDauerStriche}
                        </tr>
                        {dargestellteSchueler}
                    </tbody>
                </table>
            );
        }
        else if (this.props.ansicht === "Noten" && this.props.halbjahr === 1) {
            return (
                <table style={styleTable}>
                    <tbody>
                        <tr>
                            <td style={styleUeberblick} rowSpan="1" colSpan="2">
                                <Button name={"Hauptmenü"} handleClick={this.props.handleClick} beschriftung={"Hauptmenü"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <br />
                                <Button name={"Unterricht"} handleClick={this.props.handleClick} beschriftung={"Unterricht"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <span style={styleSpanDatumwahl}> am<Select name={"Datum Wahl"} handleChange={this.props.handleChange} value={this.props.indexUnterricht} options={this.props.kurs.unterricht[this.props.quartal - 1].map((x, index) => this.props.kurs.unterricht[this.props.quartal - 1].length - 1 - index)} optionsBeschriftung={this.props.kurs.unterricht[this.props.quartal - 1].map((x, index) => this.props.kurs.unterricht[this.props.quartal - 1][this.props.kurs.unterricht[this.props.quartal - 1].length - 1 - index].datum)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="left" fontWeight="normal" color="black" minWidth={laengeDatum - 2 * rand} maxWidth={100} /></span>
                                <br />
                                <Button name={"Sitzplan"} handleClick={this.props.handleClick} beschriftung={"Sitzplan"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <br />
                                <Button name={"Einstellungen"} handleClick={this.props.handleClick} beschriftung={"Einstellungen"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <br />
                                <Button name={"Kursmappe"} handleClick={this.props.handleClick} beschriftung={"Kursmappe"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <span style={styleSpanKursmappewahl}> Seite<Select name={"Kursmappe Wahl"} handleChange={this.props.handleChange} value={this.props.kursmappeWahl} options={["Deckblatt", "Kursplanung", "Kursprotokoll", "Ergebnisspiegel"]} optionsBeschriftung={["Deckblatt", "Kursplanung", "Kursprotokoll", "Ergebnisspiegel"]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="left" fontWeight="normal" color="black" minWidth={10} maxWidth={120} /></span>
                                <br />
                                <Button name={"Halbjahr"} handleClick={this.props.handleClick} beschriftung={this.props.halbjahr.toString() + ". Halbjahr"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <br />
                                <Button name={"Ansicht"} handleClick={this.props.handleClick} beschriftung={this.props.ansicht.toString()} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <br />
                                <br />
                                Jahrgangsstufe: {this.props.kurs.jahrgangsstufe}
                                <br />
                                <br />
                                Fach: {this.props.kurs.fach}
                                <br />
                                <br />
                                Kursnummer: {this.props.kurs.kursnummer}
                                <br />
                                <br />
                                Klausurschiene: {this.props.kurs.klausurschiene}
                            </td>
                            <td style={styleNoteLeer}></td>
                            <td style={styleKlausurfach1}><div style={styleDivNote}>Klausurfach</div></td>
                            <td style={styleKlausurnoten11}><div style={styleDivNote}>Klausur Nr. 1</div></td>
                            <td style={styleKlausurnoten12}><div style={styleDivNote}>Klausur Nr. 2</div></td>
                            <td style={styleKlausurnoten13}><div style={styleDivNote}>Klausur Nr. 3</div></td>
                            <td style={styleKlausurnoteHJ1}><div style={styleDivNote}><b>Klausurnote 1. Halbjahr</b></div></td>
                            <td style={styleKlausurenLeer}></td>
                            <td style={styleSominoten1}><div style={styleDivNote}>Sonstige Mitarbeit 1. Quartal</div></td>
                            <td style={styleSominoten2}><div style={styleDivNote}>Sonstige Mitarbeit 2. Quartal</div></td>
                            <td style={styleSominoteHJ1}><div style={styleDivNote}><b>Sonstige Mitarbeit 1. Halbjahr</b></div></td>
                            <td style={styleNoteLeer}></td>
                            <td style={styleZeugnisnoteHJ1}><div style={styleDivNote}><b>Zensur 1. Halbjahr</b></div></td>
                            <td style={styleZeugnisnoteHJPunkte1}><div style={styleDivNote}><b>Punkte 1. Halbjahr</b></div></td>
                            <td style={styleNoteLeer}></td>
                            <td style={styleFehlstundenG1}><div style={styleDivNote}>Fehlstunden gesamt 1. Quartal</div></td>
                            <td style={styleFehlstundenU1}><div style={styleDivNote}>Fehlstunden unentschuldigt 1. Quartal</div></td>
                            <td style={styleFehlstundenG2}><div style={styleDivNote}>Fehlstunden gesamt 2. Quartal</div></td>
                            <td style={styleFehlstundenU2}><div style={styleDivNote}>Fehlstunden unentschuldigt 2. Quartal</div></td>
                            <td style={styleFehlstundenGHJ1}><div style={styleDivNote}><b>Fehlstunden gesamt 1. Halbjahr</b></div></td>
                            <td style={styleFehlstundenUHJ1}><div style={styleDivNote}><b>Fehlstunden unentschuldigt 1. Halbjahr</b></div></td>
                            <td style={styleNoteLeer}></td>
                            <td style={styleTestnoten11}><div style={styleDivNote}>Test 1. Quartal</div></td>
                            <td style={styleTestnoten12}><div style={styleDivNote}>Test 1. Quartal</div></td>
                            <td style={styleTestnoten21}><div style={styleDivNote}>Test 2. Quartal</div></td>
                            <td style={styleTestnoten22}><div style={styleDivNote}>Test 2. Quartal</div></td>
                            <td style={styleReferatnoten11}><div style={styleDivNote}>Referat 1. Quartal</div></td>
                            <td style={styleReferatnoten12}><div style={styleDivNote}>Referat 1. Quartal</div></td>
                            <td style={styleReferatnoten21}><div style={styleDivNote}>Referat 2. Quartal</div></td>
                            <td style={styleReferatnoten22}><div style={styleDivNote}>Referat 2. Quartal</div></td>
                            <td style={styleBemerkungen1}><div style={styleDivNote}>Bemerkungen 1. Halbjahr</div></td>
                        </tr>
                        {dargestellteSchueler}
                        <tr>
                            <td style={styleNameLeer}></td>
                            <td style={styleNameLeer}></td>
                            <td style={styleNoteLeerZelleLeer}></td>
                            <td style={styleKlausurfach1ZelleLeer}></td>
                            <td style={styleKlausurnoten11ZelleLeer}></td>
                            <td style={styleKlausurnoten12ZelleLeer}></td>
                            <td style={styleKlausurnoten13ZelleLeer}></td>
                            <td style={styleKlausurnoteHJ1ZelleLeer}></td>
                            <td style={styleKlausurenLeerZelleLeer}></td>
                            <td style={styleSominoten1ZelleLeer}></td>
                            <td style={styleSominoten2ZelleLeer}></td>
                            <td style={styleSominoteHJ1ZelleLeer}></td>
                            <td style={styleNoteLeerZelleLeer}></td>
                            <td style={styleZeugnisnoteHJ1ZelleLeer}></td>
                            <td style={styleZeugnisnoteHJPunkte1ZelleLeer}></td>
                            <td style={styleNoteLeerZelleLeer}></td>
                            <td style={styleFehlstundenG1ZelleLeer}></td>
                            <td style={styleFehlstundenU1ZelleLeer}></td>
                            <td style={styleFehlstundenG2ZelleLeer}></td>
                            <td style={styleFehlstundenU2ZelleLeer}></td>
                            <td style={styleFehlstundenGHJ1ZelleLeer}></td>
                            <td style={styleFehlstundenUHJ1ZelleLeer}></td>
                            <td style={styleNoteLeerZelleLeer}></td>
                            <td style={styleTestnoten11ZelleLeer}></td>
                            <td style={styleTestnoten12ZelleLeer}></td>
                            <td style={styleTestnoten21ZelleLeer}></td>
                            <td style={styleTestnoten22ZelleLeer}></td>
                            <td style={styleReferatnoten11ZelleLeer}></td>
                            <td style={styleReferatnoten12ZelleLeer}></td>
                            <td style={styleReferatnoten21ZelleLeer}></td>
                            <td style={styleReferatnoten22ZelleLeer}></td>
                            <td style={styleBemerkungen1ZelleLeer}></td>
                        </tr>
                        <tr>
                            <td style={styleNameLeer}></td>
                            <td style={styleNameLeer}></td>
                            <td style={styleNoteLeerZelleLeer}></td>
                            <td style={styleKlausurfach1ZelleLeer}></td>
                            <td style={styleKlausurnoten11ZelleLeer}></td>
                            <td style={styleKlausurnoten12ZelleLeer}></td>
                            <td style={styleKlausurnoten13ZelleLeer}></td>
                            <td style={styleKlausurnoteHJ1ZelleLeer}></td>
                            <td style={styleKlausurenLeerZelleLeer}></td>
                            <td style={styleSominoten1ZelleLeer}></td>
                            <td style={styleSominoten2ZelleLeer}></td>
                            <td style={styleSominoteHJ1ZelleLeer}></td>
                            <td style={styleNoteLeerZelleLeer}></td>
                            <td style={styleZeugnisnoteHJ1ZelleLeer}></td>
                            <td style={styleZeugnisnoteHJPunkte1ZelleLeer}></td>
                            <td style={styleNoteLeerZelleLeer}></td>
                            <td style={styleUnterrichtSoll} colSpan="2"><div style={styleDivUnterrichtStunden}>Soll: {this.props.kurs.stundenSoll[0]}</div></td>
                            <td style={styleUnterrichtSoll} colSpan="2"><div style={styleDivUnterrichtStunden}>Soll: {this.props.kurs.stundenSoll[1]}</div></td>
                            <td style={styleFehlstundenGHJ1ZelleLeer}></td>
                            <td style={styleFehlstundenUHJ1ZelleLeer}></td>
                            <td style={styleNoteLeerZelleLeer}></td>
                            <td style={styleTestnoten11ZelleLeer}></td>
                            <td style={styleTestnoten12ZelleLeer}></td>
                            <td style={styleTestnoten21ZelleLeer}></td>
                            <td style={styleTestnoten22ZelleLeer}></td>
                            <td style={styleReferatnoten11ZelleLeer}></td>
                            <td style={styleReferatnoten12ZelleLeer}></td>
                            <td style={styleReferatnoten21ZelleLeer}></td>
                            <td style={styleReferatnoten22ZelleLeer}></td>
                            <td style={styleBemerkungen1ZelleLeer}></td>
                        </tr>
                        <tr>
                            <td style={styleNameLeer}></td>
                            <td style={styleNameLeer}></td>
                            <td style={styleNoteLeerZelleLeer}></td>
                            <td style={styleKlausurfach1ZelleLeer}></td>
                            <td style={styleKlausurnoten11ZelleLeer}></td>
                            <td style={styleKlausurnoten12ZelleLeer}></td>
                            <td style={styleKlausurnoten13ZelleLeer}></td>
                            <td style={styleKlausurnoteHJ1ZelleLeer}></td>
                            <td style={styleKlausurenLeerZelleLeer}></td>
                            <td style={styleSominoten1ZelleLeer}></td>
                            <td style={styleSominoten2ZelleLeer}></td>
                            <td style={styleSominoteHJ1ZelleLeer}></td>
                            <td style={styleNoteLeerZelleLeer}></td>
                            <td style={styleZeugnisnoteHJ1ZelleLeer}></td>
                            <td style={styleZeugnisnoteHJPunkte1ZelleLeer}></td>
                            <td style={styleNoteLeerZelleLeer}></td>
                            <td style={styleUnterrichtIst} colSpan="2"><div style={styleDivUnterrichtStunden}>Ist:&nbsp;&nbsp; {this.props.kurs.stundenIst[0]}</div></td>
                            <td style={styleUnterrichtIst} colSpan="2"><div style={styleDivUnterrichtStunden}>Ist:&nbsp;&nbsp; {this.props.kurs.stundenIst[1]}</div></td>
                            <td style={styleFehlstundenGHJ1ZelleLeer}></td>
                            <td style={styleFehlstundenUHJ1ZelleLeer}></td>
                            <td style={styleNoteLeerZelleLeer}></td>
                            <td style={styleTestnoten11ZelleLeer}></td>
                            <td style={styleTestnoten12ZelleLeer}></td>
                            <td style={styleTestnoten21ZelleLeer}></td>
                            <td style={styleTestnoten22ZelleLeer}></td>
                            <td style={styleReferatnoten11ZelleLeer}></td>
                            <td style={styleReferatnoten12ZelleLeer}></td>
                            <td style={styleReferatnoten21ZelleLeer}></td>
                            <td style={styleReferatnoten22ZelleLeer}></td>
                            <td style={styleBemerkungen1ZelleLeer}></td>
                        </tr>
                    </tbody>
                </table>
            );
        }
        else if (this.props.ansicht === "Noten" && this.props.halbjahr === 2) {
            return (
                <table style={styleTable}>
                    <tbody>
                        <tr>
                            <td style={styleUeberblick} rowSpan="1" colSpan="2">
                                <Button name={"Hauptmenü"} handleClick={this.props.handleClick} beschriftung={"Hauptmenü"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <br />
                                <Button name={"Unterricht"} handleClick={this.props.handleClick} beschriftung={"Unterricht"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <span style={styleSpanDatumwahl}> am<Select name={"Datum Wahl"} handleChange={this.props.handleChange} value={this.props.indexUnterricht} options={this.props.kurs.unterricht[this.props.quartal - 1].map((x, index) => this.props.kurs.unterricht[this.props.quartal - 1].length - 1 - index)} optionsBeschriftung={this.props.kurs.unterricht[this.props.quartal - 1].map((x, index) => this.props.kurs.unterricht[this.props.quartal - 1][this.props.kurs.unterricht[this.props.quartal - 1].length - 1 - index].datum)} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="left" fontWeight="normal" color="black" minWidth={laengeDatum - 2 * rand} maxWidth={100} /></span>
                                <br />
                                <Button name={"Sitzplan"} handleClick={this.props.handleClick} beschriftung={"Sitzplan"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <br />
                                <Button name={"Einstellungen"} handleClick={this.props.handleClick} beschriftung={"Einstellungen"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <br />
                                <Button name={"Kursmappe"} handleClick={this.props.handleClick} beschriftung={"Kursmappe"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <span style={styleSpanKursmappewahl}> Seite<Select name={"Kursmappe Wahl"} handleChange={this.props.handleChange} value={this.props.kursmappeWahl} options={["Deckblatt", "Kursplanung", "Kursprotokoll", "Ergebnisspiegel"]} optionsBeschriftung={["Deckblatt", "Kursplanung", "Kursprotokoll", "Ergebnisspiegel"]} selectDisabled={this.props.selectsDisabled} selectVisible={true} selectAppearance={false} textAlign="left" fontWeight="normal" color="black" minWidth={10} maxWidth={120} /></span>
                                <br />
                                <Button name={"Halbjahr"} handleClick={this.props.handleClick} beschriftung={this.props.halbjahr.toString() + ". Halbjahr"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <br />
                                <Button name={"Ansicht"} handleClick={this.props.handleClick} beschriftung={this.props.ansicht.toString()} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                                <br />
                                <br />
                                Jahrgangsstufe: {this.props.kurs.jahrgangsstufe}
                                <br />
                                <br />
                                Fach: {this.props.kurs.fach}
                                <br />
                                <br />
                                Kursnummer: {this.props.kurs.kursnummer}
                                <br />
                                <br />
                                Klausurschiene: {this.props.kurs.klausurschiene}
                            </td>
                            <td style={styleNoteLeer}></td>
                            <td style={styleKlausurfach2}><div style={styleDivNote}>Klausurfach</div></td>
                            <td style={styleKlausurnoten21}><div style={styleDivNote}>Klausur Nr. {this.props.kurs.klausuren[0] + 1}</div></td>
                            <td style={styleKlausurnoten22}><div style={styleDivNote}>Klausur Nr. {this.props.kurs.klausuren[0] + 2}</div></td>
                            <td style={styleKlausurnoten23}><div style={styleDivNote}>Klausur Nr. {this.props.kurs.klausuren[0] + 3}</div></td>
                            <td style={styleKlausurnoteHJ2}><div style={styleDivNote}><b>Klausurnote 2. Halbjahr</b></div></td>
                            <td style={styleKlausurenLeer}></td>
                            <td style={styleSominoten3}><div style={styleDivNote}>Sonstige Mitarbeit 3. Quartal</div></td>
                            <td style={styleSominoten4}><div style={styleDivNote}>Sonstige Mitarbeit 4. Quartal</div></td>
                            <td style={styleSominoteHJ2}><div style={styleDivNote}><b>Sonstige Mitarbeit 2. Halbjahr</b></div></td>
                            <td style={styleNoteLeer}></td>
                            <td style={styleZeugnisnoteHJ2}><div style={styleDivNote}><b>Zensur 2. Halbjahr</b></div></td>
                            <td style={styleZeugnisnoteHJPunkte2}><div style={styleDivNote}><b>Punkte 2. Halbjahr</b></div></td>
                            <td style={styleZeugnisnoteSJ}><div style={styleDivNote}><b>Zensur Schuljahr</b></div></td>
                            <td style={styleNoteLeer}></td>
                            <td style={styleFehlstundenG3}><div style={styleDivNote}>Fehlstunden gesamt 3. Quartal</div></td>
                            <td style={styleFehlstundenU3}><div style={styleDivNote}>Fehlstunden unentschuldigt 3. Quartal</div></td>
                            <td style={styleFehlstundenG4}><div style={styleDivNote}>Fehlstunden gesamt 4. Quartal</div></td>
                            <td style={styleFehlstundenU4}><div style={styleDivNote}>Fehlstunden unentschuldigt 4. Quartal</div></td>
                            <td style={styleFehlstundenGHJ2}><div style={styleDivNote}><b>Fehlstunden gesamt 2. Halbjahr</b></div></td>
                            <td style={styleFehlstundenUHJ2}><div style={styleDivNote}><b>Fehlstunden unentschuldigt 2. Halbjahr</b></div></td>
                            <td style={styleNoteLeer}></td>
                            <td style={styleTestnoten31}><div style={styleDivNote}>Test 3. Quartal</div></td>
                            <td style={styleTestnoten32}><div style={styleDivNote}>Test 3. Quartal</div></td>
                            <td style={styleTestnoten41}><div style={styleDivNote}>Test 4. Quartal</div></td>
                            <td style={styleTestnoten42}><div style={styleDivNote}>Test 4. Quartal</div></td>
                            <td style={styleReferatnoten31}><div style={styleDivNote}>Referat 3. Quartal</div></td>
                            <td style={styleReferatnoten32}><div style={styleDivNote}>Referat 3. Quartal</div></td>
                            <td style={styleReferatnoten41}><div style={styleDivNote}>Referat 4. Quartal</div></td>
                            <td style={styleReferatnoten42}><div style={styleDivNote}>Referat 4. Quartal</div></td>
                            <td style={styleBemerkungen2}><div style={styleDivNote}>Bemerkungen 2. Halbjahr</div></td>
                        </tr>
                        {dargestellteSchueler}
                        <tr>
                            <td style={styleNameLeer}></td>
                            <td style={styleNameLeer}></td>
                            <td style={styleNoteLeerZelleLeer}></td>
                            <td style={styleKlausurfach2ZelleLeer}></td>
                            <td style={styleKlausurnoten21ZelleLeer}></td>
                            <td style={styleKlausurnoten22ZelleLeer}></td>
                            <td style={styleKlausurnoten23ZelleLeer}></td>
                            <td style={styleKlausurnoteHJ2ZelleLeer}></td>
                            <td style={styleKlausurenLeerZelleLeer}></td>
                            <td style={styleSominoten3ZelleLeer}></td>
                            <td style={styleSominoten4ZelleLeer}></td>
                            <td style={styleSominoteHJ2ZelleLeer}></td>
                            <td style={styleNoteLeerZelleLeer}></td>
                            <td style={styleZeugnisnoteHJ2ZelleLeer}></td>
                            <td style={styleZeugnisnoteHJPunkte2ZelleLeer}></td>
                            <td style={styleZeugnisnoteSJZelleLeer}></td>
                            <td style={styleNoteLeerZelleLeer}></td>
                            <td style={styleFehlstundenG3ZelleLeer}></td>
                            <td style={styleFehlstundenU3ZelleLeer}></td>
                            <td style={styleFehlstundenG4ZelleLeer}></td>
                            <td style={styleFehlstundenU4ZelleLeer}></td>
                            <td style={styleFehlstundenGHJ2ZelleLeer}></td>
                            <td style={styleFehlstundenUHJ2ZelleLeer}></td>
                            <td style={styleNoteLeerZelleLeer}></td>
                            <td style={styleTestnoten31ZelleLeer}></td>
                            <td style={styleTestnoten32ZelleLeer}></td>
                            <td style={styleTestnoten41ZelleLeer}></td>
                            <td style={styleTestnoten42ZelleLeer}></td>
                            <td style={styleReferatnoten31ZelleLeer}></td>
                            <td style={styleReferatnoten32ZelleLeer}></td>
                            <td style={styleReferatnoten41ZelleLeer}></td>
                            <td style={styleReferatnoten42ZelleLeer}></td>
                            <td style={styleBemerkungen2ZelleLeer}></td>
                        </tr>
                        <tr>
                            <td style={styleNameLeer}></td>
                            <td style={styleNameLeer}></td>
                            <td style={styleNoteLeerZelleLeer}></td>
                            <td style={styleKlausurfach2ZelleLeer}></td>
                            <td style={styleKlausurnoten21ZelleLeer}></td>
                            <td style={styleKlausurnoten22ZelleLeer}></td>
                            <td style={styleKlausurnoten23ZelleLeer}></td>
                            <td style={styleKlausurnoteHJ2ZelleLeer}></td>
                            <td style={styleKlausurenLeerZelleLeer}></td>
                            <td style={styleSominoten3ZelleLeer}></td>
                            <td style={styleSominoten4ZelleLeer}></td>
                            <td style={styleSominoteHJ2ZelleLeer}></td>
                            <td style={styleNoteLeerZelleLeer}></td>
                            <td style={styleZeugnisnoteHJ2ZelleLeer}></td>
                            <td style={styleZeugnisnoteHJPunkte2ZelleLeer}></td>
                            <td style={styleZeugnisnoteSJZelleLeer}></td>
                            <td style={styleNoteLeerZelleLeer}></td>
                            <td style={styleUnterrichtSoll} colSpan="2"><div style={styleDivUnterrichtStunden}>Soll: {this.props.kurs.stundenSoll[2]}</div></td>
                            <td style={styleUnterrichtSoll} colSpan="2"><div style={styleDivUnterrichtStunden}>Soll: {this.props.kurs.stundenSoll[3]}</div></td>
                            <td style={styleFehlstundenGHJ2ZelleLeer}></td>
                            <td style={styleFehlstundenUHJ2ZelleLeer}></td>
                            <td style={styleNoteLeerZelleLeer}></td>
                            <td style={styleTestnoten31ZelleLeer}></td>
                            <td style={styleTestnoten32ZelleLeer}></td>
                            <td style={styleTestnoten41ZelleLeer}></td>
                            <td style={styleTestnoten42ZelleLeer}></td>
                            <td style={styleReferatnoten31ZelleLeer}></td>
                            <td style={styleReferatnoten32ZelleLeer}></td>
                            <td style={styleReferatnoten41ZelleLeer}></td>
                            <td style={styleReferatnoten42ZelleLeer}></td>
                            <td style={styleBemerkungen2ZelleLeer}></td>
                        </tr>
                        <tr>
                            <td style={styleNameLeer}></td>
                            <td style={styleNameLeer}></td>
                            <td style={styleNoteLeerZelleLeer}></td>
                            <td style={styleKlausurfach2ZelleLeer}></td>
                            <td style={styleKlausurnoten21ZelleLeer}></td>
                            <td style={styleKlausurnoten22ZelleLeer}></td>
                            <td style={styleKlausurnoten23ZelleLeer}></td>
                            <td style={styleKlausurnoteHJ2ZelleLeer}></td>
                            <td style={styleKlausurenLeerZelleLeer}></td>
                            <td style={styleSominoten3ZelleLeer}></td>
                            <td style={styleSominoten4ZelleLeer}></td>
                            <td style={styleSominoteHJ2ZelleLeer}></td>
                            <td style={styleNoteLeerZelleLeer}></td>
                            <td style={styleZeugnisnoteHJ2ZelleLeer}></td>
                            <td style={styleZeugnisnoteHJPunkte2ZelleLeer}></td>
                            <td style={styleZeugnisnoteSJZelleLeer}></td>
                            <td style={styleNoteLeerZelleLeer}></td>
                            <td style={styleUnterrichtIst} colSpan="2"><div style={styleDivUnterrichtStunden}>Ist:&nbsp;&nbsp; {this.props.kurs.stundenIst[2]}</div></td>
                            <td style={styleUnterrichtIst} colSpan="2"><div style={styleDivUnterrichtStunden}>Ist:&nbsp;&nbsp; {this.props.kurs.stundenIst[3]}</div></td>
                            <td style={styleFehlstundenGHJ2ZelleLeer}></td>
                            <td style={styleFehlstundenUHJ2ZelleLeer}></td>
                            <td style={styleNoteLeerZelleLeer}></td>
                            <td style={styleTestnoten31ZelleLeer}></td>
                            <td style={styleTestnoten32ZelleLeer}></td>
                            <td style={styleTestnoten41ZelleLeer}></td>
                            <td style={styleTestnoten42ZelleLeer}></td>
                            <td style={styleReferatnoten31ZelleLeer}></td>
                            <td style={styleReferatnoten32ZelleLeer}></td>
                            <td style={styleReferatnoten41ZelleLeer}></td>
                            <td style={styleReferatnoten42ZelleLeer}></td>
                            <td style={styleBemerkungen2ZelleLeer}></td>
                        </tr>
                    </tbody>
                </table>
            );
        }
    }
}