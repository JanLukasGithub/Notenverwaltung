import React from "react";
import myData from "../../data/myData.json";
import { Hauptmenue } from "./Hauptmenue";
import { Kursemenue } from "./Kursemenue";
import { Bestaetigungsformular } from "./Bestaetigungsformular";
import { Eingabeformular } from "./Eingabeformular";
import { Eingabeformularpasswort } from "./Eingabeformularpasswort";
import { Speicher } from "./Speicher";
import { Kursplan } from "./Kursplan";
import { Unterricht } from "./Unterricht";
import { Sitzplan } from "./Sitzplan";
import { Einstellungen } from "./Einstellungen";
import { Deckblatt } from "./Deckblatt";
import { Kursplanung } from "./Kursplanung";
import { Kursprotokoll } from "./Kursprotokoll";
import { Ergebnisspiegel } from "./Ergebnisspiegel";
import { Eingabeformulardatum } from "./Eingabeformulardatum";

const beep = new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
beep.volume = 1.0;

const passwort = "1234";

const notenpunkte = [
    "6",
    "5-",
    "5",
    "5+",
    "4-",
    "4",
    "4+",
    "3-",
    "3",
    "3+",
    "2-",
    "2",
    "2+",
    "1-",
    "1",
    "1+"
];

const optionsNotenS = [
    "Auto",
    "",
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
    "6",
    "NT"
];

const optionsNotenM = [
    "Auto",
    "",
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
    "6",
    "NT"
];

const optionsNotenAG = [
    "Auto",
    "",
    "E1",
    "E2",
    "E3",
    "NT"
];

const sitzplaetzeQuer = [];
for (let y = 1; y < 12; y++) {
    for (let x = 1; x < 12; x++) {
        sitzplaetzeQuer.push({
            aktiv: false,
            schueler: -1
        });
    }
}

const sitzplaetzeHoch = [];
for (let y = 1; y < 20; y++) {
    for (let x = 1; x < 10; x++) {
        sitzplaetzeHoch.push({
            aktiv: false,
            schueler: -1
        });
    }
}

const initialSchueler = {
    aktiv: [true, true, true, true],
    nachname: "1",
    vorname: "",
    rufname: "",
    klausurfach: [false, false],
    sitzplatz: false,
    sitzplatz2: false,
    markiert: false,
    klausurnoten: [["", "", ""], ["", "", ""]],
    klausurnoteHJ: ["Auto", "Auto"],
    klausurnoteHJBeschriftung: ["", ""],
    sominoten: ["Auto", "Auto", "Auto", "Auto"],
    sominotenBeschriftung: ["", "", "", ""],
    sominoteHJ: ["Auto", "Auto"],
    sominoteHJBeschriftung: ["", ""],
    zeugnisnoteHJ: ["Auto", "Auto"],
    zeugnisnoteHJBeschriftung: ["", ""],
    zeugnisnoteHJPunkte: ["", ""],
    zeugnisnoteSJ: "Auto",
    zeugnisnoteSJBeschriftung: "",
    fehlstundenG: ["", "", "", ""],
    fehlstundenU: ["", "", "", ""],
    gewerteteStunden: [0, 0, 0, 0],
    fehlstundenGHJ: ["", ""],
    fehlstundenUHJ: ["", ""],
    testnoten: [["", ""], ["", ""], ["", ""], ["", ""]],
    referatnoten: [["", ""], ["", ""], ["", ""], ["", ""]],
    bemerkungen: ["", ""],
    stricheMuendlich: [[0], [0], [0], [0]],
    stricheMinitest: [[0], [0], [0], [0]],
    stricheMinitestErreichbar: [[0], [0], [0], [0]],
    defizite: [[0], [0], [0], [0]],
    stricheGesamt: [[""], [""], [""], [""]],
    minitestQuote: [0, 0, 0, 0],
    stricheAddiert: [0, 0, 0, 0],
    stricheGewertet: [0, 0, 0, 0],
    anwesenheit: [[""], [""], [""], [""]]
};

const initialUnterricht = {
    dauerStriche: 0,
    dauerIst: 0,
    dauerSoll: 0,
    datum: "",
    stundenthema: "",
    stundeninhalt: "",
    hausaufgabe: "",
    stricheMinitestErreichbar: 0,
    minitestQuote: 0
};

const initialKurs = {
    voreinstellung: "Keine",
    aktiv: false,
    kursname: "Neuer Kurs",
    jahrgangsstufe: "",
    fach: "",
    kursart: "",
    kursnummer: "",
    klausurschiene: "",
    kurslehrer: "Stefan Jebens",
    schuljahr: "2023/24",
    kursthema: ["", ""],
    lehrmittel: ["", ""],
    aufgabenstellung: [["", "", ""], ["", "", ""]],
    klausurdauer: [["", "", ""], ["", "", ""]],
    klausurbemerkungen: [["", "", ""], ["", "", ""]],
    agNoten: false,
    optionsNotenS: optionsNotenS,
    optionsNotenM: optionsNotenM,
    quartalseinstellungen: false,
    klausuren: [0, 0],
    tests: [0, 0, 0, 0],
    referate: [0, 0, 0, 0],
    halbjahresnoteneinfluss: "0.33",
    klausurnoteneinfluss: ["0.51", "0.51"],
    testnoteneinfluss: ["0.25", "0.25", "0.25", "0.25"],
    fakeNoten: false,
    stricheGrenze: ["1.0", "1.0", "1.0", "1.0"],
    minusStricheDefizit: [0, 0, 0, 0],
    freidefizite: [0, 0, 0, 0],
    nameSitzordnung: "Leer",
    formatSitzordnung: "Querformat",
    formatSitzordnung2: "Querformat",
    sitzplaetze: JSON.parse(JSON.stringify(sitzplaetzeQuer)),
    sitzplaetze2: JSON.parse(JSON.stringify(sitzplaetzeQuer)),
    sitzordnungen: [{
        nameSitzordnung: "Leer",
        formatSitzordnung: "Querformat",
        sitzplaetze: JSON.parse(JSON.stringify(sitzplaetzeQuer))
    }],
    schuelerSitzplatzlos: [],
    schuelerSitzplatzlos2: [],
    schueler: [JSON.parse(JSON.stringify(initialSchueler)), JSON.parse(JSON.stringify(initialSchueler))],
    unterricht: [
        [
            JSON.parse(JSON.stringify(initialUnterricht))
        ],
        [
            JSON.parse(JSON.stringify(initialUnterricht))
        ],
        [
            JSON.parse(JSON.stringify(initialUnterricht))
        ],
        [
            JSON.parse(JSON.stringify(initialUnterricht))
        ]
    ],
    stundenStriche: [0, 0, 0, 0],
    stundenIst: [0, 0, 0, 0],
    stundenSoll: [0, 0, 0, 0],
    minitestQuote: [0, 0, 0, 0]
};

const initialKurse = [
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs)),
    JSON.parse(JSON.stringify(initialKurs))
];

const optionsDauer = [
    0,
    1,
    2
];

const optionsAnwesenheiten = [
    "",
    "u",
    "e",
    "s",
    "uu",
    "ee",
    "ss"
];

export class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            aktivesMenue: "Hauptmenü",
            passwort: "00",
            eingabewert: "",
            eingabewert2: "",
            eingabewert3: "",
            eingabewert4: "",
            aktiverKurs: 0,
            quartal: 1,
            halbjahr: 1,
            ansicht: "Fehlstunden",
            kursmappeWahl: "Deckblatt",
            stricheWahl: "Gesamt",
            raum: "Raum 1",
            unterrichtModus: "Keiner",
            indexMinitest: 0,
            sitzplaetzeAktivieren: false,
            sitzplanModus: "Schülerzuweisungen",
            schuelerAktivieren: false,
            indexSitzordnungen: 0,
            indexSchueler: 0,
            indexUnterricht: 0,
            index1: 0,
            index2: 0,
            positionNeu: 0,
            voreinstellungNeu: "Keine",
            positionSchueler1: 0,
            positionSchueler2: 0,
            beendenFarbe: true,
            update: false,
            kurse: initialKurse
        };
        this.passwortladen = this.passwortladen.bind(this);
        this.laden = this.laden.bind(this);
        this.aktualisieren = this.aktualisieren.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickDatum = this.handleClickDatum.bind(this);
        this.handleClickStundenthema = this.handleClickStundenthema.bind(this);
        this.handleClickHausaufgabe = this.handleClickHausaufgabe.bind(this);
        this.handleClickBemerkungen = this.handleClickBemerkungen.bind(this);
        this.handleClickSitzplatz = this.handleClickSitzplatz.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateSitzplatzlos = this.updateSitzplatzlos.bind(this);
        this.sominotenberechnung = this.sominotenberechnung.bind(this);
        this.updateDaten = this.updateDaten.bind(this);
    }

    componentDidMount() {
        this.passwortladen();
        this.laden(false);
        this.aktualisieren(true);
        this.updateDaten();
    }

    passwortladen() {
        let loadpasswort;
        if (String(localStorage.getItem("passwort")) === "null") {
            loadpasswort = "00";
        }
        else {
            loadpasswort = JSON.parse(localStorage.getItem("passwort")).passwort;
        }
        this.setState(() => {
            return ({
                passwort: loadpasswort
            });
        });
    }

    laden(showAlert) {
        if (String(localStorage.getItem("speicher")) === "null") {
            if (showAlert) {
                beep.play();
                alert("Keine passenden Daten im Local Storage vorhanden!");
            }
        }
        else {
            let loadkurse = JSON.parse(localStorage.getItem("speicher")).kurse;
            for (let i = 0; i < loadkurse.length; i++) {
                if (typeof loadkurse[i].freidefizite === "undefined") {
                    loadkurse[i].freidefizite = [0, 0, 0, 0];
                }
                if (typeof loadkurse[i].formatSitzordnung2 === "undefined") {
                    loadkurse[i].formatSitzordnung2 = JSON.parse(JSON.stringify(initialKurs.formatSitzordnung2));
                }
                if (typeof loadkurse[i].sitzplaetze2 === "undefined") {
                    loadkurse[i].sitzplaetze2 = JSON.parse(JSON.stringify(initialKurs.sitzplaetze2));
                }
                if (typeof loadkurse[i].schuelerSitzplatzlos2 === "undefined") {
                    loadkurse[i].schuelerSitzplatzlos2 = JSON.parse(JSON.stringify(initialKurs.schuelerSitzplatzlos2));
                }
                for (let j = 0; j < loadkurse[i].schueler.length - 1; j++) {
                    if (typeof loadkurse[i].schueler[j].sitzplatz2 === "undefined") {
                        loadkurse[i].schueler[j].sitzplatz2 = JSON.parse(JSON.stringify(initialSchueler.sitzplatz2));
                    }
                }
                for (let n = 0; n < 4; n++) {
                    for (let j = 0; j < loadkurse[i].unterricht[n].length; j++) {
                        if (typeof loadkurse[i].unterricht[n][j].stundenthema === "undefined") {
                            loadkurse[i].unterricht[n][j].stundenthema = JSON.parse(JSON.stringify(loadkurse[i].unterricht[n][j].stundeninhalt));
                            loadkurse[i].unterricht[n][j].stundeninhalt = "";
                        }
                    }
                }
                if (typeof loadkurse[i].quartalseinstellungen === "undefined") {
                    loadkurse[i].quartalseinstellungen = false;
                }
                if (!Array.isArray(loadkurse[i].klausurnoteneinfluss)) {
                    let x = loadkurse[i].klausurnoteneinfluss;
                    loadkurse[i].klausurnoteneinfluss = [x, x];
                }
                if (!Array.isArray(loadkurse[i].testnoteneinfluss)) {
                    let x = loadkurse[i].testnoteneinfluss;
                    loadkurse[i].testnoteneinfluss = [x, x, x, x];
                }
                if (!Array.isArray(loadkurse[i].stricheGrenze)) {
                    let x = loadkurse[i].stricheGrenze;
                    loadkurse[i].stricheGrenze = [x, x, x, x];
                }
                if (!Array.isArray(loadkurse[i].minusStricheDefizit)) {
                    let x = loadkurse[i].minusStricheDefizit;
                    loadkurse[i].minusStricheDefizit = [x, x, x, x];
                }
                if (!Array.isArray(loadkurse[i].freidefizite)) {
                    let x = loadkurse[i].freidefizite;
                    loadkurse[i].freidefizite = [x, x, x, x];
                }
            }
            this.setState(() => {
                return ({
                    kurse: loadkurse
                });
            });
            if (showAlert) {
                alert("Daten wurden aus dem Local Storage geladen.");
            }
        }
    }

    aktualisieren(showAlert) {
        this.setState((state) => {
            let aktualisiert = false;
            for (let i = 0; i < state.kurse.length; i++) {
                if (state.kurse[i].kursname === "Neuer Kurs") {
                    if (JSON.stringify(state.kurse[i]) !== JSON.stringify(initialKurs)) {
                        if (i < state.kurse.length - 1) {
                            state.kurse[i] = JSON.parse(JSON.stringify(initialKurs));
                            aktualisiert = true;
                        }
                        else {
                            let sitzordnungen = JSON.parse(JSON.stringify(state.kurse[state.kurse.length - 1].sitzordnungen));
                            state.kurse[state.kurse.length - 1] = JSON.parse(JSON.stringify(initialKurs));
                            state.kurse[state.kurse.length - 1].sitzordnungen = sitzordnungen;
                        }
                    }
                }
            }
            if (showAlert && aktualisiert) {
                alert("Neue Kurse wurden aktualisiert.");
            }
            return ({
                kurse: state.kurse
            });
        });
    }

    handleClick(event) {
        if (event.target.name === "Hauptmenü") {
            this.setState(() => {
                return ({
                    aktivesMenue: "Hauptmenü",
                    ansicht: "Fehlstunden",
                    kursmappeWahl: "Deckblatt",
                    stricheWahl: "Gesamt",
                    raum: "Raum 1"
                });
            });
        }
        else if (event.target.name === "Kursemenü") {
            this.setState(() => {
                return ({
                    aktivesMenue: "Kursemenü"
                });
            });
        }
        else if (event.target.name === "Laden") {
            this.setState(() => {
                return ({
                    aktivesMenue: "BestaetigungLaden"
                });
            });
        }
        else if (event.target.name === "LadenJa") {
            this.laden(true);
            this.aktualisieren(true);
            this.setState(() => {
                return ({
                    aktivesMenue: "Hauptmenü"
                });
            });
        }
        else if (event.target.name === "LadenNein") {
            this.setState(() => {
                return ({
                    aktivesMenue: "Hauptmenü"
                });
            });
        }
        else if (event.target.name === "Speichern") {
            this.setState(() => {
                return ({
                    aktivesMenue: "PassworteingabeSpeichern",
                    eingabewert: ""
                });
            });
        }
        else if (event.target.name === "Laden Datei") {
            this.setState(() => {
                return ({
                    aktivesMenue: "BestaetigungLadenDatei"
                });
            });
        }
        else if (event.target.name === "LadenDateiJa") {
            if (typeof myData.kurse === "undefined") {
                beep.play();
                alert("Keine passenden Daten in der Datei vorhanden!");
                this.setState(() => {
                    return ({
                        aktivesMenue: "Hauptmenü"
                    });
                });
            }
            else {
                alert("Daten wurden aus der Datei geladen.");
                this.setState(() => {
                    return ({
                        aktivesMenue: "Hauptmenü",
                        kurse: JSON.parse(JSON.stringify(myData.kurse))
                    });
                });
            }
        }
        else if (event.target.name === "LadenDateiNein") {
            this.setState(() => {
                return ({
                    aktivesMenue: "Hauptmenü"
                });
            });
        }
        else if (event.target.name === "Speichern Datei") {
            this.setState(() => {
                return ({
                    aktivesMenue: "PassworteingabeSpeichernDatei",
                    eingabewert: ""
                });
            });
        }
        else if (event.target.name === "Laden Clipboard") {
            this.setState(() => {
                return ({
                    aktivesMenue: "BestaetigungLadenClipboard"
                });
            });
        }
        else if (event.target.name === "LadenClipboardJa") {
            try {
                navigator.clipboard.readText()
                    .then((clipboardkurse) => {
                        try {
                            if (typeof JSON.parse(clipboardkurse).kurse === "undefined") {
                                beep.play();
                                alert("Keine passenden Daten in der Zwischenablage vorhanden!");
                                this.setState(() => {
                                    return ({
                                        aktivesMenue: "Hauptmenü"
                                    });
                                });
                            }
                            else {
                                alert("Daten wurden aus der Zwischenablage geladen.");
                                this.setState(() => {
                                    return ({
                                        aktivesMenue: "Hauptmenü",
                                        kurse: JSON.parse(JSON.stringify(JSON.parse(clipboardkurse).kurse))
                                    });
                                });
                            }
                        }
                        catch {
                            beep.play();
                            alert("Keine passenden Daten in der Zwischenablage vorhanden!");
                            this.setState(() => {
                                return ({
                                    aktivesMenue: "Hauptmenü"
                                });
                            });
                        }
                    });
            }
            catch {
                beep.play();
                alert("Dieser Browser unterstützt diese Funktion nicht!");
                this.setState(() => {
                    return ({
                        aktivesMenue: "Hauptmenü"
                    });
                });
            }
        }
        else if (event.target.name === "LadenClipboardNein") {
            this.setState(() => {
                return ({
                    aktivesMenue: "Hauptmenü"
                });
            });
        }
        else if (event.target.name === "Speichern Inhalte") {
            this.setState(() => {
                return ({
                    aktivesMenue: "PassworteingabeSpeichernInhalte",
                    eingabewert: ""
                });
            });
        }
        else if (event.target.name === "E-Mail") {
            this.setState(() => {
                return ({
                    aktivesMenue: "Hauptmenü"
                });
            });
        }
        else if (event.target.name === "Passwort Ändern") {
            this.setState(() => {
                return ({
                    aktivesMenue: "Passwortänderung",
                    eingabewert: "",
                    eingabewert2: "",
                    eingabewert3: ""
                });
            });
        }
        else if (event.target.name === "Beenden") {
            if (String(localStorage.getItem("speicher")) === "null") {
                beep.play();
                alert("Es wurden keine Daten im Local Storage gespeichert!");
            }
            else {
                if (JSON.stringify(this.state.kurse) === JSON.stringify(JSON.parse(localStorage.getItem("speicher")).kurse)) {
                    alert("Die Anwendung kann jetzt geschlossen werden.");
                }
                else {
                    beep.play();
                    alert("Die aktuellen Daten sind nicht im Local Storage gespeichert!");
                }
            }
        }
        else if (event.target.name.substring(0, 8) === "Kursplan") {
            if (event.target.name.length == 8) {
                this.setState(() => {
                    return ({
                        aktivesMenue: "Kursplan"
                    });
                });
            }
            else {
                this.setState((state) => {
                    let aktiverKurs = parseInt(event.target.name.substring(9), 10);
                    let quartal;
                    let halbjahr;
                    if (state.kurse[aktiverKurs].unterricht[3][0].datum === "") {
                        if (state.kurse[aktiverKurs].unterricht[2][0].datum === "") {
                            if (state.kurse[aktiverKurs].unterricht[1][0].datum === "") {
                                quartal = 1;
                                halbjahr = 1;
                            }
                            else {
                                quartal = 2;
                                halbjahr = 1;
                            }
                        }
                        else {
                            quartal = 3;
                            halbjahr = 2;
                        }
                    }
                    else {
                        quartal = 4;
                        halbjahr = 2;
                    }
                    let indexUnterricht = state.kurse[aktiverKurs].unterricht[quartal - 1].length - 1;
                    if (state.kurse[aktiverKurs].unterricht[quartal - 1][indexUnterricht].datum === "" && indexUnterricht > 0) {
                        indexUnterricht = indexUnterricht - 1;
                    }
                    return ({
                        aktivesMenue: "Kursplan",
                        aktiverKurs: aktiverKurs,
                        quartal: quartal,
                        halbjahr: halbjahr,
                        ansicht: "Fehlstunden",
                        kursmappeWahl: "Deckblatt",
                        stricheWahl: "Gesamt",
                        indexUnterricht: indexUnterricht
                    });
                });
            }
        }
        else if (event.target.name === "Unterricht") {
            this.setState(() => {
                return ({
                    aktivesMenue: "Unterricht",
                    unterrichtModus: "Keiner",
                    indexMinitest: 0,
                    sitzplanModus: "Unterricht"
                });
            });
        }
        else if (event.target.name === "Raumwechsel") {
            this.setState((state) => {
                if (state.raum === "Raum 1") {
                    return ({
                        raum: "Raum 2"
                    });
                }
                else if (state.raum === "Raum 2") {
                    return ({
                        raum: "Raum 1"
                    });
                }
            });
            this.updateSitzplatzlos("Raum 1");
            this.updateSitzplatzlos("Raum 2");
        }
        else if (event.target.name === "Markieren") {
            this.setState((state) => {
                if (state.unterrichtModus === "Markieren") {
                    return ({
                        unterrichtModus: "Keiner"
                    });
                }
                else {
                    return ({
                        unterrichtModus: "Markieren"
                    });
                }
            });
        }
        else if (event.target.name === "Strich Minus") {
            this.setState((state) => {
                if (state.unterrichtModus === "Strich Minus") {
                    return ({
                        unterrichtModus: "Keiner"
                    });
                }
                else {
                    return ({
                        unterrichtModus: "Strich Minus"
                    });
                }
            });
        }
        else if (event.target.name === "Strich Plus") {
            this.setState((state) => {
                if (state.unterrichtModus === "Strich Plus") {
                    return ({
                        unterrichtModus: "Keiner"
                    });
                }
                else {
                    return ({
                        unterrichtModus: "Strich Plus"
                    });
                }
            });
        }
        else if (event.target.name === "Defizit Minus") {
            this.setState((state) => {
                if (state.unterrichtModus === "Defizit Minus") {
                    return ({
                        unterrichtModus: "Keiner"
                    });
                }
                else {
                    return ({
                        unterrichtModus: "Defizit Minus"
                    });
                }
            });
        }
        else if (event.target.name === "Defizit Plus") {
            this.setState((state) => {
                if (state.unterrichtModus === "Defizit Plus") {
                    return ({
                        unterrichtModus: "Keiner"
                    });
                }
                else {
                    return ({
                        unterrichtModus: "Defizit Plus"
                    });
                }
            });
        }
        else if (event.target.name === "Minitest") {
            this.setState((state) => {
                if (state.unterrichtModus === "Minitest") {
                    return ({
                        unterrichtModus: "Keiner"
                    });
                }
                else {
                    return ({
                        unterrichtModus: "Minitest"
                    });
                }
            });
        }
        else if (event.target.name === "Minitest Minus") {
            this.setState((state) => {
                if (state.unterrichtModus === "Minitest Minus") {
                    return ({
                        unterrichtModus: "Keiner"
                    });
                }
                else {
                    return ({
                        unterrichtModus: "Minitest Minus"
                    });
                }
            });
        }
        else if (event.target.name === "Minitest Plus") {
            this.setState((state) => {
                if (state.unterrichtModus === "Minitest Plus") {
                    return ({
                        unterrichtModus: "Keiner"
                    });
                }
                else {
                    return ({
                        unterrichtModus: "Minitest Plus"
                    });
                }
            });
        }
        else if (event.target.name === "Sitzplan") {
            this.setState(() => {
                return ({
                    aktivesMenue: "PassworteingabeSitzplan",
                    eingabewert: ""
                });
            });
        }
        else if (event.target.name === "1Kursplan Vom Sitzplan") {
            this.setState(() => {
                return ({
                    aktivesMenue: "PassworteingabeKursplan",
                    eingabewert: ""
                });
            });
        }
        else if (event.target.name === "Format Sitzordnung") {
            this.setState((state) => {
                if (state.raum === "Raum 1") {
                    if (state.kurse[state.aktiverKurs].formatSitzordnung === "Querformat") {
                        state.kurse[state.aktiverKurs].formatSitzordnung = "Hochformat";
                        state.kurse[state.aktiverKurs].sitzplaetze = JSON.parse(JSON.stringify(sitzplaetzeHoch));
                    }
                    else {
                        state.kurse[state.aktiverKurs].formatSitzordnung = "Querformat";
                        state.kurse[state.aktiverKurs].sitzplaetze = JSON.parse(JSON.stringify(sitzplaetzeQuer));
                    }
                    state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                        schueler.sitzplatz = false;
                    });
                }
                else if (state.raum === "Raum 2") {
                    if (state.kurse[state.aktiverKurs].formatSitzordnung2 === "Querformat") {
                        state.kurse[state.aktiverKurs].formatSitzordnung2 = "Hochformat";
                        state.kurse[state.aktiverKurs].sitzplaetze2 = JSON.parse(JSON.stringify(sitzplaetzeHoch));
                    }
                    else {
                        state.kurse[state.aktiverKurs].formatSitzordnung2 = "Querformat";
                        state.kurse[state.aktiverKurs].sitzplaetze2 = JSON.parse(JSON.stringify(sitzplaetzeQuer));
                    }
                    state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                        schueler.sitzplatz2 = false;
                    });
                }
                return ({
                    kurse: state.kurse
                });
            });
            this.updateSitzplatzlos(this.state.raum);
        }
        else if (event.target.name === "Sitzplätze Aktivieren") {
            this.setState((state) => {
                return ({
                    sitzplaetzeAktivieren: !state.sitzplaetzeAktivieren,
                    schuelerAktivieren: false
                });
            });
        }
        else if (event.target.name === "Schülerzuweisungen") {
            this.setState((state) => {
                if (state.sitzplanModus === "Schülerzuweisungen") {
                    return ({
                        sitzplanModus: "Sitzordnungen"
                    });
                }
                else {
                    return ({
                        sitzplanModus: "Schülerzuweisungen"
                    });
                }
            });
            this.updateSitzplatzlos(this.state.raum);
        }
        else if (event.target.name === "Sitzordnung Flippen") {
            this.setState((state) => {
                let xMax;
                let yMax;
                let lehrer;
                let sitzplaetze;
                let sitzplaetze2;
                if (state.raum === "Raum 1") {
                    if (state.kurse[state.aktiverKurs].formatSitzordnung === "Querformat") {
                        xMax = 11;
                        yMax = 11;
                    }
                    else {
                        xMax = 9;
                        yMax = 19;
                    }
                    lehrer = -1;
                    for (let i = 0; i < state.kurse[state.aktiverKurs].sitzplaetze.length; i++) {
                        if (state.kurse[state.aktiverKurs].sitzplaetze[i].schueler === 99) {
                            lehrer = i;
                        }
                    }
                    sitzplaetze = JSON.parse(JSON.stringify(state.kurse[state.aktiverKurs].sitzplaetze));
                    state.kurse[state.aktiverKurs].sitzplaetze = [];
                    for (let y = 1; y < yMax + 1; y++) {
                        state.kurse[state.aktiverKurs].sitzplaetze = state.kurse[state.aktiverKurs].sitzplaetze.concat(sitzplaetze.slice((yMax - y) * xMax, (yMax + 1 - y) * xMax));
                    }
                    if (lehrer > -1) {
                        for (let i = 0; i < state.kurse[state.aktiverKurs].sitzplaetze.length; i++) {
                            if (state.kurse[state.aktiverKurs].sitzplaetze[i].schueler === 99) {
                                state.kurse[state.aktiverKurs].sitzplaetze[i].aktiv = false;
                                state.kurse[state.aktiverKurs].sitzplaetze[i].schueler = -1;
                            }
                        }
                        if (state.kurse[state.aktiverKurs].sitzplaetze[lehrer].schueler === -1) {
                            state.kurse[state.aktiverKurs].sitzplaetze[lehrer].aktiv = true;
                            state.kurse[state.aktiverKurs].sitzplaetze[lehrer].schueler = 99;
                        }
                    }
                }
                else if (state.raum === "Raum 2") {
                    if (state.kurse[state.aktiverKurs].formatSitzordnung2 === "Querformat") {
                        xMax = 11;
                        yMax = 11;
                    }
                    else {
                        xMax = 9;
                        yMax = 19;
                    }
                    lehrer = -1;
                    for (let i = 0; i < state.kurse[state.aktiverKurs].sitzplaetze2.length; i++) {
                        if (state.kurse[state.aktiverKurs].sitzplaetze2[i].schueler === 99) {
                            lehrer = i;
                        }
                    }
                    sitzplaetze2 = JSON.parse(JSON.stringify(state.kurse[state.aktiverKurs].sitzplaetze2));
                    state.kurse[state.aktiverKurs].sitzplaetze2 = [];
                    for (let y = 1; y < yMax + 1; y++) {
                        state.kurse[state.aktiverKurs].sitzplaetze2 = state.kurse[state.aktiverKurs].sitzplaetze2.concat(sitzplaetze2.slice((yMax - y) * xMax, (yMax + 1 - y) * xMax));
                    }
                    if (lehrer > -1) {
                        for (let i = 0; i < state.kurse[state.aktiverKurs].sitzplaetze2.length; i++) {
                            if (state.kurse[state.aktiverKurs].sitzplaetze2[i].schueler === 99) {
                                state.kurse[state.aktiverKurs].sitzplaetze2[i].aktiv = false;
                                state.kurse[state.aktiverKurs].sitzplaetze2[i].schueler = -1;
                            }
                        }
                        if (state.kurse[state.aktiverKurs].sitzplaetze2[lehrer].schueler === -1) {
                            state.kurse[state.aktiverKurs].sitzplaetze2[lehrer].aktiv = true;
                            state.kurse[state.aktiverKurs].sitzplaetze2[lehrer].schueler = 99;
                        }
                    }
                }
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name === "Schüler Aktivieren") {
            this.setState((state) => {
                return ({
                    sitzplaetzeAktivieren: false,
                    schuelerAktivieren: !state.schuelerAktivieren
                });
            });
        }
        else if (event.target.name === "Sitzordnung Laden") {
            this.setState((state) => {
                if (state.raum === "Raum 1") {
                    state.kurse[state.aktiverKurs].nameSitzordnung = JSON.parse(JSON.stringify(state.kurse[state.kurse.length - 1].sitzordnungen[state.indexSitzordnungen].nameSitzordnung));
                    state.kurse[state.aktiverKurs].formatSitzordnung = JSON.parse(JSON.stringify(state.kurse[state.kurse.length - 1].sitzordnungen[state.indexSitzordnungen].formatSitzordnung));
                    state.kurse[state.aktiverKurs].sitzplaetze = JSON.parse(JSON.stringify(state.kurse[state.kurse.length - 1].sitzordnungen[state.indexSitzordnungen].sitzplaetze));
                    state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                        schueler.sitzplatz = false;
                    });
                }
                else if (state.raum === "Raum 2") {
                    state.kurse[state.aktiverKurs].nameSitzordnung = JSON.parse(JSON.stringify(state.kurse[state.kurse.length - 1].sitzordnungen[state.indexSitzordnungen].nameSitzordnung));
                    state.kurse[state.aktiverKurs].formatSitzordnung2 = JSON.parse(JSON.stringify(state.kurse[state.kurse.length - 1].sitzordnungen[state.indexSitzordnungen].formatSitzordnung));
                    state.kurse[state.aktiverKurs].sitzplaetze2 = JSON.parse(JSON.stringify(state.kurse[state.kurse.length - 1].sitzordnungen[state.indexSitzordnungen].sitzplaetze));
                    state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                        schueler.sitzplatz2 = false;
                    });
                }
                return ({
                    kurse: state.kurse
                });
            });
            this.updateSitzplatzlos(this.state.raum);
        }
        else if (event.target.name === "Sitzordnung Speichern") {
            this.setState((state) => {
                let indexSitzordnungen;
                if (state.kurse[state.aktiverKurs].nameSitzordnung === "000") {
                    state.kurse[state.kurse.length - 1].sitzordnungen.splice(state.indexSitzordnungen, 1);
                    if (state.kurse[state.kurse.length - 1].sitzordnungen.length === 0) {
                        state.kurse[state.kurse.length - 1].sitzordnungen.push({
                            nameSitzordnung: JSON.parse(JSON.stringify(state.kurse[0].sitzordnungen[0].nameSitzordnung)),
                            formatSitzordnung: JSON.parse(JSON.stringify(state.kurse[0].sitzordnungen[0].formatSitzordnung)),
                            sitzplaetze: JSON.parse(JSON.stringify(state.kurse[0].sitzordnungen[0].sitzplaetze))
                        });
                    }
                    state.kurse[state.aktiverKurs].nameSitzordnung = JSON.parse(JSON.stringify(state.kurse[state.kurse.length - 1].sitzordnungen[0].nameSitzordnung));
                    indexSitzordnungen = 0;
                }
                else if (state.kurse[state.aktiverKurs].nameSitzordnung.length > 0) {
                    if (state.kurse[state.aktiverKurs].nameSitzordnung === state.kurse[state.kurse.length - 1].sitzordnungen[state.indexSitzordnungen].nameSitzordnung) {
                        if (state.raum === "Raum 1") {
                            state.kurse[state.kurse.length - 1].sitzordnungen.splice(state.indexSitzordnungen, 1, {
                                nameSitzordnung: JSON.parse(JSON.stringify(state.kurse[state.aktiverKurs].nameSitzordnung)),
                                formatSitzordnung: JSON.parse(JSON.stringify(state.kurse[state.aktiverKurs].formatSitzordnung)),
                                sitzplaetze: JSON.parse(JSON.stringify(state.kurse[state.aktiverKurs].sitzplaetze))
                            });
                        }
                        else if (state.raum === "Raum 2") {
                            state.kurse[state.kurse.length - 1].sitzordnungen.splice(state.indexSitzordnungen, 1, {
                                nameSitzordnung: JSON.parse(JSON.stringify(state.kurse[state.aktiverKurs].nameSitzordnung)),
                                formatSitzordnung: JSON.parse(JSON.stringify(state.kurse[state.aktiverKurs].formatSitzordnung2)),
                                sitzplaetze: JSON.parse(JSON.stringify(state.kurse[state.aktiverKurs].sitzplaetze2))
                            });
                        }
                        state.kurse[state.kurse.length - 1].sitzordnungen[state.indexSitzordnungen].sitzplaetze.forEach((sitzplatz) => {
                            sitzplatz.schueler = -1;
                        });
                        indexSitzordnungen = state.indexSitzordnungen;
                    }
                    else {
                        if (state.raum === "Raum 1") {
                            state.kurse[state.kurse.length - 1].sitzordnungen.push({
                                nameSitzordnung: JSON.parse(JSON.stringify(state.kurse[state.aktiverKurs].nameSitzordnung)),
                                formatSitzordnung: JSON.parse(JSON.stringify(state.kurse[state.aktiverKurs].formatSitzordnung)),
                                sitzplaetze: JSON.parse(JSON.stringify(state.kurse[state.aktiverKurs].sitzplaetze))
                            });
                        }
                        else if (state.raum === "Raum 2") {
                            state.kurse[state.kurse.length - 1].sitzordnungen.push({
                                nameSitzordnung: JSON.parse(JSON.stringify(state.kurse[state.aktiverKurs].nameSitzordnung)),
                                formatSitzordnung: JSON.parse(JSON.stringify(state.kurse[state.aktiverKurs].formatSitzordnung2)),
                                sitzplaetze: JSON.parse(JSON.stringify(state.kurse[state.aktiverKurs].sitzplaetze2))
                            });
                        }
                        state.kurse[state.kurse.length - 1].sitzordnungen[state.kurse[state.kurse.length - 1].sitzordnungen.length - 1].sitzplaetze.forEach((sitzplatz) => {
                            sitzplatz.schueler = -1;
                        });
                        indexSitzordnungen = state.kurse[state.kurse.length - 1].sitzordnungen.length - 1;
                    }
                }
                return ({
                    indexSitzordnungen: indexSitzordnungen,
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name === "Einstellungen") {
            this.setState((state) => {
                return ({
                    aktivesMenue: "Einstellungen",
                    positionNeu: state.aktiverKurs,
                    voreinstellungNeu: state.kurse[state.aktiverKurs].voreinstellung,
                    positionSchueler1: state.kurse[state.aktiverKurs].schueler.length - 2,
                    positionSchueler2: state.kurse[state.aktiverKurs].schueler.length - 2
                });
            });
        }
        else if (event.target.name === "Kurs Kopieren") {
            this.setState((state) => {
                state.kurse[state.positionNeu] = JSON.parse(JSON.stringify(state.kurse[state.aktiverKurs]));
                return ({
                    aktiverKurs: state.positionNeu,
                    positionNeu: state.aktiverKurs,
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name === "Voreinstellung Ändern") {
            this.setState((state) => {
                if (state.voreinstellungNeu === "Keine") {
                    state.kurse[state.aktiverKurs].voreinstellung = "Keine";
                    state.kurse[state.aktiverKurs].aktiv = true;
                    state.kurse[state.aktiverKurs].fach = JSON.parse(JSON.stringify(initialKurs.fach));
                    state.kurse[state.aktiverKurs].kursart = JSON.parse(JSON.stringify(initialKurs.kursart));
                    state.kurse[state.aktiverKurs].kursnummer = JSON.parse(JSON.stringify(initialKurs.kursnummer));
                    state.kurse[state.aktiverKurs].lehrmittel = JSON.parse(JSON.stringify(initialKurs.lehrmittel));
                    state.kurse[state.aktiverKurs].aufgabenstellung = JSON.parse(JSON.stringify(initialKurs.aufgabenstellung));
                    state.kurse[state.aktiverKurs].klausurdauer = JSON.parse(JSON.stringify(initialKurs.klausurdauer));
                    state.kurse[state.aktiverKurs].agNoten = JSON.parse(JSON.stringify(initialKurs.agNoten));
                    state.kurse[state.aktiverKurs].optionsNotenS = JSON.parse(JSON.stringify(initialKurs.optionsNotenS));
                    state.kurse[state.aktiverKurs].optionsNotenM = JSON.parse(JSON.stringify(initialKurs.optionsNotenM));
                    state.kurse[state.aktiverKurs].quartalseinstellungen = JSON.parse(JSON.stringify(initialKurs.quartalseinstellungen));
                    state.kurse[state.aktiverKurs].klausuren = JSON.parse(JSON.stringify(initialKurs.klausuren));
                    state.kurse[state.aktiverKurs].klausurnoteneinfluss = JSON.parse(JSON.stringify(initialKurs.klausurnoteneinfluss));
                    state.kurse[state.aktiverKurs].halbjahresnoteneinfluss = JSON.parse(JSON.stringify(initialKurs.halbjahresnoteneinfluss));
                    state.kurse[state.aktiverKurs].fakeNoten = JSON.parse(JSON.stringify(initialKurs.fakeNoten));
                    state.kurse[state.aktiverKurs].testnoteneinfluss = JSON.parse(JSON.stringify(initialKurs.testnoteneinfluss));
                    state.kurse[state.aktiverKurs].stricheGrenze = JSON.parse(JSON.stringify(initialKurs.stricheGrenze));
                    state.kurse[state.aktiverKurs].minusStricheDefizit = JSON.parse(JSON.stringify(initialKurs.minusStricheDefizit));
                    state.kurse[state.aktiverKurs].freidefizite = JSON.parse(JSON.stringify(initialKurs.freidefizite));
                }
                else if (state.voreinstellungNeu === "Sek I Mathematik") {
                    state.kurse[state.aktiverKurs].voreinstellung = "Sek I Mathematik";
                    state.kurse[state.aktiverKurs].aktiv = true;
                    state.kurse[state.aktiverKurs].fach = "Mathematik";
                    state.kurse[state.aktiverKurs].kursart = "Sek I";
                    state.kurse[state.aktiverKurs].lehrmittel = ["\nMathematik Neue Wege 9, Schroedel\n\nGraphikfähiger Taschenrechner", "\nMathematik Neue Wege 9, Schroedel\n\nGraphikfähiger Taschenrechner"];
                    state.kurse[state.aktiverKurs].aufgabenstellung = [["Klausur 1: ", "Klausur 2: ", "Klausur 3: "], ["Klausur 4: ", "Klausur 5: ", "Klausur 6: "]];
                    state.kurse[state.aktiverKurs].klausurdauer = [["45", "45", "45"], ["45", "45", "45"]];
                    state.kurse[state.aktiverKurs].agNoten = false;
                    state.kurse[state.aktiverKurs].optionsNotenS = JSON.parse(JSON.stringify(optionsNotenS));
                    state.kurse[state.aktiverKurs].optionsNotenM = JSON.parse(JSON.stringify(optionsNotenM));
                    state.kurse[state.aktiverKurs].quartalseinstellungen = false;
                    state.kurse[state.aktiverKurs].klausuren = [3, 3];
                    state.kurse[state.aktiverKurs].klausurnoteneinfluss = ["0.51", "0.51"];
                    state.kurse[state.aktiverKurs].halbjahresnoteneinfluss = "0.33";
                    state.kurse[state.aktiverKurs].fakeNoten = true;
                    state.kurse[state.aktiverKurs].testnoteneinfluss = ["0.25", "0.25", "0.25", "0.25"];
                    state.kurse[state.aktiverKurs].stricheGrenze = ["0.7", "0.7", "0.7", "0.7"];
                    state.kurse[state.aktiverKurs].minusStricheDefizit = [0, 0, 0, 0];
                    state.kurse[state.aktiverKurs].freidefizite = [0, 0, 0, 0];
                }
                else if (state.voreinstellungNeu === "Sek I Physik") {
                    state.kurse[state.aktiverKurs].voreinstellung = "Sek I Physik";
                    state.kurse[state.aktiverKurs].aktiv = true;
                    state.kurse[state.aktiverKurs].fach = "Physik";
                    state.kurse[state.aktiverKurs].kursart = "Sek I";
                    state.kurse[state.aktiverKurs].lehrmittel = ["\nImpulse Physik 2, Klett\n\nGraphikfähiger Taschenrechner", "\nImpulse Physik 2, Klett\n\nGraphikfähiger Taschenrechner"];
                    state.kurse[state.aktiverKurs].aufgabenstellung = [["", "", ""], ["", "", ""]];
                    state.kurse[state.aktiverKurs].klausurdauer = [["0", "0", "0"], ["0", "0", "0"]];
                    state.kurse[state.aktiverKurs].agNoten = false;
                    state.kurse[state.aktiverKurs].optionsNotenS = JSON.parse(JSON.stringify(optionsNotenS));
                    state.kurse[state.aktiverKurs].optionsNotenM = JSON.parse(JSON.stringify(optionsNotenM));
                    state.kurse[state.aktiverKurs].quartalseinstellungen = false;
                    state.kurse[state.aktiverKurs].klausuren = [0, 0];
                    state.kurse[state.aktiverKurs].klausurnoteneinfluss = ["0", "0"];
                    state.kurse[state.aktiverKurs].halbjahresnoteneinfluss = "0.33";
                    state.kurse[state.aktiverKurs].fakeNoten = true;
                    state.kurse[state.aktiverKurs].testnoteneinfluss = ["0.25", "0.25", "0.25", "0.25"];
                    state.kurse[state.aktiverKurs].stricheGrenze = ["0.7", "0.7", "0.7", "0.7"];
                    state.kurse[state.aktiverKurs].minusStricheDefizit = [0, 0, 0, 0];
                    state.kurse[state.aktiverKurs].freidefizite = [0, 0, 0, 0];
                }
                else if (state.voreinstellungNeu === "Sek I Informatik") {
                    state.kurse[state.aktiverKurs].voreinstellung = "Sek I Informatik";
                    state.kurse[state.aktiverKurs].aktiv = true;
                    state.kurse[state.aktiverKurs].fach = "Informatik";
                    state.kurse[state.aktiverKurs].kursart = "Sek I";
                    state.kurse[state.aktiverKurs].kursnummer = "Diff";
                    state.kurse[state.aktiverKurs].lehrmittel = ["\nSchulcomputer\n\nLEGO Mindstorms Roboter", "\nSchulcomputer\n\nLEGO Mindstorms Roboter"];
                    state.kurse[state.aktiverKurs].aufgabenstellung = [["Klausur 1: ", "Klausur 2: ", ""], ["Klausur 3: ", "Klausur 4: ", ""]];
                    state.kurse[state.aktiverKurs].klausurdauer = [["45", "45", "0"], ["45", "45", "0"]];
                    state.kurse[state.aktiverKurs].agNoten = false;
                    state.kurse[state.aktiverKurs].optionsNotenS = JSON.parse(JSON.stringify(optionsNotenS));
                    state.kurse[state.aktiverKurs].optionsNotenM = JSON.parse(JSON.stringify(optionsNotenM));
                    state.kurse[state.aktiverKurs].quartalseinstellungen = false;
                    state.kurse[state.aktiverKurs].klausuren = [2, 2];
                    state.kurse[state.aktiverKurs].klausurnoteneinfluss = ["0.51", "0.51"];
                    state.kurse[state.aktiverKurs].halbjahresnoteneinfluss = "0.33";
                    state.kurse[state.aktiverKurs].fakeNoten = true;
                    state.kurse[state.aktiverKurs].testnoteneinfluss = ["0.25", "0.25", "0.25", "0.25"];
                    state.kurse[state.aktiverKurs].stricheGrenze = ["1.2", "1.2", "1.2", "1.2"];
                    state.kurse[state.aktiverKurs].minusStricheDefizit = [0, 0, 0, 0];
                    state.kurse[state.aktiverKurs].freidefizite = [0, 0, 0, 0];
                }
                else if (state.voreinstellungNeu === "Sek II Mathematik") {
                    state.kurse[state.aktiverKurs].voreinstellung = "Sek II Mathematik";
                    state.kurse[state.aktiverKurs].aktiv = true;
                    state.kurse[state.aktiverKurs].fach = "Mathematik";
                    state.kurse[state.aktiverKurs].kursart = "GK";
                    state.kurse[state.aktiverKurs].lehrmittel = ["\nLambacher Schweizer Mathematik, Klett\n\nGraphikfähiger Taschenrechner\n\nTafelwerk", "\nLambacher Schweizer Mathematik, Klett\n\nGraphikfähiger Taschenrechner\n\nTafelwerk"];
                    state.kurse[state.aktiverKurs].aufgabenstellung = [["Klausur 1: ", "Klausur 2: ", ""], ["Klausur 3: ", "Klausur 4: ", ""]];
                    state.kurse[state.aktiverKurs].klausurdauer = [["90", "90", "0"], ["90", "90", "0"]];
                    state.kurse[state.aktiverKurs].agNoten = false;
                    state.kurse[state.aktiverKurs].optionsNotenS = JSON.parse(JSON.stringify(optionsNotenS));
                    state.kurse[state.aktiverKurs].optionsNotenM = JSON.parse(JSON.stringify(optionsNotenM));
                    state.kurse[state.aktiverKurs].quartalseinstellungen = false;
                    state.kurse[state.aktiverKurs].klausuren = [2, 2];
                    state.kurse[state.aktiverKurs].klausurnoteneinfluss = ["0.51", "0.51"];
                    state.kurse[state.aktiverKurs].halbjahresnoteneinfluss = "0.33";
                    state.kurse[state.aktiverKurs].fakeNoten = false;
                    state.kurse[state.aktiverKurs].testnoteneinfluss = ["0.25", "0.25", "0.25", "0.25"];
                    state.kurse[state.aktiverKurs].stricheGrenze = ["1.0", "1.0", "1.0", "1.0"];
                    state.kurse[state.aktiverKurs].minusStricheDefizit = [0, 0, 0, 0];
                    state.kurse[state.aktiverKurs].freidefizite = [0, 0, 0, 0];
                }
                else if (state.voreinstellungNeu === "Sek II Physik") {
                    state.kurse[state.aktiverKurs].voreinstellung = "Sek II Physik";
                    state.kurse[state.aktiverKurs].aktiv = true;
                    state.kurse[state.aktiverKurs].fach = "Physik";
                    state.kurse[state.aktiverKurs].kursart = "GK";
                    state.kurse[state.aktiverKurs].lehrmittel = ["\nMetzler Physik, Westermann\n\nGraphikfähiger Taschenrechner\n\nTafelwerk", "\nMetzler Physik, Westermann\n\nGraphikfähiger Taschenrechner\n\nTafelwerk"];
                    state.kurse[state.aktiverKurs].aufgabenstellung = [["Klausur 1: ", "Klausur 2: ", ""], ["Klausur 3: ", "Klausur 4: ", ""]];
                    state.kurse[state.aktiverKurs].klausurdauer = [["90", "90", "0"], ["90", "90", "0"]];
                    state.kurse[state.aktiverKurs].agNoten = false;
                    state.kurse[state.aktiverKurs].optionsNotenS = JSON.parse(JSON.stringify(optionsNotenS));
                    state.kurse[state.aktiverKurs].optionsNotenM = JSON.parse(JSON.stringify(optionsNotenM));
                    state.kurse[state.aktiverKurs].quartalseinstellungen = false;
                    state.kurse[state.aktiverKurs].klausuren = [2, 2];
                    state.kurse[state.aktiverKurs].klausurnoteneinfluss = ["0.51", "0.51"];
                    state.kurse[state.aktiverKurs].halbjahresnoteneinfluss = "0.33";
                    state.kurse[state.aktiverKurs].fakeNoten = false;
                    state.kurse[state.aktiverKurs].testnoteneinfluss = ["0.25", "0.25", "0.25", "0.25"];
                    state.kurse[state.aktiverKurs].stricheGrenze = ["1.0", "1.0", "1.0", "1.0"];
                    state.kurse[state.aktiverKurs].minusStricheDefizit = [0, 0, 0, 0];
                    state.kurse[state.aktiverKurs].freidefizite = [0, 0, 0, 0];
                }
                else if (state.voreinstellungNeu === "Sek II Informatik") {
                    state.kurse[state.aktiverKurs].voreinstellung = "Sek II Informatik";
                    state.kurse[state.aktiverKurs].aktiv = true;
                    state.kurse[state.aktiverKurs].fach = "Informatik";
                    state.kurse[state.aktiverKurs].kursart = "GK";
                    state.kurse[state.aktiverKurs].lehrmittel = ["\nInformatik 1, Schöningh\n\nSchulcomputer", "\nInformatik 1, Schöningh\n\nSchulcomputer"];
                    state.kurse[state.aktiverKurs].aufgabenstellung = [["Klausur 1: ", "Klausur 2: ", ""], ["Klausur 3: ", "Klausur 4: ", ""]];
                    state.kurse[state.aktiverKurs].klausurdauer = [["90", "90", "0"], ["90", "90", "0"]];
                    state.kurse[state.aktiverKurs].agNoten = false;
                    state.kurse[state.aktiverKurs].optionsNotenS = JSON.parse(JSON.stringify(optionsNotenS));
                    state.kurse[state.aktiverKurs].optionsNotenM = JSON.parse(JSON.stringify(optionsNotenM));
                    state.kurse[state.aktiverKurs].quartalseinstellungen = false;
                    state.kurse[state.aktiverKurs].klausuren = [2, 2];
                    state.kurse[state.aktiverKurs].klausurnoteneinfluss = ["0.51", "0.51"];
                    state.kurse[state.aktiverKurs].halbjahresnoteneinfluss = "0.33";
                    state.kurse[state.aktiverKurs].fakeNoten = false;
                    state.kurse[state.aktiverKurs].testnoteneinfluss = ["0.25", "0.25", "0.25", "0.25"];
                    state.kurse[state.aktiverKurs].stricheGrenze = ["1.0", "1.0", "1.0", "1.0"];
                    state.kurse[state.aktiverKurs].minusStricheDefizit = [0, 0, 0, 0];
                    state.kurse[state.aktiverKurs].freidefizite = [0, 0, 0, 0];
                }
                else if (state.voreinstellungNeu === "AG") {
                    state.kurse[state.aktiverKurs].voreinstellung = "AG";
                    state.kurse[state.aktiverKurs].aktiv = true;
                    state.kurse[state.aktiverKurs].fach = "Mathematik";
                    state.kurse[state.aktiverKurs].kursart = "AG";
                    state.kurse[state.aktiverKurs].lehrmittel = ["\nLambacher Schweizer Mathematik Einführungsphase, Klett\n\nGraphikfähiger Taschenrechner\n\nTafelwerk", "\nLambacher Schweizer Mathematik Einführungsphase, Klett\n\nGraphikfähiger Taschenrechner\n\nTafelwerk"];
                    state.kurse[state.aktiverKurs].aufgabenstellung = [["", "", ""], ["", "", ""]];
                    state.kurse[state.aktiverKurs].klausurdauer = [["0", "0", "0"], ["0", "0", "0"]];
                    state.kurse[state.aktiverKurs].agNoten = true;
                    state.kurse[state.aktiverKurs].optionsNotenS = JSON.parse(JSON.stringify(optionsNotenS));
                    state.kurse[state.aktiverKurs].optionsNotenM = JSON.parse(JSON.stringify(optionsNotenAG));
                    state.kurse[state.aktiverKurs].quartalseinstellungen = false;
                    state.kurse[state.aktiverKurs].klausuren = [0, 0];
                    state.kurse[state.aktiverKurs].tests = [0, 0, 0, 0];
                    state.kurse[state.aktiverKurs].referate = [0, 0, 0, 0];
                    state.kurse[state.aktiverKurs].klausurnoteneinfluss = ["0", "0"];
                    state.kurse[state.aktiverKurs].halbjahresnoteneinfluss = "0.33";
                    state.kurse[state.aktiverKurs].fakeNoten = false;
                    state.kurse[state.aktiverKurs].testnoteneinfluss = ["0", "0", "0", "0"];
                    state.kurse[state.aktiverKurs].stricheGrenze = ["0.25", "0.25", "0.25", "0.25"];
                    state.kurse[state.aktiverKurs].minusStricheDefizit = [0, 0, 0, 0];
                    state.kurse[state.aktiverKurs].freidefizite = [0, 0, 0, 0];
                }
                else if (state.voreinstellungNeu === "Benutzerdefiniert") {
                    state.kurse[state.aktiverKurs].voreinstellung = "Benutzerdefiniert";
                    state.kurse[state.aktiverKurs].aktiv = true;
                }
                if (state.kurse[state.aktiverKurs].kursname !== JSON.parse(JSON.stringify(initialKurs.kursname))) {
                    state.kurse[state.aktiverKurs].kursname = state.kurse[state.aktiverKurs].jahrgangsstufe + " " + state.kurse[state.aktiverKurs].fach + " " + state.kurse[state.aktiverKurs].kursnummer;
                }
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name === "Unterricht Löschen") {
            this.setState((state) => {
                state.kurse[state.aktiverKurs].kursthema = JSON.parse(JSON.stringify(initialKurs.kursthema));
                state.kurse[state.aktiverKurs].aufgabenstellung = JSON.parse(JSON.stringify(initialKurs.aufgabenstellung));
                state.kurse[state.aktiverKurs].klausurbemerkungen = JSON.parse(JSON.stringify(initialKurs.klausurbemerkungen));
                state.kurse[state.aktiverKurs].tests = JSON.parse(JSON.stringify(initialKurs.tests));
                state.kurse[state.aktiverKurs].referate = JSON.parse(JSON.stringify(initialKurs.referate));
                state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                    schueler.markiert = JSON.parse(JSON.stringify(initialSchueler.markiert));
                    schueler.klausurnoten = JSON.parse(JSON.stringify(initialSchueler.klausurnoten));
                    schueler.klausurnoteHJ = JSON.parse(JSON.stringify(initialSchueler.klausurnoteHJ));
                    schueler.klausurnoteHJBeschriftung = JSON.parse(JSON.stringify(initialSchueler.klausurnoteHJBeschriftung));
                    schueler.sominoten = JSON.parse(JSON.stringify(initialSchueler.sominoten));
                    schueler.sominotenBeschriftung = JSON.parse(JSON.stringify(initialSchueler.sominotenBeschriftung));
                    schueler.sominoteHJ = JSON.parse(JSON.stringify(initialSchueler.sominoteHJ));
                    schueler.sominoteHJBeschriftung = JSON.parse(JSON.stringify(initialSchueler.sominoteHJBeschriftung));
                    schueler.zeugnisnoteHJ = JSON.parse(JSON.stringify(initialSchueler.zeugnisnoteHJ));
                    schueler.zeugnisnoteHJBeschriftung = JSON.parse(JSON.stringify(initialSchueler.zeugnisnoteHJBeschriftung));
                    schueler.zeugnisnoteHJPunkte = JSON.parse(JSON.stringify(initialSchueler.zeugnisnoteHJPunkte));
                    schueler.zeugnisnoteSJ = JSON.parse(JSON.stringify(initialSchueler.zeugnisnoteSJ));
                    schueler.zeugnisnoteSJBeschriftung = JSON.parse(JSON.stringify(initialSchueler.zeugnisnoteSJBeschriftung));
                    schueler.fehlstundenG = JSON.parse(JSON.stringify(initialSchueler.fehlstundenG));
                    schueler.fehlstundenU = JSON.parse(JSON.stringify(initialSchueler.fehlstundenU));
                    schueler.gewerteteStunden = JSON.parse(JSON.stringify(initialSchueler.gewerteteStunden));
                    schueler.fehlstundenGHJ = JSON.parse(JSON.stringify(initialSchueler.fehlstundenGHJ));
                    schueler.fehlstundenUHJ = JSON.parse(JSON.stringify(initialSchueler.fehlstundenUHJ));
                    schueler.testnoten = JSON.parse(JSON.stringify(initialSchueler.testnoten));
                    schueler.referatnoten = JSON.parse(JSON.stringify(initialSchueler.referatnoten));
                    schueler.bemerkungen = JSON.parse(JSON.stringify(initialSchueler.bemerkungen));
                    schueler.stricheMuendlich = JSON.parse(JSON.stringify(initialSchueler.stricheMuendlich));
                    schueler.stricheMinitest = JSON.parse(JSON.stringify(initialSchueler.stricheMinitest));
                    schueler.stricheMinitestErreichbar = JSON.parse(JSON.stringify(initialSchueler.stricheMinitestErreichbar));
                    schueler.defizite = JSON.parse(JSON.stringify(initialSchueler.defizite));
                    schueler.stricheGesamt = JSON.parse(JSON.stringify(initialSchueler.stricheGesamt));
                    schueler.minitestQuote = JSON.parse(JSON.stringify(initialSchueler.minitestQuote));
                    schueler.stricheAddiert = JSON.parse(JSON.stringify(initialSchueler.stricheAddiert));
                    schueler.stricheGewertet = JSON.parse(JSON.stringify(initialSchueler.stricheGewertet));
                    schueler.anwesenheit = JSON.parse(JSON.stringify(initialSchueler.anwesenheit));
                });
                state.kurse[state.aktiverKurs].unterricht = JSON.parse(JSON.stringify(initialKurs.unterricht));
                state.kurse[state.aktiverKurs].stundenStriche = JSON.parse(JSON.stringify(initialKurs.stundenStriche));
                state.kurse[state.aktiverKurs].stundenIst = JSON.parse(JSON.stringify(initialKurs.stundenIst));
                state.kurse[state.aktiverKurs].stundenSoll = JSON.parse(JSON.stringify(initialKurs.stundenSoll));
                state.kurse[state.aktiverKurs].minitestQuote = JSON.parse(JSON.stringify(initialKurs.minitestQuote));
                return ({
                    quartal: 1,
                    halbjahr: 1,
                    indexUnterricht: 0,
                    index1: 0,
                    index2: 0,
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name === "Kurs Löschen") {
            this.setState((state) => {
                state.kurse[state.aktiverKurs] = JSON.parse(JSON.stringify(initialKurs));
                return ({
                    voreinstellungNeu: JSON.parse(JSON.stringify(initialKurs.voreinstellung)),
                    positionSchueler1: state.kurse[state.aktiverKurs].schueler.length - 2,
                    positionSchueler2: state.kurse[state.aktiverKurs].schueler.length - 2,
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name === "Schüler Hinzufügen") {
            this.setState((state) => {
                let schueler = JSON.parse(JSON.stringify(state.kurse[state.aktiverKurs].schueler[state.kurse[state.aktiverKurs].schueler.length - 1]));
                state.kurse[state.aktiverKurs].schueler[state.kurse[state.aktiverKurs].schueler.length - 1].nachname = (state.kurse[state.aktiverKurs].schueler.length).toString();
                if (state.kurse[state.aktiverKurs].fach === "Mathematik" || state.kurse[state.aktiverKurs].fach === "Informatik" && (state.kurse[state.aktiverKurs].jahrgangsstufe === "9" || state.kurse[state.aktiverKurs].jahrgangsstufe === "10") || state.kurse[state.aktiverKurs].kursart === "LK") {
                    state.kurse[state.aktiverKurs].schueler[state.kurse[state.aktiverKurs].schueler.length - 1].klausurfach = [true, true];
                    if (state.kurse[state.aktiverKurs].schueler.length === 2) {
                        state.kurse[state.aktiverKurs].schueler[0].klausurfach = [true, true];
                    }
                }
                state.kurse[state.aktiverKurs].schueler.push(schueler);
                return ({
                    positionSchueler1: state.kurse[state.aktiverKurs].schueler.length - 2,
                    positionSchueler2: state.kurse[state.aktiverKurs].schueler.length - 2,
                    kurse: state.kurse
                });
            });
            this.updateSitzplatzlos("Raum 1");
            this.updateSitzplatzlos("Raum 2");
        }
        else if (event.target.name === "Schüler Entfernen") {
            this.setState((state) => {
                let schueler;
                if (state.kurse[state.aktiverKurs].schueler.length === 2) {
                    schueler = JSON.parse(JSON.stringify(state.kurse[state.aktiverKurs].schueler[state.kurse[state.aktiverKurs].schueler.length - 1]));
                    if (state.kurse[state.aktiverKurs].schueler[state.positionSchueler1].sitzplatz === true) {
                        for (let j = 0; j < state.kurse[state.aktiverKurs].sitzplaetze.length; j++) {
                            if (state.kurse[state.aktiverKurs].sitzplaetze[j].schueler === state.positionSchueler1) {
                                state.kurse[state.aktiverKurs].sitzplaetze[j].schueler = - 1;
                            }
                        }
                    }
                    if (state.kurse[state.aktiverKurs].schueler[state.positionSchueler1].sitzplatz2 === true) {
                        for (let j = 0; j < state.kurse[state.aktiverKurs].sitzplaetze2.length; j++) {
                            if (state.kurse[state.aktiverKurs].sitzplaetze2[j].schueler === state.positionSchueler1) {
                                state.kurse[state.aktiverKurs].sitzplaetze2[j].schueler = - 1;
                            }
                        }
                    }
                    state.kurse[state.aktiverKurs].schueler.splice(state.positionSchueler1, 1);
                    state.kurse[state.aktiverKurs].schueler.push(schueler);
                }
                else {
                    if (state.kurse[state.aktiverKurs].schueler[state.positionSchueler1].sitzplatz === true) {
                        for (let j = 0; j < state.kurse[state.aktiverKurs].sitzplaetze.length; j++) {
                            if (state.kurse[state.aktiverKurs].sitzplaetze[j].schueler === state.positionSchueler1) {
                                state.kurse[state.aktiverKurs].sitzplaetze[j].schueler = - 1;
                            }
                        }
                    }
                    if (state.kurse[state.aktiverKurs].schueler[state.positionSchueler1].sitzplatz2 === true) {
                        for (let j = 0; j < state.kurse[state.aktiverKurs].sitzplaetze2.length; j++) {
                            if (state.kurse[state.aktiverKurs].sitzplaetze2[j].schueler === state.positionSchueler1) {
                                state.kurse[state.aktiverKurs].sitzplaetze2[j].schueler = - 1;
                            }
                        }
                    }
                    for (let i = state.positionSchueler1 + 1; i < state.kurse[state.aktiverKurs].schueler.length - 1; i++) {
                        if (state.kurse[state.aktiverKurs].schueler[i].sitzplatz === true) {
                            for (let j = 0; j < state.kurse[state.aktiverKurs].sitzplaetze.length; j++) {
                                if (state.kurse[state.aktiverKurs].sitzplaetze[j].schueler === i) {
                                    state.kurse[state.aktiverKurs].sitzplaetze[j].schueler = i - 1;
                                }
                            }
                        }
                        if (state.kurse[state.aktiverKurs].schueler[i].sitzplatz2 === true) {
                            for (let j = 0; j < state.kurse[state.aktiverKurs].sitzplaetze2.length; j++) {
                                if (state.kurse[state.aktiverKurs].sitzplaetze2[j].schueler === i) {
                                    state.kurse[state.aktiverKurs].sitzplaetze2[j].schueler = i - 1;
                                }
                            }
                        }
                    }
                    state.kurse[state.aktiverKurs].schueler.splice(state.positionSchueler1, 1);
                }
                return ({
                    positionSchueler1: state.kurse[state.aktiverKurs].schueler.length - 2,
                    positionSchueler2: state.kurse[state.aktiverKurs].schueler.length - 2,
                    kurse: state.kurse
                });
            });
            this.updateSitzplatzlos("Raum 1");
            this.updateSitzplatzlos("Raum 2");
        }
        else if (event.target.name === "Schüler Einsortieren") {
            this.setState((state) => {
                let schueler;
                schueler = JSON.parse(JSON.stringify(state.kurse[state.aktiverKurs].schueler[state.positionSchueler1]));
                state.kurse[state.aktiverKurs].schueler.splice(state.positionSchueler2 + 1, 0, schueler);
                if (state.positionSchueler2 > state.positionSchueler1 - 1) {
                    state.kurse[state.aktiverKurs].schueler.splice(state.positionSchueler1, 1);
                }
                else {
                    state.kurse[state.aktiverKurs].schueler.splice(state.positionSchueler1 + 1, 1);
                }
                if (state.positionSchueler2 > state.positionSchueler1 - 1) {
                    if (state.kurse[state.aktiverKurs].schueler[state.positionSchueler2].sitzplatz === true) {
                        for (let j = 0; j < state.kurse[state.aktiverKurs].sitzplaetze.length; j++) {
                            if (state.kurse[state.aktiverKurs].sitzplaetze[j].schueler === state.positionSchueler1) {
                                state.kurse[state.aktiverKurs].sitzplaetze[j].schueler = -101;
                            }
                        }
                    }
                    if (state.kurse[state.aktiverKurs].schueler[state.positionSchueler2].sitzplatz2 === true) {
                        for (let j = 0; j < state.kurse[state.aktiverKurs].sitzplaetze2.length; j++) {
                            if (state.kurse[state.aktiverKurs].sitzplaetze2[j].schueler === state.positionSchueler1) {
                                state.kurse[state.aktiverKurs].sitzplaetze2[j].schueler = -101;
                            }
                        }
                    }
                    for (let i = state.positionSchueler1; i < state.positionSchueler2; i++) {
                        if (state.kurse[state.aktiverKurs].schueler[i].sitzplatz === true) {
                            for (let j = 0; j < state.kurse[state.aktiverKurs].sitzplaetze.length; j++) {
                                if (state.kurse[state.aktiverKurs].sitzplaetze[j].schueler === i + 1) {
                                    state.kurse[state.aktiverKurs].sitzplaetze[j].schueler = i;
                                }
                            }
                        }
                        if (state.kurse[state.aktiverKurs].schueler[i].sitzplatz2 === true) {
                            for (let j = 0; j < state.kurse[state.aktiverKurs].sitzplaetze2.length; j++) {
                                if (state.kurse[state.aktiverKurs].sitzplaetze2[j].schueler === i + 1) {
                                    state.kurse[state.aktiverKurs].sitzplaetze2[j].schueler = i;
                                }
                            }
                        }
                    }
                    for (let j = 0; j < state.kurse[state.aktiverKurs].sitzplaetze.length; j++) {
                        if (state.kurse[state.aktiverKurs].sitzplaetze[j].schueler === -101) {
                            state.kurse[state.aktiverKurs].sitzplaetze[j].schueler = state.positionSchueler2;
                        }
                    }
                    for (let j = 0; j < state.kurse[state.aktiverKurs].sitzplaetze2.length; j++) {
                        if (state.kurse[state.aktiverKurs].sitzplaetze2[j].schueler === -101) {
                            state.kurse[state.aktiverKurs].sitzplaetze2[j].schueler = state.positionSchueler2;
                        }
                    }
                }
                else {
                    if (state.kurse[state.aktiverKurs].schueler[state.positionSchueler2 + 1].sitzplatz === true) {
                        for (let j = 0; j < state.kurse[state.aktiverKurs].sitzplaetze.length; j++) {
                            if (state.kurse[state.aktiverKurs].sitzplaetze[j].schueler === state.positionSchueler1) {
                                state.kurse[state.aktiverKurs].sitzplaetze[j].schueler = -101;
                            }
                        }
                    }
                    if (state.kurse[state.aktiverKurs].schueler[state.positionSchueler2 + 1].sitzplatz2 === true) {
                        for (let j = 0; j < state.kurse[state.aktiverKurs].sitzplaetze2.length; j++) {
                            if (state.kurse[state.aktiverKurs].sitzplaetze2[j].schueler === state.positionSchueler1) {
                                state.kurse[state.aktiverKurs].sitzplaetze2[j].schueler = -101;
                            }
                        }
                    }
                    for (let i = state.positionSchueler1; i > state.positionSchueler2 + 1; i--) {
                        if (state.kurse[state.aktiverKurs].schueler[i].sitzplatz === true) {
                            for (let j = 0; j < state.kurse[state.aktiverKurs].sitzplaetze.length; j++) {
                                if (state.kurse[state.aktiverKurs].sitzplaetze[j].schueler === i - 1) {
                                    state.kurse[state.aktiverKurs].sitzplaetze[j].schueler = i;
                                }
                            }
                        }
                        if (state.kurse[state.aktiverKurs].schueler[i].sitzplatz2 === true) {
                            for (let j = 0; j < state.kurse[state.aktiverKurs].sitzplaetze2.length; j++) {
                                if (state.kurse[state.aktiverKurs].sitzplaetze2[j].schueler === i - 1) {
                                    state.kurse[state.aktiverKurs].sitzplaetze2[j].schueler = i;
                                }
                            }
                        }
                    }
                    for (let j = 0; j < state.kurse[state.aktiverKurs].sitzplaetze.length; j++) {
                        if (state.kurse[state.aktiverKurs].sitzplaetze[j].schueler === -101) {
                            state.kurse[state.aktiverKurs].sitzplaetze[j].schueler = state.positionSchueler2 + 1;
                        }
                    }
                    for (let j = 0; j < state.kurse[state.aktiverKurs].sitzplaetze2.length; j++) {
                        if (state.kurse[state.aktiverKurs].sitzplaetze2[j].schueler === -101) {
                            state.kurse[state.aktiverKurs].sitzplaetze2[j].schueler = state.positionSchueler2 + 1;
                        }
                    }
                }
                return ({
                    positionSchueler1: state.kurse[state.aktiverKurs].schueler.length - 2,
                    positionSchueler2: state.kurse[state.aktiverKurs].schueler.length - 2,
                    kurse: state.kurse
                });
            });
            this.updateSitzplatzlos("Raum 1");
            this.updateSitzplatzlos("Raum 2");
        }
        else if (event.target.name === "Kursmappe") {
            this.setState((state) => {
                return ({
                    aktivesMenue: state.kursmappeWahl
                });
            });
        }
        else if (event.target.name === "Quartal") {
            this.setState((state) => {
                let quartal;
                let halbjahr;
                if (state.quartal === 1) {
                    quartal = 2;
                    halbjahr = 1;
                }
                else if (state.quartal === 2) {
                    quartal = 3;
                    halbjahr = 2;
                }
                else if (state.quartal === 3) {
                    quartal = 4;
                    halbjahr = 2;
                }
                else {
                    quartal = 1;
                    halbjahr = 1;
                }
                let indexUnterricht = state.kurse[state.aktiverKurs].unterricht[quartal - 1].length - 1;
                if (state.kurse[state.aktiverKurs].unterricht[quartal - 1][indexUnterricht].datum === "" && indexUnterricht > 0) {
                    indexUnterricht = indexUnterricht - 1;
                }
                return ({
                    quartal: quartal,
                    halbjahr: halbjahr,
                    indexUnterricht: indexUnterricht
                });
            });
        }
        else if (event.target.name === "Halbjahr") {
            this.setState((state) => {
                if (state.halbjahr === 1) {
                    return ({ halbjahr: 2 });
                }
                else {
                    return ({ halbjahr: 1 });
                }
            });
        }
        else if (event.target.name === "Ansicht") {
            this.setState((state) => {
                if (state.ansicht === "Fehlstunden") {
                    return ({ ansicht: "Striche" });
                }
                else if (state.ansicht === "Striche") {
                    return ({ ansicht: "Noten" });
                }
                else if (state.ansicht === "Noten") {
                    return ({ ansicht: "Fehlstunden" });
                }
            });
        }
        this.updateDaten();
    }

    handleClickDatum(event) {
        this.setState((state) => {
            return ({
                aktivesMenue: "Datumeingabe",
                eingabewert: state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][parseInt(event.target.attributes.name.value, 10)].datum,
                eingabewert2: state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][parseInt(event.target.attributes.name.value, 10)].stundenthema,
                eingabewert3: state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][parseInt(event.target.attributes.name.value, 10)].stundeninhalt,
                eingabewert4: state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][parseInt(event.target.attributes.name.value, 10)].hausaufgabe,
                index1: parseInt(event.target.attributes.name.value, 10)
            });
        });
    }

    handleClickStundenthema(event) {
        this.setState((state) => {
            return ({
                aktivesMenue: "Stundenthemaeingabe",
                eingabewert: state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][parseInt(event.target.attributes.name.value, 10)].datum,
                eingabewert2: state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][parseInt(event.target.attributes.name.value, 10)].stundenthema,
                eingabewert3: state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][parseInt(event.target.attributes.name.value, 10)].stundeninhalt,
                eingabewert4: state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][parseInt(event.target.attributes.name.value, 10)].hausaufgabe,
                index1: parseInt(event.target.attributes.name.value, 10)
            });
        });
    }

    handleClickHausaufgabe(event) {
        this.setState((state) => {
            return ({
                aktivesMenue: "Hausaufgabeeingabe",
                eingabewert: state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][parseInt(event.target.attributes.name.value, 10)].datum,
                eingabewert2: state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][parseInt(event.target.attributes.name.value, 10)].stundenthema,
                eingabewert3: state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][parseInt(event.target.attributes.name.value, 10)].stundeninhalt,
                eingabewert4: state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][parseInt(event.target.attributes.name.value, 10)].hausaufgabe,
                index1: parseInt(event.target.attributes.name.value, 10)
            });
        });
    }

    handleClickBemerkungen(index, event) {
        this.setState((state) => {
            return ({
                aktivesMenue: "Bemerkungeneingabe",
                eingabewert: state.kurse[state.aktiverKurs].schueler[parseInt(event.target.attributes.name.value, 10)].bemerkungen[index - 1],
                index1: index - 1,
                index2: parseInt(event.target.attributes.name.value, 10)
            });
        });
    }

    handleClickSitzplatz(event) {
        let index = -1;
        let indexSchueler;
        try {
            index = parseInt(event.target.attributes.name.value.substring(10), 10);
        }
        catch (e1) {
            try {
                index = parseInt(event.target.offsetParent.attributes.name.value.substring(10), 10);
            }
            catch (e2) {
                try {
                    index = parseInt(event.target.offsetParent.offsetParent.attributes.name.value.substring(10), 10);
                }
                catch (e3) {
                }
            }
        }
        if (Number.isNaN(index)) {
            index = -1;
        }
        if (index > -1) {
            this.setState((state) => {
                if (state.sitzplanModus === "Unterricht") {
                    indexSchueler = -1;
                    if (state.raum === "Raum 1") {
                        indexSchueler = state.kurse[state.aktiverKurs].sitzplaetze[index].schueler;
                    }
                    else if (state.raum === "Raum 2") {
                        indexSchueler = state.kurse[state.aktiverKurs].sitzplaetze2[index].schueler;
                    }
                    if (indexSchueler > -1 && indexSchueler < 99) {
                        if (state.kurse[state.aktiverKurs].schueler[indexSchueler].anwesenheit[state.quartal - 1][state.indexUnterricht].length < state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][state.indexUnterricht].dauerIst) {
                            if (state.unterrichtModus === "Markieren") {
                                state.kurse[state.aktiverKurs].schueler[indexSchueler].markiert = !state.kurse[state.aktiverKurs].schueler[indexSchueler].markiert;
                            }
                            else if (state.unterrichtModus === "Strich Plus") {
                                state.kurse[state.aktiverKurs].schueler[indexSchueler].stricheMuendlich[state.quartal - 1][state.indexUnterricht] = state.kurse[state.aktiverKurs].schueler[indexSchueler].stricheMuendlich[state.quartal - 1][state.indexUnterricht] + 1;
                            }
                            else if (state.unterrichtModus === "Strich Minus") {
                                state.kurse[state.aktiverKurs].schueler[indexSchueler].stricheMuendlich[state.quartal - 1][state.indexUnterricht] = Math.max(0, state.kurse[state.aktiverKurs].schueler[indexSchueler].stricheMuendlich[state.quartal - 1][state.indexUnterricht] - 1);
                            }
                            else if (state.unterrichtModus === "Defizit Plus") {
                                state.kurse[state.aktiverKurs].schueler[indexSchueler].defizite[state.quartal - 1][state.indexUnterricht] = state.kurse[state.aktiverKurs].schueler[indexSchueler].defizite[state.quartal - 1][state.indexUnterricht] + 1;
                            }
                            else if (state.unterrichtModus === "Defizit Minus") {
                                state.kurse[state.aktiverKurs].schueler[indexSchueler].defizite[state.quartal - 1][state.indexUnterricht] = Math.max(0, state.kurse[state.aktiverKurs].schueler[indexSchueler].defizite[state.quartal - 1][state.indexUnterricht] - 1);
                            }
                            else if (state.unterrichtModus === "Minitest") {
                                if (state.kurse[state.aktiverKurs].schueler[indexSchueler].stricheMinitestErreichbar[state.quartal - 1][state.indexUnterricht] === 0) {
                                    state.kurse[state.aktiverKurs].schueler[indexSchueler].stricheMinitestErreichbar[state.quartal - 1][state.indexUnterricht] = state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][state.indexUnterricht].stricheMinitestErreichbar;
                                }
                                else {
                                    state.kurse[state.aktiverKurs].schueler[indexSchueler].stricheMinitestErreichbar[state.quartal - 1][state.indexUnterricht] = 0;
                                }
                            }
                            else if (state.unterrichtModus === "Minitest Plus") {
                                if (state.kurse[state.aktiverKurs].schueler[indexSchueler].stricheMinitestErreichbar[state.quartal - 1][state.indexUnterricht] > 0) {
                                    state.kurse[state.aktiverKurs].schueler[indexSchueler].stricheMinitest[state.quartal - 1][state.indexUnterricht] = state.kurse[state.aktiverKurs].schueler[indexSchueler].stricheMinitest[state.quartal - 1][state.indexUnterricht] + 1;
                                }
                            }
                            else if (state.unterrichtModus === "Minitest Minus") {
                                if (state.kurse[state.aktiverKurs].schueler[indexSchueler].stricheMinitestErreichbar[state.quartal - 1][state.indexUnterricht] > 0) {
                                    state.kurse[state.aktiverKurs].schueler[indexSchueler].stricheMinitest[state.quartal - 1][state.indexUnterricht] = Math.max(0, state.kurse[state.aktiverKurs].schueler[indexSchueler].stricheMinitest[state.quartal - 1][state.indexUnterricht] - 1);
                                }
                            }
                        }
                    }
                }
                else if (state.sitzplanModus === "Schülerzuweisungen" || state.sitzplanModus === "Sitzordnungen") {
                    if (state.raum === "Raum 1") {
                        if (state.sitzplaetzeAktivieren) {
                            if (state.kurse[state.aktiverKurs].sitzplaetze[index].aktiv) {
                                if (state.kurse[state.aktiverKurs].sitzplaetze[index].schueler > -1 && state.kurse[state.aktiverKurs].sitzplaetze[index].schueler < 99) {
                                    state.kurse[state.aktiverKurs].schueler[state.kurse[state.aktiverKurs].sitzplaetze[index].schueler].sitzplatz = false;
                                }
                                state.kurse[state.aktiverKurs].sitzplaetze[index].schueler = -1;
                            }
                            state.kurse[state.aktiverKurs].sitzplaetze[index].aktiv = !state.kurse[state.aktiverKurs].sitzplaetze[index].aktiv;
                        }
                        else if (state.schuelerAktivieren) {
                            if (state.indexSchueler === -1) {
                                if (state.kurse[state.aktiverKurs].sitzplaetze[index].schueler > -1 && state.kurse[state.aktiverKurs].sitzplaetze[index].schueler < 99) {
                                    state.kurse[state.aktiverKurs].schueler[state.kurse[state.aktiverKurs].sitzplaetze[index].schueler].sitzplatz = false;
                                }
                                state.kurse[state.aktiverKurs].sitzplaetze[index].schueler = -1;
                            }
                            else if (state.indexSchueler === 99) {
                                if (state.kurse[state.aktiverKurs].sitzplaetze[index].schueler > -1 && state.kurse[state.aktiverKurs].sitzplaetze[index].schueler < 99) {
                                    state.kurse[state.aktiverKurs].schueler[state.kurse[state.aktiverKurs].sitzplaetze[index].schueler].sitzplatz = false;
                                }
                                state.kurse[state.aktiverKurs].sitzplaetze[index].schueler = 99;
                            }
                            else {
                                if (state.kurse[state.aktiverKurs].sitzplaetze[index].schueler > -1 && state.kurse[state.aktiverKurs].sitzplaetze[index].schueler < 99) {
                                    state.kurse[state.aktiverKurs].schueler[state.kurse[state.aktiverKurs].sitzplaetze[index].schueler].sitzplatz = false;
                                }
                                state.kurse[state.aktiverKurs].sitzplaetze[index].schueler = state.indexSchueler;
                                state.kurse[state.aktiverKurs].schueler[state.indexSchueler].sitzplatz = true;
                            }
                        }
                    }
                    else if (state.raum === "Raum 2") {
                        if (state.sitzplaetzeAktivieren) {
                            if (state.kurse[state.aktiverKurs].sitzplaetze2[index].aktiv) {
                                if (state.kurse[state.aktiverKurs].sitzplaetze2[index].schueler > -1 && state.kurse[state.aktiverKurs].sitzplaetze2[index].schueler < 99) {
                                    state.kurse[state.aktiverKurs].schueler[state.kurse[state.aktiverKurs].sitzplaetze2[index].schueler].sitzplatz2 = false;
                                }
                                state.kurse[state.aktiverKurs].sitzplaetze2[index].schueler = -1;
                            }
                            state.kurse[state.aktiverKurs].sitzplaetze2[index].aktiv = !state.kurse[state.aktiverKurs].sitzplaetze2[index].aktiv;
                        }
                        else if (state.schuelerAktivieren) {
                            if (state.indexSchueler === -1) {
                                if (state.kurse[state.aktiverKurs].sitzplaetze2[index].schueler > -1 && state.kurse[state.aktiverKurs].sitzplaetze2[index].schueler < 99) {
                                    state.kurse[state.aktiverKurs].schueler[state.kurse[state.aktiverKurs].sitzplaetze2[index].schueler].sitzplatz2 = false;
                                }
                                state.kurse[state.aktiverKurs].sitzplaetze2[index].schueler = -1;
                            }
                            else if (state.indexSchueler === 99) {
                                if (state.kurse[state.aktiverKurs].sitzplaetze2[index].schueler > -1 && state.kurse[state.aktiverKurs].sitzplaetze2[index].schueler < 99) {
                                    state.kurse[state.aktiverKurs].schueler[state.kurse[state.aktiverKurs].sitzplaetze2[index].schueler].sitzplatz2 = false;
                                }
                                state.kurse[state.aktiverKurs].sitzplaetze2[index].schueler = 99;
                            }
                            else {
                                if (state.kurse[state.aktiverKurs].sitzplaetze2[index].schueler > -1 && state.kurse[state.aktiverKurs].sitzplaetze2[index].schueler < 99) {
                                    state.kurse[state.aktiverKurs].schueler[state.kurse[state.aktiverKurs].sitzplaetze2[index].schueler].sitzplatz2 = false;
                                }
                                state.kurse[state.aktiverKurs].sitzplaetze2[index].schueler = state.indexSchueler;
                                state.kurse[state.aktiverKurs].schueler[state.indexSchueler].sitzplatz2 = true;
                            }
                        }
                    }
                }
                return ({
                    kurse: state.kurse
                });
            });
            if (this.state.sitzplanModus === "Schülerzuweisungen" || this.state.sitzplanModus === "Sitzordnungen") {
                this.updateSitzplatzlos(this.state.raum);
            }
            this.updateDaten();
        }
    }

    handleChange(event) {
        if (event.target.name === "Passwort Eingabe") {
            this.setState(() => {
                return ({
                    eingabewert: event.target.value
                });
            });
        }
        if (event.target.name === "Passwort2 Eingabe") {
            this.setState(() => {
                return ({
                    eingabewert2: event.target.value
                });
            });
        }
        if (event.target.name === "Passwort3 Eingabe") {
            this.setState(() => {
                return ({
                    eingabewert3: event.target.value
                });
            });
        }
        else if (event.target.name === "Datum Wahl") {
            this.setState(() => {
                return ({
                    indexUnterricht: parseInt(event.target.value, 10)
                });
            });
        }
        else if (event.target.name === "Kursmappe Wahl") {
            this.setState(() => {
                return ({
                    kursmappeWahl: event.target.value
                });
            });
        }
        else if (event.target.name === "Striche Wahl") {
            this.setState(() => {
                return ({
                    stricheWahl: event.target.value
                });
            });
        }
        else if (event.target.name.substring(0, 13) === "Dauer Striche") {
            this.setState((state) => {
                let index = parseInt(event.target.name.substring(14), 10);
                state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][index].dauerStriche = parseInt(event.target.value, 10);
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 9) === "Dauer Ist") {
            this.setState((state) => {
                let index = parseInt(event.target.name.substring(10), 10);
                state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][index].dauerStriche = parseInt(event.target.value, 10);
                state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][index].dauerIst = parseInt(event.target.value, 10);
                state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][index].dauerSoll = parseInt(event.target.value, 10);
                state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                    schueler.anwesenheit[state.quartal - 1][index] = schueler.anwesenheit[state.quartal - 1][index].substring(0, parseInt(event.target.value, 10));
                });
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 10) === "Dauer Soll") {
            this.setState((state) => {
                let index = parseInt(event.target.name.substring(11), 10);
                state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][index].dauerSoll = parseInt(event.target.value, 10);
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name === "Datum Eingabe") {
            this.setState(() => {
                return ({
                    eingabewert: event.target.value,
                });
            });
        }
        else if (event.target.name === "Stundenthema Eingabe") {
            this.setState(() => {
                return ({
                    eingabewert2: event.target.value,
                });
            });
        }
        else if (event.target.name === "Stundeninhalt Eingabe") {
            this.setState(() => {
                return ({
                    eingabewert3: event.target.value,
                });
            });
        }
        else if (event.target.name === "Hausaufgabe Eingabe") {
            this.setState(() => {
                return ({
                    eingabewert4: event.target.value,
                });
            });
        }
        else if (event.target.name.substring(0, 11) === "Anwesenheit") {
            this.setState((state) => {
                let index = parseInt(event.target.name.substring(12, 14), 10);
                let indexSchueler = parseInt(event.target.name.substring(14), 10);
                state.kurse[state.aktiverKurs].schueler[indexSchueler].anwesenheit[state.quartal - 1][index] = event.target.value;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 7) === "Striche") {
            this.setState((state) => {
                let index = parseInt(event.target.name.substring(8, 10), 10);
                let indexSchueler = parseInt(event.target.name.substring(10), 10);
                state.kurse[state.aktiverKurs].schueler[indexSchueler].stricheGesamt[state.quartal - 1][index] = event.target.value;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 13) === "MinitestQuote") {
            this.setState((state) => {
                let indexSchueler = parseInt(event.target.name.substring(14), 10);
                state.kurse[state.aktiverKurs].schueler[indexSchueler].minitestQuote[state.quartal - 1] = parseInt(event.target.value, 10);
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 14) === "StricheAddiert") {
            this.setState((state) => {
                let indexSchueler = parseInt(event.target.name.substring(15), 10);
                state.kurse[state.aktiverKurs].schueler[indexSchueler].stricheAddiert[state.quartal - 1] = parseInt(event.target.value, 10);
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 15) === "StricheGewertet") {
            this.setState((state) => {
                let indexSchueler = parseInt(event.target.name.substring(16), 10);
                state.kurse[state.aktiverKurs].schueler[indexSchueler].stricheGewertet[state.quartal - 1] = parseInt(event.target.value, 10);
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 11) === "Klausurfach") {
            this.setState((state) => {
                let halbjahr = parseInt(event.target.name.substring(11, 12), 10);
                let indexSchueler = parseInt(event.target.name.substring(13), 10);
                state.kurse[state.aktiverKurs].schueler[indexSchueler].klausurfach[halbjahr - 1] = event.target.checked;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 12) === "Klausurnoten") {
            this.setState((state) => {
                let halbjahr = parseInt(event.target.name.substring(12, 13), 10);
                let nummer = parseInt(event.target.name.substring(13, 14), 10);
                let indexSchueler = parseInt(event.target.name.substring(15), 10);
                state.kurse[state.aktiverKurs].schueler[indexSchueler].klausurnoten[halbjahr - 1][nummer - 1] = event.target.value;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 13) === "KlausurnoteHJ") {
            this.setState((state) => {
                let halbjahr = parseInt(event.target.name.substring(13, 14), 10);
                let indexSchueler = parseInt(event.target.name.substring(15), 10);
                state.kurse[state.aktiverKurs].schueler[indexSchueler].klausurnoteHJ[halbjahr - 1] = event.target.value;
                if (event.target.value !== "Auto") {
                    state.kurse[state.aktiverKurs].schueler[indexSchueler].klausurnoteHJBeschriftung[halbjahr - 1] = "Auto";
                }
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 9) === "Sominoten") {
            this.setState((state) => {
                let quartal = parseInt(event.target.name.substring(9, 10), 10);
                let indexSchueler = parseInt(event.target.name.substring(11), 10);
                state.kurse[state.aktiverKurs].schueler[indexSchueler].sominoten[quartal - 1] = event.target.value;
                if (event.target.value !== "Auto") {
                    state.kurse[state.aktiverKurs].schueler[indexSchueler].sominotenBeschriftung[quartal - 1] = "Auto";
                }
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 10) === "SominoteHJ") {
            this.setState((state) => {
                let halbjahr = parseInt(event.target.name.substring(10, 11), 10);
                let indexSchueler = parseInt(event.target.name.substring(12), 10);
                state.kurse[state.aktiverKurs].schueler[indexSchueler].sominoteHJ[halbjahr - 1] = event.target.value;
                if (event.target.value !== "Auto") {
                    state.kurse[state.aktiverKurs].schueler[indexSchueler].sominoteHJBeschriftung[halbjahr - 1] = "Auto";
                }
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 13) === "ZeugnisnoteHJ") {
            this.setState((state) => {
                let halbjahr = parseInt(event.target.name.substring(13, 14), 10);
                let indexSchueler = parseInt(event.target.name.substring(15), 10);
                state.kurse[state.aktiverKurs].schueler[indexSchueler].zeugnisnoteHJ[halbjahr - 1] = event.target.value;
                if (event.target.value !== "Auto") {
                    state.kurse[state.aktiverKurs].schueler[indexSchueler].zeugnisnoteHJBeschriftung[halbjahr - 1] = "Auto";
                }
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 19) === "ZeugnisnoteHJPunkte") {
            this.setState((state) => {
                let halbjahr = parseInt(event.target.name.substring(19, 20), 10);
                let indexSchueler = parseInt(event.target.name.substring(21), 10);
                state.kurse[state.aktiverKurs].schueler[indexSchueler].zeugnisnoteHJPunkte[halbjahr - 1] = event.target.value;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 13) === "ZeugnisnoteSJ") {
            this.setState((state) => {
                let indexSchueler = parseInt(event.target.name.substring(14), 10);
                state.kurse[state.aktiverKurs].schueler[indexSchueler].zeugnisnoteSJ = event.target.value;
                if (event.target.value !== "Auto") {
                    state.kurse[state.aktiverKurs].schueler[indexSchueler].zeugnisnoteSJBeschriftung = "Auto";
                }
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 12) === "FehlstundenG") {
            this.setState((state) => {
                let quartal = parseInt(event.target.name.substring(12, 13), 10);
                let indexSchueler = parseInt(event.target.name.substring(14), 10);
                state.kurse[state.aktiverKurs].schueler[indexSchueler].fehlstundenG[quartal - 1] = event.target.value;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 12) === "FehlstundenU") {
            this.setState((state) => {
                let quartal = parseInt(event.target.name.substring(12, 13), 10);
                let indexSchueler = parseInt(event.target.name.substring(14), 10);
                state.kurse[state.aktiverKurs].schueler[indexSchueler].fehlstundenU[quartal - 1] = event.target.value;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 14) === "FehlstundenGHJ") {
            this.setState((state) => {
                let halbjahr = parseInt(event.target.name.substring(14, 15), 10);
                let indexSchueler = parseInt(event.target.name.substring(16), 10);
                state.kurse[state.aktiverKurs].schueler[indexSchueler].fehlstundenGHJ[halbjahr - 1] = event.target.value;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 14) === "FehlstundenUHJ") {
            this.setState((state) => {
                let halbjahr = parseInt(event.target.name.substring(14, 15), 10);
                let indexSchueler = parseInt(event.target.name.substring(16), 10);
                state.kurse[state.aktiverKurs].schueler[indexSchueler].fehlstundenUHJ[halbjahr - 1] = event.target.value;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 9) === "Testnoten") {
            this.setState((state) => {
                let quartal = parseInt(event.target.name.substring(9, 10), 10);
                let nummer = parseInt(event.target.name.substring(10, 11), 10);
                let indexSchueler = parseInt(event.target.name.substring(12), 10);
                state.kurse[state.aktiverKurs].schueler[indexSchueler].testnoten[quartal - 1][nummer - 1] = event.target.value;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 12) === "Referatnoten") {
            this.setState((state) => {
                let quartal = parseInt(event.target.name.substring(12, 13), 10);
                let nummer = parseInt(event.target.name.substring(13, 14), 10);
                let indexSchueler = parseInt(event.target.name.substring(15), 10);
                state.kurse[state.aktiverKurs].schueler[indexSchueler].referatnoten[quartal - 1][nummer - 1] = event.target.value;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name === "Bemerkungen Eingabe") {
            this.setState(() => {
                return ({
                    eingabewert: event.target.value,
                });
            });
        }
        else if (event.target.name === "Minitest Wahl") {
            this.setState((state) => {
                state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][state.indexUnterricht].stricheMinitestErreichbar = parseInt(event.target.value, 10);
                let firstClick = false;
                if (state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][state.indexUnterricht].stricheMinitestErreichbar > 0) {
                    firstClick = true;
                    for (let i = 0; i < state.kurse[state.aktiverKurs].schueler.length - 1; i++) {
                        if (state.kurse[state.aktiverKurs].schueler[i].stricheMinitestErreichbar[state.quartal - 1][state.indexUnterricht] > 0) {
                            firstClick = false;
                        }
                    }
                    if (firstClick) {
                        if (state.raum === "Raum 1") {
                            for (let i = 0; i < state.kurse[state.aktiverKurs].schueler.length - 1; i++) {
                                if (state.kurse[state.aktiverKurs].schueler[i].sitzplatz && state.kurse[state.aktiverKurs].schueler[i].anwesenheit[state.quartal - 1][state.indexUnterricht] === "") {
                                    state.kurse[state.aktiverKurs].schueler[i].stricheMinitestErreichbar[state.quartal - 1][state.indexUnterricht] = state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][state.indexUnterricht].stricheMinitestErreichbar;
                                }
                            }
                        }
                        else if (state.raum === "Raum 2") {
                            for (let i = 0; i < state.kurse[state.aktiverKurs].schueler.length - 1; i++) {
                                if (state.kurse[state.aktiverKurs].schueler[i].sitzplatz2 && state.kurse[state.aktiverKurs].schueler[i].anwesenheit[state.quartal - 1][state.indexUnterricht] === "") {
                                    state.kurse[state.aktiverKurs].schueler[i].stricheMinitestErreichbar[state.quartal - 1][state.indexUnterricht] = state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][state.indexUnterricht].stricheMinitestErreichbar;
                                }
                            }
                        }
                    }
                }
                if (!firstClick) {
                    for (let i = 0; i < state.kurse[state.aktiverKurs].schueler.length - 1; i++) {
                        if (state.kurse[state.aktiverKurs].schueler[i].stricheMinitestErreichbar[state.quartal - 1][state.indexUnterricht] !== 0) {
                            state.kurse[state.aktiverKurs].schueler[i].stricheMinitestErreichbar[state.quartal - 1][state.indexUnterricht] = state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][state.indexUnterricht].stricheMinitestErreichbar;
                        }
                    }
                }
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name === "Sitzordnungen Wahl") {
            this.setState((state) => {
                state.kurse[state.aktiverKurs].nameSitzordnung = state.kurse[state.kurse.length - 1].sitzordnungen[parseInt(event.target.value, 10)].nameSitzordnung;
                return ({
                    indexSitzordnungen: parseInt(event.target.value, 10),
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name === "Sitzordnungen Eingabe") {
            this.setState((state) => {
                state.kurse[state.aktiverKurs].nameSitzordnung = event.target.value;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name === "Schüler Wahl") {
            this.setState(() => {
                return ({
                    indexSchueler: parseInt(event.target.value, 10)
                });
            });
        }
        else if (event.target.name === "Position Wahl") {
            this.setState(() => {
                return ({
                    positionNeu: parseInt(event.target.value, 10)
                });
            });
        }
        else if (event.target.name === "Voreinstellung Wahl") {
            this.setState(() => {
                return ({
                    voreinstellungNeu: event.target.value
                });
            });
        }
        else if (event.target.name === "Jahrgangsstufe") {
            this.setState((state) => {
                state.kurse[state.aktiverKurs].aktiv = true;
                state.kurse[state.aktiverKurs].jahrgangsstufe = event.target.value;
                state.kurse[state.aktiverKurs].kursname = state.kurse[state.aktiverKurs].jahrgangsstufe + " " + state.kurse[state.aktiverKurs].fach + " " + state.kurse[state.aktiverKurs].kursnummer;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name === "Fach Wahl") {
            this.setState((state) => {
                state.kurse[state.aktiverKurs].aktiv = true;
                state.kurse[state.aktiverKurs].voreinstellung = "Benutzerdefiniert";
                state.kurse[state.aktiverKurs].fach = event.target.value;
                state.kurse[state.aktiverKurs].kursname = state.kurse[state.aktiverKurs].jahrgangsstufe + " " + state.kurse[state.aktiverKurs].fach + " " + state.kurse[state.aktiverKurs].kursnummer;
                return ({
                    voreinstellungNeu: "Benutzerdefiniert",
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name === "Kursart Wahl") {
            this.setState((state) => {
                state.kurse[state.aktiverKurs].aktiv = true;
                state.kurse[state.aktiverKurs].voreinstellung = "Benutzerdefiniert";
                state.kurse[state.aktiverKurs].kursart = event.target.value;
                if (event.target.value === "AG") {
                    state.kurse[state.aktiverKurs].agNoten = true;
                    state.kurse[state.aktiverKurs].optionsNotenS = JSON.parse(JSON.stringify(optionsNotenS));
                    state.kurse[state.aktiverKurs].optionsNotenM = JSON.parse(JSON.stringify(optionsNotenAG));
                    state.kurse[state.aktiverKurs].quartalseinstellungen = false;
                    state.kurse[state.aktiverKurs].klausurdauer = [["0", "0", "0"], ["0", "0", "0"]];
                    state.kurse[state.aktiverKurs].klausuren = [0, 0];
                    state.kurse[state.aktiverKurs].tests = [0, 0, 0, 0];
                    state.kurse[state.aktiverKurs].referate = [0, 0, 0, 0];
                    state.kurse[state.aktiverKurs].klausurnoteneinfluss = ["0", "0"];
                    state.kurse[state.aktiverKurs].testnoteneinfluss = ["0", "0", "0", "0"];
                    state.kurse[state.aktiverKurs].fakeNoten = false;
                }
                else {
                    state.kurse[state.aktiverKurs].agNoten = false;
                    state.kurse[state.aktiverKurs].optionsNotenS = JSON.parse(JSON.stringify(optionsNotenS));
                    state.kurse[state.aktiverKurs].optionsNotenM = JSON.parse(JSON.stringify(optionsNotenM));
                }
                return ({
                    voreinstellungNeu: "Benutzerdefiniert",
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name === "Kursnummer") {
            this.setState((state) => {
                state.kurse[state.aktiverKurs].aktiv = true;
                state.kurse[state.aktiverKurs].kursnummer = event.target.value;
                state.kurse[state.aktiverKurs].kursname = state.kurse[state.aktiverKurs].jahrgangsstufe + " " + state.kurse[state.aktiverKurs].fach + " " + state.kurse[state.aktiverKurs].kursnummer;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name === "Klausurschiene") {
            this.setState((state) => {
                state.kurse[state.aktiverKurs].aktiv = true;
                state.kurse[state.aktiverKurs].klausurschiene = event.target.value;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name === "Kurslehrer") {
            this.setState((state) => {
                state.kurse[state.aktiverKurs].aktiv = true;
                state.kurse[state.aktiverKurs].kurslehrer = event.target.value;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name === "Schuljahr") {
            this.setState((state) => {
                state.kurse[state.aktiverKurs].aktiv = true;
                state.kurse[state.aktiverKurs].schuljahr = event.target.value;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name === "Quartalseinstellungen") {
            this.setState((state) => {
                state.kurse[state.aktiverKurs].aktiv = true;
                state.kurse[state.aktiverKurs].voreinstellung = "Benutzerdefiniert";
                state.kurse[state.aktiverKurs].quartalseinstellungen = event.target.checked;
                if (!event.target.checked) {
                    let x = state.kurse[state.aktiverKurs].klausurnoteneinfluss[0];
                    state.kurse[state.aktiverKurs].klausurnoteneinfluss = [x, x];
                    x = state.kurse[state.aktiverKurs].testnoteneinfluss[0];
                    state.kurse[state.aktiverKurs].testnoteneinfluss = [x, x, x, x];
                    x = state.kurse[state.aktiverKurs].stricheGrenze[0];
                    state.kurse[state.aktiverKurs].stricheGrenze = [x, x, x, x];
                    x = state.kurse[state.aktiverKurs].minusStricheDefizit[0];
                    state.kurse[state.aktiverKurs].minusStricheDefizit = [x, x, x, x];
                    x = state.kurse[state.aktiverKurs].freidefizite[0];
                    state.kurse[state.aktiverKurs].freidefizite = [x, x, x, x];
                }
                return ({
                    voreinstellungNeu: "Benutzerdefiniert",
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 12) === "Klausurdauer") {
            this.setState((state) => {
                let halbjahr = parseInt(event.target.name.substring(13, 14), 10);
                let index = parseInt(event.target.name.substring(14), 10);
                state.kurse[state.aktiverKurs].aktiv = true;
                state.kurse[state.aktiverKurs].voreinstellung = "Benutzerdefiniert";
                state.kurse[state.aktiverKurs].klausurdauer[halbjahr - 1][index - 1] = event.target.value;
                let anzahl = 0;
                if (state.kurse[state.aktiverKurs].klausurdauer[halbjahr - 1][0] !== "0") {
                    anzahl = anzahl + 1;
                }
                if (state.kurse[state.aktiverKurs].klausurdauer[halbjahr - 1][1] !== "0") {
                    anzahl = anzahl + 1;
                }
                if (state.kurse[state.aktiverKurs].klausurdauer[halbjahr - 1][2] !== "0") {
                    anzahl = anzahl + 1;
                }
                state.kurse[state.aktiverKurs].klausuren[halbjahr - 1] = anzahl;
                return ({
                    voreinstellungNeu: "Benutzerdefiniert",
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 5) === "Tests") {
            this.setState((state) => {
                let index = parseInt(event.target.name.substring(6), 10);
                state.kurse[state.aktiverKurs].aktiv = true;
                let x = parseInt(event.target.value, 10);
                if (Number.isNaN(x)) {
                    x = 0;
                }
                state.kurse[state.aktiverKurs].tests[index - 1] = Math.min(2, x);
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 8) === "Referate") {
            this.setState((state) => {
                let index = parseInt(event.target.name.substring(9), 10);
                state.kurse[state.aktiverKurs].aktiv = true;
                let x = parseInt(event.target.value, 10);
                if (Number.isNaN(x)) {
                    x = 0;
                }
                state.kurse[state.aktiverKurs].referate[index - 1] = Math.min(2, x);
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name === "1Halbjahresnoteneinfluss") {
            this.setState((state) => {
                state.kurse[state.aktiverKurs].aktiv = true;
                state.kurse[state.aktiverKurs].voreinstellung = "Benutzerdefiniert";
                let x = parseFloat(event.target.value);
                let y;
                if (Number.isNaN(x)) {
                    y = "0.0";
                }
                else {
                    y = x.toString();
                }
                state.kurse[state.aktiverKurs].halbjahresnoteneinfluss = y;
                return ({
                    voreinstellungNeu: "Benutzerdefiniert",
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 21) === "1Klausurnoteneinfluss") {
            this.setState((state) => {
                let index = parseInt(event.target.name.substring(22), 10);
                state.kurse[state.aktiverKurs].aktiv = true;
                state.kurse[state.aktiverKurs].voreinstellung = "Benutzerdefiniert";
                let x = parseFloat(event.target.value);
                let y;
                if (Number.isNaN(x)) {
                    y = "0.0";
                }
                else {
                    y = x.toString();
                }
                if (state.kurse[state.aktiverKurs].quartalseinstellungen) {
                    state.kurse[state.aktiverKurs].klausurnoteneinfluss[index - 1] = y;
                }
                else {
                    state.kurse[state.aktiverKurs].klausurnoteneinfluss = [y, y];
                }
                return ({
                    voreinstellungNeu: "Benutzerdefiniert",
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 18) === "1Testnoteneinfluss") {
            this.setState((state) => {
                let index = parseInt(event.target.name.substring(19), 10);
                state.kurse[state.aktiverKurs].aktiv = true;
                state.kurse[state.aktiverKurs].voreinstellung = "Benutzerdefiniert";
                let x = parseFloat(event.target.value);
                let y;
                if (Number.isNaN(x)) {
                    y = "0.0";
                }
                else {
                    y = x.toString();
                }
                if (state.kurse[state.aktiverKurs].quartalseinstellungen) {
                    state.kurse[state.aktiverKurs].testnoteneinfluss[index - 1] = y;
                }
                else {
                    state.kurse[state.aktiverKurs].testnoteneinfluss = [y, y, y, y];
                }
                return ({
                    voreinstellungNeu: "Benutzerdefiniert",
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name === "Fakenoten") {
            this.setState((state) => {
                state.kurse[state.aktiverKurs].aktiv = true;
                state.kurse[state.aktiverKurs].voreinstellung = "Benutzerdefiniert";
                state.kurse[state.aktiverKurs].fakeNoten = event.target.checked;
                return ({
                    voreinstellungNeu: "Benutzerdefiniert",
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 14) === "1Strichegrenze") {
            this.setState((state) => {
                let index = parseInt(event.target.name.substring(15), 10);
                state.kurse[state.aktiverKurs].aktiv = true;
                state.kurse[state.aktiverKurs].voreinstellung = "Benutzerdefiniert";
                let x = parseFloat(event.target.value);
                let y;
                if (Number.isNaN(x)) {
                    y = "0.0";
                }
                else {
                    y = x.toString();
                }
                if (state.kurse[state.aktiverKurs].quartalseinstellungen) {
                    state.kurse[state.aktiverKurs].stricheGrenze[index - 1] = y;
                }
                else {
                    state.kurse[state.aktiverKurs].stricheGrenze = [y, y, y, y];
                }
                return ({
                    voreinstellungNeu: "Benutzerdefiniert",
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 19) === "Minusstrichedefizit") {
            this.setState((state) => {
                let index = parseInt(event.target.name.substring(20), 10);
                state.kurse[state.aktiverKurs].aktiv = true;
                state.kurse[state.aktiverKurs].voreinstellung = "Benutzerdefiniert";
                let x = parseInt(event.target.value, 10);
                if (Number.isNaN(x)) {
                    x = 0;
                }
                if (state.kurse[state.aktiverKurs].quartalseinstellungen) {
                    state.kurse[state.aktiverKurs].minusStricheDefizit[index - 1] = x;
                }
                else {
                    state.kurse[state.aktiverKurs].minusStricheDefizit = [x, x, x, x];
                }
                return ({
                    voreinstellungNeu: "Benutzerdefiniert",
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 12) === "Freidefizite") {
            this.setState((state) => {
                let index = parseInt(event.target.name.substring(13), 10);
                state.kurse[state.aktiverKurs].aktiv = true;
                state.kurse[state.aktiverKurs].voreinstellung = "Benutzerdefiniert";
                let x = parseInt(event.target.value, 10);
                if (Number.isNaN(x)) {
                    x = 0;
                }
                if (state.kurse[state.aktiverKurs].quartalseinstellungen) {
                    state.kurse[state.aktiverKurs].freidefizite[index - 1] = x;
                }
                else {
                    state.kurse[state.aktiverKurs].freidefizite = [x, x, x, x];
                }
                return ({
                    voreinstellungNeu: "Benutzerdefiniert",
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name === "Schüler Wahl 1") {
            this.setState(() => {
                return ({
                    positionSchueler1: parseInt(event.target.value, 10)
                });
            });
        }
        else if (event.target.name === "Schüler Wahl 2") {
            this.setState(() => {
                return ({
                    positionSchueler2: parseInt(event.target.value, 10)
                });
            });
        }
        else if (event.target.name.substring(0, 8) === "Nachname") {
            this.setState((state) => {
                let index = parseInt(event.target.name.substring(9), 10);
                state.kurse[state.aktiverKurs].aktiv = true;
                state.kurse[state.aktiverKurs].schueler[index].nachname = event.target.value;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 7) === "Vorname") {
            this.setState((state) => {
                let index = parseInt(event.target.name.substring(8), 10);
                state.kurse[state.aktiverKurs].aktiv = true;
                state.kurse[state.aktiverKurs].schueler[index].vorname = event.target.value;
                state.kurse[state.aktiverKurs].schueler[index].rufname = event.target.value;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 7) === "Rufname") {
            this.setState((state) => {
                let index = parseInt(event.target.name.substring(8), 10);
                state.kurse[state.aktiverKurs].aktiv = true;
                state.kurse[state.aktiverKurs].schueler[index].rufname = event.target.value;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 5) === "Aktiv") {
            this.setState((state) => {
                let quartal = parseInt(event.target.name.substring(6, 7), 10);
                let index = parseInt(event.target.name.substring(7), 10);
                state.kurse[state.aktiverKurs].aktiv = true;
                state.kurse[state.aktiverKurs].schueler[index].aktiv[quartal - 1] = event.target.checked;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 9) === "Kursthema") {
            this.setState((state) => {
                let halbjahr = parseInt(event.target.name.substring(10), 10);
                state.kurse[state.aktiverKurs].kursthema[halbjahr - 1] = event.target.value;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 10) === "Lehrmittel") {
            this.setState((state) => {
                let halbjahr = parseInt(event.target.name.substring(11), 10);
                state.kurse[state.aktiverKurs].lehrmittel[halbjahr - 1] = event.target.value;
                state.kurse[state.aktiverKurs].voreinstellung = "Benutzerdefiniert";
                return ({
                    voreinstellungNeu: "Benutzerdefiniert",
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 16) === "Aufgabenstellung") {
            this.setState((state) => {
                let halbjahr = parseInt(event.target.name.substring(17, 18), 10);
                let index = parseInt(event.target.name.substring(18), 10);
                state.kurse[state.aktiverKurs].aufgabenstellung[halbjahr - 1][index - 1] = event.target.value;
                state.kurse[state.aktiverKurs].voreinstellung = "Benutzerdefiniert";
                return ({
                    voreinstellungNeu: "Benutzerdefiniert",
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 14) === "1Datum Eingabe") {
            this.setState((state) => {
                let index = parseInt(event.target.name.substring(15), 10);
                state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][index].datum = event.target.value;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 21) === "1Stundenthema Eingabe") {
            this.setState((state) => {
                let index = parseInt(event.target.name.substring(22), 10);
                state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][index].stundenthema = event.target.value;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 22) === "1Stundeninhalt Eingabe") {
            this.setState((state) => {
                let index = parseInt(event.target.name.substring(23), 10);
                state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][index].stundeninhalt = event.target.value;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 20) === "1Hausaufgabe Eingabe") {
            this.setState((state) => {
                let index = parseInt(event.target.name.substring(21), 10);
                state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][index].hausaufgabe = event.target.value;
                return ({
                    kurse: state.kurse
                });
            });
        }
        else if (event.target.name.substring(0, 18) === "Klausurbemerkungen") {
            this.setState((state) => {
                let halbjahr = parseInt(event.target.name.substring(19, 20), 10);
                let index = parseInt(event.target.name.substring(20), 10);
                state.kurse[state.aktiverKurs].klausurbemerkungen[halbjahr - 1][index - 1] = event.target.value;
                return ({
                    kurse: state.kurse
                });
            });
        }
        this.updateDaten();
    }

    handleSubmit(event) {
        if (event.target.name === "Passwort Abschicken Speichern") {
            this.setState((state) => {
                if (state.eingabewert.length > 0 && state.eingabewert === state.passwort.substring(1, state.passwort.length - 1)) {
                    localStorage.setItem("speicher", JSON.stringify({ kurse: state.kurse }));
                }
                else {
                    beep.play();
                    alert("Passwort falsch: Speichern fehlgeschlagen!");
                }
                return ({
                    aktivesMenue: "Hauptmenü"
                });
            });
        }
        else if (event.target.name === "Passwort Abschicken Speichern Datei") {
            this.setState((state) => {
                if (state.eingabewert.length > 0 && state.eingabewert === state.passwort.substring(1, state.passwort.length - 1)) {
                    return ({
                        aktivesMenue: "SpeichernDatei"
                    });
                }
                else {
                    beep.play();
                    alert("Passwort falsch: Speichern fehlgeschlagen!");
                }
                return ({
                    aktivesMenue: "Hauptmenü"
                });
            });
        }
        else if (event.target.name === "Passwort Abschicken Speichern Inhalte") {
            this.setState((state) => {
                if (state.eingabewert.length > 0 && state.eingabewert === state.passwort.substring(1, state.passwort.length - 1)) {
                    return ({
                        aktivesMenue: "SpeichernInhalte"
                    });
                }
                else {
                    beep.play();
                    alert("Passwort falsch: Speichern fehlgeschlagen!");
                }
                return ({
                    aktivesMenue: "Hauptmenü"
                });
            });
        }
        else if (event.target.name === "Passwort Abschicken Ändern") {
            this.setState((state) => {
                if (state.eingabewert.length > 0 && state.eingabewert2.length > 0 && state.eingabewert3.length > 0) {
                    if (state.eingabewert === state.passwort.substring(1, state.passwort.length - 1) || state.eingabewert === passwort) {
                        if (state.eingabewert2 === state.eingabewert3) {
                            if (state.eingabewert2 !== passwort) {
                                state.passwort = String.fromCharCode(Math.floor(97 + 26 * Math.random())) + state.eingabewert2 + Math.floor(10 * Math.random()).toString();
                                localStorage.setItem("passwort", JSON.stringify({ passwort: state.passwort }));
                                alert("Passwort wurde erfolgreich geändert.");
                            }
                            else {
                                beep.play();
                                alert("Neues Passwort darf nicht voreingestelltes Passwort sein: Passwort wurde nicht geändert!");
                            }
                        }
                        else {
                            beep.play();
                            alert("Neue Passwörter nicht identisch: Passwort wurde nicht geändert!");
                        }
                    }
                    else {
                        beep.play();
                        alert("Altes Passwort falsch: Passwort wurde nicht geändert!");
                    }
                }
                else {
                    beep.play();
                    alert("Es wurde nichts eingegeben: Passwort wurde nicht geändert!");
                }
                return ({
                    aktivesMenue: "Hauptmenü",
                    passwort: state.passwort
                });
            });
        }
        else if (event.target.name === "Passwort Abschicken Sitzplan") {
            this.setState((state) => {
                if (state.eingabewert.length > 0 && state.eingabewert === state.passwort.substring(1, state.passwort.length - 1)) {
                    state.kurse[state.aktiverKurs].nameSitzordnung = JSON.parse(JSON.stringify(state.kurse[state.kurse.length - 1].sitzordnungen[0].nameSitzordnung));
                    return ({
                        aktivesMenue: "Sitzplan",
                        sitzplaetzeAktivieren: false,
                        sitzplanModus: "Schülerzuweisungen",
                        schuelerAktivieren: false,
                        indexSitzordnungen: 0,
                        indexSchueler: 0,
                        kurse: state.kurse
                    });
                }
                else {
                    beep.play();
                    alert("Passwort falsch!");
                    return ({
                        aktivesMenue: "Kursplan"
                    });
                }
            });
        }
        else if (event.target.name === "Passwort Abschicken Kursplan") {
            this.setState((state) => {
                if (state.eingabewert.length > 0 && state.eingabewert === state.passwort.substring(1, state.passwort.length - 1)) {
                    state.kurse[state.aktiverKurs].nameSitzordnung = "Leer";
                    return ({
                        aktivesMenue: "Kursplan",
                        kurse: state.kurse
                    });
                }
                else {
                    beep.play();
                    alert("Passwort falsch!");
                    return ({
                        aktivesMenue: "Sitzplan"
                    });
                }
            });
        }
        else if (event.target.name === "Datum Abschicken") {
            this.setState((state) => {
                if (state.eingabewert === "000") {
                    if (state.kurse[state.aktiverKurs].unterricht[state.quartal - 1].length > 1) {
                        state.kurse[state.aktiverKurs].unterricht[state.quartal - 1].splice(state.index1, 1);
                        state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                            schueler.stricheMuendlich[state.quartal - 1].splice(state.index1, 1);
                            schueler.stricheMinitest[state.quartal - 1].splice(state.index1, 1);
                            schueler.stricheMinitestErreichbar[state.quartal - 1].splice(state.index1, 1);
                            schueler.defizite[state.quartal - 1].splice(state.index1, 1);
                            schueler.stricheGesamt[state.quartal - 1].splice(state.index1, 1);
                            schueler.anwesenheit[state.quartal - 1].splice(state.index1, 1);
                        });
                        return ({
                            aktivesMenue: "Kursplan",
                            indexUnterricht: state.kurse[state.aktiverKurs].unterricht[state.quartal - 1].length - 1,
                            kurse: state.kurse
                        });
                    }
                    else {
                        state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][0] = JSON.parse(JSON.stringify(initialUnterricht));
                        state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                            schueler.stricheMuendlich[state.quartal - 1][0] = JSON.parse(JSON.stringify(initialSchueler.stricheMuendlich[state.quartal - 1][0]));
                            schueler.stricheMinitest[state.quartal - 1][0] = JSON.parse(JSON.stringify(initialSchueler.stricheMinitest[state.quartal - 1][0]));
                            schueler.stricheMinitestErreichbar[state.quartal - 1][0] = JSON.parse(JSON.stringify(initialSchueler.stricheMinitestErreichbar[state.quartal - 1][0]));
                            schueler.defizite[state.quartal - 1][0] = JSON.parse(JSON.stringify(initialSchueler.defizite[state.quartal - 1][0]));
                            schueler.stricheGesamt[state.quartal - 1][0] = JSON.parse(JSON.stringify(initialSchueler.stricheGesamt[state.quartal - 1][0]));
                            schueler.anwesenheit[state.quartal - 1][0] = JSON.parse(JSON.stringify(initialSchueler.anwesenheit[state.quartal - 1][0]));
                        });
                        return ({
                            aktivesMenue: "Kursplan",
                            indexUnterricht: 0,
                            kurse: state.kurse
                        });
                    }
                }
                else if (state.eingabewert.substring(0, 3) === "000" && state.eingabewert.length > 3) {
                    let position1 = state.index1;
                    let position2 = parseInt(state.eingabewert.substring(3), 10) - 1;
                    if (Number.isNaN(position2)) {
                        position2 = -1;
                    }
                    else {
                        if (state.kurse[state.aktiverKurs].unterricht[state.quartal - 1].length < 2 || position2 < 0 || position2 > state.kurse[state.aktiverKurs].unterricht[state.quartal - 1].length - 1) {
                            position2 = -1;
                        }
                    }
                    if (position2 > -1) {
                        if (position2 > position1) {
                            position2 = position2 + 1;
                        }
                        let unterricht = JSON.parse(JSON.stringify(state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][position1]));
                        state.kurse[state.aktiverKurs].unterricht[state.quartal - 1].splice(position2, 0, unterricht);
                        state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                            let stricheMuendlich = JSON.parse(JSON.stringify(schueler.stricheMuendlich[state.quartal - 1][position1]));
                            schueler.stricheMuendlich[state.quartal - 1].splice(position2, 0, stricheMuendlich);
                            let stricheMinitest = JSON.parse(JSON.stringify(schueler.stricheMinitest[state.quartal - 1][position1]));
                            schueler.stricheMinitest[state.quartal - 1].splice(position2, 0, stricheMinitest);
                            let stricheMinitestErreichbar = JSON.parse(JSON.stringify(schueler.stricheMinitestErreichbar[state.quartal - 1][position1]));
                            schueler.stricheMinitestErreichbar[state.quartal - 1].splice(position2, 0, stricheMinitestErreichbar);
                            let defizite = JSON.parse(JSON.stringify(schueler.defizite[state.quartal - 1][position1]));
                            schueler.defizite[state.quartal - 1].splice(position2, 0, defizite);
                            let stricheGesamt = JSON.parse(JSON.stringify(schueler.stricheGesamt[state.quartal - 1][position1]));
                            schueler.stricheGesamt[state.quartal - 1].splice(position2, 0, stricheGesamt);
                            let anwesenheit = JSON.parse(JSON.stringify(schueler.anwesenheit[state.quartal - 1][position1]));
                            schueler.anwesenheit[state.quartal - 1].splice(position2, 0, anwesenheit);
                        });
                        if (position2 > position1) {
                            position2 = position2 - 1;
                            state.kurse[state.aktiverKurs].unterricht[state.quartal - 1].splice(position1, 1);
                            state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                                schueler.stricheMuendlich[state.quartal - 1].splice(position1, 1);
                                schueler.stricheMinitest[state.quartal - 1].splice(position1, 1);
                                schueler.stricheMinitestErreichbar[state.quartal - 1].splice(position1, 1);
                                schueler.defizite[state.quartal - 1].splice(position1, 1);
                                schueler.stricheGesamt[state.quartal - 1].splice(position1, 1);
                                schueler.anwesenheit[state.quartal - 1].splice(position1, 1);
                            });
                        }
                        else {
                            state.kurse[state.aktiverKurs].unterricht[state.quartal - 1].splice(position1 + 1, 1);
                            state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                                schueler.stricheMuendlich[state.quartal - 1].splice(position1 + 1, 1);
                                schueler.stricheMinitest[state.quartal - 1].splice(position1 + 1, 1);
                                schueler.stricheMinitestErreichbar[state.quartal - 1].splice(position1 + 1, 1);
                                schueler.defizite[state.quartal - 1].splice(position1 + 1, 1);
                                schueler.stricheGesamt[state.quartal - 1].splice(position1 + 1, 1);
                                schueler.anwesenheit[state.quartal - 1].splice(position1 + 1, 1);
                            });
                        }
                    }
                    else {
                        position2 = state.index1;
                    }
                    return ({
                        aktivesMenue: "Kursplan",
                        indexUnterricht: position2,
                        index1: position2,
                        kurse: state.kurse
                    });
                }
                else {
                    if (state.index1 === state.kurse[state.aktiverKurs].unterricht[state.quartal - 1].length - 1 && state.eingabewert !== "") {
                        state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][state.index1].datum = state.eingabewert;
                        state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][state.index1].stundenthema = state.eingabewert2;
                        state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][state.index1].stundeninhalt = state.eingabewert3;
                        state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][state.index1].hausaufgabe = state.eingabewert4;
                        state.kurse[state.aktiverKurs].unterricht[state.quartal - 1].push(JSON.parse(JSON.stringify(initialUnterricht)));
                        state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                            schueler.stricheMuendlich[state.quartal - 1].push(JSON.parse(JSON.stringify(initialSchueler.stricheMuendlich[state.quartal - 1][0])));
                            schueler.stricheMinitest[state.quartal - 1].push(JSON.parse(JSON.stringify(initialSchueler.stricheMinitest[state.quartal - 1][0])));
                            schueler.stricheMinitestErreichbar[state.quartal - 1].push(JSON.parse(JSON.stringify(initialSchueler.stricheMinitestErreichbar[state.quartal - 1][0])));
                            schueler.defizite[state.quartal - 1].push(JSON.parse(JSON.stringify(initialSchueler.defizite[state.quartal - 1][0])));
                            schueler.stricheGesamt[state.quartal - 1].push(JSON.parse(JSON.stringify(initialSchueler.stricheGesamt[state.quartal - 1][0])));
                            schueler.anwesenheit[state.quartal - 1].push(JSON.parse(JSON.stringify(initialSchueler.anwesenheit[state.quartal - 1][0])));
                        });
                        if (state.index1 === 0) {
                            let stricheHeute = 0;
                            for (let i = 0; i < state.kurse[state.aktiverKurs].schueler.length - 1; i++) {
                                stricheHeute = stricheHeute + state.kurse[state.aktiverKurs].schueler[i].stricheMuendlich[state.quartal - 1][0];
                            }
                            if (stricheHeute === 0) {
                                state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                                    schueler.stricheMuendlich[state.quartal - 1][state.index1] = state.kurse[state.aktiverKurs].freidefizite[state.quartal - 1] * state.kurse[state.aktiverKurs].minusStricheDefizit[state.quartal - 1];
                                });
                            }
                        }
                        return ({
                            aktivesMenue: "Kursplan",
                            indexUnterricht: state.index1,
                            kurse: state.kurse
                        });
                    }
                    else {
                        state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][state.index1].datum = state.eingabewert;
                        state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][state.index1].stundenthema = state.eingabewert2;
                        state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][state.index1].stundeninhalt = state.eingabewert3;
                        state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][state.index1].hausaufgabe = state.eingabewert4;
                        return ({
                            aktivesMenue: "Kursplan",
                            indexUnterricht: state.index1,
                            kurse: state.kurse
                        });
                    }
                }
            });
        }
        else if (event.target.name === "Bemerkungen Abschicken") {
            this.setState((state) => {
                state.kurse[state.aktiverKurs].schueler[state.index2].bemerkungen[state.index1] = state.eingabewert;
                return ({
                    aktivesMenue: "Kursplan",
                    kurse: state.kurse
                });
            });
        }
        this.updateDaten();
    }

    updateSitzplatzlos(raum) {
        this.setState((state) => {
            let lehrer;
            let indexSchueler;
            if (raum === "Raum 1") {
                state.kurse[state.aktiverKurs].schuelerSitzplatzlos = [];
                for (let i = 0; i < state.kurse[state.aktiverKurs].schueler.length - 1; i++) {
                    if (!state.kurse[state.aktiverKurs].schueler[i].sitzplatz) {
                        state.kurse[state.aktiverKurs].schuelerSitzplatzlos.push(i);
                    }
                }
                lehrer = false;
                for (let i = 0; i < state.kurse[state.aktiverKurs].sitzplaetze.length; i++) {
                    if (state.kurse[state.aktiverKurs].sitzplaetze[i].schueler === 99) {
                        lehrer = true;
                    }
                }
                if (state.indexSchueler === -1) {
                    indexSchueler = -1;
                }
                else {
                    if (!lehrer) {
                        indexSchueler = 99;
                    }
                    else if (state.kurse[state.aktiverKurs].schuelerSitzplatzlos.length === 0) {
                        indexSchueler = -1;
                    }
                    else {
                        indexSchueler = state.kurse[state.aktiverKurs].schuelerSitzplatzlos[0];
                    }
                }
            }
            else if (raum === "Raum 2") {
                state.kurse[state.aktiverKurs].schuelerSitzplatzlos2 = [];
                for (let i = 0; i < state.kurse[state.aktiverKurs].schueler.length - 1; i++) {
                    if (!state.kurse[state.aktiverKurs].schueler[i].sitzplatz2) {
                        state.kurse[state.aktiverKurs].schuelerSitzplatzlos2.push(i);
                    }
                }
                lehrer = false;
                for (let i = 0; i < state.kurse[state.aktiverKurs].sitzplaetze2.length; i++) {
                    if (state.kurse[state.aktiverKurs].sitzplaetze2[i].schueler === 99) {
                        lehrer = true;
                    }
                }
                if (state.indexSchueler === -1) {
                    indexSchueler = -1;
                }
                else {
                    if (!lehrer) {
                        indexSchueler = 99;
                    }
                    else if (state.kurse[state.aktiverKurs].schuelerSitzplatzlos2.length === 0) {
                        indexSchueler = -1;
                    }
                    else {
                        indexSchueler = state.kurse[state.aktiverKurs].schuelerSitzplatzlos2[0];
                    }
                }
            }
            return ({
                indexSchueler: indexSchueler,
                kurse: state.kurse
            });
        });
    }

    sominotenberechnung(agNoten, fakeNoten, stricheGrenze, testnoteneinfluss, stundenStriche, stricheGewertet, test1, test2, test3, test4) {
        let note = "";
        let maxstriche;
        let noteMuendlich;
        if (stundenStriche > 0 || stricheGewertet > 0) {
            stundenStriche = Math.max(1, stundenStriche);
            if (agNoten) {
                maxstriche = stundenStriche * stricheGrenze;
                if (stricheGewertet < maxstriche) {
                    note = "E3";
                }
                else {
                    if (stricheGewertet < 2 * maxstriche) {
                        note = "E2";
                    }
                    else {
                        note = "E1";
                    }
                }
            }
            else {
                noteMuendlich = "";
                if (fakeNoten) {
                    maxstriche = stundenStriche * stricheGrenze;
                    if (stricheGewertet < 1) {
                        noteMuendlich = "6";
                    }
                    else {
                        if (stricheGewertet < 1 / 3 * maxstriche) {
                            noteMuendlich = "2-";
                        }
                        else {
                            if (stricheGewertet < 2 / 3 * maxstriche) {
                                noteMuendlich = "2";
                            }
                            else {
                                if (stricheGewertet < 1 * maxstriche) {
                                    noteMuendlich = "2+";
                                }
                                else {
                                    if (stricheGewertet < 4 / 3 * maxstriche) {
                                        noteMuendlich = "1-";
                                    }
                                    else {
                                        if (stricheGewertet < 5 / 3 * maxstriche) {
                                            noteMuendlich = "1";
                                        }
                                        else {
                                            noteMuendlich = "1+";
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else {
                    maxstriche = stundenStriche * stricheGrenze / 0.63;
                    if (stricheGewertet < 1) {
                        noteMuendlich = "6";
                    }
                    else {
                        if (stricheGewertet < 0.07 * maxstriche) {
                            noteMuendlich = "5-";
                        }
                        else {
                            if (stricheGewertet < 0.14 * maxstriche) {
                                noteMuendlich = "5";
                            }
                            else {
                                if (stricheGewertet < 0.21 * maxstriche) {
                                    noteMuendlich = "5+";
                                }
                                else {
                                    if (stricheGewertet < 0.28 * maxstriche) {
                                        noteMuendlich = "4-";
                                    }
                                    else {
                                        if (stricheGewertet < 0.35 * maxstriche) {
                                            noteMuendlich = "4";
                                        }
                                        else {
                                            if (stricheGewertet < 0.42 * maxstriche) {
                                                noteMuendlich = "4+";
                                            }
                                            else {
                                                if (stricheGewertet < 0.49 * maxstriche) {
                                                    noteMuendlich = "3-";
                                                }
                                                else {
                                                    if (stricheGewertet < 0.56 * maxstriche) {
                                                        noteMuendlich = "3";
                                                    }
                                                    else {
                                                        if (stricheGewertet < 0.63 * maxstriche) {
                                                            noteMuendlich = "3+";
                                                        }
                                                        else {
                                                            if (stricheGewertet < 0.70 * maxstriche) {
                                                                noteMuendlich = "2-";
                                                            }
                                                            else {
                                                                if (stricheGewertet < 0.77 * maxstriche) {
                                                                    noteMuendlich = "2";
                                                                }
                                                                else {
                                                                    if (stricheGewertet < 0.84 * maxstriche) {
                                                                        noteMuendlich = "2+";
                                                                    }
                                                                    else {
                                                                        if (stricheGewertet < 0.91 * maxstriche) {
                                                                            noteMuendlich = "1-";
                                                                        }
                                                                        else {
                                                                            if (stricheGewertet < 0.98 * maxstriche) {
                                                                                noteMuendlich = "1";
                                                                            }
                                                                            else {
                                                                                noteMuendlich = "1+";
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                let muendlich = notenpunkte.indexOf(noteMuendlich);
                let anzahl = 0;
                let note1;
                let note2;
                let note3;
                let note4;
                if (test1 === "" || test1 === "NT") {
                    note1 = 0;
                }
                else {
                    note1 = notenpunkte.indexOf(test1);
                    anzahl = anzahl + 1;
                }
                if (test2 === "" || test2 === "NT") {
                    note2 = 0;
                }
                else {
                    note2 = notenpunkte.indexOf(test2);
                    anzahl = anzahl + 1;
                }
                if (test3 === "" || test3 === "NT") {
                    note3 = 0;
                }
                else {
                    note3 = notenpunkte.indexOf(test3);
                    anzahl = anzahl + 1;
                }
                if (test4 === "" || test4 === "NT") {
                    note4 = 0;
                }
                else {
                    note4 = notenpunkte.indexOf(test4);
                    anzahl = anzahl + 1;
                }
                let punkte = Math.round((muendlich + testnoteneinfluss * (note1 + note2 + note3 + note4)) / (1 + anzahl * testnoteneinfluss));
                note = notenpunkte[punkte];
            }
        }
        return (
            note
        );
    }

    updateDaten() {
        this.setState((state) => {
            let minitestQuoteAddiertKurs = 0;
            let minitestQuoteErreichbarKurs = 0;
            for (let i = 0; i < state.kurse[state.aktiverKurs].unterricht[state.quartal - 1].length; i++) {
                minitestQuoteAddiertKurs = 0;
                minitestQuoteErreichbarKurs = 0;
                state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                    minitestQuoteAddiertKurs = minitestQuoteAddiertKurs + schueler.stricheMinitest[state.quartal - 1][i];
                    minitestQuoteErreichbarKurs = minitestQuoteErreichbarKurs + schueler.stricheMinitestErreichbar[state.quartal - 1][i];
                });
                state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][i].minitestQuote = Math.round(100 * minitestQuoteAddiertKurs / Math.max(1, minitestQuoteErreichbarKurs));
            }
            let stundenStriche = 0;
            let stundenIst = 0;
            let stundenSoll = 0;
            for (let i = 0; i < state.kurse[state.aktiverKurs].unterricht[state.quartal - 1].length; i++) {
                stundenStriche = stundenStriche + state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][i].dauerStriche;
                stundenIst = stundenIst + state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][i].dauerIst;
                stundenSoll = stundenSoll + state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][i].dauerSoll;
            }
            state.kurse[state.aktiverKurs].stundenStriche[state.quartal - 1] = stundenStriche;
            state.kurse[state.aktiverKurs].stundenIst[state.quartal - 1] = stundenIst;
            state.kurse[state.aktiverKurs].stundenSoll[state.quartal - 1] = stundenSoll;
            minitestQuoteAddiertKurs = 0;
            minitestQuoteErreichbarKurs = 0;
            state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                for (let i = 0; i < schueler.stricheGesamt[state.quartal - 1].length; i++) {
                    minitestQuoteAddiertKurs = minitestQuoteAddiertKurs + schueler.stricheMinitest[state.quartal - 1][i];
                    minitestQuoteErreichbarKurs = minitestQuoteErreichbarKurs + schueler.stricheMinitestErreichbar[state.quartal - 1][i];
                }
            });
            state.kurse[state.aktiverKurs].minitestQuote[state.quartal - 1] = Math.round(100 * minitestQuoteAddiertKurs / Math.max(1, minitestQuoteErreichbarKurs));
            let fehlstundenG;
            let fehlstundenU;
            let gewerteteStunden;
            state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                fehlstundenG = 0;
                fehlstundenU = 0;
                gewerteteStunden = 0;
                for (let i = 0; i < schueler.anwesenheit[state.quartal - 1].length; i++) {
                    if (schueler.anwesenheit[state.quartal - 1][i] === "") {
                        gewerteteStunden = gewerteteStunden + state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][i].dauerStriche;
                    }
                    else if (schueler.anwesenheit[state.quartal - 1][i] === "u") {
                        fehlstundenG = fehlstundenG + 1;
                        fehlstundenU = fehlstundenU + 1;
                        gewerteteStunden = gewerteteStunden + state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][i].dauerStriche;
                    }
                    else if (schueler.anwesenheit[state.quartal - 1][i] === "uu") {
                        fehlstundenG = fehlstundenG + 2;
                        fehlstundenU = fehlstundenU + 2;
                        gewerteteStunden = gewerteteStunden + state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][i].dauerStriche;
                    }
                    else if (schueler.anwesenheit[state.quartal - 1][i] === "e") {
                        fehlstundenG = fehlstundenG + 1;
                        gewerteteStunden = gewerteteStunden + Math.max(0, state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][i].dauerStriche - 1);
                    }
                    else if (schueler.anwesenheit[state.quartal - 1][i] === "ee") {
                        fehlstundenG = fehlstundenG + 2;
                    }
                    else if (schueler.anwesenheit[state.quartal - 1][i] === "s") {
                        gewerteteStunden = gewerteteStunden + Math.max(0, state.kurse[state.aktiverKurs].unterricht[state.quartal - 1][i].dauerStriche - 1);
                    }
                }
                schueler.fehlstundenG[state.quartal - 1] = fehlstundenG.toString();
                if (schueler.fehlstundenG[state.quartal - 1] === "0") {
                    schueler.fehlstundenG[state.quartal - 1] = "";
                }
                schueler.fehlstundenU[state.quartal - 1] = fehlstundenU.toString();
                if (schueler.fehlstundenU[state.quartal - 1] === "0") {
                    schueler.fehlstundenU[state.quartal - 1] = "";
                }
                schueler.gewerteteStunden[state.quartal - 1] = gewerteteStunden;
                schueler.fehlstundenGHJ[0] = (parseInt("0" + schueler.fehlstundenG[0], 10) + parseInt("0" + schueler.fehlstundenG[1], 10)).toString();
                if (schueler.fehlstundenGHJ[0] === "0") {
                    schueler.fehlstundenGHJ[0] = "";
                }
                schueler.fehlstundenUHJ[0] = (parseInt("0" + schueler.fehlstundenU[0], 10) + parseInt("0" + schueler.fehlstundenU[1], 10)).toString();
                if (schueler.fehlstundenUHJ[0] === "0") {
                    schueler.fehlstundenUHJ[0] = "";
                }
                schueler.fehlstundenGHJ[1] = (parseInt("0" + schueler.fehlstundenG[2], 10) + parseInt("0" + schueler.fehlstundenG[3], 10)).toString();
                if (schueler.fehlstundenGHJ[1] === "0") {
                    schueler.fehlstundenGHJ[1] = "";
                }
                schueler.fehlstundenUHJ[1] = (parseInt("0" + schueler.fehlstundenU[2], 10) + parseInt("0" + schueler.fehlstundenU[3], 10)).toString();
                if (schueler.fehlstundenUHJ[1] === "0") {
                    schueler.fehlstundenUHJ[1] = "";
                }
            });
            let minitestQuoteAddiert;
            let minitestQuoteErreichbar;
            let stricheAddiert;
            let stricheGesamt;
            state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                minitestQuoteAddiert = 0;
                minitestQuoteErreichbar = 0;
                stricheAddiert = 0;
                for (let i = 0; i < schueler.stricheGesamt[state.quartal - 1].length; i++) {
                    minitestQuoteAddiert = minitestQuoteAddiert + schueler.stricheMinitest[state.quartal - 1][i];
                    minitestQuoteErreichbar = minitestQuoteErreichbar + schueler.stricheMinitestErreichbar[state.quartal - 1][i];
                    stricheGesamt = 0;
                    stricheGesamt = stricheGesamt + schueler.stricheMuendlich[state.quartal - 1][i];
                    stricheGesamt = stricheGesamt + schueler.stricheMinitest[state.quartal - 1][i];
                    stricheGesamt = stricheGesamt - state.kurse[state.aktiverKurs].minusStricheDefizit[state.quartal - 1] * schueler.defizite[state.quartal - 1][i];
                    if (state.stricheWahl === "Mündlich") {
                        schueler.stricheGesamt[state.quartal - 1][i] = schueler.stricheMuendlich[state.quartal - 1][i].toString();
                    }
                    else if (state.stricheWahl === "Mini-Tests") {
                        schueler.stricheGesamt[state.quartal - 1][i] = schueler.stricheMinitest[state.quartal - 1][i].toString();
                    }
                    else if (state.stricheWahl === "Defizite") {
                        schueler.stricheGesamt[state.quartal - 1][i] = schueler.defizite[state.quartal - 1][i].toString();
                    }
                    else if (state.stricheWahl === "Gesamt") {
                        schueler.stricheGesamt[state.quartal - 1][i] = stricheGesamt.toString();
                    }
                    if (schueler.stricheGesamt[state.quartal - 1][i] === "0") {
                        if (state.stricheWahl === "Mini-Tests" && schueler.stricheMinitestErreichbar[state.quartal - 1][i] > 0) {
                            schueler.stricheGesamt[state.quartal - 1][i] = "0";
                        }
                        else {
                            schueler.stricheGesamt[state.quartal - 1][i] = "";
                        }
                    }
                    stricheAddiert = stricheAddiert + stricheGesamt;
                }
                schueler.minitestQuote[state.quartal - 1] = Math.round(100 * minitestQuoteAddiert / Math.max(1, minitestQuoteErreichbar));
                schueler.stricheAddiert[state.quartal - 1] = stricheAddiert;
                schueler.stricheGewertet[state.quartal - 1] = Math.round(stricheAddiert * Math.max(1, state.kurse[state.aktiverKurs].stundenStriche[state.quartal - 1]) / Math.max(1, schueler.gewerteteStunden[state.quartal - 1]));
            });
            let anzahl;
            let note1;
            let note2;
            let note3;
            let note;
            state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                if (schueler.klausurnoteHJ[0] === "Auto") {
                    anzahl = 0;
                    if (schueler.klausurnoten[0][0] === "" || schueler.klausurnoten[0][0] === "NT") {
                        note1 = 0;
                    }
                    else {
                        note1 = notenpunkte.indexOf(schueler.klausurnoten[0][0]);
                        anzahl = anzahl + 1;
                    }
                    if (schueler.klausurnoten[0][1] === "" || schueler.klausurnoten[0][1] === "NT") {
                        note2 = 0;
                    }
                    else {
                        note2 = notenpunkte.indexOf(schueler.klausurnoten[0][1]);
                        anzahl = anzahl + 1;
                    }
                    if (schueler.klausurnoten[0][2] === "" || schueler.klausurnoten[0][2] === "NT") {
                        note3 = 0;
                    }
                    else {
                        note3 = notenpunkte.indexOf(schueler.klausurnoten[0][2]);
                        anzahl = anzahl + 1;
                    }
                    if (state.kurse[state.aktiverKurs].klausuren[0] === 0 || anzahl === 0) {
                        schueler.klausurnoteHJBeschriftung[0] = "";
                    }
                    else {
                        if (state.kurse[state.aktiverKurs].klausuren[0] === 1) {
                            note = note1;
                        }
                        else if (state.kurse[state.aktiverKurs].klausuren[0] === 2) {
                            note = Math.round((0.99 * note1 + 1.01 * note2) / anzahl);
                        }
                        else if (state.kurse[state.aktiverKurs].klausuren[0] === 3) {
                            if (schueler.klausurnoten[0][0] === "" || schueler.klausurnoten[0][0] === "NT") {
                                note = Math.round((0.99 * note2 + 1.01 * note3) / anzahl);
                            }
                            else {
                                note = Math.round((0.99 * note1 + 1.01 * note2 + 1.01 * note3) / anzahl);
                            }
                        }
                        schueler.klausurnoteHJBeschriftung[0] = notenpunkte[note];
                    }
                };
            });
            state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                if (schueler.klausurnoteHJ[1] === "Auto") {
                    anzahl = 0;
                    if (schueler.klausurnoten[1][0] === "" || schueler.klausurnoten[1][0] === "NT") {
                        note1 = 0;
                    }
                    else {
                        note1 = notenpunkte.indexOf(schueler.klausurnoten[1][0]);
                        anzahl = anzahl + 1;
                    }
                    if (schueler.klausurnoten[1][1] === "" || schueler.klausurnoten[1][1] === "NT") {
                        note2 = 0;
                    }
                    else {
                        note2 = notenpunkte.indexOf(schueler.klausurnoten[1][1]);
                        anzahl = anzahl + 1;
                    }
                    if (schueler.klausurnoten[1][2] === "" || schueler.klausurnoten[1][2] === "NT") {
                        note3 = 0;
                    }
                    else {
                        note3 = notenpunkte.indexOf(schueler.klausurnoten[1][2]);
                        anzahl = anzahl + 1;
                    }
                    if (state.kurse[state.aktiverKurs].klausuren[1] === 0 || anzahl === 0) {
                        schueler.klausurnoteHJBeschriftung[1] = "";
                    }
                    else {
                        if (state.kurse[state.aktiverKurs].klausuren[1] === 1) {
                            note = note1;
                        }
                        else if (state.kurse[state.aktiverKurs].klausuren[1] === 2) {
                            note = Math.round((0.99 * note1 + 1.01 * note2) / anzahl);
                        }
                        else if (state.kurse[state.aktiverKurs].klausuren[1] === 3) {
                            if (schueler.klausurnoten[1][0] === "" || schueler.klausurnoten[1][0] === "NT") {
                                note = Math.round((0.99 * note2 + 1.01 * note3) / anzahl);
                            }
                            else {
                                note = Math.round((0.99 * note1 + 1.01 * note2 + 1.01 * note3) / anzahl);
                            }
                        }
                        schueler.klausurnoteHJBeschriftung[1] = notenpunkte[note];
                    }
                };
            });
            state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                if (schueler.sominoten[0] === "Auto") {
                    schueler.sominotenBeschriftung[0] = this.sominotenberechnung(state.kurse[state.aktiverKurs].agNoten, state.kurse[state.aktiverKurs].fakeNoten, parseFloat(state.kurse[state.aktiverKurs].stricheGrenze[0]), parseFloat(state.kurse[state.aktiverKurs].testnoteneinfluss[0]), state.kurse[state.aktiverKurs].stundenStriche[0], schueler.stricheGewertet[0], schueler.testnoten[0][0], schueler.testnoten[0][1], schueler.referatnoten[0][0], schueler.referatnoten[0][1]);
                }
                if (schueler.sominoten[1] === "Auto") {
                    schueler.sominotenBeschriftung[1] = this.sominotenberechnung(state.kurse[state.aktiverKurs].agNoten, state.kurse[state.aktiverKurs].fakeNoten, parseFloat(state.kurse[state.aktiverKurs].stricheGrenze[1]), parseFloat(state.kurse[state.aktiverKurs].testnoteneinfluss[1]), state.kurse[state.aktiverKurs].stundenStriche[1], schueler.stricheGewertet[1], schueler.testnoten[1][0], schueler.testnoten[1][1], schueler.referatnoten[1][0], schueler.referatnoten[1][1]);
                }
            });
            state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                if (schueler.sominoten[2] === "Auto") {
                    schueler.sominotenBeschriftung[2] = this.sominotenberechnung(state.kurse[state.aktiverKurs].agNoten, state.kurse[state.aktiverKurs].fakeNoten, parseFloat(state.kurse[state.aktiverKurs].stricheGrenze[2]), parseFloat(state.kurse[state.aktiverKurs].testnoteneinfluss[2]), state.kurse[state.aktiverKurs].stundenStriche[2], schueler.stricheGewertet[2], schueler.testnoten[2][0], schueler.testnoten[2][1], schueler.referatnoten[2][0], schueler.referatnoten[2][1]);
                }
                if (schueler.sominoten[3] === "Auto") {
                    schueler.sominotenBeschriftung[3] = this.sominotenberechnung(state.kurse[state.aktiverKurs].agNoten, state.kurse[state.aktiverKurs].fakeNoten, parseFloat(state.kurse[state.aktiverKurs].stricheGrenze[3]), parseFloat(state.kurse[state.aktiverKurs].testnoteneinfluss[3]), state.kurse[state.aktiverKurs].stundenStriche[3], schueler.stricheGewertet[3], schueler.testnoten[3][0], schueler.testnoten[3][1], schueler.referatnoten[3][0], schueler.referatnoten[3][1]);
                }
            });
            state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                if (schueler.sominoteHJ[0] === "Auto") {
                    anzahl = 0;
                    if (schueler.sominoten[0] === "Auto") {
                        if (schueler.sominotenBeschriftung[0] === "" || schueler.sominotenBeschriftung[0] === "NT") {
                            note1 = 0;
                        }
                        else if (schueler.sominotenBeschriftung[0].substring(0, 1) === "E") {
                            note1 = parseInt(schueler.sominotenBeschriftung[0].substring(1), 10);
                            anzahl = anzahl + 1;
                        }
                        else {
                            note1 = notenpunkte.indexOf(schueler.sominotenBeschriftung[0]);
                            anzahl = anzahl + 1;
                        }
                    }
                    else {
                        if (schueler.sominoten[0] === "" || schueler.sominoten[0] === "NT") {
                            note1 = 0;
                        }
                        else if (schueler.sominoten[0].substring(0, 1) === "E") {
                            note1 = parseInt(schueler.sominoten[0].substring(1), 10);
                            anzahl = anzahl + 1;
                        }
                        else {
                            note1 = notenpunkte.indexOf(schueler.sominoten[0]);
                            anzahl = anzahl + 1;
                        }
                    }
                    if (schueler.sominoten[1] === "Auto") {
                        if (schueler.sominotenBeschriftung[1] === "" || schueler.sominotenBeschriftung[1] === "NT") {
                            note2 = 0;
                        }
                        else if (schueler.sominotenBeschriftung[1].substring(0, 1) === "E") {
                            note2 = parseInt(schueler.sominotenBeschriftung[1].substring(1), 10);
                            anzahl = anzahl + 1;
                        }
                        else {
                            note2 = notenpunkte.indexOf(schueler.sominotenBeschriftung[1]);
                            anzahl = anzahl + 1;
                        }
                    }
                    else {
                        if (schueler.sominoten[1] === "" || schueler.sominoten[1] === "NT") {
                            note2 = 0;
                        }
                        else if (schueler.sominoten[1].substring(0, 1) === "E") {
                            note2 = parseInt(schueler.sominoten[1].substring(1), 10);
                            anzahl = anzahl + 1;
                        }
                        else {
                            note2 = notenpunkte.indexOf(schueler.sominoten[1]);
                            anzahl = anzahl + 1;
                        }
                    }
                    if (anzahl === 0) {
                        schueler.sominoteHJBeschriftung[0] = "";
                    }
                    else {
                        note = Math.round((0.99 * note1 + 1.01 * note2) / anzahl);
                        if (state.kurse[state.aktiverKurs].agNoten) {
                            schueler.sominoteHJBeschriftung[0] = "E" + note.toString();
                        }
                        else {
                            schueler.sominoteHJBeschriftung[0] = notenpunkte[note];
                        }
                    }
                };
            });
            state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                if (schueler.sominoteHJ[1] === "Auto") {
                    anzahl = 0;
                    if (schueler.sominoten[2] === "Auto") {
                        if (schueler.sominotenBeschriftung[2] === "" || schueler.sominotenBeschriftung[2] === "NT") {
                            note1 = 0;
                        }
                        else if (schueler.sominotenBeschriftung[2].substring(0, 1) === "E") {
                            note1 = parseInt(schueler.sominotenBeschriftung[2].substring(1), 10);
                            anzahl = anzahl + 1;
                        }
                        else {
                            note1 = notenpunkte.indexOf(schueler.sominotenBeschriftung[2]);
                            anzahl = anzahl + 1;
                        }
                    }
                    else {
                        if (schueler.sominoten[2] === "" || schueler.sominoten[2] === "NT") {
                            note1 = 0;
                        }
                        else if (schueler.sominoten[2].substring(0, 1) === "E") {
                            note1 = parseInt(schueler.sominoten[2].substring(1), 10);
                            anzahl = anzahl + 1;
                        }
                        else {
                            note1 = notenpunkte.indexOf(schueler.sominoten[2]);
                            anzahl = anzahl + 1;
                        }
                    }
                    if (schueler.sominoten[3] === "Auto") {
                        if (schueler.sominotenBeschriftung[3] === "" || schueler.sominotenBeschriftung[3] === "NT") {
                            note2 = 0;
                        }
                        else if (schueler.sominotenBeschriftung[3].substring(0, 1) === "E") {
                            note2 = parseInt(schueler.sominotenBeschriftung[3].substring(1), 10);
                            anzahl = anzahl + 1;
                        }
                        else {
                            note2 = notenpunkte.indexOf(schueler.sominotenBeschriftung[3]);
                            anzahl = anzahl + 1;
                        }
                    }
                    else {
                        if (schueler.sominoten[3] === "" || schueler.sominoten[3] === "NT") {
                            note2 = 0;
                        }
                        else if (schueler.sominoten[3].substring(0, 1) === "E") {
                            note2 = parseInt(schueler.sominoten[3].substring(1), 10);
                            anzahl = anzahl + 1;
                        }
                        else {
                            note2 = notenpunkte.indexOf(schueler.sominoten[3]);
                            anzahl = anzahl + 1;
                        }
                    }
                    if (anzahl === 0) {
                        schueler.sominoteHJBeschriftung[1] = "";
                    }
                    else {
                        note = Math.round((0.99 * note1 + 1.01 * note2) / anzahl);
                        if (state.kurse[state.aktiverKurs].agNoten) {
                            schueler.sominoteHJBeschriftung[1] = "E" + note.toString();
                        }
                        else {
                            schueler.sominoteHJBeschriftung[1] = notenpunkte[note];
                        }
                    }
                };
            });
            state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                if (schueler.zeugnisnoteHJ[0] === "Auto") {
                    anzahl = 0;
                    if (schueler.klausurnoteHJ[0] === "Auto") {
                        if (schueler.klausurnoteHJBeschriftung[0] === "" || schueler.klausurnoteHJBeschriftung[0] === "NT") {
                            note1 = 0;
                        }
                        else {
                            note1 = notenpunkte.indexOf(schueler.klausurnoteHJBeschriftung[0]);
                            anzahl = anzahl + 1;
                        }
                    }
                    else {
                        if (schueler.klausurnoteHJ[0] === "" || schueler.klausurnoteHJ[0] === "NT") {
                            note1 = 0;
                        }
                        else {
                            note1 = notenpunkte.indexOf(schueler.klausurnoteHJ[0]);
                            anzahl = anzahl + 1;
                        }
                    }
                    if (schueler.sominoteHJ[0] === "Auto") {
                        if (schueler.sominoteHJBeschriftung[0] === "" || schueler.sominoteHJBeschriftung[0] === "NT") {
                            note2 = 0;
                        }
                        else if (schueler.sominoteHJBeschriftung[0].substring(0, 1) === "E") {
                            note2 = parseInt(schueler.sominoteHJBeschriftung[0].substring(1), 10);
                            anzahl = anzahl + 1;
                        }
                        else {
                            note2 = notenpunkte.indexOf(schueler.sominoteHJBeschriftung[0]);
                            anzahl = anzahl + 1;
                        }
                    }
                    else {
                        if (schueler.sominoteHJ[0] === "" || schueler.sominoteHJ[0] === "NT") {
                            note2 = 0;
                        }
                        else if (schueler.sominoteHJ[0].substring(0, 1) === "E") {
                            note2 = parseInt(schueler.sominoteHJ[0].substring(1), 10);
                            anzahl = anzahl + 1;
                        }
                        else {
                            note2 = notenpunkte.indexOf(schueler.sominoteHJ[0]);
                            anzahl = anzahl + 1;
                        }
                    }
                    if (anzahl === 0) {
                        schueler.zeugnisnoteHJBeschriftung[0] = "";
                    }
                    else {
                        if (anzahl === 1) {
                            note = note1 + note2;
                        }
                        else {
                            note = Math.round(2 * (parseFloat(state.kurse[state.aktiverKurs].klausurnoteneinfluss[0]) * note1 + (1 - parseFloat(state.kurse[state.aktiverKurs].klausurnoteneinfluss[0])) * note2) / anzahl);
                        }
                        if (state.kurse[state.aktiverKurs].agNoten) {
                            schueler.zeugnisnoteHJBeschriftung[0] = "E" + note.toString();
                        }
                        else {
                            schueler.zeugnisnoteHJBeschriftung[0] = notenpunkte[note];
                        }
                    }
                };
            });
            state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                if (schueler.zeugnisnoteHJ[1] === "Auto") {
                    anzahl = 0;
                    if (schueler.klausurnoteHJ[1] === "Auto") {
                        if (schueler.klausurnoteHJBeschriftung[1] === "" || schueler.klausurnoteHJBeschriftung[1] === "NT") {
                            note1 = 0;
                        }
                        else {
                            note1 = notenpunkte.indexOf(schueler.klausurnoteHJBeschriftung[1]);
                            anzahl = anzahl + 1;
                        }
                    }
                    else {
                        if (schueler.klausurnoteHJ[1] === "" || schueler.klausurnoteHJ[1] === "NT") {
                            note1 = 0;
                        }
                        else {
                            note1 = notenpunkte.indexOf(schueler.klausurnoteHJ[1]);
                            anzahl = anzahl + 1;
                        }
                    }
                    if (schueler.sominoteHJ[1] === "Auto") {
                        if (schueler.sominoteHJBeschriftung[1] === "" || schueler.sominoteHJBeschriftung[1] === "NT") {
                            note2 = 0;
                        }
                        else if (schueler.sominoteHJBeschriftung[1].substring(0, 1) === "E") {
                            note2 = parseInt(schueler.sominoteHJBeschriftung[1].substring(1), 10);
                            anzahl = anzahl + 1;
                        }
                        else {
                            note2 = notenpunkte.indexOf(schueler.sominoteHJBeschriftung[1]);
                            anzahl = anzahl + 1;
                        }
                    }
                    else {
                        if (schueler.sominoteHJ[1] === "" || schueler.sominoteHJ[1] === "NT") {
                            note2 = 0;
                        }
                        else if (schueler.sominoteHJ[1].substring(0, 1) === "E") {
                            note2 = parseInt(schueler.sominoteHJ[1].substring(1), 10);
                            anzahl = anzahl + 1;
                        }
                        else {
                            note2 = notenpunkte.indexOf(schueler.sominoteHJ[1]);
                            anzahl = anzahl + 1;
                        }
                    }
                    if (anzahl === 0) {
                        schueler.zeugnisnoteHJBeschriftung[1] = "";
                    }
                    else {
                        if (anzahl === 1) {
                            note = note1 + note2;
                        }
                        else {
                            note = Math.round(2 * (parseFloat(state.kurse[state.aktiverKurs].klausurnoteneinfluss[1]) * note1 + (1 - parseFloat(state.kurse[state.aktiverKurs].klausurnoteneinfluss[1])) * note2) / anzahl);
                        }
                        if (state.kurse[state.aktiverKurs].agNoten) {
                            schueler.zeugnisnoteHJBeschriftung[1] = "E" + note.toString();
                        }
                        else {
                            schueler.zeugnisnoteHJBeschriftung[1] = notenpunkte[note];
                        }
                    }
                };
            });
            if (!state.kurse[state.aktiverKurs].agNoten) {
                state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                    if (schueler.zeugnisnoteHJ[0] === "Auto") {
                        if (schueler.zeugnisnoteHJBeschriftung[0] === "" || schueler.zeugnisnoteHJBeschriftung[0] === "NT") {
                            schueler.zeugnisnoteHJPunkte[0] = "";
                        }
                        else {
                            schueler.zeugnisnoteHJPunkte[0] = notenpunkte.indexOf(schueler.zeugnisnoteHJBeschriftung[0]).toString();
                        }
                    }
                    else {
                        if (schueler.zeugnisnoteHJ[0] === "" || schueler.zeugnisnoteHJ[0] === "NT") {
                            schueler.zeugnisnoteHJPunkte[0] = "";
                        }
                        else {
                            schueler.zeugnisnoteHJPunkte[0] = notenpunkte.indexOf(schueler.zeugnisnoteHJ[0]).toString();
                        }
                    }
                });
                state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                    if (schueler.zeugnisnoteHJ[1] === "Auto") {
                        if (schueler.zeugnisnoteHJBeschriftung[1] === "" || schueler.zeugnisnoteHJBeschriftung[1] === "NT") {
                            schueler.zeugnisnoteHJPunkte[1] = "";
                        }
                        else {
                            schueler.zeugnisnoteHJPunkte[1] = notenpunkte.indexOf(schueler.zeugnisnoteHJBeschriftung[1]).toString();
                        }
                    }
                    else {
                        if (schueler.zeugnisnoteHJ[1] === "" || schueler.zeugnisnoteHJ[1] === "NT") {
                            schueler.zeugnisnoteHJPunkte[1] = "";
                        }
                        else {
                            schueler.zeugnisnoteHJPunkte[1] = notenpunkte.indexOf(schueler.zeugnisnoteHJ[1]).toString();
                        }
                    }
                });
            }
            state.kurse[state.aktiverKurs].schueler.forEach((schueler) => {
                if (schueler.zeugnisnoteSJ === "Auto") {
                    anzahl = 0;
                    if (schueler.zeugnisnoteHJ[0] === "Auto") {
                        if (schueler.zeugnisnoteHJBeschriftung[0] === "" || schueler.zeugnisnoteHJBeschriftung[0] === "NT") {
                            note1 = 0;
                        }
                        else if (schueler.zeugnisnoteHJBeschriftung[0].substring(0, 1) === "E") {
                            note1 = parseInt(schueler.zeugnisnoteHJBeschriftung[0].substring(1), 10);
                            anzahl = anzahl + 1;
                        }
                        else {
                            note1 = notenpunkte.indexOf(schueler.zeugnisnoteHJBeschriftung[0]);
                            anzahl = anzahl + 1;
                        }
                    }
                    else {
                        if (schueler.zeugnisnoteHJ[0] === "" || schueler.zeugnisnoteHJ[0] === "NT") {
                            note1 = 0;
                        }
                        else if (schueler.zeugnisnoteHJ[0].substring(0, 1) === "E") {
                            note1 = parseInt(schueler.zeugnisnoteHJ[0].substring(1), 10);
                            anzahl = anzahl + 1;
                        }
                        else {
                            note1 = notenpunkte.indexOf(schueler.zeugnisnoteHJ[0]);
                            anzahl = anzahl + 1;
                        }
                    }
                    if (schueler.zeugnisnoteHJ[1] === "Auto") {
                        if (schueler.zeugnisnoteHJBeschriftung[1] === "" || schueler.zeugnisnoteHJBeschriftung[1] === "NT") {
                            note2 = 0;
                        }
                        else if (schueler.zeugnisnoteHJBeschriftung[1].substring(0, 1) === "E") {
                            note2 = parseInt(schueler.zeugnisnoteHJBeschriftung[1].substring(1), 10);
                            anzahl = anzahl + 1;
                        }
                        else {
                            note2 = notenpunkte.indexOf(schueler.zeugnisnoteHJBeschriftung[1]);
                            anzahl = anzahl + 1;
                        }
                    }
                    else {
                        if (schueler.zeugnisnoteHJ[1] === "" || schueler.zeugnisnoteHJ[1] === "NT") {
                            note2 = 0;
                        }
                        else if (schueler.zeugnisnoteHJ[1].substring(0, 1) === "E") {
                            note2 = parseInt(schueler.zeugnisnoteHJ[1].substring(1), 10);
                            anzahl = anzahl + 1;
                        }
                        else {
                            note2 = notenpunkte.indexOf(schueler.zeugnisnoteHJ[1]);
                            anzahl = anzahl + 1;
                        }
                    }
                    if (anzahl === 0) {
                        schueler.zeugnisnoteSJBeschriftung = "";
                    }
                    else {
                        if (anzahl === 1) {
                            note = note1 + note2;
                        }
                        else {
                            note = Math.round(2 * (parseFloat(state.kurse[state.aktiverKurs].halbjahresnoteneinfluss) * note1 + (1 - parseFloat(state.kurse[state.aktiverKurs].halbjahresnoteneinfluss)) * note2) / anzahl);
                        }
                        if (state.kurse[state.aktiverKurs].agNoten) {
                            schueler.zeugnisnoteSJBeschriftung = "E" + note.toString();
                        }
                        else {
                            schueler.zeugnisnoteSJBeschriftung = notenpunkte[note];
                        }
                    }
                };
            });
            let beendenFarbe;
            if (state.aktivesMenue === "Hauptmenü") {
                if (String(localStorage.getItem("speicher")) === "null") {
                    beendenFarbe = false;
                }
                else {
                    if (JSON.stringify(state.kurse) === JSON.stringify(JSON.parse(localStorage.getItem("speicher")).kurse)) {
                        beendenFarbe = true;
                    }
                    else {
                        beendenFarbe = false;
                    }
                }
            }
            return ({
                beendenFarbe: beendenFarbe,
                update: !state.update,
                kurse: state.kurse
            });
        });
    }

    render() {
        if (this.state.aktivesMenue === "Hauptmenü") {
            return (
                <Hauptmenue handleClick={this.handleClick} buttonsDisabled={false} beendenFarbe={this.state.beendenFarbe} update={this.state.update} />
            );
        }
        else if (this.state.aktivesMenue === "Kursemenü") {
            return (
                <Kursemenue handleClick={this.handleClick} update={this.state.update} kurse={this.state.kurse} />
            );
        }
        else if (this.state.aktivesMenue === "BestaetigungLaden") {
            return (
                <Bestaetigungsformular nameClick={"Laden"} handleClick={this.handleClick} bestaetigungsfrage={"Sollen die Daten wirklich geladen werden?"} buttonsDisabled={false} update={this.state.update} />
            );
        }
        else if (this.state.aktivesMenue === "PassworteingabeSpeichern") {
            return (
                <Eingabeformular nameInput={"Passwort Eingabe"} nameSubmit={"Passwort Abschicken Speichern"} handleChange={this.handleChange} handleSubmit={this.handleSubmit} eingabewert={this.state.eingabewert} update={this.state.update} />
            );
        }
        else if (this.state.aktivesMenue === "BestaetigungLadenDatei") {
            return (
                <Bestaetigungsformular nameClick={"LadenDatei"} handleClick={this.handleClick} bestaetigungsfrage={"Sollen die Daten wirklich aus der Datei geladen werden?"} buttonsDisabled={false} update={this.state.update} />
            );
        }
        else if (this.state.aktivesMenue === "PassworteingabeSpeichernDatei") {
            return (
                <Eingabeformular nameInput={"Passwort Eingabe"} nameSubmit={"Passwort Abschicken Speichern Datei"} handleChange={this.handleChange} handleSubmit={this.handleSubmit} eingabewert={this.state.eingabewert} update={this.state.update} />
            );
        }
        else if (this.state.aktivesMenue === "SpeichernDatei") {
            return (
                <Speicher handleClick={this.handleClick} schuelerdaten={true} buttonsDisabled={false} update={this.state.update} kurse={this.state.kurse} />
            );
        }
        else if (this.state.aktivesMenue === "BestaetigungLadenClipboard") {
            return (
                <Bestaetigungsformular nameClick={"LadenClipboard"} handleClick={this.handleClick} bestaetigungsfrage={"Sollen die Daten wirklich aus der Zwischenablage geladen werden?"} buttonsDisabled={false} update={this.state.update} />
            );
        }
        else if (this.state.aktivesMenue === "PassworteingabeSpeichernInhalte") {
            return (
                <Eingabeformular nameInput={"Passwort Eingabe"} nameSubmit={"Passwort Abschicken Speichern Inhalte"} handleChange={this.handleChange} handleSubmit={this.handleSubmit} eingabewert={this.state.eingabewert} update={this.state.update} />
            );
        }
        else if (this.state.aktivesMenue === "SpeichernInhalte") {
            return (
                <Speicher handleClick={this.handleClick} schuelerdaten={false} buttonsDisabled={false} update={this.state.update} kurse={this.state.kurse} />
            );
        }
        else if (this.state.aktivesMenue === "Passwortänderung") {
            return (
                <Eingabeformularpasswort nameInput={"Passwort Eingabe"} nameInput2={"Passwort2 Eingabe"} nameInput3={"Passwort3 Eingabe"} nameSubmit={"Passwort Abschicken Ändern"} handleChange={this.handleChange} handleSubmit={this.handleSubmit} eingabewert={this.state.eingabewert} eingabewert2={this.state.eingabewert2} eingabewert3={this.state.eingabewert3} update={this.state.update} />
            );
        }
        else if (this.state.aktivesMenue === "Kursplan") {
            return (
                <Kursplan handleClick={this.handleClick} handleClickDatum={this.handleClickDatum} handleClickStundenthema={this.handleClickStundenthema} handleClickHausaufgabe={this.handleClickHausaufgabe} handleClickBemerkungen={this.handleClickBemerkungen} handleChange={this.handleChange} buttonsDisabled={false} selectsDisabled={false} checkboxesDisabled={false} optionsDauer={optionsDauer} optionsAnwesenheiten={optionsAnwesenheiten} quartal={this.state.quartal} halbjahr={this.state.halbjahr} ansicht={this.state.ansicht} indexUnterricht={this.state.indexUnterricht} kursmappeWahl={this.state.kursmappeWahl} stricheWahl={this.state.stricheWahl} update={this.state.update} kurs={this.state.kurse[this.state.aktiverKurs]} />
            );
        }
        else if (this.state.aktivesMenue === "Unterricht") {
            return (
                <Unterricht handleClick={this.handleClick} handleClickSitzplatz={this.handleClickSitzplatz} handleChange={this.handleChange} quartal={this.state.quartal} indexUnterricht={this.state.indexUnterricht} raum={this.state.raum} unterrichtModus={this.state.unterrichtModus} indexMinitest={this.state.indexMinitest} update={this.state.update} kurs={this.state.kurse[this.state.aktiverKurs]} />
            );
        }
        else if (this.state.aktivesMenue === "PassworteingabeSitzplan") {
            return (
                <Eingabeformular nameInput={"Passwort Eingabe"} nameSubmit={"Passwort Abschicken Sitzplan"} handleChange={this.handleChange} handleSubmit={this.handleSubmit} eingabewert={this.state.eingabewert} update={this.state.update} />
            );
        }
        else if (this.state.aktivesMenue === "Sitzplan") {
            return (
                <Sitzplan handleClick={this.handleClick} handleClickSitzplatz={this.handleClickSitzplatz} handleChange={this.handleChange} quartal={this.state.quartal} indexUnterricht={this.state.indexUnterricht} raum={this.state.raum} sitzplaetzeAktivieren={this.state.sitzplaetzeAktivieren} sitzplanModus={this.state.sitzplanModus} schuelerAktivieren={this.state.schuelerAktivieren} indexSitzordnungen={this.state.indexSitzordnungen} indexSchueler={this.state.indexSchueler} sitzordnungen={this.state.kurse[this.state.kurse.length - 1].sitzordnungen} update={this.state.update} kurs={this.state.kurse[this.state.aktiverKurs]} />
            );
        }
        else if (this.state.aktivesMenue === "PassworteingabeKursplan") {
            return (
                <Eingabeformular nameInput={"Passwort Eingabe"} nameSubmit={"Passwort Abschicken Kursplan"} handleChange={this.handleChange} handleSubmit={this.handleSubmit} eingabewert={this.state.eingabewert} update={this.state.update} />
            );
        }
        else if (this.state.aktivesMenue === "Einstellungen") {
            return (
                <Einstellungen handleClick={this.handleClick} handleChange={this.handleChange} positionNeu={this.state.positionNeu} voreinstellungNeu={this.state.voreinstellungNeu} positionSchueler1={this.state.positionSchueler1} positionSchueler2={this.state.positionSchueler2} update={this.state.update} kurs={this.state.kurse[this.state.aktiverKurs]} />
            );
        }
        else if (this.state.aktivesMenue === "Deckblatt") {
            return (
                <Deckblatt handleClick={this.handleClick} update={this.state.update} kurs={this.state.kurse[this.state.aktiverKurs]} />
            );
        }
        else if (this.state.aktivesMenue === "Kursplanung") {
            return (
                <Kursplanung handleClick={this.handleClick} handleChange={this.handleChange} update={this.state.update} kurs={this.state.kurse[this.state.aktiverKurs]} />
            );
        }
        else if (this.state.aktivesMenue === "Kursprotokoll") {
            return (
                <Kursprotokoll handleClick={this.handleClick} handleChange={this.handleChange} quartal={this.state.quartal} update={this.state.update} kurs={this.state.kurse[this.state.aktiverKurs]} />
            );
        }
        else if (this.state.aktivesMenue === "Ergebnisspiegel") {
            return (
                <Ergebnisspiegel handleClick={this.handleClick} handleChange={this.handleChange} update={this.state.update} kurs={this.state.kurse[this.state.aktiverKurs]} />
            );
        }
        else if (this.state.aktivesMenue === "Datumeingabe") {
            return (
                <Eingabeformulardatum focus={"Datum"} nameInputDatum={"Datum Eingabe"} nameInputStundenthema={"Stundenthema Eingabe"} nameInputStundeninhalt={"Stundeninhalt Eingabe"} nameInputHausaufgabe={"Hausaufgabe Eingabe"} nameSubmit={"Datum Abschicken"} handleChange={this.handleChange} handleSubmit={this.handleSubmit} eingabewert={this.state.eingabewert} eingabewert2={this.state.eingabewert2} eingabewert3={this.state.eingabewert3} eingabewert4={this.state.eingabewert4} update={this.state.update} />
            );
        }
        else if (this.state.aktivesMenue === "Stundenthemaeingabe") {
            return (
                <Eingabeformulardatum focus={"Stundenthema"} nameInputDatum={"Datum Eingabe"} nameInputStundenthema={"Stundenthema Eingabe"} nameInputStundeninhalt={"Stundeninhalt Eingabe"} nameInputHausaufgabe={"Hausaufgabe Eingabe"} nameSubmit={"Datum Abschicken"} handleChange={this.handleChange} handleSubmit={this.handleSubmit} eingabewert={this.state.eingabewert} eingabewert2={this.state.eingabewert2} eingabewert3={this.state.eingabewert3} eingabewert4={this.state.eingabewert4} update={this.state.update} />
            );
        }
        else if (this.state.aktivesMenue === "Hausaufgabeeingabe") {
            return (
                <Eingabeformulardatum focus={"Hausaufgabe"} nameInputDatum={"Datum Eingabe"} nameInputStundenthema={"Stundenthema Eingabe"} nameInputStundeninhalt={"Stundeninhalt Eingabe"} nameInputHausaufgabe={"Hausaufgabe Eingabe"} nameSubmit={"Datum Abschicken"} handleChange={this.handleChange} handleSubmit={this.handleSubmit} eingabewert={this.state.eingabewert} eingabewert2={this.state.eingabewert2} eingabewert3={this.state.eingabewert3} eingabewert4={this.state.eingabewert4} update={this.state.update} />
            );
        }
        else if (this.state.aktivesMenue === "Bemerkungeneingabe") {
            return (
                <Eingabeformular nameInput={"Bemerkungen Eingabe"} nameSubmit={"Bemerkungen Abschicken"} handleChange={this.handleChange} handleSubmit={this.handleSubmit} eingabewert={this.state.eingabewert} update={this.state.update} />
            );
        }
    }
}