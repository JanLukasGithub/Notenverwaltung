import React from "react";
import { Button } from "./Button";

export class Speicher extends React.PureComponent {
    render() {
        let loadkurse = JSON.parse(JSON.stringify(this.props.kurse));
        if (!this.props.schuelerdaten) {
            for (let i = 0; i < loadkurse.length - 1; i++) {
                loadkurse[i].klausurbemerkungen = JSON.parse(JSON.stringify(loadkurse[loadkurse.length - 1].klausurbemerkungen));
                loadkurse[i].sitzplaetze = JSON.parse(JSON.stringify(loadkurse[loadkurse.length - 1].sitzplaetze));
                loadkurse[i].sitzplaetze2 = JSON.parse(JSON.stringify(loadkurse[loadkurse.length - 1].sitzplaetze2));
                loadkurse[i].schuelerSitzplatzlos = [];
                loadkurse[i].schuelerSitzplatzlos2 = [];
                loadkurse[i].schueler.splice(0, loadkurse[i].schueler.length - 1);
                loadkurse[i].schueler.push(loadkurse[loadkurse.length - 1].schueler[0]);
            }
        }
        navigator.clipboard.writeText(JSON.stringify({ kurse: loadkurse }));
        return (
            <React.Fragment>
                <Button name={"Hauptmenü"} handleClick={this.props.handleClick} beschriftung={"Hauptmenü"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                <br />
                <a href={"mailto:stefan.jebens@gmx.de?subject=Notenverwaltung&body="}>
                    <Button name={"E-Mail"} handleClick={this.props.handleClick} beschriftung={"E-Mail"} buttonDisabled={false} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                </a>
            </React.Fragment>
        );
    }
}