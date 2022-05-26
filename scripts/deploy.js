const hre = require("hardhat");

const main = async () => {
    const scrabookContractFactory = await hre.ethers.getContractFactory('Scrapbook');
    const scrapbookContract = await scrabookContractFactory.deploy();
    await scrapbookContract.deployed();
    console.log("contract deployed to:", scrapbookContract.address);
}

const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();