import React, { useState } from 'react';
import createMetaMaskProvider from 'metamask-extension-provider';
import ImageNFT from '../../artifacts/contracts/ImageNFT.sol/ImageNFT.json';
import { ethers } from 'ethers';
import { connectWallet, encodeJsonToBase4 } from '../../helpers';

const checkIfMetaMaskInstalled = async () => {
  try {
    if (window.metamaskEthereum) {
      return window.metamaskEthereum;
    } else {
      const provider = createMetaMaskProvider();
      provider.on('error', (error) => {
        console.error(error);
        return false;
      });
      if (provider) {
        window.metamaskEthereum = provider;
        return provider;
      }
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

const MintButtonContainer = ({ imageData }) => {
  /** NFT Contract Address */
  const contractAddress = '0x73a20D55D38538960C4F7c6a2C201e9Bc932B21d';

  const handleButtonClick = async () => {
    try {
      const ethereum = await checkIfMetaMaskInstalled();

      if (!ethereum) {
        return;
      }

      //checking to see if we're authorized to access the user's wallet
      const accounts = await ethereum.request({
        method: 'eth_accounts',
      });
      let connectedAccount;
      if (accounts.length > 0) {
        connectedAccount = accounts[0];
      } else {
        connectedAccount = await connectWallet();
      }
      console.log(connectedAccount);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleButtonClick();
      }}
    >
      Mint your own NFT
    </button>
  );
};

export default MintButtonContainer;
