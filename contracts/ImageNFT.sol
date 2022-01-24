// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

//Importing OpenZeppelin Contracts
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

import 'hardhat/console.sol';

contract ImageNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721('YiplNFT', 'YIPL') {
        console.log('Hurray, a NFT contract');
    }

    function mint(string memory _tokenURI) public {
        uint256 newItemId = _tokenIds.current();
        // Actually mint the NFT to the sender using msg.sender
        _safeMint(msg.sender, newItemId);

        // Set the NFTS data
        _setTokenURI(newItemId, _tokenURI);
        console.log(
            'An NFT w/ ID %s has been minted to %s',
            newItemId,
            msg.sender
        );
        console.log('Token URI: %s', _tokenURI);
        // Increment the counter for when the next NFT is minted
        _tokenIds.increment();
    }
}
