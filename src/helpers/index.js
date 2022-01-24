/** Encode JSON to base 64  btoa */
export const encodeJsonToBase4 = (json) => {
  return btoa(JSON.stringify(json));
};

export const connectWallet = async () => {
  try {
    const { metamaskEthereum } = window;
    if (!metamaskEthereum) {
      alert('Get Metamask');
      return;
    }

    const accounts = await metamaskEthereum.request({
      method: 'eth_requestAccounts',
    });

    return accounts[0];
  } catch (error) {
    console.log(error);
  }
};
