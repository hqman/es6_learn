import {expect} from 'chai';

import {createStore} from "redux";

const counter = (preState = 0, action) => {
    if (action && action.type !==  undefined) {
        switch (action.type) {
            case "INC":
                return preState + 1;
            case "DESC":
                return preState - 1;
            default:
                return preState;
        }
    }
    return preState;
}

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

    store.subscribe(render)

    render()

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






