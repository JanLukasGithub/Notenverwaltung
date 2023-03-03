import React from "react";
import { Checkbox } from "./Checkbox";

export class Sitzplatz extends React.PureComponent {
    render() {
        const hoehe = 24;
        const rand = 2;
        const styleTable = { borderCollapse: "collapse", width: "*", height: "*", tableLayout: "fixed", margin: 5 };
        const styleName = { border: "1px double Black", width: 4 * hoehe, height: hoehe };
        const styleNameLehrer = { border: "1px double Black", width: 4 * hoehe, height: 2 * hoehe + 2 };
        const styleNameDisabled = { border: "1px double Silver", width: 4 * hoehe, height: hoehe };
        const styleNameLeer = { border: "1px double White", width: 4 * hoehe, height: hoehe };
        const styleZelle = { border: "1px double Black", width: hoehe, height: hoehe };
        const styleZelleDisabled = { border: "1px double Silver", width: hoehe, height: hoehe };
        const styleZelleLeer = { border: "1px double White", width: hoehe, height: hoehe };
        const styleDivZelle = { width: hoehe - 0 * rand, height: hoehe - 2 * rand, overflow: "hidden", whiteSpace: "nowrap", textAlign: "center", verticalAlign: "middle", marginLeft: String(0 * rand) + "px", marginBottom: String(0 * rand) + "px" };
        const styleDivZelleDisabled = { width: hoehe - 0 * rand, height: hoehe - 2 * rand, overflow: "hidden", whiteSpace: "nowrap", textAlign: "center", verticalAlign: "middle", color: "Silver", marginLeft: String(0 * rand) + "px", marginBottom: String(0 * rand) + "px" };
        const styleDivZelleFettDisabled = { width: hoehe - 0 * rand, height: hoehe - 2 * rand, overflow: "hidden", whiteSpace: "nowrap", textAlign: "center", verticalAlign: "middle", fontWeight: "bold", color: "Silver", marginLeft: String(0 * rand) + "px", marginBottom: String(0 * rand) + "px" };
        const styleDivZelleCheckbox = { width: hoehe - 0.5 * rand, height: hoehe - 1 * rand, overflow: "hidden", whiteSpace: "nowrap", marginLeft: String(1 * rand) + "px", marginBottom: String(0 * rand) + "px" };
        const styleDivName = { width: 4 * (hoehe + 2) - 2 * rand + 2, height: hoehe - 1 * rand, overflow: "hidden", whiteSpace: "nowrap", textAlign: "center", verticalAlign: "middle", color: this.props.schuelernameFarbe, marginLeft: String(1 * rand) + "px", marginBottom: String(0 * rand) + "px" };
        const styleDivNameDisabled = { width: 4 * (hoehe + 2) - 2 * rand + 2, height: hoehe - 1 * rand, overflow: "hidden", whiteSpace: "nowrap", textAlign: "center", verticalAlign: "middle", color: "Silver", marginLeft: String(1 * rand) + "px", marginBottom: String(0 * rand) + "px" };
        const styleDivZelleFett = { width: hoehe - 0 * rand, height: hoehe - 2 * rand, overflow: "hidden", whiteSpace: "nowrap", textAlign: "center", verticalAlign: "middle", fontWeight: "bold", color: this.props.stricheFarbe, marginLeft: String(0 * rand) + "px", marginBottom: String(0 * rand) + "px" };
        if (this.props.sitzplatzVisible) {
            if (!this.props.sitzplatzDisabled) {
                if (this.props.schuelername === "Lehrer") {
                    return (
                        <table name={this.props.name} style={styleTable} onClick={this.props.handleClickSitzplatz}>
                            <tbody>
                                <tr>
                                    <td style={styleNameLehrer} colSpan="4"><div style={styleDivName}>{this.props.schuelername}</div></td>
                                </tr>
                            </tbody>
                        </table>
                    );
                }
                else {
                    return (
                        <table name={this.props.name} style={styleTable} onClick={this.props.handleClickSitzplatz}>
                            <tbody>
                                <tr>
                                    <td style={styleName} colSpan="4"><div style={styleDivName}>{this.props.schuelername}</div></td>
                                </tr>
                                <tr>
                                    <td style={styleZelle}><div style={styleDivZelle}>{this.props.stricheGewertet}</div></td>
                                    <td style={styleZelle}><div style={styleDivZelleCheckbox}><Checkbox name={this.props.name} handleChange={this.props.handleChange} checked={this.props.minitest} checkboxDisabled={this.props.checkboxDisabled} checkboxVisible={true} /></div></td>
                                    <td style={styleZelle}><div style={styleDivZelle}>{this.props.stricheMinitest}</div></td>
                                    <td style={styleZelle}><div style={styleDivZelleFett}>{this.props.stricheMuendlich}</div></td>
                                </tr>
                            </tbody>
                        </table>
                    );
                }
            }
            else {
                return (
                    <table name={this.props.name} style={styleTable} onClick={this.props.handleClickSitzplatz}>
                        <tbody>
                            <tr>
                                <td style={styleNameDisabled} colSpan="4"><div style={styleDivNameDisabled}>{this.props.schuelername}</div></td>
                            </tr>
                            <tr>
                                <td style={styleZelleDisabled}><div style={styleDivZelleDisabled}>{this.props.stricheGewertet}</div></td>
                                <td style={styleZelleDisabled}><div style={styleDivZelleCheckbox}><Checkbox name={this.props.name} handleChange={this.props.handleChange} checked={this.props.minitest} checkboxDisabled={true} checkboxVisible={true} /></div></td>
                                <td style={styleZelleDisabled}><div style={styleDivZelleDisabled}>{this.props.stricheMinitest}</div></td>
                                <td style={styleZelleDisabled}><div style={styleDivZelleFettDisabled}>{this.props.stricheMuendlich}</div></td>
                            </tr>
                        </tbody>
                    </table>
                );
            }
        }
        else {
            return (
                <table name={this.props.name} style={styleTable}>
                    <tbody>
                        <tr>
                            <td style={styleNameLeer} colSpan="4"><div style={styleDivName}></div></td>
                        </tr>
                        <tr>
                            <td style={styleZelleLeer}><div style={styleDivZelle}></div></td>
                            <td style={styleZelleLeer}><div style={styleDivZelleCheckbox}></div></td>
                            <td style={styleZelleLeer}><div style={styleDivZelle}></div></td>
                            <td style={styleZelleLeer}><div style={styleDivZelleFett}></div></td>
                        </tr>
                    </tbody>
                </table>
            );
        }
    }
}