import { HardhatUserConfig } from "hardhat/config";
import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";

const config: HardhatUserConfig = {
    zksolc: {
        version: "1.3.13",
        compilerSource: "binary",
            settings: {
                isSystem: true,
            },
    },
    defaultNetwork: "zkSyncTestnet",

    networks: {
        zkSyncTestnet: {
            url: "https://testnet.era.zksync.dev",
            ethNetwork: "goerli", // This can also be the RPC URL of the specified result
            zksync: true,
        },
    },
    solidity: {
        version: "0.8.16",
    },
};

export default config;