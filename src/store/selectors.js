export  const initState={
    user:{},
    jogs:[],
    isLoading: false,
    error:'',
    startDate: new Date(0).getTime().toString(),
    endDate: new Date().getTime().toString()
};
export const userSelector = (reducer ) => reducer.user;
export const endDateSelector = (reducer ) => reducer.endDate;
export const startDataSelector = (reducer) => reducer.startDate;
export const jogsSelector = (reducer) => reducer.jogs;