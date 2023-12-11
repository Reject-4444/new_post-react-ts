import { Dispatch, FC, FormEvent, SetStateAction } from "react";
import { Button } from "../Button/Button";
import './Form.scss';

interface Props {
    handleSubmit: (e: FormEvent) => void;
    invoice: string;
    setInvoice: Dispatch<SetStateAction<string>>;
    isLoading: boolean;
}

export const Form:FC<Props> = ({handleSubmit, invoice, setInvoice, isLoading}) => {
  return (
    <form
      className='form'
      onSubmit={handleSubmit}
    >
      <input
        placeholder="Enter your TTN"
        className='form__input form__input--form'
        type='text'
        value={invoice}
        onChange={(e) => setInvoice(e.target.value)}
      />
      <Button isLoading={isLoading}>Get status ttn</Button>
    </form>
  );
};
