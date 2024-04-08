#! /usr/bin/env/ node
import inquirer from "inquirer";
let mybalance = 10000; // dollers
let mypin = 1111;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin code........ ",
        type: "number",
    },
]);
if (pinAns.pin === mypin) {
    console.log("correct pin code.....");
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "please select any one option",
        type: "list",
        choices: ["withdraw", "fast cash", "check balance"],
    },
]);
// if user select withdraw
if (operationAns.operation === "withdraw") {
    let amountAsk = await inquirer.prompt([
        {
            name: "amount",
            message: "please enter your amount",
            type: "number",
        },
    ]);
    if (amountAsk.amount <= mybalance) {
        let balance = mybalance - amountAsk.amount;
        console.log(`your remaining balance is ${balance}`);
    }
    else {
        console.log(`you have insuficient balance`);
    }
    // if user select fast cash
}
else if (operationAns.operation === "fast cash") {
    let fastcashAns = await inquirer.prompt([
        {
            name: "amount",
            message: "please select any one option.....",
            type: "list",
            choices: ["3000", "7000", "5000", "10000", "15000"],
        },
    ]);
    if (fastcashAns.amount <= mybalance) {
        let balance2 = mybalance - fastcashAns.amount;
        console.log(`your remaining balance is ....${balance2}`);
    }
    else {
        console.log("you have insuficient balance... ");
    }
    // if user select check balance
}
else if (operationAns.operation === "check balance") {
    console.log(mybalance);
}
else {
    console.log("incorrect pin code");
}
