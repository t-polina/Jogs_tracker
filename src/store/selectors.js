export  const initState={
    user:{},
    jogs:[],
    isLoading: false,
    error:''
};
export const userSelector = (reducer ) => reducer.user;
// export const userSelector = (reducer) => reducer.user;
export const jogsSelector = (reducer)=>reducer.jogs;