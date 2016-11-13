/*jshint esversion: 6, node: true*/
function logger(namespace) {
    return console.log.bind(console, namespace);
}

module.exports = logger;
