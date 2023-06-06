// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
import hre from "hardhat";
import fs from "fs";

const currentTimestampInSeconds = Math.round(Date.now() / 1000);
const unlockTime = currentTimestampInSeconds + 60;

const lockedAmount = hre.ethers.utils.parseEther("0.001");

const Lock = await hre.ethers.getContractFactory("Lock");
const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

await lock.deployed();

const address = JSON.stringify({ address: lock.address }, null, 4);
fs.writeFile("./src/abis/contractAddress.json", address, "utf8", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Deployed contract address", lock.address);
});
