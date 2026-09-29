"""Minimal client for the Florida Building and Roof Permits API."""

import os
from typing import Any

import requests

HOST = "florida-building-and-roof-permits.p.rapidapi.com"
URL = f"https://{HOST}/v1/permits"


def permits(
    county: str = "all",
    permit_type: str = "roof",
    limit: int = 25,
    offset: int = 0,
) -> dict[str, Any]:
    """Return permits matching the supplied Florida filters."""
    api_key = os.environ["RAPIDAPI_KEY"]
    response = requests.get(
        URL,
        headers={"x-rapidapi-key": api_key, "x-rapidapi-host": HOST},
        params={
            "state": "FL",
            "county": county,
            "type": permit_type,
            "limit": limit,
            "offset": offset,
        },
        timeout=15,
    )
    response.raise_for_status()
    return response.json()


if __name__ == "__main__":
    print(permits(county="orange", permit_type="roof", limit=2))
