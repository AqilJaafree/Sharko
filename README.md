# Sharko powered by Eliza and Flow

Able to swap, create the pool, add, remove and etc by utilize new plugin (plugin-incrementfi) also made by Sharko team

## ✨ Features & Use Cases

> Features

- create the flow account
- swap between Flow and USDC testnet
- open the pool based on incrementfi
- Add the liquidity based on pair of Flow and USDC
- Utilize the model to reduce the impermenant lose

### Development
```bash
# Install dependencies
pnpm install --no-frozen-lockfile

# Build the plugin
pnpm run build

# Run agent in debug mode
pnpm start:debug --character="characters/dobby.character.json"

# Start the client
pnpm start:client
```

## Contract Addresses (Testnet) By IncrementFi

- FLOW Token: 0x7e60df042a9c0868
- USDC: 0x64adf39cbc354fcb
- SwapFactory: 0x6ca93d49c45a249f
- SwapRouter: 0xa6850776a94e6551

## Usage

### Creating a Pool
```bash
const result = await incrementService.createPool({
    token0Name: "FlowToken",
    token0Address: "0x7e60df042a9c0868",
    token1Name: "USDCFlow",
    token1Address: "0x64adf39cbc354fcb",
    stableMode: false
});
```

### Swapping Tokens
```bash
const result = await incrementService.swapExactTokens({
    exactAmountIn: 10.0,
    amountOutMin: 9.5,  // 5% slippage
    tokenKeyPath: [
        "A.7e60df042a9c0868.FlowToken",
        "A.64adf39cbc354fcb.USDCFlow"
    ],
    to: recipientAddress,
    deadline: Math.floor(Date.now()/1000) + 3600 // 1 hour
});
```

### Adding Liquidity
```bash
const result = await incrementService.addLiquidity({
    token0Key: "A.7e60df042a9c0868.FlowToken",
    token1Key: "A.64adf39cbc354fcb.USDCFlow",
    token0Amount: 100.0,
    token1Amount: 100.0,
    token0Min: 99.0,
    token1Min: 99.0,
    deadline: Math.floor(Date.now()/1000) + 3600,
    stableMode: false
});
```

### Removing Liquidity
```bash
const result = await incrementService.removeLiquidity({
    token0Key: "A.7e60df042a9c0868.FlowToken",
    token1Key: "A.64adf39cbc354fcb.USDCFlow",
    lpTokenAmount: 50.0,
    token0OutMin: 48.0,
    token1OutMin: 48.0,
    deadline: Math.floor(Date.now()/1000) + 3600,
    stableMode: false
});
```

