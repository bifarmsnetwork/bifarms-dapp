export const truncateAddress = (address) => {
 return address.slice(0,3)+'...'+address.slice(39) 
};

export const toHex = (num) => {
  const val = Number(num);
  return "0x" + val.toString(16);
};
