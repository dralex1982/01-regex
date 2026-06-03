const validateEcmaScriptText = text => {
    const pattern = /ecmascript([1-9]|1[1-6])?$/i;
    return pattern.test(text);
}

const validateDomainZone = text => {
    const pattern = /^\w(\w|[.-])*\.(com|org|il)$/i;
    return pattern.test(text);
}

const validateCreditCardNumber = text => {
    const pattern = /^\d{8,16}$/;
    return pattern.test(text);
}

const validateEnglishDateFormat = text => {
    const pattern = /^(0[1-9]|[1|2]d|3[0|1])\.(0[1-9]|1[0-2])\.\d{4}$/;
    return pattern.test(text);
}

const validateISODateFormat = text => {
    const pattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1|2]d|3[0|1])$/;
    return pattern.test(text);
}

const validatePhoneNumberFormat = text => {
    const pattern = /^\+\d{2}\(\d{2}\)\d{4}-\d{4}$/;
    return pattern.test(text);
}

const validateNumberLEQ255 = text => {
    const pattern = /^\d$|(^[1-9]\d$)|(^1\d{2}$)|^2([0-4]\d)|(5[0-5])$/;
    return pattern.test(text);
}

export {
    validateEcmaScriptText,
    validateDomainZone,
    validateCreditCardNumber,
    validateEnglishDateFormat,
    validateISODateFormat,
    validatePhoneNumberFormat, validateNumberLEQ255
};