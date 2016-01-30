import deepFreeze from 'deep-freeze';
import {expect} from "chai"
const addItem = (list) => {
    return list.concat([0]);
    // return list.push([0]);
}

const removeItem = (list, index) => {
    // return list.splice(index,1);
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ]
}

const updateItem = (list, index, newValue) => {
    return [
        ...list.slice(0, index),
        newValue,
        ...list.slice(index + 1)
    ]
}
describe('测试冻结对象', () => {
    it('add item', () => {
        const listBefore = [1, 2, 3];
        const listAfter = [1, 2, 3, 0];

        deepFreeze(listBefore);

        expect(addItem(listBefore)).to.deep.equal(listAfter);
    })

    it('remove item', () => {
        const listBefore = [1, 2, 3];
        const listAfter = [1, 3];

        deepFreeze(listBefore);

        expect(removeItem(listBefore, 1)).to.deep.equal(listAfter);

    })

    it('update item', () => {
        const listBefore = [1, 2, 3];
        const listAfter = [1, 2,33];

        deepFreeze(listBefore);

        expect(updateItem(listBefore, 2,33)).to.deep.equal(listAfter);

    })
})
