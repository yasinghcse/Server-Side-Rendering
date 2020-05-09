export const FETCH_USES= "fetch_users";
export const fetchUsers = async(dispatch, getState, axiosInstance) => {
    let res;
    try {
        res = await axiosInstance.get("/users");
    }
    catch(e) {
        console.log("async error found", e);
    }
    
    dispatch({
        type: FETCH_USES,
        payload: res && res.data
    });

}


export const FETCH_CURRENT_USER= "fetch_current_user";
export const fetchCurrentUser = async(dispatch, getState, axiosInstance) => {
    let res;
    try {
        res = await axiosInstance.get("/current_user");
    }
    catch(e) {
        console.log("async error found", e);
    }
    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res && res.data
    });

}

export const FETCH_ADMIN= "fetch_admin";
export const fetchAdmin = async(dispatch, getState, axiosInstance) => {
    let res;
    try {
        res = await axiosInstance.get("/admins");
    }
    catch(e) {
        console.log("async error found", e);
    }
    dispatch({
        type: FETCH_ADMIN,
        payload: res && res.data
    });

}