#! /usr/bin/env node  
//shabang
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First number", type: "number", name: "firstNumber" },
    { message: "Enter Second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
if (answer.operator === "addition") {
    console.log("Your answer is" + " " + (answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "subtraction") {
    console.log("Your answer is" + " " + (answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "multiplication") {
    console.log("Your answer is" + " " + (answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "division") {
    console.log("Your answer is" + " " + (answer.firstNumber / answer.secondNumber));
}
else {
    console.log("please select valid operator");
}
