var cache = CacheService.getScriptCache()

function setTimeout(timeout) {
	cache.put("timeout", timeout)
	return timeout
}

function getTimeout() {
	return cache.get("timeout") || 30 * 60
}

function hashCode(str) {
	let hash = 0
	for (let i = 0, len = str.length; i < len; i++) {
		let chr = str.charCodeAt(i)
		hash = (hash << 5) - hash + chr
		hash |= 0 // Convert to 32bit integer
	}
	return hash
}

function fetchCache(url, options = {}) {
	const key = hashCode(JSON.stringify({ url, options }))

	var text = cache.get(key)
	if (text) return text

	// else update cache
	cache.put(key, text, getTimeout()) // placeholder to avoid multiple initial fetches when cache is empty

	text = UrlFetchApp.fetch(url, options).getContentText()
	cache.put(key, text, getTimeout())

	return text
}

function getLiveCoin(code = "BTC", attr = "rate") {
	var url = "https://api.livecoinwatch.com/coins/single"

	var options = {
		method: "post",
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			"x-api-key": "1180b20e-1902-49f6-b922-5ca841087afe",
		},
		payload: JSON.stringify({
			currency: "USD",
			code: code.toUpperCase().split(" ").join(""),
			meta: false,
		}),
	}

	const text = fetchCache(url, options)
	return JSON.parse(text)[attr]
}

function getCoinMarketCap(id = "BTC") {

    var url =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

    var options = {
        headers: {
            "X-CMC_PRO_API_KEY": "a9504ce7-7e0c-49a6-84ef-5b9f7af423e3",
            Accept: "application/json",
        },
    }

    var list = JSON.parse(cache.get(url))

    if (!list){
        var json = JSON.parse(UrlFetchApp.fetch(url, options).getContentText())

        list = Object.values(json.data).map(data=>{
            const {name,symbol,slug,quote} = data
            const price = quote?.USD?.price || 0
            return {name,symbol,slug,price}
        })

        cache.push(url,JSON.stringify(list))
    }

	return list.find((rec) => {
		rec.name == id || rec.symbol == id || rec.slug == id
	}).price
}

function getCoin(id = "BTC") {
	return getLiveCoin(id)
	//return getCoinMarketCap(id)
}


{
    "data": {
    "1": {
    "id": 1,
    "name": "Bitcoin",
    "symbol": "BTC",
    "slug": "bitcoin",
    "is_active": 1,
    "is_fiat": 0,
    "circulating_supply": 17199862,
    "total_supply": 17199862,
    "max_supply": 21000000,
    "date_added": "2013-04-28T00:00:00.000Z",
    "num_market_pairs": 331,
    "cmc_rank": 1,
    "last_updated": "2018-08-09T21:56:28.000Z",
    "tags": [
    "mineable"
    ],
    "platform": null,
    "self_reported_circulating_supply": null,
    "self_reported_market_cap": null,
    "quote": {
    "USD": {
    "price": 6602.60701122,
    "volume_24h": 4314444687.5194,
    "volume_change_24h": -0.152774,
    "percent_change_1h": 0.988615,
    "percent_change_24h": 4.37185,
    "percent_change_7d": -12.1352,
    "percent_change_30d": -12.1352,
    "market_cap": 852164659250.2758,
    "market_cap_dominance": 51,
    "fully_diluted_market_cap": 952835089431.14,
    "last_updated": "2018-08-09T21:56:28.000Z"
    }
    }
    }
    },
    "status": {
    "timestamp": "2024-04-05T11:00:40.566Z",
    "error_code": 0,
    "error_message": "",
    "elapsed": 10,
    "credit_count": 1,
    "notice": ""
    }
    }