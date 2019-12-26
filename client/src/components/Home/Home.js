import React from "react";
import "./home.scss";
import { $ } from "jquery";
// import img from "../../assets/Images/USD.png";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currencyWant: "" };
  }

  CourseCalculator = () => {
    let Rates = {
      BYN: 12.24813,
      USD: 24.975156000000002,
      PLN: 6.521628,
      EUR: 27.904742000000002,
      MDL: 1.439349,
      RUB: 0.3917,
      RON: 5.864312,
      GBP: 32.473805999999996,
      UAH: 1
    };
    let inputValue = +document.getElementById("first").value;
    let firstCurrency = document.getElementById("fCurrensySelect").value;
    let secondCurrency = document.getElementById("sCurrensySelect").value;
    let result = (inputValue * Rates[firstCurrency]) / Rates[secondCurrency];
    return result;
  };

  handleChange = () => {
    let currencyWant = this.CourseCalculator();
    this.setState({
      currencyWant: currencyWant.toFixed(2)
    });
  };

  swapSelectsRates = () => {
    let firstSelect = document.getElementById("firstSelect");
    let secondSelect = document.getElementById("secondSelect");
    let a = firstSelect.value;
    let b = secondSelect.value;
    firstSelect.value = b;
    secondSelect.value = a;
    console.log("click Rates");
  };

  swapSelectsCurrensy = () => {
    let firstSelect = document.getElementById("fCurrensySelect");
    let secondSelect = document.getElementById("sCurrensySelect");
    let a = firstSelect.value;
    let b = secondSelect.value;
    firstSelect.value = b;
    secondSelect.value = a;
    let currencyWant = this.CourseCalculator();
    this.setState({
      currencyWant: currencyWant.toFixed(2)
    });
    console.log("click Curensy");
  };

  render() {
    const { handleChange } = this;
    const { currencyWant } = this.state;
    return (
      <div className="home">
        <div className="currency">
          <div id="exchangeName">Currency exchange.</div>
          <div id="infoTrade">See how much you can save with us.</div>
          <div id="trade">
            {/* <label for="first">I have</label> */}
            <div className="butChange" onClick={this.swapSelectsCurrensy}></div>
            <input
              id="first"
              className="currencyHave"
              name="currencyHave"
              onChange={handleChange}
            />
            <input
              className="currencyWant"
              name="currencyWant"
              disabled="true"
              value={currencyWant}
              onChange={handleChange}
            />
            <select
              className="flag"
              name="flagCurrencyHave"
              onChange={handleChange}
              id="fCurrensySelect"
            >
              <option className="USD" value="USD">
                USD
              </option>
              <option className="UAH" value="UAH">
                UAH
              </option>
              <option className="EUR" value="EUR">
                EUR
              </option>
              <option className="RUB" value="RUB">
                RUB
              </option>
              <option className="PLN" value="PLN">
                PLN
              </option>
              <option className="RON" value="RON">
                RON
              </option>
              <option className="BYN" value="BYN">
                BYN
              </option>
              <option className="GBP" value="GBP">
                GBP
              </option>
              <option className="MDL" value="MDL">
                MDL
              </option>
            </select>
            
            <select
              className="flag"
              name="flagCurrencyWant"
              onChange={handleChange}
              id="sCurrensySelect"
            >
              <option className="USD" value="USD">
                USD
              </option>
              <option className="UAH" value="UAH">
                UAH
              </option>
              <option className="EUR" value="EUR">
                EUR
              </option>
              <option className="RUB" value="RUB">
                RUB
              </option>
              <option className="PLN" value="PLN">
                PLN
              </option>
              <option className="RON" value="RON">
                RON
              </option>
              <option className="BYN" value="BYN">
                BYN
              </option>
              <option className="GBP" value="GBP">
                GBP
              </option>
              <option className="MDL" value="MDL">
                MDL
              </option>
            </select>

            <div id="info">
              Exchange currencies from the comfort of your home, quickly, safely
              and free of charge.
            </div>
          </div>
        </div>
        <div id="ex_rates">
          <div id="ex_p1">Exchange rates</div>
          <div id="ex_p2">Live rates. Update: 18s</div>
          <div className="homeBottom">
            <select className="flag" id="firstSelect">
              <option className="USD" value="USD">
                USD
              </option>
              <option className="UAH" value="UAH">
                UAH
              </option>
              <option className="EUR" value="EUR">
                EUR
              </option>
              <option className="RUB" value="RUB">
                RUB
              </option>
              <option className="PLN" value="PLN">
                PLN
              </option>
              <option className="RON" value="RON">
                RON
              </option>
              <option className="BYN" value="BYN">
                BYN
              </option>
              <option className="GBP" value="GBP">
                GBP
              </option>
              <option className="MDL" value="MDL">
                MDL
              </option>
            </select>
            <div className="swapBtn" onClick={this.swapSelectsRates}></div>
            <select className="flag" id="secondSelect">
              <option className="USD" value="USD">
                USD
              </option>
              <option className="UAH" value="UAH">
                UAH
              </option>
              <option className="EUR" value="EUR">
                EUR
              </option>
              <option className="RUB" value="RUB">
                RUB
              </option>
              <option className="PLN" value="PLN">
                PLN
              </option>
              <option className="RON" value="RON">
                RON
              </option>
              <option className="BYN" value="BYN">
                BYN
              </option>
              <option className="GBP" value="GBP">
                GBP
              </option>
              <option className="MDL" value="MDL">
                MDL
              </option>
            </select>
            <table>
              <tr>
                <th>Currency</th>
                <th>Name</th>
                <th>Buy</th>
                <th>Sell</th>
              </tr>

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
