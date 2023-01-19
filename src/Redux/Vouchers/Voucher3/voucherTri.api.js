import axios from "axios";

const getVoucherTriAPI = async () => {
  let response = await axios.get("http://localhost:8080/voucher3");
  return response.data;
};

export default getVoucherTriAPI;