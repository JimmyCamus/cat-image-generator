import { ChangeEvent, useState } from 'react';

export const useInput = () => {
  const [value, setValue] = useState<string>('');
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  return { value, handleOnChange };
};
