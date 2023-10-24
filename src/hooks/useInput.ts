import { useState, ChangeEvent } from 'react';

export const useInput = (initialValue: string) => {
  const [input, setInput] = useState<string>(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return [input, handleChange] as const;
};

export const usePriceInput = () => {
  const [price, setPrice] = useState<string>('');
  const [viewPrice, setViewPrice] = useState<string>('');
  const [notice, setNotice] = useState(false);

  const priceHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value && isNaN(Number(e.target.value.replace(/,/g, '')))) {
      setNotice(true);

      setTimeout(() => {
        setNotice(false);
      }, 10000);
      return;
    }
    setPrice(e.target.value);
    setNotice(false);

    const formattedPrice = e.target.value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setViewPrice(formattedPrice);
  };

  return [price, viewPrice, notice, priceHandleChange];
};
