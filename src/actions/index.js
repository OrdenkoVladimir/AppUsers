export const deleteAllUser = (users) => {
    return {
        type: "ACTION_DELETE_AllUSER",
        payload: users,
    }
   
}

export const deleteAnyUser = (rand) => {
    return {
        type: "ACTION_DELETE_ANYUSER",
        payload: rand
    }
}

export const sortUserAge = (users) => {
    return {
        type: "ACTION_SORT_USERAGE",
        payload: users,
    }
}

export const newUserAdd = (user) => {
    return {
        type: "ACTION_NEW_USERADD",
        payload: user,
    }
}