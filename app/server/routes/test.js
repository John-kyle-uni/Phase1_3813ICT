const docArray = [{ name: "a" , id: 1},{ name: "b" , id: 2},{ name: "c" , id: 3}]
const queryJSON = {}
const queryJSONup = { name: "a"};
const updateJson = {id: 5};
const queryJSONdel = {id : 3};
const operations = require('./operations');

    module.exports = function (client,col) {
        operations.insertDocs(col, docArray,
        () => {
            operations.updateDocs(col, queryJSONup, updateJson,
                () => {
                    operations.removeDocs(col, queryJSONdel,
                        () => {client.close();}
                    )
                })

        });
    };
