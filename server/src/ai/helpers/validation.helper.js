const requireField = (object, fieldName) => {

    if (!(fieldName in object)) {
        throw new Error(`Missing required field: ${fieldName}`);
    }

};

const requireFields = (object, fields) => {

    for (const field of fields) {
        requireField(object, field);
    }

};

const requireBoolean = (object, fieldName) => {

    if (typeof object[fieldName] !== "boolean") {
        throw new Error(`Field "${fieldName}" must be a boolean.`);
    }

};

const requireString = (object, fieldName) => {

    if (typeof object[fieldName] !== "string") {
        throw new Error(`Field "${fieldName}" must be a string.`);
    }

};

const requireNumber = (object, fieldName) => {

    if (typeof object[fieldName] !== "number") {
        throw new Error(`Field "${fieldName}" must be a number.`);
    }

};

const requireArray = (object, fieldName) => {

    if (!Array.isArray(object[fieldName])) {
        throw new Error(`Field "${fieldName}" must be an array.`);
    }

};

const requireObject = (object, fieldName) => {

    const value = object[fieldName];

    if (
        typeof value !== "object" ||
        value === null ||
        Array.isArray(value)
    ) {
        throw new Error(`Field "${fieldName}" must be an object.`);
    }

};

module.exports = {
    requireField,
    requireFields,
    requireBoolean,
    requireString,
    requireNumber,
    requireArray,
    requireObject,
};