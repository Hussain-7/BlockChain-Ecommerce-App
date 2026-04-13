# BlockChain Ecommerce App

A blockchain-powered ecommerce demo that combines Solidity smart contracts, a backend service, and a storefront experience.

## Project Structure

- `contracts/` - Solidity contracts including payment processing logic
- `migrations/` - Truffle deployment scripts
- `backend/` - Server-side application code
- `frontend/` - Client application for the store experience

## Getting Started

### Install dependencies

```bash
npm install
cd backend && npm install
cd ../frontend && npm install
```

### Smart contract workflow

```bash
npx truffle develop
npx truffle migrate --reset
```

### Run the app

Start the backend and frontend from their respective directories after installing dependencies.

## License

MIT
