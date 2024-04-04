// app.js
const contractAddress = '0xA31C31d3027cfcFC0b249d68C425386D2Af4ccb9';

document.addEventListener('DOMContentLoaded', async () => {
    if (typeof ethereum !== 'undefined') {
        ethereum.on('accountsChanged', function (accounts) {
            console.log('Account changed:', accounts[0]);
            window.location.reload(); // Reload the interface with the first account
        });
    }
    await init();
});

async function init() {
    if (typeof ethereum !== 'undefined') {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, votingABI, signer);

        document.getElementById('voteButton').addEventListener('click', async () => {
            const selectedCandidateId = parseInt(document.getElementById('voteOption').value);
            await voteForCandidate(selectedCandidateId, contract);
        });

        await displayResults(contract); // Display results at initialization
    } else {
        console.error("Ethereum object doesn't exist!");
    }
}

async function voteForCandidate(candidateId, contract) {
  console.log("Attempting to cast vote for candidate ID:", candidateId);
  try {
      const tx = await contract.vote(candidateId);
      await tx.wait();
      console.log('Vote cast successfully.');
      await displayResults(contract);
  } catch (error) {
      console.error('Error casting vote:', error);
      alert('Failed to cast vote.');
  }
}

// Define the displayResults function
async function displayResults(contract) {
  const resultsElement = document.getElementById('votingResults');
  resultsElement.innerHTML = ''; // Clear previous results

  const candidatesCount = await contract.candidatesCount();
  console.log("Candidates Count:", candidatesCount.toNumber());

  for (let i = 1; i <= candidatesCount.toNumber(); i++) {
      const candidate = await contract.candidates(i);
      console.log(`Candidate ${i}:`, candidate);
      const listItem = document.createElement('li');
      listItem.textContent = `${candidate.name}: ${candidate.voteCount.toNumber()} votes`;
      resultsElement.appendChild(listItem);
  }
}

// Update this with your voting contract's ABI
const votingABI = [
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_voter",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_candidateId",
        "type": "uint256"
      }
    ],
    "name": "Voted",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "candidates",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "voteCount",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "candidatesCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "hasVoted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "votes",
    "outputs": [
      {
        "internalType": "address",
        "name": "voter",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "candidateId",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_candidateId",
        "type": "uint256"
      }
    ],
    "name": "vote",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];