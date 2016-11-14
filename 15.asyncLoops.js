/*jshint esversion: 6, node: true*/
//  * userIds: an Array of numeric user ids.
//  * load: a Function used to load user objects. Expects a numeric id and a callback. The callback will be called with the result of loading the user with the specified id (either a user object or null).
//  * done: a Function that expects an Array of user objects (as retrieved from `load`).
function loadUsers(userIds, load, done) {
    const users = [];
    let completed = 0;

    userIds.forEach((id, index) => {
        load(id, user => {
            users[index] = user;
            completed++;

            if (completed === userIds.length) {
                return done(users);
            }
        });
    });
}

module.exports = loadUsers;
