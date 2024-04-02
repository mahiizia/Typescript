import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 2023;
// console.log("my current balance is ", myBalance);
let myPinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (myPinAns.pin === myPin) {
    console.log("correct pin code..!!!!");
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "check balance", "fastcash"]
    }
]);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "enter the amount amount",
            type: "number"
        }
    ]);
    if (amountAns.amount < myBalance) {
        myBalance -= amountAns.amount;
        console.log("now your amount is:" + myBalance);
    }
    else {
        console.log("insufficent balance");
    }
}
else if (operationAns.operation === "check balance") {
    console.log("your current balance is:" + myBalance);
}
if (operationAns.operation === "fastcash") {
    let fast = await inquirer.prompt([
        {
            name: "fastcash",
            message: "how much money you want to with draw",
            type: "list",
            choices: ["1000", "3000", "5000",]
        }
    ]);
    if (fast.fastcash === "1000") {
        myBalance -= fast.fastcash;
        console.log("your remaining balance is:" + myBalance);
    }
    if (fast.fastcash === "3000") {
        myBalance -= fast.fastcash;
        console.log("your remaining balance is:" + myBalance);
    }
    if (fast.fastcash === "5000") {
        myBalance -= fast.fastcash;
        console.log("your remaining balance is:" + myBalance);
    }
}
else {
    console.log("invalid pin code...!!");
}
