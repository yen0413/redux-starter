import { compose, pipe } from "lodash/fp";

let input = "  java script  ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();

const wrap = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));


//pipe function內部僅可以放function並帶單一個變數
const tranform_pipe = pipe(trim, toLowerCase, wrap("div"));
tranform_pipe(input);



//***curring 理論***
function add(a) {
    return function (b) {
        return a + b;
    }
}
console.log(add(1)(2)); //3


//將上方的function轉換成箭頭函式
const add2 = a => b => a + b;  // (a,b) => a + b
console.log(add2(1)(2)); //3