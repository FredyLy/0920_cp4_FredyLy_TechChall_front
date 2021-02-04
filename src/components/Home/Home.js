import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import QuoteContext from '../../context/QuoteContext';
import CharacterContext from '../../context/CharacterContext';
import './Home.css';

const Home = () => {
	const quote = useContext(QuoteContext);
	const character = useContext(CharacterContext);

	const familydisplay = character.map(character => {
		return (
			<figure>
				<Link to={`/royal-family#${character.short_name}`}>
					<img src={character.url_img} alt={character.name} />
				</Link>
					<figcaption>{character.short_title}</figcaption>
			</figure>
		)
	})

	const hpquote = quote.map(x => {
		return (
			x.id === 1
				? (
					<blockquote>
						<p className="quote">{quote[0].quote}</p>
						<p className="author">{quote[0].quote_author}</p>
					</blockquote>
				)
				: null
			);
		}
	)

  return (
		<div>
			<section id="banniere_hero">
				<div className="banniere">
					<h1 className="banniere_descr">Welcome to the Royal Kingdom of Colchis</h1>
				</div>
			</section>

			<section id="about">
				{ hpquote }
				<div>
					<div>
						<h2>About Colchis</h2>
					</div>

					<div>
						<p>Colchis is the home of Aeëtes, Medea, Idyia, the Golden Fleece and the fire-breathing bulls Khalkotauroi.</p>
						<p>According to the Greek mythology, Colchis was a fabulously wealthy land situated on the mysterious periphery of the heroic world. Here in the sacred grove of the war god Ares, King Aeëtes hung the Golden Fleece until it was seized by Jason and the Argonauts.</p>
						<p>Colchis was also the land where the mythological Prometheus was punished by being chained to a mountain while an eagle ate at his liver for revealing to humanity the secret of fire.</p>

						<p className="source">
							Source: 
							<a href="https://en.wikipedia.org/wiki/Colchis#In_mythology" target="_blank" rel="noreferrer">
								Wikipédia
							</a>
						</p>
					</div>
				</div>
			</section>

			<section>
				<div id="my_family">
					<div>
						<h2>The King and his family</h2>
					</div>
				</div>

				<div id="flexbox_my_family">
					{ familydisplay }
				</div>
				<p>Click on the above pictures to learn more about the King and his family.</p>
			</section>
		</div>
  );
};

export default Home;
