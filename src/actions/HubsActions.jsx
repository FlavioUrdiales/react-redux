import axios from "axios";


export const getHubs = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:6969/hub/getAll");
            dispatch({
                type: "GET_HUBS",
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    }

}


