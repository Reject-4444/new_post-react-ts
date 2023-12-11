import { FC } from 'react';
import './ContainerHistory.scss';
import cl from 'classnames';
import { StatusDocumentResponseType } from '../../types/types';

interface Props {
  historyInvoices: string[];
  fetchStatusDocuments: (par: string) => Promise<void>;
  setInvoice: (par: string) => void;
  setHistoryInvoices: (par: string[] | []) => void;
  invoice: string;
  setStatusDocuments: (par: StatusDocumentResponseType | null) => void;
}

export const ContainerHistory: FC<Props> = ({
  historyInvoices,
  fetchStatusDocuments,
  setInvoice,
  setHistoryInvoices,
  invoice,
  setStatusDocuments,
}) => {
  return (
    <div className='container-history'>
      {!!historyInvoices.length &&
        historyInvoices.map((historyInvoice, index) => (
          <div
            onClick={() => {
              setInvoice(historyInvoice);
              fetchStatusDocuments(historyInvoice);
            }}
            className={cl('container-history__item', {
              'container-history__item--active': historyInvoice === invoice,
            })}
            key={historyInvoice + index}
          >
            {historyInvoice}
          </div>
        ))}
      <button
        onClick={() => {
          setInvoice('');
          setHistoryInvoices([]);
          localStorage.clear();
          setStatusDocuments(null);
        }}
        className='container-history__button'
      >
        Clear TTN's history
      </button>
    </div>
  );
};
