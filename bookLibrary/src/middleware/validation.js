function validation(input) {
    const lowercaseInput = input.toLowerCase();

    if (input !== lowercaseInput) {
        console.log("Character is not lowercase.");
        return false;
    } else {
        console.log("Successfully executed.");
        return true;
    }
}

module.exports = validation;
