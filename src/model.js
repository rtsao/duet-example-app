const {model, value, localStorage} = require('duet');

module.exports = (initialState) => {
    const count = value(initialState != null ? parseInt(initialState, 10) : 0);

    count(function (state) {
        localStorage('count', state);
    });

    return model({
        count: count
    });
};
