import axios from "axios";

const getVoucherTwoAPI = async () => {
  let response = await axios.get("http://localhost:8080/vouchers");
  return response.data;
};

export default getVoucherTwoAPI;