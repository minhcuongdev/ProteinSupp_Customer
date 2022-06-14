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
  },
  updatedBill: (billId, payload) => {
    return axiosClient.put(`/bills/${billId}`, payload)
  }
}

export default billApi;