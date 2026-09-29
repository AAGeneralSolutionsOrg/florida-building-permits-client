# Florida Building Permits API clients

Minimal Python and Node.js clients for searching active building, roofing, solar, and pool permits across supported Florida counties.

[![Get your API Key & Live Production Access on RapidAPI](https://img.shields.io/badge/Get%20your%20API%20Key-Live%20Production%20Access-0055DA?style=for-the-badge&logo=rapidapi&logoColor=white)](https://rapidapi.com/aa-general-solutions-aa-general-solutions-default/api/florida-building-and-roof-permits)

## Query roofing permits in three lines

```python
from florida_permits import permits
results = permits(county="orange", permit_type="roof", limit=10)
print(results["data"])
```

## Query solar permits in three lines

```javascript
import { permits } from "./florida-permits.mjs";
const results = await permits({ county: "miami-dade", type: "solar", limit: 10 });
console.log(results.data);
```

## Setup

1. Subscribe on [RapidAPI](https://rapidapi.com/aa-general-solutions-aa-general-solutions-default/api/florida-building-and-roof-permits).
2. Export your application key: `export RAPIDAPI_KEY="your-key"`.
3. For Python, install the only dependency: `python -m pip install requests`.

Run the included examples:

```bash
python florida_permits.py
node florida-permits.mjs
```

Both clients call `GET /v1/permits` through the RapidAPI gateway. Supported filters include `county`, `type`, `limit`, `offset`, and `state` (`FL`). Never commit your RapidAPI key.

## License

MIT
