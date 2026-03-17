export const buildQrUrl = (data: string, size: string = "200x200") => {
  const encodedData = encodeURIComponent(data);
  return `https://api.qrserver.com/v1/create-qr-code/?data=${encodedData}&size=${size}`;
};
