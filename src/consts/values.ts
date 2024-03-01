export const EVM_ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
export const SOL_ZERO_ADDRESS = '00000000000000000000000000000000000000000000';
export const COSMOS_ZERO_ADDRESS = 'cosmos100000000000000000000000000000000000000';
// Strangely, this is not included in any of the Solana packages
export const SOL_SPL_NOOP_ADDRESS = 'noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV';
// Placeholder chain for use with cosmos-kit wallet hooks that require a chain name
export const PLACEHOLDER_COSMOS_CHAIN = 'cosmoshub';
// An estimate of the gas amount for a typical EVM token router transferRemote transaction
// Computed by estimating on a few different chains, taking the max, and then adding a 50% padding
export const EVM_TRANSFER_REMOTE_GAS_ESTIMATE = 450_000n;
