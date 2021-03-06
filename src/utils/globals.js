// Frameworks
import * as _ from 'lodash';

export const GLOBALS = {};

GLOBALS.CODENAME = 'ChargedParticles';
GLOBALS.CODENAME_ABBR = 'CP';
GLOBALS.CODE_VERSION = '0.0.1';
GLOBALS.BASE_URL = 'https://charged-particles.netlify.com';
GLOBALS.ACCELERATOR_URL = 'https://charged-particles.netlify.com';
GLOBALS.ACCELERATOR_ROOT = '/app';
GLOBALS.CODE_VERSION_MAJOR = _.join(_.split(GLOBALS.CODE_VERSION, '.', 1), '.');
GLOBALS.CODE_VERSION_MINOR = _.join(_.split(GLOBALS.CODE_VERSION, '.', 2), '.');

GLOBALS.ETH_UNIT      = 1e18;
GLOBALS.ETH_PRECISION = 18;

GLOBALS.CREATE_PARTICLE_PRICE   = {
    ETH: {FT: '35000000000000',      NFT: '70000000000000'},
    ION: {FT: '1000000000000000000', NFT: '2000000000000000000'},
};

GLOBALS.DEPOSIT_FEE_MODIFIER    = 1e4;  // 10000  (100%)
GLOBALS.MAX_CUSTOM_DEPOSIT_FEE  = 5e3;  // 5000   (50%)
GLOBALS.MIN_DEPOSIT_FEE         = 1e6;  // 1000000 (0.000000000001 ETH  or  1000000 WEI)

GLOBALS.RPC_URL = process.env.GATSBY_ETH_JSONRPC_URL;
GLOBALS.CHAIN_ID = process.env.GATSBY_ETH_CHAIN_ID;
GLOBALS.DFUSE_API_KEY = process.env.GATSBY_DFUSE_API_KEY;

GLOBALS.MIN_BLOCK_CONFIRMATIONS = 5;

GLOBALS.SIDEMENU_WIDTH = 274;
GLOBALS.SIDEMENU_ETH_PRECISION = 7;

GLOBALS.WALLET_TYPE_COINBASE        = 'walletLink';
GLOBALS.WALLET_TYPE_WALLETCONNECT   = 'walletconnect';
GLOBALS.WALLET_TYPE_FORTMATIC       = 'fortmatic';
GLOBALS.WALLET_TYPE_TORUS           = 'torus';
GLOBALS.WALLET_TYPE_AUTHEREUM       = 'authereum';
GLOBALS.WALLET_TYPE_BITSKI          = 'bitski';
GLOBALS.WALLET_TYPE_SQUARELINK      = 'squarelink';
GLOBALS.WALLET_TYPE_ARKANE          = 'arkane';
GLOBALS.WALLET_TYPE_METAMASK        = 'metamask';
GLOBALS.WALLET_TYPE_NATIVE          = 'native';

GLOBALS.WALLET_TYPE_SETTINGS = {
    [GLOBALS.WALLET_TYPE_COINBASE]      : {name: 'Coinbase WalletLink', options: {}},
    [GLOBALS.WALLET_TYPE_WALLETCONNECT] : {name: 'Wallet Connect',      options: {}},
    [GLOBALS.WALLET_TYPE_FORTMATIC]     : {name: 'Fortmatic',           options: {uniqueId: process.env.GATSBY_FORTMATIC_APIKEY}},
    [GLOBALS.WALLET_TYPE_TORUS]         : {name: 'Torus',               options: {}},
    // [GLOBALS.WALLET_TYPE_PORTIS]        : {name: 'Portis',              options: {uniqueId: process.env.GATSBY_PORTIS_DAPP_ID}},
    // [GLOBALS.WALLET_TYPE_UPORT]         : {name: 'Uport',               options: {uniqueId: process.env.GATSBY_UPORT_DAPP_NAME}},
    [GLOBALS.WALLET_TYPE_AUTHEREUM]     : {name: 'Authereum',           options: {}},
    [GLOBALS.WALLET_TYPE_BITSKI]        : {name: 'Bitski',              options: {uniqueId: process.env.GATSBY_BITSKI_CLIENT_ID, appCallbackUrl: 'https://myapp.com/callback.html'}},
    [GLOBALS.WALLET_TYPE_SQUARELINK]    : {name: 'SquareLink',          options: {uniqueId: process.env.GATSBY_SQUARELINK_DAPP_ID}},
    [GLOBALS.WALLET_TYPE_ARKANE]        : {name: 'Arkane',              options: {uniqueId: process.env.GATSBY_ARKANE_CLIENT_ID}},
    [GLOBALS.WALLET_TYPE_METAMASK]      : {name: 'MetaMask',            options: {}},
    [GLOBALS.WALLET_TYPE_NATIVE]        : {name: 'Native',              options: {}},
};

