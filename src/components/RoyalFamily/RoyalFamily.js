import React, { useContext } from 'react';
import CharacterContext from '../../context/CharacterContext';
import './RoyalFamily.css';

const RoyalFamily = () => {
	const character = useContext(CharacterContext);

	const chardisplay = character.map(character => {
		return (
      <div id={`flexbox_${character.short_name}`}>
        <div>
          <img src={character.url_img} alt={character.name}/>
        </div>
        <div id={character.short_name}>
          <h3>{character.name}</h3>
          <p>{character.description}</p>
          <p class="source">
            Source: 
            <a href={character.source_link} target="_blank" rel="noreferrer">
              Wikipédia
            </a>
          </p>
        </div>
      </div>
		)
	})

  return (
		<div>
      <section id="banniere_royal_family">
        <div class="banniere">
          <h1 class="banniere_descr">The Royal family of Colchis Kingdom</h1>
        </div>
      </section>

			<section>
				<div>
					<h2>
						<img src="images/ico_start.png" alt="" class="ico_start" />
						Our Royal Family members
						<img src="images/ico_end.png" alt="" class="ico_end" />
					</h2>
				</div>
				<section id="royal_family">
					{ chardisplay }
				</section>
			</section>
    </div>
  );
};

export default RoyalFamily;
