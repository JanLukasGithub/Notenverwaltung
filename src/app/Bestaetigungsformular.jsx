import React from "react";
import { Button } from "./Button";

export class Bestaetigungsformular extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <div>{this.props.bestaetigungsfrage}</div>
                <br />
                <Button name={this.props.nameClick + "Ja"} handleClick={this.props.handleClick} beschriftung={"Ja"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
                <Button name={this.props.nameClick + "Nein"} handleClick={this.props.handleClick} beschriftung={"Nein"} buttonDisabled={this.props.buttonsDisabled} buttonVisible={true} buttonAppearance={true} buttonRot={false} minWidth={144} minHeight={40} />
            </React.Fragment>
        );
    }
}