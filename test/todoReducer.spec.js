import deepFreeze from 'deep-freeze';
import {expect} from "chai"
import {createStore} from "redux";

const todo = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                id: action.id,
                text: action.text,
                compeleted: false
            };
        case "TOGGLE_TODO":
            {
                if (state.id != action.id) {
                    return state;
                }

                return Object.assign({}, state, {
                    compeleted: !state.compeleted
                });
            }
        default:
            return state;
    }
}



const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, todo(undefined, action)];
        case "TOGGLE_TODO":
            return state.map(atodo => todo(atodo, action))
    }
    return state;
}

const visibility = (state = "", action) => {
    switch (action.type) {
        case "SET_VISIBILITY_FILTER":
            return action.filter;
        default:
            return state;
    }
}

const todoApp = (state = {},action) =>{
  return {
    todos:todos(state.todos,action),
    visibility:visibility(state.visibility,action)
  }
}

describe('combineReducer', ()=> {
  it('todo app combine  filter',   ()=> {
    const store= createStore(todoApp);

     const action = {
            id: 0,
            text: 'learn redux',
            type: "ADD_TODO"
        }

  var  newState =  store.dispatch(action);
   console.dir(newState);
     newState =  store.dispatch({type:"SET_VISIBILITY_FILTER",filter:"SHOW_COMPLETED"})
   console.dir(newState);

   console.dir(store.getState())

  })
})




describe('test todo reducer', () => {
    it('add a todo', () => {
        const stateBefore = [];

        const stateAfter = [{
            id: 0,
            text: 'learn redux',
            compeleted: false
        }];

        const action = {
            id: 0,
            text: 'learn redux',
            type: "ADD_TODO"
        }

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(todos(stateBefore, action)).to.deep.equal(stateAfter);

    })

    it('toggle a todo ', () => {
        const stateBefore = [{
            id: 0,
            text: 'learn redux',
            compeleted: false
        }, {
            id: 1,
            text: 'to buy milk',
            compeleted: false
        }];
        const stateAfter = [{
            id: 0,
            text: 'learn redux',
            compeleted: false
        }, {
            id: 1,
            text: 'to buy milk',
            compeleted: true
        }];

        const action = {
            id: 1,
            type: "TOGGLE_TODO"
        };
        console.dir(todos(stateBefore, action))
        expect(todos(stateBefore, action)).to.deep.equal(stateAfter);
    })

})
