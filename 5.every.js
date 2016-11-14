/*jshint esversion: 6, node: true*/
function checkUsersValid(goodUsers) {
    return submittedUsers => {
        return submittedUsers.every(u => {
            return goodUsers.some(good => good.id === u.id);
        });
    };
}

module.exports = checkUsersValid;
