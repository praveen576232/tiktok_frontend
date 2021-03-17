import Axios from 'axios';
const instance = Axios.create({
    baseURL:'https://tiktok-clone-backend-app.herokuapp.com/'
});
export default instance;