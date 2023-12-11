import { FormEvent, useEffect, useState } from 'react';
import { StatusDocumentResponseType } from '../types/types';
import { useFetching } from '../hooks/useFetching';
import { API_KEY } from '../constants/api';
import PostService from '../API/PostService';
import { ErrorMessage } from '../components/UI/ErrorMessage/ErrorMessage';
import { ContainerInfo } from '../components/ContainerInfo/ContainerInfo';
import { Form } from '../components/UI/Form/Form';
import { ContainerHistory } from '../components/ContainerHistory/ContainerHistory';

export const HomePage = () => {
  const [statusDocuments, setStatusDocuments] =
    useState<StatusDocumentResponseType | null>(null);
  const [invoice, setInvoice] = useState('');
  const [invalidFormat, setInvalidFormat] = useState('');
  const [isShowingError, setIsShowingError] = useState(true);
  const [historyInvoices, setHistoryInvoices] = useState<string[]>([]);

  useEffect(() => {
    const arrayWithInvoices = localStorage.getItem('historyInvoices');

    if (arrayWithInvoices) {
      setHistoryInvoices(JSON.parse(arrayWithInvoices));
    } else {
      localStorage.setItem('historyInvoices', JSON.stringify([]));
    }
  }, []);

  const [
    fetchStatusDocuments,
    isLoadingStatusDocuments,
    isErrorStatusDocuments,
  ] = useFetching(async (ttn) => {
    setInvalidFormat('');
    const requestData = {
      apiKey: API_KEY,
      modelName: 'TrackingDocument',
      calledMethod: 'getStatusDocuments',
      methodProperties: {
        Documents: [{ DocumentNumber: ttn?.trim(), Phone: ttn?.trim() }],
      },
    };
    const response = await PostService.getStatusDocuments(requestData);
    if (!response.data.length) {
      setInvalidFormat('Ви ввели невірні дані');
      setStatusDocuments(null);
      setIsShowingError(true);
    } else {
      setStatusDocuments(response);
      setHistoryInvoices(
        ttn
          ? historyInvoices.includes(ttn)
            ? historyInvoices
            : [...historyInvoices, ttn]
          : historyInvoices
      );
      const arrayWithInvoices = localStorage.getItem('historyInvoices');

      if (arrayWithInvoices && ttn && !arrayWithInvoices.includes(ttn)) {
        const parsedArrayWithInvoices = JSON.parse(arrayWithInvoices);
        parsedArrayWithInvoices.push(ttn);
        localStorage.setItem(
          'historyInvoices',
          JSON.stringify(parsedArrayWithInvoices)
        );
      }
    }
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const digitValidationRegex = /^\d{9,15}$/;

    if (digitValidationRegex.test(invoice.trim())) {
      setInvalidFormat('');
      await fetchStatusDocuments(invoice);
    } else {
      setInvalidFormat('Ви ввели невірний формат ТТН');
      setIsShowingError(true);
    }
  };

  return (
    <div className='App'>
      {(!!isErrorStatusDocuments || !!invalidFormat) && !!isShowingError && (
        <ErrorMessage
          setIsShowingError={setIsShowingError}
          invalidFormat={invalidFormat}
          isError={isErrorStatusDocuments}
        />
      )}
      <div className="container-info-wrapper">
        <Form
          isLoading={isLoadingStatusDocuments}
          invoice={invoice}
          setInvoice={setInvoice}
          handleSubmit={handleSubmit}
        />
        <ContainerInfo
          invalidFormat={invalidFormat}
          statusDocuments={statusDocuments}
        />
      </div>

      <ContainerHistory
        invoice={invoice}
        setInvoice={setInvoice}
        fetchStatusDocuments={fetchStatusDocuments}
        historyInvoices={historyInvoices}
        setHistoryInvoices={setHistoryInvoices}
        setStatusDocuments={setStatusDocuments}
      />
    </div>
  );
};
