import React from "react";
import FoodCardListView from "./FoodCardListView";

const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "November",
  "Desember",
];

const FoodCardList = (props) => {
  const { date } = props;
  const hari = days[date.getDay()];
  const tanggal = date.getDate();
  const bulan = months[date.getMonth()];
  const tahun = date.getFullYear();

  const datePicked = `${hari}, ${tanggal} ${bulan} ${tahun}`;

  return React.createElement(FoodCardListView, { ...props, datePicked });
};

export default FoodCardList;
