import contractAddress from "./abis/contractAddress.json";
import abi from "./abis/abi.json";

const { ethereum } = window;
const address = contractAddress.contractAddress;
const contractatAbi = abi.abi;

export const connectWallet = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask and try again!!");
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    console.log("accounts==>>", accounts);
  } catch (error) {
    reportError(error);
  }
};

export const isWallectConnected = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask");
    const accounts = await ethereum.request({ method: "eth_accounts" });

    window.ethereum.on("chainChanged", (chainId) => {
      window.location.reload();
    });

    window.ethereum.on("accountsChanged", async () => {
      await isWallectConnected();
    });

    if (accounts.length) {
    } else {
      alert("Please connect wallet.");
      console.log("No accounts found.");
    }
  } catch (error) {
    reportError(error);
  }
};

const reportError = (error) => {
  console.log(error.message);
  throw new Error("No ethereum object.");
};
