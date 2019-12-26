import axios from "axios";

export function getNews() {
  return axios.get("https://cdn.segodnya.ua/data/last_news_uk.json");
  //return axios.get("https://finance.yahoo.com/rss/topstories");
}
export function getExchangeRate() {
  return axios.get(
    "https://old.bank.gov.ua/NBU_Exchange/exchange?date=22.10.2019&json"
  );
}
