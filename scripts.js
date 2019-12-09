request("GET", "http://rest-sandbox.coinapi.io/v1/exchangerate/BTC?apikey=0FB5E317-142D-412D-824B-A5F59FE8F0E0")
            .then((data) => {
                var data = data.target.response
                var dataObject = JSON.parse(data)
                console.log(dataObject)
                var FullDigitalCurrencyArray = dataObject.rates.filter(function (data) {
                    if (data.asset_id_quote === 'USD') {
                        return true
                    }
                    if (data.asset_id_quote === 'LTC') {
                        return true
                    }
                    if (data.asset_id_quote === 'ETH') {
                        return true
                    }
                    if (data.asset_id_quote === 'XRP') {
                        return true
                    }
                    if (data.asset_id_quote === 'BCH') {
                        return true
                    }
                    else {
                        console.log('Not looking for these')
                    }
                    return false
                });
                console.log(FullDigitalCurrencyArray)
                var selectCoins = FullDigitalCurrencyArray.map(data2 => {
                    var siteDict = []
                    if (data2.asset_id_quote === 'USD') {
                        var USD = data2.rate
                        console.log(USD)
                        siteDict.push([USD])
                        console.log(USD)
                        return USD
                    }
                    if (data2.asset_id_quote === 'LTC') {
                        var LTC = data2.rate
                        return LTC
                    }
                    if (data2.asset_id_quote === 'ETH') {
                        var ETH = data2.rate
                        return ETH
                    }
                    if (data2.asset_id_quote === 'BCH') {
                        var BCH = data2.rate
                        return BCH
                    }
                    if (data2.asset_id_quote === 'XRP') {
                        var XRP = data2.rate
                        return XRP
                    }
                    var siteDict = { 'USD': USD, 'LTC': LTC, 'ETH': ETH, 'BCH': BCH, 'XRP': XRP }
                    console.log(siteDict)
                    return (USD, LTC, ETH, XRP, BCH)
                });
            });
        var selectCoins = {}
        request("GET", "http://rest-sandbox.coinapi.io/v1/exchangerate/BTC?apikey=0FB5E317-142D-412D-824B-A5F59FE8F0E0")
            .then((data) => {
                var data = data.target.response
                var dataObject = JSON.parse(data)
                console.log(dataObject)
                var FullDigitalCurrencyArray = dataObject.rates.filter(function (data) {
                    if (data.asset_id_quote === 'USD') {
                        return true
                    }
                    if (data.asset_id_quote === 'LTC') {
                        return true
                    }
                    if (data.asset_id_quote === 'ETH') {
                        return true
                    }
                    if (data.asset_id_quote === 'XRP') {
                        return true
                    }
                    if (data.asset_id_quote === 'BCH') {
                        return true
                    }
                    else {
                        console.log('Not looking for these')
                    }
                    return false
                    console.log(FullDigitalCurrencyArray)
                });
                FullDigitalCurrencyArray.forEach(data2 => {
                    if (data2.asset_id_quote === 'USD') {
                        var USD = data2.rate
                        selectCoins["USD"] = USD
                    }
                    if (data2.asset_id_quote === 'LTC') {
                        var LTC = data2.rate
                        selectCoins["LTC"] = LTC
                    }
                    if (data2.asset_id_quote === 'ETH') {
                        var ETH = data2.rate
                        selectCoins["ETH"] = ETH
                    }
                    if (data2.asset_id_quote === 'BCH') {
                        var BCH = data2.rate
                        selectCoins["BCH"] = BCH
                    }
                    if (data2.asset_id_quote === 'XRP') {
                        var XRP = data2.rate
                        selectCoins["XRP"] = XRP
                    }
                    return (USD, LTC, ETH, XRP, BCH)
                });
                console.log(selectCoins)
                var objectLTC = document.getElementById('LTC');
                var objectBCH = document.getElementById('BCH');
                var objectETH = document.getElementById('ETH');
                var objectUSD = document.getElementById('USD');
                console.log(objectBCH)
                console.log(selectCoins)
                objectBCH.innerHTML = selectCoins.BCH
                objectLTC.innerHTML = selectCoins.LTC
                objectETH.innerHTML = selectCoins.ETH
                objectUSD.innerHTML = selectCoins.USD
            });
        function request(method, url) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open(method, url);
                xhr.onload = resolve;
                xhr.onerror = reject;
                xhr.send();
            });
        }