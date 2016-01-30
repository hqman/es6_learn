import {expect} from 'chai';

import {createStore} from "redux";

import counter  from "./countReducer"

describe('test state', () => {
    var currentState;
    before(function() {
        console.log("...before");
        currentState = counter(0);
    });

    it('INC ACTION', () => {
        currentState = counter(currentState, {
            type: "INC"
        })
        expect(currentState).to.be.equal(1);
    })

    it('INC ACTION', () => {
        currentState = counter(currentState, {
            type: "DESC"
        })
        expect(currentState).to.be.equal(0);
    })

})


describe('redux createStore', ()=> {

    const store = createStore(counter)

    const render =()=>{
        console.log('  log state:',store.getState());
    };
    //数据变化 回调函数 ：去更新UI
    store.subscribe(render)

    render() //先调用一次初始化开始的state

    it('dispath action',   ()=> {
        store.dispatch({
            type: "INC"
        });
        expect(store.getState()).to.be.equal(1);
    })

    it('dispath action',   ()=> {
        store.dispatch({
            type: "INC"
        });
        expect(store.getState()).to.be.equal(2);
    })


})






