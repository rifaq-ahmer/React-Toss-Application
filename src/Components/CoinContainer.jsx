import React, { Component } from "react";
import { choice } from "./helpers";
import Coin from "./Coin";

class CoinContainer extends Component {
	static defaultProps = {
		coins: [
			{
				side: "heads",
				imgSrc:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFdeKrCi9zVTh2GVQWyiv-FiK_K083YZed-I54iANnyS0qDXvo3BynkpyGAFZ09ttF5lo&usqp=CAU",
			},
			{
				side: "tails",
				imgSrc:
					"https://image.shutterstock.com/image-vector/indian-ten-rupee-coin-vector-260nw-1148527775.jpg",
			},
		],
	};

	constructor(props) {
		super(props);
		this.state = {
			currCoin: null,
			nFlips: 0,
			nHeads: 0,
			nTails: 0,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	flipCoin() {
		const newCoin = choice(this.props.coins);
		this.setState((oldState) => {
			return {
				currCoin: newCoin,
				nFlips: oldState.nFlips + 1,
				nHeads: oldState.nHeads + (newCoin.side === "heads" ? 1 : 0),
				nTails: oldState.nTails + (newCoin.side === "tails" ? 1 : 0),
			};
		});
	}

	handleClick() {
		this.flipCoin();
	}

	render() {
		const { nFlips, nHeads, nTails } = this.state;
		return (
			<div className="coinContainer">
				<h2>Lets Toss!</h2>
				{this.state.currCoin && <Coin info={this.state.currCoin} />}
				<button onClick={this.handleClick}>Let`s Toss</button>
				<p>
					Out of {nFlips} flips, there have been {nHeads} heads, and {nTails}{" "}
					tails.
				</p>
			</div>
		);
	}
}

export default CoinContainer;
