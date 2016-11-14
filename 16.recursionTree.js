/*jshint esversion: 6, node: true*/
function getDependencies(tree, answer) {

    answer = answer || [];

    if (!tree) {
        return answer;
    }

    answer = Object.keys(tree)
        .filter(k => k !== 'dependencies' && k !== 'version' && k !== 'name')
        .reduce((dependencies, dependency) => {
            const name = dependency + '@' + tree[dependency].version;

            if (dependencies.indexOf(name) < 0) {
                dependencies.push(name);
                getDependencies(tree[dependency], dependencies);
            }

            return dependencies;
        }, answer);

    return getDependencies(tree.dependencies, answer).sort();
}

module.exports = getDependencies;

const loremIpsum = {
    "name": "lorem-ipsum",
    "version": "0.1.1",
    "dependencies": {
        "optimist": {
            "version": "0.3.7",
            "dependencies": {
                "wordwrap": {
                    "version": "0.0.2"
                }
            }
        },
        "inflection": {
            "version": "1.2.6"
        }
    }
};

console.log(getDependencies(loremIpsum));
