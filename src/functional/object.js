const person = {
    name: "John"
    , address: {
        country: "USA",
        city: "San Francisco"
    }
};
const update = {
    ...person,
    address: {
        ...person.address,
        city: "New York"
    },
    name: "Bob"
};
console.log(update);