module.exports = {
    "root": true,
    "env": {
        "node": true,
        "commonjs": true,
        "es6": true,
        "jquery": false,
        "jest": false,
        "jasmine": false
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "warn",
            4,
            { "SwitchCase": 2 }
        ],
        "quotes": [
            "warn",
            "double"
        ],
        "semi": [
            "error",
            "never",
            { "beforeStatementContinuationChars": "always" }
        ],
        "no-var": [
            "error"
        ],
        "no-console": [
            "error"
        ],
        "no-unused-vars": [
            "warn"
        ],
        "no-mixed-spaces-and-tabs": [
            "warn"
        ]
    }
};
