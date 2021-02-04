import React, { useState, useContext } from 'react';
import QuoteContext from '../../context/QuoteContext';
import AssetsContext from '../../context/AssetsContext';
import './Assets.css';

const Assets = () => {
	const quote = useContext(QuoteContext);
  const assets = useContext(AssetsContext);
  const [filter, setFilter] = useState('');
  
  const filteredAssets = assets.filter(cat => {
    return cat.category.includes(filter)
    }
  )
    
  const assetsDisplay = filteredAssets.map(asset => {
    return (
      <tr>
        <td>{asset.item}</td>
        <td>{asset.quantity}</td>
        <td>{asset.worth}</td>
      </tr>
    )
  })

	const hpquote = quote.map(x => {
		return (
			x.id === 2
				? (
					<blockquote>
						<p className="quote">{quote[1].quote}</p>
						<p className="author">{quote[1].quote_author}</p>
					</blockquote>
				)
				: null
			);
		}
  )
  
    return (
		<div>
      <section id="banniere_assets">
        <div class="banniere">
          <h1 class="banniere_descr">Colchis Kingdom's Royal Assets</h1>
        </div>
			</section>

      <section>
        <div>
          <h2><img src="images/ico_start.png" alt="" class="ico_start" />The Kingdom's Royal Assets<img src="images/ico_end.png" alt="" class="ico_end" /></h2>
        </div>

        <section id="assets">
          { hpquote }
          <div id="inventory">
            <table>
              <caption>
                <h3>Inventory</h3>
                <div>
                  <label>Category: </label>
                  <select onChange={(e) => setFilter(e.target.value)}>
                    <option value="">All</option>
                    <option value="Art">Art</option>
                    <option value="Cattle">Cattle</option>
                    <option value="Construction">Construction</option>
                    <option value="Food & Beverage">{`Food & Beverage`}</option>
                    <option value="Gems">Gems</option>
                    <option value="Metal">Metal</option>
                    <option value="Military">Military</option>
                  </select>
                </div>
              </caption>
              <thead>
                <tr>
                  <th>Items</th>
                  <th>Quantity</th>
                  <th>Worth</th>
                </tr>
              </thead>
              <tbody>
                { assetsDisplay }
              </tbody>
            </table>
          </div>
        </section>
      </section>
		</div>
  );
};

export default Assets;
