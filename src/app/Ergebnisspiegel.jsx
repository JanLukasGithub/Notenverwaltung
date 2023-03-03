import React from "react";
import { Button } from "./Button";
import { Klausurspiegel } from "./Klausurspiegel";

export class Ergebnisspiegel extends React.PureComponent {
    render() {
        const notenpunkte = [
            "1+",
            "1",
            "1-",
            "2+",
            "2",
            "2-",
            "3+",
            "3",
            "3-",
            "4+",
            "4",
            "4-",
            "5+",
            "5",
            "5-",
            "6"
        ];
        const styleTable = { borderCollapse: "collapse", width: "*", height: "*", tableLayout: "fixed", marginLeft: 0 };
        const styleTitel = { border: "none", width: "*", height: 28 };
        const styleLeer = { border: "none", width: "*", height: 58 };
        const styleKlausur = { border: "none", width: 340, height: 466 };
        const styleDivTitel = { fontSize: "1.0em", fontWeight: "bold", marginLeft: 20 };
        let styleLeer3;
        let styleTitel3;
        let styleKlausur3;
        if (this.props.kurs.klausuren[0] < 3 && this.props.kurs.klausuren[1] < 3) {
            styleLeer3 = { display: "none" };
            styleTitel3 = { display: "none" };
            styleKlausur3 = { display: "none" };
        }
        else {
            styleLeer3 = styleLeer;
            styleTitel3 = styleTitel;
            styleKlausur3 = styleKlausur;
        }
        let gefunden = 0;
        let quartal11 = -1;
        let index11 = -1;
        let quartal12 = -1;
        let index12 = -1;
        let quartal13 = -1;
        let index13 = -1;
        let quartal21 = -1;
        let index21 = -1;
        let quartal22 = -1;
        let index22 = -1;
        let quartal23 = -1;
        let index23 = -1;
        if (this.props.kurs.klausurdauer[0][0].length > 1) {
            for (let i = 0; i < this.props.kurs.unterricht[0].length; i++) {
                if (quartal11 === -1 && this.props.kurs.unterricht[0][i].stundenthema.startsWith("Klausur Nr. " + (gefunden + 1).toString())) {
                    gefunden = gefunden + 1;
                    quartal11 = 1;
                    index11 = i;
                }
            }
            for (let i = 0; i < this.props.kurs.unterricht[1].length; i++) {
                if (quartal11 === -1 && this.props.kurs.unterricht[1][i].stundenthema.startsWith("Klausur Nr. " + (gefunden + 1).toString())) {
                    gefunden = gefunden + 1;
                    quartal11 = 2;
                    index11 = i;
                }
            }
        }
        if (this.props.kurs.klausurdauer[0][1].length > 1) {
            for (let i = 0; i < this.props.kurs.unterricht[0].length; i++) {
                if (quartal12 === -1 && this.props.kurs.unterricht[0][i].stundenthema.startsWith("Klausur Nr. " + (gefunden + 1).toString())) {
                    gefunden = gefunden + 1;
                    quartal12 = 1;
                    index12 = i;
                }
            }
            for (let i = 0; i < this.props.kurs.unterricht[1].length; i++) {
                if (quartal12 === -1 && this.props.kurs.unterricht[1][i].stundenthema.startsWith("Klausur Nr. " + (gefunden + 1).toString())) {
                    gefunden = gefunden + 1;
                    quartal12 = 2;
                    index12 = i;
                }
            }
        }
        if (this.props.kurs.klausurdauer[0][2].length > 1) {
            for (let i = 0; i < this.props.kurs.unterricht[0].length; i++) {
                if (quartal13 === -1 && this.props.kurs.unterricht[0][i].stundenthema.startsWith("Klausur Nr. " + (gefunden + 1).toString())) {
                    gefunden = gefunden + 1;
                    quartal13 = 1;
                    index13 = i;
                }
            }
            for (let i = 0; i < this.props.kurs.unterricht[1].length; i++) {
                if (quartal13 === -1 && this.props.kurs.unterricht[1][i].stundenthema.startsWith("Klausur Nr. " + (gefunden + 1).toString())) {
                    gefunden = gefunden + 1;
                    quartal13 = 2;
                    index13 = i;
                }
            }
        }
        if (this.props.kurs.klausurdauer[1][0].length > 1) {
            for (let i = 0; i < this.props.kurs.unterricht[2].length; i++) {
                if (quartal21 === -1 && this.props.kurs.unterricht[2][i].stundenthema.startsWith("Klausur Nr. " + (gefunden + 1).toString())) {
                    gefunden = gefunden + 1;
                    quartal21 = 3;
                    index21 = i;
                }
            }
            for (let i = 0; i < this.props.kurs.unterricht[3].length; i++) {
                if (quartal21 === -1 && this.props.kurs.unterricht[3][i].stundenthema.startsWith("Klausur Nr. " + (gefunden + 1).toString())) {
                    gefunden = gefunden + 1;
                    quartal21 = 4;
                    index21 = i;
                }
            }
        }
        if (this.props.kurs.klausurdauer[1][1].length > 1) {
            for (let i = 0; i < this.props.kurs.unterricht[2].length; i++) {
                if (quartal22 === -1 && this.props.kurs.unterricht[2][i].stundenthema.startsWith("Klausur Nr. " + (gefunden + 1).toString())) {
                    gefunden = gefunden + 1;
                    quartal22 = 3;
                    index22 = i;
                }
            }
            for (let i = 0; i < this.props.kurs.unterricht[3].length; i++) {
                if (quartal22 === -1 && this.props.kurs.unterricht[3][i].stundenthema.startsWith("Klausur Nr. " + (gefunden + 1).toString())) {
                    gefunden = gefunden + 1;
                    quartal22 = 4;
                    index22 = i;
                }
            }
        }
        if (this.props.kurs.klausurdauer[1][2].length > 1) {
            for (let i = 0; i < this.props.kurs.unterricht[2].length; i++) {
                if (quartal23 === -1 && this.props.kurs.unterricht[2][i].stundenthema.startsWith("Klausur Nr. " + (gefunden + 1).toString())) {
                    gefunden = gefunden + 1;
                    quartal23 = 3;
                    index23 = i;
                }
            }
            for (let i = 0; i < this.props.kurs.unterricht[3].length; i++) {
                if (quartal23 === -1 && this.props.kurs.unterricht[3][i].stundenthema.startsWith("Klausur Nr. " + (gefunden + 1).toString())) {
                    gefunden = gefunden + 1;
                    quartal23 = 4;
                    index23 = i;
                }
            }
        }
        let anzahlKursteilnehmer = 0;
        let anzahlSchreiber = 0;
        let indexNote = -1;
        let notendurchschnitt = 0;
        let gefehlt = "";
        let datum11;
        let kursteilnehmer11;
        let schreiber11;
        let noten11;
        let notendurchschnitt11;
        let klausurbemerkungen11;
        if (quartal11 < 0) {
            datum11 = "";
            kursteilnehmer11 = "";
            schreiber11 = "";
            noten11 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            notendurchschnitt11 = "";
            klausurbemerkungen11 = this.props.kurs.klausurbemerkungen[0][0];
        }
        else {
            datum11 = this.props.kurs.unterricht[quartal11 - 1][index11].datum;
            anzahlKursteilnehmer = 0;
            anzahlSchreiber = 0;
            noten11 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            gefehlt = "";
            for (let i = 0; i < this.props.kurs.schueler.length - 1; i++) {
                if (this.props.kurs.schueler[i].aktiv[quartal11 - 1]) {
                    anzahlKursteilnehmer = anzahlKursteilnehmer + 1;
                    if (this.props.kurs.schueler[i].anwesenheit[quartal11 - 1][index11].length === 0) {
                        indexNote = notenpunkte.indexOf(this.props.kurs.schueler[i].klausurnoten[0][0]);
                        if (indexNote > -1) {
                            anzahlSchreiber = anzahlSchreiber + 1;
                            noten11[indexNote] = noten11[indexNote] + 1;
                        }
                        else if (this.props.kurs.schueler[i].klausurfach[0] && this.props.kurs.schueler[i].klausurnoten[0][0] === "NT") {
                            gefehlt = gefehlt + ", " + this.props.kurs.schueler[i].nachname;
                        }
                    }
                    else if (this.props.kurs.schueler[i].klausurfach[0]) {
                        gefehlt = gefehlt + ", " + this.props.kurs.schueler[i].nachname;
                    }
                }
            }
            kursteilnehmer11 = anzahlKursteilnehmer.toString();
            schreiber11 = anzahlSchreiber.toString();
            if (anzahlSchreiber === 0) {
                notendurchschnitt11 = "";
            }
            else {
                notendurchschnitt = 0;
                for (let i = 0; i < 16; i++) {
                    notendurchschnitt = notendurchschnitt + (15 - i) * noten11[i];
                }
                notendurchschnitt = (17 - (notendurchschnitt / anzahlSchreiber)) / 3;
                notendurchschnitt = notendurchschnitt.toFixed(2);
                notendurchschnitt11 = notendurchschnitt.toString();
            }
            if (this.props.kurs.klausurbemerkungen[0][0] === "" || this.props.kurs.klausurbemerkungen[0][0].startsWith("Nicht mitgeschrieben: ")) {
                if (gefehlt.length === 0) {
                    klausurbemerkungen11 = "";
                }
                else {
                    klausurbemerkungen11 = "Nicht mitgeschrieben:" + gefehlt.substring(1);
                }
            }
            else {
                klausurbemerkungen11 = this.props.kurs.klausurbemerkungen[0][0];
            }
        }
        let datum12;
        let kursteilnehmer12;
        let schreiber12;
        let noten12;
        let notendurchschnitt12;
        let klausurbemerkungen12;
        if (quartal12 < 0) {
            datum12 = "";
            kursteilnehmer12 = "";
            schreiber12 = "";
            noten12 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            notendurchschnitt12 = "";
            klausurbemerkungen12 = this.props.kurs.klausurbemerkungen[0][1];
        }
        else {
            datum12 = this.props.kurs.unterricht[quartal12 - 1][index12].datum;
            anzahlKursteilnehmer = 0;
            anzahlSchreiber = 0;
            noten12 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            gefehlt = "";
            for (let i = 0; i < this.props.kurs.schueler.length - 1; i++) {
                if (this.props.kurs.schueler[i].aktiv[quartal12 - 1]) {
                    anzahlKursteilnehmer = anzahlKursteilnehmer + 1;
                    if (this.props.kurs.schueler[i].anwesenheit[quartal12 - 1][index12].length === 0) {
                        indexNote = notenpunkte.indexOf(this.props.kurs.schueler[i].klausurnoten[0][1]);
                        if (indexNote > -1) {
                            anzahlSchreiber = anzahlSchreiber + 1;
                            noten12[indexNote] = noten12[indexNote] + 1;
                        }
                        else if (this.props.kurs.schueler[i].klausurfach[0] && this.props.kurs.schueler[i].klausurnoten[0][1] === "NT") {
                            gefehlt = gefehlt + ", " + this.props.kurs.schueler[i].nachname;
                        }
                    }
                    else if (this.props.kurs.schueler[i].klausurfach[0]) {
                        gefehlt = gefehlt + ", " + this.props.kurs.schueler[i].nachname;
                    }
                }
            }
            kursteilnehmer12 = anzahlKursteilnehmer.toString();
            schreiber12 = anzahlSchreiber.toString();
            if (anzahlSchreiber === 0) {
                notendurchschnitt12 = "";
            }
            else {
                notendurchschnitt = 0;
                for (let i = 0; i < 16; i++) {
                    notendurchschnitt = notendurchschnitt + (15 - i) * noten12[i];
                }
                notendurchschnitt = (17 - (notendurchschnitt / anzahlSchreiber)) / 3;
                notendurchschnitt = notendurchschnitt.toFixed(2);
                notendurchschnitt12 = notendurchschnitt.toString();
            }
            if (this.props.kurs.klausurbemerkungen[0][1] === "" || this.props.kurs.klausurbemerkungen[0][1].startsWith("Nicht mitgeschrieben: ")) {
                if (gefehlt.length === 0) {
                    klausurbemerkungen12 = "";
                }
                else {
                    klausurbemerkungen12 = "Nicht mitgeschrieben:" + gefehlt.substring(1);
                }
            }
            else {
                klausurbemerkungen12 = this.props.kurs.klausurbemerkungen[0][1];
            }
        }
        let datum13;
        let kursteilnehmer13;
        let schreiber13;
        let noten13;
        let notendurchschnitt13;
        let klausurbemerkungen13;
        if (quartal13 < 0) {
            datum13 = "";
            kursteilnehmer13 = "";
            schreiber13 = "";
            noten13 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            notendurchschnitt13 = "";
            klausurbemerkungen13 = this.props.kurs.klausurbemerkungen[0][2];
        }
        else {
            datum13 = this.props.kurs.unterricht[quartal13 - 1][index13].datum;
            anzahlKursteilnehmer = 0;
            anzahlSchreiber = 0;
            noten13 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            gefehlt = "";
            for (let i = 0; i < this.props.kurs.schueler.length - 1; i++) {
                if (this.props.kurs.schueler[i].aktiv[quartal13 - 1]) {
                    anzahlKursteilnehmer = anzahlKursteilnehmer + 1;
                    if (this.props.kurs.schueler[i].anwesenheit[quartal13 - 1][index13].length === 0) {
                        indexNote = notenpunkte.indexOf(this.props.kurs.schueler[i].klausurnoten[0][2]);
                        if (indexNote > -1) {
                            anzahlSchreiber = anzahlSchreiber + 1;
                            noten13[indexNote] = noten13[indexNote] + 1;
                        }
                        else if (this.props.kurs.schueler[i].klausurfach[0] && this.props.kurs.schueler[i].klausurnoten[0][2] === "NT") {
                            gefehlt = gefehlt + ", " + this.props.kurs.schueler[i].nachname;
                        }
                    }
                    else if (this.props.kurs.schueler[i].klausurfach[0]) {
                        gefehlt = gefehlt + ", " + this.props.kurs.schueler[i].nachname;
                    }
                }
            }
            kursteilnehmer13 = anzahlKursteilnehmer.toString();
            schreiber13 = anzahlSchreiber.toString();
            if (anzahlSchreiber === 0) {
                notendurchschnitt13 = "";
            }
            else {
                notendurchschnitt = 0;
                for (let i = 0; i < 16; i++) {
                    notendurchschnitt = notendurchschnitt + (15 - i) * noten13[i];
                }
                notendurchschnitt = (17 - (notendurchschnitt / anzahlSchreiber)) / 3;
                notendurchschnitt = notendurchschnitt.toFixed(2);
                notendurchschnitt13 = notendurchschnitt.toString();
            }
            if (this.props.kurs.klausurbemerkungen[0][2] === "" || this.props.kurs.klausurbemerkungen[0][2].startsWith("Nicht mitgeschrieben: ")) {
                if (gefehlt.length === 0) {
                    klausurbemerkungen13 = "";
                }
                else {
                    klausurbemerkungen13 = "Nicht mitgeschrieben:" + gefehlt.substring(1);
                }
            }
            else {
                klausurbemerkungen13 = this.props.kurs.klausurbemerkungen[0][2];
            }
        }
        let datum21;
        let kursteilnehmer21;
        let schreiber21;
        let noten21;
        let notendurchschnitt21;
        let klausurbemerkungen21;
        if (quartal21 < 0) {
            datum21 = "";
            kursteilnehmer21 = "";
            schreiber21 = "";
            noten21 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            notendurchschnitt21 = "";
            klausurbemerkungen21 = this.props.kurs.klausurbemerkungen[1][0];
        }
        else {
            datum21 = this.props.kurs.unterricht[quartal21 - 1][index21].datum;
            anzahlKursteilnehmer = 0;
            anzahlSchreiber = 0;
            noten21 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            gefehlt = "";
            for (let i = 0; i < this.props.kurs.schueler.length - 1; i++) {
                if (this.props.kurs.schueler[i].aktiv[quartal21 - 1]) {
                    anzahlKursteilnehmer = anzahlKursteilnehmer + 1;
                    if (this.props.kurs.schueler[i].anwesenheit[quartal21 - 1][index21].length === 0) {
                        indexNote = notenpunkte.indexOf(this.props.kurs.schueler[i].klausurnoten[1][0]);
                        if (indexNote > -1) {
                            anzahlSchreiber = anzahlSchreiber + 1;
                            noten21[indexNote] = noten21[indexNote] + 1;
                        }
                        else if (this.props.kurs.schueler[i].klausurfach[1] && this.props.kurs.schueler[i].klausurnoten[1][0] === "NT") {
                            gefehlt = gefehlt + ", " + this.props.kurs.schueler[i].nachname;
                        }
                    }
                    else if (this.props.kurs.schueler[i].klausurfach[1]) {
                        gefehlt = gefehlt + ", " + this.props.kurs.schueler[i].nachname;
                    }
                }
            }
            kursteilnehmer21 = anzahlKursteilnehmer.toString();
            schreiber21 = anzahlSchreiber.toString();
            if (anzahlSchreiber === 0) {
                notendurchschnitt21 = "";
            }
            else {
                notendurchschnitt = 0;
                for (let i = 0; i < 16; i++) {
                    notendurchschnitt = notendurchschnitt + (15 - i) * noten21[i];
                }
                notendurchschnitt = (17 - (notendurchschnitt / anzahlSchreiber)) / 3;
                notendurchschnitt = notendurchschnitt.toFixed(2);
                notendurchschnitt21 = notendurchschnitt.toString();
            }
            if (this.props.kurs.klausurbemerkungen[1][0] === "" || this.props.kurs.klausurbemerkungen[1][0].startsWith("Nicht mitgeschrieben: ")) {
                if (gefehlt.length === 0) {
                    klausurbemerkungen21 = "";
                }
                else {
                    klausurbemerkungen21 = "Nicht mitgeschrieben:" + gefehlt.substring(1);
                }
            }
            else {
                klausurbemerkungen21 = this.props.kurs.klausurbemerkungen[1][0];
            }
        }
        let datum22;
        let kursteilnehmer22;
        let schreiber22;
        let noten22;
        let notendurchschnitt22;
        let klausurbemerkungen22;
        if (quartal22 < 0) {
            datum22 = "";
            kursteilnehmer22 = "";
            schreiber22 = "";
            noten22 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            notendurchschnitt22 = "";
            klausurbemerkungen22 = this.props.kurs.klausurbemerkungen[1][1];
        }
        else {
            datum22 = this.props.kurs.unterricht[quartal22 - 1][index22].datum;
            anzahlKursteilnehmer = 0;
            anzahlSchreiber = 0;
            noten22 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            gefehlt = "";
            for (let i = 0; i < this.props.kurs.schueler.length - 1; i++) {
                if (this.props.kurs.schueler[i].aktiv[quartal22 - 1]) {
                    anzahlKursteilnehmer = anzahlKursteilnehmer + 1;
                    if (this.props.kurs.schueler[i].anwesenheit[quartal22 - 1][index22].length === 0) {
                        indexNote = notenpunkte.indexOf(this.props.kurs.schueler[i].klausurnoten[1][1]);
                        if (indexNote > -1) {
                            anzahlSchreiber = anzahlSchreiber + 1;
                            noten22[indexNote] = noten22[indexNote] + 1;
                        }
                        else if (this.props.kurs.schueler[i].klausurfach[1] && this.props.kurs.schueler[i].klausurnoten[1][1] === "NT") {
                            gefehlt = gefehlt + ", " + this.props.kurs.schueler[i].nachname;
                        }
                    }
                    else if (this.props.kurs.schueler[i].klausurfach[1]) {
                        gefehlt = gefehlt + ", " + this.props.kurs.schueler[i].nachname;
                    }
                }
            }
            kursteilnehmer22 = anzahlKursteilnehmer.toString();
            schreiber22 = anzahlSchreiber.toString();
            if (anzahlSchreiber === 0) {
                notendurchschnitt22 = "";
            }
            else {
                notendurchschnitt = 0;
                for (let i = 0; i < 16; i++) {
                    notendurchschnitt = notendurchschnitt + (15 - i) * noten22[i];
                }
                notendurchschnitt = (17 - (notendurchschnitt / anzahlSchreiber)) / 3;
                notendurchschnitt = notendurchschnitt.toFixed(2);
                notendurchschnitt22 = notendurchschnitt.toString();
            }
            if (this.props.kurs.klausurbemerkungen[1][1] === "" || this.props.kurs.klausurbemerkungen[1][1].startsWith("Nicht mitgeschrieben: ")) {
                if (gefehlt.length === 0) {
                    klausurbemerkungen22 = "";
                }
                else {
                    klausurbemerkungen22 = "Nicht mitgeschrieben:" + gefehlt.substring(1);
                }
            }
            else {
                klausurbemerkungen22 = this.props.kurs.klausurbemerkungen[1][1];
            }
        }
        let datum23;
        let kursteilnehmer23;
        let schreiber23;
        let noten23;
        let notendurchschnitt23;
        let klausurbemerkungen23;
        if (quartal23 < 0) {
            datum23 = "";
            kursteilnehmer23 = "";
            schreiber23 = "";
            noten23 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            notendurchschnitt23 = "";
            klausurbemerkungen23 = this.props.kurs.klausurbemerkungen[1][2];
        }
        else {
            datum23 = this.props.kurs.unterricht[quartal23 - 1][index23].datum;
            anzahlKursteilnehmer = 0;
            anzahlSchreiber = 0;
            noten23 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            gefehlt = "";
            for (let i = 0; i < this.props.kurs.schueler.length - 1; i++) {
                if (this.props.kurs.schueler[i].aktiv[quartal23 - 1]) {
                    anzahlKursteilnehmer = anzahlKursteilnehmer + 1;
                    if (this.props.kurs.schueler[i].anwesenheit[quartal23 - 1][index23].length === 0) {
                        indexNote = notenpunkte.indexOf(this.props.kurs.schueler[i].klausurnoten[1][2]);
                        if (indexNote > -1) {
                            anzahlSchreiber = anzahlSchreiber + 1;
                            noten23[indexNote] = noten23[indexNote] + 1;
                        }
                        else if (this.props.kurs.schueler[i].klausurfach[1] && this.props.kurs.schueler[i].klausurnoten[1][2] === "NT") {
                            gefehlt = gefehlt + ", " + this.props.kurs.schueler[i].nachname;
                        }
                    }
                    else if (this.props.kurs.schueler[i].klausurfach[1]) {
                        gefehlt = gefehlt + ", " + this.props.kurs.schueler[i].nachname;
                    }
                }
            }
            kursteilnehmer23 = anzahlKursteilnehmer.toString();
            schreiber23 = anzahlSchreiber.toString();
            if (anzahlSchreiber === 0) {
                notendurchschnitt23 = "";
            }
            else {
                notendurchschnitt = 0;
                for (let i = 0; i < 16; i++) {
                    notendurchschnitt = notendurchschnitt + (15 - i) * noten23[i];
                }
                notendurchschnitt = (17 - (notendurchschnitt / anzahlSchreiber)) / 3;
                notendurchschnitt = notendurchschnitt.toFixed(2);
                notendurchschnitt23 = notendurchschnitt.toString();
            }
            if (this.props.kurs.klausurbemerkungen[1][2] === "" || this.props.kurs.klausurbemerkungen[1][2].startsWith("Nicht mitgeschrieben: ")) {
                if (gefehlt.length === 0) {
                    klausurbemerkungen23 = "";
                }
                else {
                    klausurbemerkungen23 = "Nicht mitgeschrieben:" + gefehlt.substring(1);
                }
            }
            else {
                klausurbemerkungen23 = this.props.kurs.klausurbemerkungen[1][2];
            }
        }
        if (datum11.length > 0) {
            if (datum11.search(".8.") > -1 || datum11.search(".08.") > -1 || datum11.search(".9.") > -1 || datum11.search(".09.") > -1 || datum11.search(".10.") > -1 || datum11.search(".11.") > -1 || datum11.search(".12.") > -1) {
                datum11 = datum11 + this.props.kurs.schuljahr.substring(0, 4);
            }
            else {
                datum11 = datum11 + this.props.kurs.schuljahr.substring(0, 2) + this.props.kurs.schuljahr.substring(5, 7);
            }
        }
        if (datum12.length > 0) {
            if (datum12.search(".8.") > -1 || datum12.search(".08.") > -1 || datum12.search(".9.") > -1 || datum12.search(".09.") > -1 || datum12.search(".10.") > -1 || datum12.search(".11.") > -1 || datum12.search(".12.") > -1) {
                datum12 = datum12 + this.props.kurs.schuljahr.substring(0, 4);
            }
            else {
                datum12 = datum12 + this.props.kurs.schuljahr.substring(0, 2) + this.props.kurs.schuljahr.substring(5, 7);
            }
        }
        if (datum13.length > 0) {
            if (datum13.search(".8.") > -1 || datum13.search(".08.") > -1 || datum13.search(".9.") > -1 || datum13.search(".09.") > -1 || datum13.search(".10.") > -1 || datum13.search(".11.") > -1 || datum13.search(".12.") > -1) {
                datum13 = datum13 + this.props.kurs.schuljahr.substring(0, 4);
            }
            else {
                datum13 = datum13 + this.props.kurs.schuljahr.substring(0, 2) + this.props.kurs.schuljahr.substring(5, 7);
            }
        }
        if (datum21.length > 0) {
            if (datum21.search(".8.") > -1 || datum21.search(".08.") > -1 || datum21.search(".9.") > -1 || datum21.search(".09.") > -1 || datum21.search(".10.") > -1 || datum21.search(".11.") > -1 || datum21.search(".12.") > -1) {
                datum21 = datum21 + this.props.kurs.schuljahr.substring(0, 4);
            }
            else {
                datum21 = datum21 + this.props.kurs.schuljahr.substring(0, 2) + this.props.kurs.schuljahr.substring(5, 7);
            }
        }
        if (datum22.length > 0) {
            if (datum22.search(".8.") > -1 || datum22.search(".08.") > -1 || datum22.search(".9.") > -1 || datum22.search(".09.") > -1 || datum22.search(".10.") > -1 || datum22.search(".11.") > -1 || datum22.search(".12.") > -1) {
                datum22 = datum22 + this.props.kurs.schuljahr.substring(0, 4);
            }
            else {
                datum22 = datum22 + this.props.kurs.schuljahr.substring(0, 2) + this.props.kurs.schuljahr.substring(5, 7);
            }
        }
        if (datum23.length > 0) {
            if (datum23.search(".8.") > -1 || datum23.search(".08.") > -1 || datum23.search(".9.") > -1 || datum23.search(".09.") > -1 || datum23.search(".10.") > -1 || datum23.search(".11.") > -1 || datum23.search(".12.") > -1) {
                datum23 = datum23 + this.props.kurs.schuljahr.substring(0, 4);
            }
            else {
                datum23 = datum23 + this.props.kurs.schuljahr.substring(0, 2) + this.props.kurs.schuljahr.substring(5, 7);
            }
        }
        return (
            <React.Fragment>
                <Button name={"Kursplan"} handleClick={this.props.handleClick} beschriftung={"Kursplan"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                <br />
                <table style={styleTable}>
                    <tbody>
                        <tr>
                            <td style={styleTitel}><div style={styleDivTitel}>ERGEBNISSPIEGEL&nbsp;&nbsp;1. Halbjahr</div></td>
                            <td style={styleTitel}><div style={styleDivTitel}>ERGEBNISSPIEGEL&nbsp;&nbsp;2. Halbjahr</div></td>
                        </tr>
                        <tr>
                            <td style={styleKlausur}><Klausurspiegel name={"11"} handleChange={this.props.handleChange} fach={this.props.kurs.fach} kursart={this.props.kurs.kursart} kursnummer={this.props.kurs.kursnummer} schuljahr={this.props.kurs.schuljahr} jahrgangsstufe={this.props.kurs.jahrgangsstufe} datum={datum11} dauer={this.props.kurs.klausurdauer[0][0]} kursteilnehmer={kursteilnehmer11} schreiber={schreiber11} thema={this.props.kurs.aufgabenstellung[0][0]} notendurchschnitt={notendurchschnitt11} noten={noten11} bemerkungen={klausurbemerkungen11} update={this.props.update} /></td>
                            <td style={styleKlausur}><Klausurspiegel name={"21"} handleChange={this.props.handleChange} fach={this.props.kurs.fach} kursart={this.props.kurs.kursart} kursnummer={this.props.kurs.kursnummer} schuljahr={this.props.kurs.schuljahr} jahrgangsstufe={this.props.kurs.jahrgangsstufe} datum={datum21} dauer={this.props.kurs.klausurdauer[1][0]} kursteilnehmer={kursteilnehmer21} schreiber={schreiber21} thema={this.props.kurs.aufgabenstellung[1][0]} notendurchschnitt={notendurchschnitt21} noten={noten21} bemerkungen={klausurbemerkungen21} update={this.props.update} /></td>
                        </tr>
                        <tr>
                            <td style={styleKlausur}><Klausurspiegel name={"12"} handleChange={this.props.handleChange} fach={this.props.kurs.fach} kursart={this.props.kurs.kursart} kursnummer={this.props.kurs.kursnummer} schuljahr={this.props.kurs.schuljahr} jahrgangsstufe={this.props.kurs.jahrgangsstufe} datum={datum12} dauer={this.props.kurs.klausurdauer[0][1]} kursteilnehmer={kursteilnehmer12} schreiber={schreiber12} thema={this.props.kurs.aufgabenstellung[0][1]} notendurchschnitt={notendurchschnitt12} noten={noten12} bemerkungen={klausurbemerkungen12} update={this.props.update} /></td>
                            <td style={styleKlausur}><Klausurspiegel name={"22"} handleChange={this.props.handleChange} fach={this.props.kurs.fach} kursart={this.props.kurs.kursart} kursnummer={this.props.kurs.kursnummer} schuljahr={this.props.kurs.schuljahr} jahrgangsstufe={this.props.kurs.jahrgangsstufe} datum={datum22} dauer={this.props.kurs.klausurdauer[1][1]} kursteilnehmer={kursteilnehmer22} schreiber={schreiber22} thema={this.props.kurs.aufgabenstellung[1][1]} notendurchschnitt={notendurchschnitt22} noten={noten22} bemerkungen={klausurbemerkungen22} update={this.props.update} /></td>
                        </tr>
                        <tr>
                            <td colSpan="2" style={styleLeer3}>&nbsp;</td>
                        </tr>
                        <tr>
                            <td style={styleTitel3}><div style={styleDivTitel}>ERGEBNISSPIEGEL&nbsp;&nbsp;1. Halbjahr</div></td>
                            <td style={styleTitel3}><div style={styleDivTitel}>ERGEBNISSPIEGEL&nbsp;&nbsp;2. Halbjahr</div></td>
                        </tr>
                        <tr>
                            <td style={styleKlausur3}><Klausurspiegel name={"13"} handleChange={this.props.handleChange} fach={this.props.kurs.fach} kursart={this.props.kurs.kursart} kursnummer={this.props.kurs.kursnummer} schuljahr={this.props.kurs.schuljahr} jahrgangsstufe={this.props.kurs.jahrgangsstufe} datum={datum13} dauer={this.props.kurs.klausurdauer[0][2]} kursteilnehmer={kursteilnehmer13} schreiber={schreiber13} thema={this.props.kurs.aufgabenstellung[0][2]} notendurchschnitt={notendurchschnitt13} noten={noten13} bemerkungen={klausurbemerkungen13} update={this.props.update} /></td>
                            <td style={styleKlausur3}><Klausurspiegel name={"23"} handleChange={this.props.handleChange} fach={this.props.kurs.fach} kursart={this.props.kurs.kursart} kursnummer={this.props.kurs.kursnummer} schuljahr={this.props.kurs.schuljahr} jahrgangsstufe={this.props.kurs.jahrgangsstufe} datum={datum23} dauer={this.props.kurs.klausurdauer[1][2]} kursteilnehmer={kursteilnehmer23} schreiber={schreiber23} thema={this.props.kurs.aufgabenstellung[1][2]} notendurchschnitt={notendurchschnitt23} noten={noten23} bemerkungen={klausurbemerkungen23} update={this.props.update} /></td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}