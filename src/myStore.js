/**
 * 简单版 store
 * getState 当前状态
 * dispatch 触发一个action 改变状态 并且调用监听回调函数
 * subscribe 注册一个监听函数
 */
const createStore = (reducer) => {
    let state; // 整个程序的状态
    let listeners = []; // 所有注册监听器

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state,action);
        listeners.forEach((listener)=>{
            listener();
        });

    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return ()=>{
            //删除掉该监听函数
            listeners = listeners.filter( lsr =>{
                lsr != listener
            });
        }
    };
    //初始化状态
    dispatch({});

    return {
        getState,
        dispatch,
        subscribe
    };
}

export default createStore;
