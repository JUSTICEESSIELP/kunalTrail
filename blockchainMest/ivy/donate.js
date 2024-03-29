import { ethers } from "ethers";
export const CONTRACT_ADDRESS = "0x51D59B6A41000cE33B08715B6dc004722b1e6F47";

 const abi = [
    {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
    },
    {
    "anonymous": false,
    "inputs": [
    {
    "indexed": false,
    "internalType": "address",
    "name": "donor",
    "type": "address"
    },
    {
    "indexed": false,
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
    }
    ],
    "name": "DonationMade",
    "type": "event"
    },
    {
    "anonymous": false,
    "inputs": [
    {
    "indexed": true,
    "internalType": "address",
    "name": "recipient",
    "type": "address"
    },
    {
    "indexed": false,
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
    },
    {
    "indexed": false,
    "internalType": "uint256",
    "name": "timestamp",
    "type": "uint256"
    }
    ],
    "name": "WithdrawalMade",
    "type": "event"
    },
    {
    "inputs": [
    {
    "internalType": "string",
    "name": "_name",
    "type": "string"
    },
    {
    "internalType": "string",
    "name": "_about",
    "type": "string"
    },
    {
    "internalType": "uint256",
    "name": "_goalAmount",
    "type": "uint256"
    }
    ],
    "name": "createOrganization",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "getAllOrganizations",
    "outputs": [
    {
    "components": [
    {
    "internalType": "address",
    "name": "creator",
    "type": "address"
    },
    {
    "internalType": "string",
    "name": "name",
    "type": "string"
    },
    {
    "internalType": "string",
    "name": "about",
    "type": "string"
    },
    {
    "internalType": "uint256",
    "name": "goalAmount",
    "type": "uint256"
    },
    {
    "internalType": "uint256",
    "name": "currentAmount",
    "type": "uint256"
    },
    {
    "internalType": "uint256",
    "name": "createdTimestamp",
    "type": "uint256"
    }
    ],
    "internalType": "struct Donate.Organization[]",
    "name": "",
    "type": "tuple[]"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "getOrganiationsCount",
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
    "name": "index",
    "type": "uint256"
    }
    ],
    "name": "getOrganization",
    "outputs": [
    {
    "components": [
    {
    "internalType": "address",
    "name": "creator",
    "type": "address"
    },
    {
    "internalType": "string",
    "name": "name",
    "type": "string"
    },
    {
    "internalType": "string",
    "name": "about",
    "type": "string"
    },
    {
    "internalType": "uint256",
    "name": "goalAmount",
    "type": "uint256"
    },
    {
    "internalType": "uint256",
    "name": "currentAmount",
    "type": "uint256"
    },
    {
    "internalType": "uint256",
    "name": "createdTimestamp",
    "type": "uint256"
    }
    ],
    "internalType": "struct Donate.Organization",
    "name": "",
    "type": "tuple"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "uint256",
    "name": "organizationIndex",
    "type": "uint256"
    }
    ],
    "name": "makeDonation",
    "outputs": [],
    "stateMutability": "payable",
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
    "name": "organizations",
    "outputs": [
    {
    "internalType": "address",
    "name": "creator",
    "type": "address"
    },
    {
    "internalType": "string",
    "name": "name",
    "type": "string"
    },
    {
    "internalType": "string",
    "name": "about",
    "type": "string"
    },
    {
    "internalType": "uint256",
    "name": "goalAmount",
    "type": "uint256"
    },
    {
    "internalType": "uint256",
    "name": "currentAmount",
    "type": "uint256"
    },
    {
    "internalType": "uint256",
    "name": "createdTimestamp",
    "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "owner",
    "outputs": [
    {
    "internalType": "address",
    "name": "",
    "type": "address"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "receivedTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "trackTokensReceived",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "uint256",
    "name": "organizationIndex",
    "type": "uint256"
    }
    ],
    "name": "withdrawTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "withdrawnTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
    }
    ]


export const donateContract = new ethers.Contract(CONTRACT_ADDRESS, abi);
