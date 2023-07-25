import { CommentResponse, JResponse } from '@/interface/placeHolder';
import axios from 'axios';
import { handleResponse } from '@/handler';
import { URL } from "@/utillity/constant"


export const postDetailService = () => {
    return {
        getDetail: async (id: string): Promise<JResponse> => {
            try {
                const response = await axios.get(`${URL}/${id}`)
                return handleResponse.success(response);
            } catch (error: any) {
                return error
            };
        },
        getComment: async (id: string): Promise<CommentResponse> => {
            try {
                const response = await axios.get(`${URL}/${id}/comments`)
                console.log("postId comment response", response)
                return handleResponse.success(response);
            } catch (error: any) {
                return error
            };
        }
    };
};
