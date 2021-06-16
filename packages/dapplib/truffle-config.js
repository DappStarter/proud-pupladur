require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign strike deny script method good process metal genre'; 
let testAccounts = [
"0xd60cdf9c4795a1bca6a7b817925f1e5809fdf4079cb33722bc67d324944221ac",
"0x15a93ed737f5316458a2981ada1668b5ae1f6fb8bf7db0f803e7bce78e0a02be",
"0xd507b5d39e033df5358383ae17868ad87b013b83eba994d25163c05c0a97fd35",
"0x4ff66b93b3663214220e0b41f3e83b4998f63a51c439871c90f912ae527806fe",
"0x62ccf157a34673d3810cc6a4c6e34fdec96da4a416d2ea4fa4e3c30172acb35c",
"0x6167fbbd3519012988b61691422e60d02ce313e4bfaf7cc41db55b9809485276",
"0x7ff964de8c8ce03c55555558a63c3a0154ad5c6de6c50a62d7c9f03cea22c5f2",
"0x9a323ade26b42a5bbc76008a2594d396dc589822a2b1a1b9693b7c3d0845045e",
"0x6d2b4d8a7175777c137ce7a2f01e8d14f6744d77d6115a3a98ccc9687810d7e1",
"0x1fe62b7381947badc3956baf60d4ca34c1204d4259ddd57b91f564e0c93dc832"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

