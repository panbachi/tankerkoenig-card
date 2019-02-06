# Tankerkoenig Lovelace Card

[![Version](https://img.shields.io/badge/version-0.1.0-green.svg?style=for-the-badge)](#) [![mantained](https://img.shields.io/maintenance/yes/2019.svg?style=for-the-badge)](#)

[![maintainer](https://img.shields.io/badge/maintainer-Goran%20Zunic%20%40panbachi-blue.svg?style=for-the-badge)](https://www.panbachi.de)

## Installation
1. Install this component by copying the `tankerkoenig-card.js` to your `/www/` folder.
2. Add this to your Lovelace-Configuration using the config options below example.
3. Put the icons as `*.png` for the brands in the `/www/gasstation_logos/` folder.

```yaml
resources:
  - url: /local/tankerkoenig-card.js
    type: js
views:
  - cards:
      - type: 'custom:tankerkoenig-card'
        name: Benzinpreise
        show:
          - e5
          - e10
        stations:
          - name: Kölner Str.
            brand: ARAL
            e5: sensor.aral_kolner_str_e5
            e10: sensor.aral_kolner_str_e10
          - name: Untergath
            brand: ARAL
            e5: sensor.aral_untergath_e5
            e10: sensor.aral_untergath_e10
```

### Options
| key        | values            | required | description
|------------|-------------------|----------|---
| `name`     | String            | yes      | Name of the card that should be shown in the frontend
| `show`     | [e5, e10, diesel] | yes      | What should be shown
| `stations` | List of stations  | yes      | List of stations

#### Stations
| key      | value  | required | description
|----------|--------|----------|---
| `name`   | String | yes      | The name of the station (for example the street)
| `brand`  | String | yes      | The brand of the station used for the icon
| `e5`     | Sensor | no*      | Sensor for the E5 price
| `e10`    | Sensor | no*      | Sensor for the E10 price
| `diesel` | Sensor | no*      | Sensor for the diesel price

*only required if it should be shown

## Additional
To use the icons you have to use uppercase names, which has to be the same as in the `brand` settings. The icons must be in `*.png` format.

### Example
For the brand ARAL there has to be an icon with the following path:

`/www/gasstation_logos/ARAL.png`

# Support me / Follow me
[![Web](https://img.shields.io/badge/www-panbachi.de-blue.svg?style=flat-square&colorB=3d72a8&colorA=333333)](https://www.panbachi.de)
[![Facebook](https://img.shields.io/badge/-%40panbachi.de-blue.svg?style=flat-square&logo=facebook&colorB=3B5998&colorA=eee)](https://www.facebook.com/panbachi.de/)
[![Twitter](https://img.shields.io/badge/-%40panbachi-blue.svg?style=flat-square&logo=twitter&colorB=1DA1F2&colorA=eee)](https://twitter.com/panbachi)
[![Instagram](https://img.shields.io/badge/-%40panbachi.de-blue.svg?style=flat-square&logo=instagram&colorB=E4405F&colorA=eee)](http://instagram.com/panbachi.de)
[![YouTube](https://img.shields.io/badge/-%40panbachi-blue.svg?style=flat-square&logo=youtube&colorB=FF0000&colorA=eee)](https://www.youtube.com/channel/UCO7f2L7ZsDCpOtRfKnPqNow)