#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, // Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let cur_convert = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "which currency would you like to convert from?",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "to",
        type: "list",
        message: "which currency would you like to convert to?",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "amount",
        type: "input", // number
        message: "Please Enter Amount for conversion?",
    }
]);
let fromAmount = currency[cur_convert.from];
let toAmount = currency[cur_convert.to];
let amount = cur_convert.amount;
// convert user amount into Base Currency
let baseAmount = amount / fromAmount;
// convert base currency into required currency amount
let convertCurr = Math.floor(baseAmount * toAmount);
console.log(`Your desired converted amount is:${convertCurr}`);
console.log("Thank You for Using Currency Convertor");
