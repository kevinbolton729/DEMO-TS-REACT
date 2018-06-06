import { IParse } from '../../global';

export const parseResponse: IParse = params => {
  const { status, message, extData } = params;
  const count = (extData && (extData as any).count) || 0;
  const data = (extData && extData.data) || [];

  return {
    status,
    message,
    count,
    data,
  };
};
