import { getAddress } from 'ethers';

export function validateAddressChecksum(address: string): { isValid: boolean; checksummed?: string; error?: string } {
  if (!address.startsWith('0x') || address.length !== 42) {
    return { isValid: false, error: 'Invalid address length or prefix' };
  }

  const hexPart = address.slice(2);
  if (!/^[a-fA-F0-9]{40}$/.test(hexPart)) {
    return { isValid: false, error: 'Invalid hexadecimal characters' };
  }

  const lowerAddress = '0x' + hexPart.toLowerCase();
  const checksummed = getAddress(lowerAddress);

  try {
    const computed = getAddress(address);
    if (computed === address) {
      return { isValid: true, checksummed: address };
    } else {
      return { isValid: false, checksummed };
    }
  } catch {
    return { isValid: false, checksummed };
  }
}