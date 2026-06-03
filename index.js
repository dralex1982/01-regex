import {
    validateCreditCardNumber,
    validateDomainZone,
    validateEcmaScriptText,
    validateEnglishDateFormat,
    validateISODateFormat, validateNumberLEQ255,
    validatePhoneNumberFormat
} from "./service/validate.js";

let text = 'ECMAScript16';
let check = validateEcmaScriptText(text)

console.log(check);

text = 'abra-kadabra.il';
check = validateDomainZone(text);
console.log(check);

let numberCard = '325436557';
check = validateCreditCardNumber(numberCard);
console.log(check);

let englishDate = '03.06.2025';
check = validateEnglishDateFormat(englishDate);
console.log(check);

let ISODate = '2025-06-03';
check = validateISODateFormat(ISODate);
console.log(check);

let phoneNumber = '+99(99)9999-9999';
check = validatePhoneNumberFormat(phoneNumber);
console.log(check);

let number = '255';
check = validateNumberLEQ255(number);
console.log(check);