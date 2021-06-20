import { produce } from "immer";

let book = { title: "Harry Pottor" };

function publish(book) {
    return produce(book, draftBook => {
        draftBook.isPublish = true;
    });
}

let update = publish(book);

console.log(book);
console.log(update);


//immer.js的功能與immutable.js的功能類似，一樣用來實現 js 的不可變資料結構
//但相較於immutable少了繁複要做set get 和 toJS的動作