export const blockTradesAPIs = {
    BASE: "https://api.blocktrades.us/v2",
    BASE_OL: "https://api.blocktrades.us/ol/v2",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    TRADING_PAIRS: "/trading-pairs",
    DEPOSIT_LIMIT: "/deposit-limits",
    ESTIMATE_OUTPUT: "/estimate-output-amount"
};

export const settingsAPIs = {
    DEFAULT_WS_NODE: "wss://node.bitshares.eu",
    WS_NODE_LIST: [
        {url: "wss://node.bitshares.eu", location: "Nuremberg, Germany"},
        {url: "wss://bitshares.openledger.info/ws", location: "Nuremberg, Germany"},
        {url: "wss://eu.openledger.info/ws", location: "Berlin, Germany"},
        {url: "wss://bit.btsabc.org/ws", location: "Hong Kong"},
        {url: "wss://bts.transwiser.com/ws", location: "Hangzhou, China"},
        {url: "wss://bitshares.dacplay.org/ws", location:  "Hangzhou, China"},
        {url: "wss://bitshares.wancloud.io/ws", location:  "China"},
        {url: "wss://openledger.hk/ws", location: "Hong Kong"},
        {url: "wss://secure.freedomledger.com/ws", location: "Toronto, Canada"},
        {url: "wss://dexnode.net/ws", location: "Dallas, USA"},
        {url: "wss://altcap.io/ws", location: "Paris, France"},
        {url: "wss://bitshares.crypto.fans/ws", location: "Munich, Germany"},
        {url: "wss://node.testnet.bitshares.eu", location: "Public Testnet Server (Frankfurt, Germany)"}
    ],
    DEFAULT_FAUCET: "https://faucet.bitshares.eu",
    RPC_URL: "https://openledger.info/api/"
};
