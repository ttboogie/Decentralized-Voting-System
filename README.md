# SDSU Decentralized Voting System

The **SDSU Decentralized Voting System** is a blockchain-based voting platform designed to enhance the security, transparency, and accessibility of student government elections at San Diego State University. This project, developed as part of **CS 596: Fundamentals of Cryptography with Applications to Blockchain** at SDSU, leverages blockchain technology to create an efficient, user-friendly, and secure voting process that minimizes the risk of fraud and human error.

## Table of Contents

- [Project Summary](#project-summary)
- [System Application and Importance](#system-application-and-importance)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [System Architecture](#system-architecture)
- [Getting Started](#getting-started)
- [WorkFlow](#workflow)
- [Future Plans](#future-plans)
- [Contributors](#contributors)
- [Acknowledgments](#acknowledgments)

## Project Summary

The goal of the **SDSU Decentralized Voting System** is to revolutionize student government elections by using blockchain technology to ensure secure, transparent, and accessible voting. This decentralized approach eliminates the need for intermediaries in vote counting, significantly reducing the risk of tampering and human error. This system allows students to vote from any location securely and easily, enhancing participation and trust in the electoral process.

## System Application and Importance

### Why Blockchain?

- **Security**: Blockchain provides a secure platform, reducing fraud and election tampering on campus.
- **Transparency**: Every transaction on the blockchain is recorded and can be verified by anyone, ensuring transparency in the election process.
- **Convenience**: Students can vote from anywhere with a digital wallet, making it easier to participate.

### Who Benefits?

- **Election Organizers**: Simplifies voter registration, tallying results, and reduces the possibility of fraud.
- **University**: Ensures that elections are legitimate and transparent, increasing credibility within and outside the university.
- **SDSU Students**: Provides a convenient, user-friendly platform for voting and running for candidacy.

## Key Features

- **Smart Contracts**: Enforce election rules, manage candidate registration, verify voter eligibility, and prevent double voting.
- **Immutability**: Each vote is securely recorded on the blockchain, making tampering impossible.
- **Real-Time Tallying**: Results are updated in real-time and displayed on the site after the voting period ends.
- **User-Friendly Interface**: Built with a responsive and accessible design to enable easy participation from any device.
- **Digital Wallet Integration**: MetaMask integration for secure transactions and user authentication.

## Technology Stack

- **Frontend**: Bootstrap for styling and layout.
- **Blockchain**: Ethereum blockchain with smart contracts written in Solidity.
- **Backend**: Node.js for server operations.
- **Blockchain Interaction**: Web3.js for communication between the frontend and Ethereum blockchain.
- **Testing and Development**: Truffle for deploying and testing smart contracts, Ganache for local blockchain emulation, MetaMask for secure identity management.

## System Architecture

### Smart Contracts

- **Voting Mechanics**: Smart contracts automate the voting process, verifying voter eligibility, recording votes, and preventing double voting, without requiring a central authority.
- **Voting Time Period**: The contracts enforce a voting period. Transactions outside this period are rejected, and an error message is displayed.
- **Candidate Registration**: Candidates can register through smart contracts, with potential future enhancements to enforce eligibility criteria.
- **Result Tallying**: After voting concludes, the contracts automatically tally votes and display results transparently. Future updates may allow results to be hidden until the voting period ends.

### Ganache Local Blockchain

- **Testing Before Deployment**: Ganache allows for testing the smart contracts in a controlled environment, which helps optimize performance and identify issues before deploying to the main Ethereum network.
- **Rapid Prototyping**: Enables quick deployments and resets, facilitating fast iterations during development.

### Digital Wallet Integration - MetaMask

- **User Identity and Security**: MetaMask securely manages digital identities and assets without exposing private keys.
- **Direct Interaction**: Users interact with the smart contracts via MetaMask, making it easy to participate without needing blockchain knowledge.
- **Secure Transactions**: MetaMask prompts users to confirm transactions, ensuring secure and intentional actions.

## Getting Started

### Prerequisites

- **Node.js**: Install Node.js for server operations.
- **MetaMask**: Install MetaMask for wallet management and Ethereum network integration.
- **Truffle and Ganache**: Required for deploying and testing smart contracts.

### Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/username/sdsu-decentralized-voting-system.git
   cd sdsu-decentralized-voting-system
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Ganache**:
   Launch Ganache to create a local Ethereum blockchain.

4. **Compile and Deploy Smart Contracts**:
   ```bash
   truffle compile
   truffle migrate --network development
   ```

5. **Run the Server**:
   Start the Node.js server:
   ```bash
   node server.js
   ```

6. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000` to access the voting interface.

## WorkFlow

### Election Workflow

1. **Contract Deployment / Ballot Creation**: Initializes the smart contract and sets the voting period countdown.
2. **Adding Candidates**: Allows users to register as candidates, adding their information to the ballot.
3. **Voting**: Students cast their votes, which are securely stored on the blockchain.
4. **Viewing Results**: After the voting period ends, the results are displayed transparently.
5. **End of Process**: Marks the completion of the election, ending any further actions for that event.

### Functionalities

1. **Inputs**:
   - **Voting**: Students submit their RED ID and candidate selection.
   - **Candidate Registration**: Users add their RED ID and name if they wish to be added as candidates.
2. **Outputs**:
   - **Confirmation Messages**: Successful registration, voting, or candidate addition generates confirmation messages.
   - **Election Results**: Tally of votes and announcement of winners after the voting period ends.
   - **Error Messages**: Alerts for issues with registration, voting, or other actions.

## Future Plans

- **Security Improvements**: Continuous security enhancements to protect against vulnerabilities.
- **Integration with Identity Verification Systems**: Utilize RED ID data for more secure voter authentication.
- **Expansion to Other Elections**: Extend the voting system to other university elections.
- **Educational Outreach**: Raise awareness about blockchain technology and decentralized voting.

## Contributors

- **Arha Bhargava**
- **Trevor Thayer**
- **Riley Thompson**

## Acknowledgments

This project was developed as part of **CS 596: Fundamentals of Cryptography with Applications to Blockchain** at San Diego State University. Special thanks to our instructor for guidance on applying cryptographic principles in real-world applications.

## Demonstration

**Video Demo**: [Watch on YouTube](https://www.youtube.com/watch?v=18HZ7HotKfw)

## Conclusion

The SDSU Decentralized Voting System represents a significant advancement in student government elections, providing a secure, transparent, and accessible platform. By leveraging blockchain technology, our system eliminates intermediaries, enhancing the integrity of elections while offering convenience and flexibility for SDSU students. With its user-friendly interface and MetaMask integration, this system empowers students to participate actively in shaping the future of their university.
