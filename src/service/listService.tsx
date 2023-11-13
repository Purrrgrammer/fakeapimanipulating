// import { APOD_URL } from "@/utillity/constant"
// import { API_KEY } from "@/utillity/constant"
import { URL } from "@/utillity/constant";
// import { jsonplaceholderResponse } from "@/interface/placeHolder"
// import { handleResponse } from "@/handler"
import axios from "axios";
import { JResponse } from "@/interface/model";
import { handleResponse } from "@/handler";

export const mainService = () => {
  return {
    callService: async (): Promise<JResponse> => {
      try {
        const response = await axios.get(`${URL}`);
        console.log("service response", response);
        console.log(handleResponse.success(response)); //extract status and data in form of J
        return handleResponse.success(response);
      } catch (error: any) {
        return error;
      }
    },
  };
};
