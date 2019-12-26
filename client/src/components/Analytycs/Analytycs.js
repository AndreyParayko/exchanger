import React from "react";
import "./analytycs.scss";
import { getExchangeRate } from "../../common/api";
import TradeTable from "../TradeTable/TradeTable";

class Analytycs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: [],
      neededCurrency: [[], [], [], [], [], [], [], []]
    };
  }
  render() {
    const { neededCurrency } = this.state;
    let Rates = {
      BYN: neededCurrency[0].Amount / neededCurrency[0].Units,
      USD: neededCurrency[1].Amount / neededCurrency[1].Units,
      PLN: neededCurrency[2].Amount / neededCurrency[2].Units,
      EUR: neededCurrency[3].Amount / neededCurrency[3].Units,
      MDL: neededCurrency[4].Amount / neededCurrency[4].Units,
      RUB: neededCurrency[5].Amount / neededCurrency[5].Units,
      RON: neededCurrency[6].Amount / neededCurrency[6].Units,
      GBP: neededCurrency[7].Amount / neededCurrency[7].Units
    };
    if (neededCurrency) {
      console.log(neededCurrency);
    }
    return (
      <div>
        <table className="tableCourse">
          <caption>Курс валют</caption>
          <tr className="tableCourse">
            <th className="tableCourse">{neededCurrency[0].CurrencyCodeL}</th>
            <th className="tableCourse">{neededCurrency[1].CurrencyCodeL}</th>
            <th className="tableCourse">{neededCurrency[2].CurrencyCodeL}</th>
            <th className="tableCourse">{neededCurrency[3].CurrencyCodeL}</th>
            <th className="tableCourse">{neededCurrency[4].CurrencyCodeL}</th>
            <th className="tableCourse">{neededCurrency[5].CurrencyCodeL}</th>
            <th className="tableCourse">{neededCurrency[6].CurrencyCodeL}</th>
            <th className="tableCourse">{neededCurrency[7].CurrencyCodeL}</th>
          </tr>
          <tr className="tableCourse">
            <td className="tableCourse">{Rates.BYN}</td>
            <td className="tableCourse">{Rates.USD}</td>
            <td className="tableCourse">{Rates.PLN}</td>
            <td className="tableCourse">{Rates.EUR}</td>
            <td className="tableCourse">{Rates.MDL}</td>
            <td className="tableCourse">{Rates.RUB}</td>
            <td className="tableCourse">{Rates.RON}</td>
            <td className="tableCourse">{Rates.GBP}</td>
          </tr>
        </table>
        <table>
          <tr>
            <th>Currency</th>
            <th></th>
            <th>Name</th>
            <th>Buy</th>
            <th>Sell</th>
            <th></th>
            <th></th>
          </tr>
        </table>
        <TradeTable />
      </div>
    );
  }

  componentDidMount() {
    getExchangeRate().then(result => {
      let neededCurrency = [];
      result.data.map(currency => {
        if (currency.CurrencyCodeL === "MDL") {
          neededCurrency.push(currency);
        } else if (currency.CurrencyCodeL === "USD") {
          neededCurrency.push(currency);
        } else if (currency.CurrencyCodeL === "EUR") {
          neededCurrency.push(currency);
        } else if (currency.CurrencyCodeL === "RUB") {
          neededCurrency.push(currency);
        } else if (currency.CurrencyCodeL === "PLN") {
          neededCurrency.push(currency);
        } else if (currency.CurrencyCodeL === "RON") {
          neededCurrency.push(currency);
        } else if (currency.CurrencyCodeL === "BYN") {
          neededCurrency.push(currency);
        } else if (currency.CurrencyCodeL === "GBP") {
          neededCurrency.push(currency);
        }
      });
      this.setState({
        rate: result.data,
        neededCurrency: neededCurrency
      });
    });
  }
}

export default Analytycs;
