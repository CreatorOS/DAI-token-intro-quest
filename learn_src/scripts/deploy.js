const { ethers } = require("hardhat");
const hre = require("hardhat"); 

async function main() {
    const [deployer] = await ethers.getSigners(); 

    console.log("Deploying contracts with the account:", deployer.address);

    const DAI = await hre.ethers.getContractFactory("DAI"); 
    const dai = await DAI.deploy(); 

    await dai.deployed(); 

    console.log("DAI deployed to:", dai.address); 
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    }); 
