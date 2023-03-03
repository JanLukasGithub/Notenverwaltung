import React from "react";
import ReactDOM from "react-dom";

export class Eingabefenster extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            didMount: false
        }
        this.containerElement = null;
        this.fenster = null;
    }

    componentDidMount() {
        this.fenster = window.open("", "", "width=400,height=200,left=200,top=200,resizable=yes,status=no,menubar=yes,location=no,scrollbars=yes,toolbar=no");
        this.containerElement = this.fenster.document.createElement("div");
        this.fenster.document.body.appendChild(this.containerElement);
        this.fenster.document.title = this.props.fenstertitel;
        this.fenster.addEventListener("beforeunload", () => {
            this.props.schliesseFenster();
        });
        this.setState(() => {
            return ({
                didMount: true
            });
        });
    }

    componentWillUnmount() {
        this.fenster.close();
        this.setState(() => {
            return ({
                didMount: false
            });
        });
    }

    render() {
        if (!this.containerElement) {
            return null;
        }
        else {
            return ReactDOM.createPortal(this.props.children, this.containerElement);
        }
    }
}