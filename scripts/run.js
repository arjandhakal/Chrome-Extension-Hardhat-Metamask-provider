const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory('ImageNFT');
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log('Contract deployed to:', nftContract.address);

  // Call the function
  let txn = await nftContract.mint(
    'data:application/json;base64,eyJuYW1lIjoiRXhhbXBsZSIsImRlc2NyaXB0aW9uIjoiRXhhbXBsZSBEZXNjcmlwdGlvbiIsImltYWdlIjoiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8wLzBiL0NhdF9wb3N0ZXJfMS5qcGcvMjYwcHgtQ2F0X3Bvc3Rlcl8xLmpwZyJ9'
  );
  // Wait for it to be mined
  await txn.wait();

  // Mintin another NFT
  txn = await nftContract.mint(
    'data:application/json;base64,eyJuYW1lIjoiRXhhbXBsZSIsImRlc2NyaXB0aW9uIjoiRXhhbXBsZSBEZXNjcmlwdGlvbiIsImltYWdlIjoiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8wLzBiL0NhdF9wb3N0ZXJfMS5qcGcvMjYwcHgtQ2F0X3Bvc3Rlcl8xLmpwZyJ9'
  );
  // Let's wait again
  await txn.wait();
};

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
