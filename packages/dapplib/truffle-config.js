require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom knife frame security iron response still grant include knee surge transfer'; 
let testAccounts = [
"0x8343a0f839d128184ba598aaff0ba10c7d6101d5509dc3218a8276fdba65762b",
"0x53734260f387454acfa96c1c9ee69350c8a5204ce7b69b137cc7d06b1e07279d",
"0x496862be4764b65845e0edb73815d4b79bcd88b078931fcb1b376f21906a37b0",
"0xfa5564de9d3fcba5bd3e6e693f170353b208c495e4b219ace9c3e8b07784622b",
"0xb5f3c736d5726a79b365428e6c38a05e7175b90020ed0a985ca3f191a5acd614",
"0x1270d556fee2ad796a09667649ca0d7f22b125e33e537528b4f78c38e3c7c5cf",
"0x2fdf48bc5795441f19feb2336215efc2e566fcfd1367a61d3b38d7614923786d",
"0x93d77493a9b4b199ecd4ed2de373bd5170b6ad8a31525d5dbfc26d2f83e214bd",
"0x512ff520cdff520b2d0d896e03d5e8f52bc0b17afb27fad1dcd8b16d3cbf3124",
"0xc91b4338208f06f1b16f3bbf32a445c14f23999ee188bed4cae666b09caf0409"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


