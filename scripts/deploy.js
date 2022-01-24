const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log('Deploying contract with account: ', deployer.address);
  console.log('Account Balance: ', accountBalance);

  const Token = await hre.ethers.getContractFactory('ImageNFT');
  const ImageNFTContract = await Token.deploy();
  await ImageNFTContract.deployed();

  console.log('ImageNFTContract deployed to: ,', ImageNFTContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
