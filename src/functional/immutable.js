import { Map } from "immutable";

let book = Map({ title: "Harry Pottor" });

function publish(book) {
    return book.set("isPublish", true);
}

book = publish(book);

console.log(book.toJS());