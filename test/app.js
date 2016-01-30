import * as Con from "../src/constants"

import {expect} from 'chai';
import request from 'superagent';

describe('加法函数的测试', function() {
    it('1 加 3 应该等于 4', function() {
        expect(Con.add(1, 3)).to.be.equal(4);
    });
});


describe('试试其他的', () => {
    it('测试方法2', function() {
        expect(Con.add(1, 3)).to.be.equal(4);
    });
});

var foo = {
    name: "wangkai"
}



// describe('expect', () => {
//     it('expect 1111', () => {
//         expect(foo).to.be.deep.equal({
//             name: "wangkai"
//         })

//         expect(4 + 5).to.be.equal(9)

//         expect("test").to.be.a('string')
//         expect(foo).to.be.an("object")

//         expect([1]).to.not.be.empty
//     })
// })


/**

describe('async.test.js - 异步测试', () => {
    it('异步请求应该返回一个对象', (done) => {
        request
            .get('https://baidu.com')
            .end((err, res) => {
                // console.log(res.text);
                expect(res).to.be.an('object');
                done();
            });
    });
});

*/



// describe('hooks', function() {

//     before(function() {
//         // 在本区块的所有测试用例之前执行
//         console.log("...before");
//     });

//     after(function() {
//         // 在本区块的所有测试用例之后执行
//         console.log("after....");
//     });

//     beforeEach(function() {
//         // 在本区块的每个测试用例之前执行
//         console.log("...beforeEach");
//     });

//     afterEach(function() {
//         // 在本区块的每个测试用例之后执行
//         console.log("afterEach...");
//     });

//     it.only('hook 前后1', () => {
//         expect(1).to.be.equal(1)

//     })

//     it('hook 前后2', () => {
//         expect(1).to.be.equal(1)

//     })

//     // test cases
// });
