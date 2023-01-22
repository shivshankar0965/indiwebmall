import axios from "axios";

const getVoucherTwoAPI = async () => {
  let response = await axios.get("https://indiwebmallapi.onrender.com/vouchers");
  return response.data;
};

export default getVoucherTwoAPI;