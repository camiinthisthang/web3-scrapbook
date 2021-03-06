// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;


contract Scrapbook {

    event newMemoryAdded(uint memoryId, address memoryCreator, uint256 eventTimestamp, string memoryCID);

    struct Memory {
      //bytes32 memoryId;
      uint memoryId;
      string memoryCID;
      address memoryOwner;
      address[] friends;
      uint256 eventTimestamp;
      bool visibleToPublic;
    }

    mapping(uint => Memory) public idToCard;

    function createNewMemory(
        string calldata memoryCID,
        uint eventTimestamp,
        //bytes32 memoryId, //remove from here when I get the chainlink random number working
        uint memoryId,
        bool visibleToPublic
    ) external returns (address) {
        //get random ID generated by chainlink
        address[] memory associatedFriends;
        idToCard[memoryId] = Memory(memoryId, memoryCID, msg.sender, associatedFriends, eventTimestamp, visibleToPublic);
        emit newMemoryAdded(memoryId, msg.sender, eventTimestamp, memoryCID);
        return msg.sender; //return the creator of this memory's address so we can use it in lit protocol to gate it
    }


}

