import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://e-commerce-web-app-server-fawn.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;