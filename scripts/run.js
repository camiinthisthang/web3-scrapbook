
   
const hre = require("hardhat");

const main = async () => {
    const scrapbookContractFactory = await hre.ethers.getContractFactory("Scrapbook");
    const scrapbookContract = await scrapbookContractFactory.deploy();
    await scrapbookContract.deployed();
    console.log("contract deployed to:", scrapbookContract.address);

    let memCID = "bafybeihe2gh5zypdiacmz5zl7z3wuhohlepjwysjkbzar5wgaopr4nwqyi"
    let eventTimeStamp = 1952517724
    let memoryId = 1;
    let visible = false;

    let txn = await scrapbookContract.createNewMemory(memCID, eventTimeStamp, memoryId, visible);
    let wait = await txn.wait();
    console.log("NEW MEMORY CREATED", wait.events[0].event, wait.events[0].args)

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
  //in order to run this:
  //nox hardhat node in a terminal
  //open a new terminal window and run npx hardhat run --network localhost scripts/YOUR_SCRIPT_FILE.js