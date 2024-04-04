//below is app.js
// let contractAddress;

// async function fetchContractAddress() {
//     const response = await fetch('ContractAddress.json');
//     const data = await response.json();
//     return data.TodoListAddress;
// }

// document.addEventListener('DOMContentLoaded', async () => {
//     contractAddress = await fetchContractAddress();
//     init(contractAddress);
// });

document.addEventListener('DOMContentLoaded', () => {
    init();
});

async function init() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(todoListAddress, todoListABI, signer);

            document.getElementById('createTaskBtn').addEventListener('click', async () => {
                const taskInput = document.getElementById('newTask');
                const task = taskInput.value.trim();
                if (task) {
                    await createTask(task, contract);
                    taskInput.value = ''; // Clear input after task creation
                } else {
                    alert('Please enter a task.');
                }
            });

            await displayTasks(contract);
        } catch (error) {
            console.error(error);
            alert('An error occurred with Ethereum interaction.');
        }
    } else {
        alert('Please install MetaMask to use this feature.');
    }
}

async function createTask(taskContent, contract) {
    try {
        const tx = await contract.createTask(taskContent);
        await tx.wait(); // Wait for the transaction to be mined
        console.log('Task created successfully.');
        await displayTasks(contract); // Refresh the tasks list
    } catch (error) {
        console.error('Error creating task:', error);
        alert('Failed to create a task.');
    }
}

async function displayTasks(contract) {
    try {
        const taskCount = await contract.taskCount();
        const taskCountNumber = taskCount.toNumber();

        const taskListElement = document.getElementById('taskList');
        taskListElement.innerHTML = ''; // Clear existing tasks

        for (let i = 1; i <= taskCountNumber; i++) {
            const task = await contract.tasks(i);
            const taskElement = document.createElement('li');
            taskElement.textContent = `Task ${task.id.toNumber()}: ${task.content} - Completed: ${task.completed}`;
            taskListElement.appendChild(taskElement);
        }
    } catch (error) {
        console.error('Error displaying tasks:', error);
        alert('Failed to display tasks.');
    }
}

const todoListABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "taskCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tasks",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "content",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "completed",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_content",
          "type": "string"
        }
      ],
      "name": "createTask",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
];

const todoListAddress = "0x41e29bff4eC71979CE0C6FB87d8E9d4176d6Fb3f"; // Replace with your contract's address

