const messages =
[
    "Luis",
    "Camila",
    "Andrea",
    "Alejandro",
    "Lucia",
    "Ana",
    "Carol",
    "Jose",
    "Julian",
    "Hawer",
    "Stefany",
    "Mateo",
    "Jhon",
    "Michael",
    "Valentina",
    "Adrian"
];

const randomMsg = () =>
{
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg }; 