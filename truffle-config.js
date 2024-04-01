module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // Change this to the port Ganache is running on
      network_id: "*"
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    },

    version: "^0.5.16" // This should match the pragma in your contracts

  }
}
