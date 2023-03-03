import axios from "axios";

const getVoucherTwoAPI = async () => {
  try {
    let response = await axios.get(
      "https://indiwebmallapi.onrender.com/vouchers"
    );
    return response.data;
  } catch (error) {
    console.log("error:", error);
  }
};

export default getVoucherTwoAPI;
