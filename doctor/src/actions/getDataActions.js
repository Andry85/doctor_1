export const GET_NAME = 'GET_NAME';
export const GET_PHONE = 'GET_PHONE';
export const GET_EMAIL = 'GET_EMAIL';
export const GET_DATE = 'GET_DATE';



export const changeName = (data) => ({
    type: GET_NAME,
    data: data
})

export const changePhone = (data) => ({
    type: GET_PHONE,
    data: data
})

export const changeEmail = (data) => ({
    type: GET_EMAIL,
    data: data
})

export const sendDate = (data) => ({
    type: GET_DATE,
    data: data
})


