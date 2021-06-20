import { compose, pipe } from "lodash/fp";

let input = "  java script  ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));
//use lodash to replace above function
//利用lodash提供的方法達到上面的效果
//compose的執行順序為由右至左
const tranform = compose(wrapInDiv, toLowerCase, trim);
tranform(input);

//pipe為由左至右
const tranform_pipe = pipe(trim, toLowerCase, wrapInDiv);
tranform_pipe(input);