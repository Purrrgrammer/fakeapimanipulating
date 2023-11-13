import { JResponse } from "@/interface/model";
import axios from "axios";
import { handleResponse } from "@/handler";
import { URL } from "@/utillity/constant";

export const commentService = () => {
  return {
    getComment: async (id: string): Promise<JResponse> => {
      try {
        const response = await axios.get(`${URL}/${id}`);
        console.log("comment response", response);
        return handleResponse.success(response);
      } catch (error: any) {
        return error;
      }
    },
  };
};
