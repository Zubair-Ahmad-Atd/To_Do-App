import inquirer from "inquirer";
// list 
//function 
// 
let todos = ["zubair", "ahmad"];
const createTodo = async (arr) => {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "What to do?",
            choices: ["add", "update", "delete", "view"]
        });
        if (ans.select === "add") {
            let userAns = await inquirer.prompt({
                type: "input",
                name: "item",
                message: "add the item"
            });
            arr.push(userAns.item);
            console.log(arr);
            return;
        }
        // UPDATE
        if (ans.select === "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                name: "updatetodo",
                message: "which item to update?",
                choices: arr.map(item => item)
            });
            console.log(updateTodo);
            let addTodo = await inquirer.prompt({
                type: "input",
                name: "updatedtodo",
                message: "add new item...",
            });
            let newarr = arr.filter(val => val !== updateTodo.updatetodo);
            arr = [...newarr, addTodo.updatedtodo];
            console.log(arr);
            return;
        }
        //DELETE ITEM
        if (ans.select === "delete") {
            let deletetodo = await inquirer.prompt({
                type: "list",
                name: "deletedtodo",
                message: "Which item to delete....?",
                choices: arr.map(item => item)
            });
            let newarr = arr.filter(val => val !== deletetodo.deletedtodo);
            arr = [...newarr];
            console.log(arr);
            return;
        }
        if (ans.select === "view") {
            console.log(arr);
            return;
        }
    } while (true);
};
createTodo(todos);
