import React from "react";
import { Button } from "./Button";

export class Kursemenue extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            alleAnzeigen: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if (event.target.name === "Alle Kurse Anzeigen") {
            this.setState((state) => {
                return ({ alleAnzeigen: !state.alleAnzeigen });
            });
        }
    }

    render() {
        if (this.state.alleAnzeigen) {
            return (
                <React.Fragment>
                    <Button name={"Hauptmenü"} handleClick={this.props.handleClick} beschriftung={"Hauptmenü"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Alle Kurse Anzeigen"} handleClick={this.handleClick} beschriftung={"Alle anzeigen"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={this.state.alleAnzeigen} minWidth={144} minHeight={40} />
                    <br />
                    <br />
                    <Button name={"Kursplan 0"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[0].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 1"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[1].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 2"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[2].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 3"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[3].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 4"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[4].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 5"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[5].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 6"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[6].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <br />
                    <Button name={"Kursplan 7"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[7].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 8"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[8].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 9"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[9].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 10"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[10].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 11"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[11].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 12"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[12].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 13"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[13].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <br />
                    <Button name={"Kursplan 14"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[14].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 15"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[15].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 16"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[16].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 17"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[17].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 18"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[18].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 19"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[19].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 20"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[20].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <br />
                    <Button name={"Kursplan 21"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[21].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 22"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[22].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 23"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[23].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 24"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[24].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 25"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[25].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 26"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[26].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 27"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[27].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <br />
                    <Button name={"Kursplan 28"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[28].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 29"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[29].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 30"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[30].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 31"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[31].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 32"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[32].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 33"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[33].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 34"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[34].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <br />
                    <Button name={"Kursplan 35"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[35].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 36"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[36].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 37"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[37].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 38"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[38].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 39"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[39].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 40"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[40].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 41"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[41].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <br />
                    <Button name={"Kursplan 42"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[42].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 43"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[43].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 44"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[44].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 45"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[45].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 46"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[46].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 47"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[47].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 48"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[48].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <br />
                    <Button name={"Kursplan 49"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[49].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 50"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[50].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 51"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[51].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 52"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[52].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 53"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[53].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 54"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[54].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 55"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[55].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <br />
                    <Button name={"Kursplan 56"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[56].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 57"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[57].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 58"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[58].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 59"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[59].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 60"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[60].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 61"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[61].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 62"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[62].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <br />
                    <Button name={"Kursplan 63"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[63].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 64"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[64].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 65"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[65].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 66"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[66].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 67"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[67].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 68"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[68].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 69"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[69].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <br />
                    <Button name={"Kursplan 70"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[70].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 71"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[71].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 72"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[72].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 73"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[73].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 74"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[74].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 75"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[75].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 76"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[76].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <br />
                    <Button name={"Kursplan 77"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[77].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 78"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[78].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 79"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[79].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 80"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[80].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 81"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[81].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 82"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[82].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 83"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[83].kursname} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                </React.Fragment>
            );
        }
        else {
            return (
                <React.Fragment>
                    <Button name={"Hauptmenü"} handleClick={this.props.handleClick} beschriftung={"Hauptmenü"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Alle Kurse Anzeigen"} handleClick={this.handleClick} beschriftung={"Alle anzeigen"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={this.state.alleAnzeigen} minWidth={144} minHeight={40} />
                    <br />
                    <br />
                    <Button name={"Kursplan 0"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[0].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[0].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 1"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[1].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[1].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 2"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[2].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[2].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 3"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[3].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[3].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 4"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[4].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[4].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 5"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[5].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[5].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 6"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[6].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[6].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <br />
                    <Button name={"Kursplan 7"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[7].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[7].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 8"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[8].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[8].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 9"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[9].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[9].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 10"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[10].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[10].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 11"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[11].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[11].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 12"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[12].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[12].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 13"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[13].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[13].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <br />
                    <Button name={"Kursplan 14"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[14].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[14].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 15"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[15].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[15].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 16"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[16].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[16].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 17"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[17].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[17].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 18"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[18].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[18].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 19"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[19].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[19].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 20"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[20].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[20].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <br />
                    <Button name={"Kursplan 21"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[21].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[21].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 22"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[22].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[22].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 23"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[23].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[23].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 24"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[24].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[24].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 25"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[25].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[25].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 26"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[26].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[26].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 27"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[27].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[27].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <br />
                    <Button name={"Kursplan 28"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[28].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[28].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 29"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[29].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[29].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 30"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[30].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[30].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 31"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[31].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[31].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 32"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[32].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[32].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 33"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[33].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[33].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 34"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[34].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[34].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <br />
                    <Button name={"Kursplan 35"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[35].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[35].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 36"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[36].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[36].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 37"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[37].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[37].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 38"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[38].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[38].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 39"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[39].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[39].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 40"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[40].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[40].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 41"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[41].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[41].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <br />
                    <Button name={"Kursplan 42"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[42].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[42].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 43"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[43].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[43].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 44"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[44].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[44].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 45"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[45].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[45].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 46"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[46].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[46].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 47"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[47].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[47].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 48"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[48].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[48].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <br />
                    <Button name={"Kursplan 49"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[49].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[49].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 50"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[50].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[50].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 51"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[51].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[51].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 52"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[52].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[52].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 53"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[53].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[53].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 54"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[54].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[54].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 55"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[55].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[55].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <br />
                    <Button name={"Kursplan 56"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[56].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[56].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 57"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[57].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[57].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 58"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[58].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[58].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 59"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[59].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[59].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 60"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[60].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[60].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 61"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[61].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[61].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 62"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[62].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[62].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <br />
                    <Button name={"Kursplan 63"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[63].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[63].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 64"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[64].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[64].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 65"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[65].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[65].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 66"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[66].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[66].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 67"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[67].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[67].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 68"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[68].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[68].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 69"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[69].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[69].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <br />
                    <Button name={"Kursplan 70"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[70].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[70].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 71"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[71].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[71].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 72"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[72].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[72].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 73"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[73].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[73].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 74"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[74].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[74].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 75"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[75].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[75].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 76"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[76].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[76].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <br />
                    <Button name={"Kursplan 77"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[77].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[77].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 78"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[78].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[78].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 79"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[79].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[79].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 80"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[80].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[80].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 81"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[81].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[81].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 82"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[82].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[82].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                    <Button name={"Kursplan 83"} handleClick={this.props.handleClick} beschriftung={this.props.kurse[83].kursname} buttonDisabled={false} buttonVisible={this.props.kurse[83].aktiv} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                </React.Fragment>
            );
        }
    }
}