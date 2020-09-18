export const CHANGE_TIME = 'CHANGE_TIME';

export const changeTime = (time) => ({
    type: CHANGE_TIME,
    time: !time,
})