// SPDX-License-Identifier: MIT
// An example of a consumer contract that relies on a subscription for funding.
pragma solidity ^0.8.7;

import '@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol';
import '@chainlink/contracts/src/v0.8/vrf/VRFConsumerBaseV2.sol';
import '@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol';

/**
 * Request testnet LINK and ETH here: https://faucets.chain.link/
 * Find information on LINK Token Contracts and get the latest ETH and LINK faucets here: https://docs.chain.link/docs/link-token-contracts/
 */

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */
contract LotteryGame is VRFConsumerBaseV2,ConfirmedOwner{
    event RequestSent(uint256 requestId, uint32 numWords);
    event RequestFulfilled(uint256 requestId, uint256[] randomWords);

    //my code
    address public manager;
    mapping(address => uint256) public listPlayerWithNumber;   
    address[] public addressesOfPlayer;
    address[] public addressOfWinner;
    address[] public addressesOfPreviousWinner;

    uint256 public roundBalance;
    uint256 public previousRoundBalance;
    uint256 rangeStart = 1;
    uint256 rangeEnd = 2;
    uint totalWinningPercentage = 85;

    VRFCoordinatorV2Interface COORDINATOR;
    bytes32 keyHash = 0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c;
    uint32 callbackGasLimit = 100000;
    uint16 requestConfirmations = 3;
    uint32 numWords = 1;
    uint64 s_subscriptionId;
    uint256[] public requestIds;
    uint256 public lastRequestId;
    uint256 public result;

    //8315 

    struct RequestStatus {
        bool fulfilled; // whether the request has been successfully fulfilled
        bool exists; // whether a requestId exists
        uint256[] randomWords;
    }
    mapping(uint256=> RequestStatus) public s_requests;
    
    constructor(uint64 subscriptionId)
    VRFConsumerBaseV2(0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625)
    ConfirmedOwner(msg.sender){
         COORDINATOR = VRFCoordinatorV2Interface(0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625);
        s_subscriptionId = subscriptionId;
        manager = msg.sender;
        roundBalance=0;
        previousRoundBalance = 0;
    }
    event ValueReceived(address indexed sender, uint256 value);

    event NumberPicked(address indexed user, uint256 number);
    event ReceivedEth(uint256 amount);

    function pickNumber(uint256 number) external validNumber(number) payable  {
        require(listPlayerWithNumber[msg.sender] == 0, "You have already picked a number");
        require(msg.value > 0 wei, "You need to pay a valid wei");
        roundBalance += msg.value;
        listPlayerWithNumber[msg.sender] = number;
        addressesOfPlayer.push(msg.sender);
        emit NumberPicked(msg.sender, number);
    }
    
    function pickWinner() external payable {
        require(msg.sender==manager,"You have to be owner of this smart contract");
//        require(addressesOfPlayer.length > 1, "Must be atleast 2 player");
        require(addressesOfPlayer.length > 0, "Must be atleast 1 player");        
        uint256 resultNumber = (block.timestamp % rangeEnd)+1;
        uint256 numberOfWinner = getAllWinner(resultNumber);
        if(numberOfWinner>=1){
            payForAllWinner();
        }
        resetRound();
    }


    modifier validNumber(uint256 number) {
        require(number >= rangeStart && number <= rangeEnd, "Number must be in the range");
        _;
    }

    function generateRandomNumber() internal returns (uint256) {
        uint256 seed = getSeed(requestRandomWords());
        return seed %(rangeEnd+1); // Adjust the range as needed
    }
      function getAllWinner(uint256 resultNumber) internal returns (uint256) {
        uint256 numberOfWinner = 0;
        for (uint256 i = 0; i < addressesOfPlayer.length; i++) {
        if (listPlayerWithNumber[addressesOfPlayer[i]] == resultNumber) {
                addressOfWinner.push(addressesOfPlayer[i]);
                numberOfWinner++;
            }
        }
        return numberOfWinner;
    }

    function payForAllWinner() internal {
        uint256 givenWeiPerWinner = roundBalance*85/100/addressOfWinner.length;
        for (uint256 i = 0; i < addressOfWinner.length; i++) {
            payable(addressOfWinner[i]).transfer(givenWeiPerWinner);
        }
    }

    function resetRound() internal {
        delete addressesOfPreviousWinner;
          for (uint256 i = 0; i < addressOfWinner.length; i++) {
            addressesOfPreviousWinner.push(addressOfWinner[i]);
        }
        for (uint256 i = 0; i < addressesOfPlayer.length; i++) {
            delete listPlayerWithNumber[addressesOfPlayer[i]];
        }
        delete addressOfWinner;
        delete addressesOfPlayer;
        previousRoundBalance = roundBalance;
        roundBalance = 0;
    }


     function requestRandomWords() internal  returns (uint256 requestId) {
        // Will revert if subscription is not set and funded.
        requestId = COORDINATOR.requestRandomWords(
            keyHash,
            s_subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );
        s_requests[requestId] = RequestStatus({randomWords: new uint256[](0), exists: true, fulfilled: false});
        requestIds.push(requestId);
        lastRequestId = requestId;
        emit RequestSent(requestId, numWords);
        return requestId;
    }

    function fulfillRandomWords(uint256 _requestId, uint256[] memory _randomWords) internal override {
        require(s_requests[_requestId].exists, 'request not found');
        s_requests[_requestId].fulfilled = true;
        s_requests[_requestId].randomWords = _randomWords;

        result = _randomWords[0];

        emit RequestFulfilled(_requestId, _randomWords);

    }
    function getSeed(uint256 _requestId) internal view returns (uint256 seed) {
        require(s_requests[_requestId].exists, 'request not found');
        RequestStatus memory request = s_requests[_requestId];
        return (request.randomWords[0]);
    }
    function getAllPreviousWinner() public view returns (address[] memory) {
        require(addressesOfPreviousWinner.length>0);
        return addressesOfPreviousWinner;
    }
     function getAllCurrentPlayer() public view returns (address[] memory) {
        require(addressesOfPlayer.length>0);
        return addressesOfPlayer;
    }

}
