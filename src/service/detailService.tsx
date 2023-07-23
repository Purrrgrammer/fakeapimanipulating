import { JResponse } from '@/interface/placeHolder';
import axios from 'axios';
import { handleResponse } from '@/handler';
import { URL } from "@/utillity/constant"


export const postDetailService = () => {
    return {
        getDetail: async (id: string
        ): Promise<JResponse> => {
            try {
                const response = await axios.get(`${URL}/${id}`)
                return handleResponse.success(response);
            } catch (error: any) {
                return error
            };
        }
    };
};
