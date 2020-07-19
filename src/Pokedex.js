import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
	render() {
		return (
			<div className="Pokedex">
				<h2 className={this.props.isWinner ? 'Pokedex-winner' : 'Pokedex-looser'}>
					{this.props.isWinner ? 'Winner!' : 'Looser!'}
				</h2>
				Total Expirience : {this.props.exp}
				<div className="Pokedex-cards">
					{this.props.pokemon.map((p, i) => (
						<Pokecard key={i} id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
					))}
				</div>
			</div>
		);
	}
}

export default Pokedex;
