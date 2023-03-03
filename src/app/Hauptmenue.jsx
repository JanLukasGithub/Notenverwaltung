import React from "react";
import { Button } from "./Button";

export class Hauptmenue extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <Button name={"Kursemenü"} handleClick={this.props.handleClick} beschriftung={"Kurse"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                <br />
                <Button name={"Laden"} handleClick={this.props.handleClick} beschriftung={"Laden"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                <br />
                <Button name={"Speichern"} handleClick={this.props.handleClick} beschriftung={"Speichern"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                <br />
                <Button name={"Laden Datei"} handleClick={this.props.handleClick} beschriftung={"Datei laden"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                <br />
                <Button name={"Speichern Datei"} handleClick={this.props.handleClick} beschriftung={"Datei speichern"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                <br />
                <Button name={"Laden Clipboard"} handleClick={this.props.handleClick} beschriftung={"Clipboard laden"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                <br />
                <Button name={"Speichern Inhalte"} handleClick={this.props.handleClick} beschriftung={"Inhalte speichern"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                <br />
                <Button name={"Passwort Ändern"} handleClick={this.props.handleClick} beschriftung={"Passwort ändern"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                <br />
                <Button name={"Beenden"} handleClick={this.props.handleClick} beschriftung={"Beenden"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={!this.props.beendenFarbe} minWidth={144} minHeight={40} />
            </React.Fragment>
        );
    }
}