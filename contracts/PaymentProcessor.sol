// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract PaymentProcessor {

	address public admin;
	IERC20 public dai;


	event PaymentDone(
		address payer,
		uint amount,
		uint paymentId,
		uint date
	);

	//address of die is always same on mainnet
	constructor(address adminAddress,address daiAddress){
		admin= adminAddress;
		dai=IERC20(daiAddress);
	}
	function pay(uint amount,uint paymentId) external {
		dai.transferFrom(msg.sender,admin,amount);
		emit PaymentDone(msg.sender,amount,paymentId,block.timestamp);
	}
}