export const deleteAllUser = (users) => {
    return {
        type: "ACTION_DELETE_AllUSER",
        payload: users,
    }
   
}

export const deleteAnyUser = (users) => {
    return {
        type: "ACTION_DELETE_ANYUSER",
        payload: users
    }
}

export const sortUserAge = (users) => {
    return {
        type: "ACTION_SORT_USERNAME",
        payload: users,
    }
}