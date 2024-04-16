import axios from "axios";


export default axios.create( {
    baseURL: "https://api.rawg.io/api",
    params: {
        key : "91a062106bae423a85dc587d874d44e5"
    }

})