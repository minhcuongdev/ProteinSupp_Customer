import axiosClient from "./axiosClient";

const billApi = {
  getAllBill: () => {
    return axiosClient.get("/bills")
  },
  createBill: (payload) => {
    return axiosClient.post("/bills", payload)
  },
  getOrderBill: () => {
    return axiosClient.get("/bills?delivered=true")
  }
}

export default billApi;