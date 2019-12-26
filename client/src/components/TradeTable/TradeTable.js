import React from "react";
import { Fragment } from "react";
import "./tradeTable.scss";
import { getExchangeRate } from "../../common/api";
import USD from "../../assets/Images/USD.png";
import EUR from "../../assets/Images/EUR.png";
import RUB from "../../assets/Images/RUB.png";
import PLN from "../../assets/Images/PLN.png";
import RON from "../../assets/Images/RON.png";
import BYN from "../../assets/Images/BYN.png";
import GBP from "../../assets/Images/GBP.png";
import MDL from "../../assets/Images/MDL.png";

class TradeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "USD",
      to: "RON"
    };
  }
  render() {
    const { from, to } = this.state;
    return (
      <Fragment>
        <hr />
        <tr>
          <td>
            <img src={USD} alt="" width="28" height="28"></img>
            <img src={EUR} alt="" width="28" height="28"></img>
          </td>
        </tr>
      </Fragment>
    );
  }

  componentDidMount() {
    getExchangeRate().then(result => {
      this.setState({});
    });
  }
}

export default TradeTable;
