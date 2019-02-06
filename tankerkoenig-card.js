class TankerkoenigCard extends HTMLElement {
        set hass(hass) {
                if(!this.content) {
                        const card = document.createElement('ha-card');

                        card.header = this.config.name || 'Tankerkönig';

                        this.content = document.createElement('div');
                        this.content.className = 'container';
                        card.appendChild(this.content);

                        const style = document.createElement('style');
                        style.textContent = `
                                .container { padding: 0 16px 16px; }
                                td { text-align: center; padding-top: 10px; }
                                td.street { text-align: left; font-weight: bold; }
                                td.gasstation img { vertical-align: middle; }
                                ha-label-badge { font-size: 85%; }

                        `;
                        card.appendChild(style);

                        this.appendChild(card);
                }

                const e5 = this.config.show.indexOf('e5') !== -1;
                const e10 = this.config.show.indexOf('e10') !== -1;
                const diesel = this.config.show.indexOf('diesel') !== -1;

                let content = `<table width="100%">`;

                for(let i in this.config.stations) {
                        let station = this.config.stations[i];

                        let state = null;
                        let label = '';

                        content += `
                            <tr>
                                <td class="logo"><img height="40" width="40" src="/local/gasstation_logos/${station.brand.toLowerCase()}.png"></td>
                                <td class="street">${station.name}</td>
                        `;

                        if(e5) {
                                state = hass.states[station.e5] || null;
                                label = 'E5';

                                content += this._getCol(state, label);
                        }

                        if(e10) {
                                state = hass.states[station.e10] || null;
                                label = 'E10';

                                content += this._getCol(state, label);
                        }

                        if(diesel) {
                                state = hass.states[station.diesel] || null;
                                label = 'Diesel';

                                content += this._getCol(state, label);
                        }

                        content += '</tr>';
                }

                content += '</table>';

                this.content.innerHTML = content;
        }

        _getCol(state, label) {
                if(state) {
                        return `
                              <td><ha-label-badge
                              value="${state.state}€"
                              label="${label}"
                              ></ha-label-badge></td>
                        `;
                } else {
                        return '<td></td>';
                }
        }

        setConfig(config) {
                this.config = config;
        }

        getCardSize() {
                return this.config.stations.length + 1;
        }
}

customElements.define('tankerkoenig-card', TankerkoenigCard);
