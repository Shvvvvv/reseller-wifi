import money from "currency-formatter";

export const formatRupiah = (nominal) => {
  return money.format(nominal, { locale: "id-ID" });
};
