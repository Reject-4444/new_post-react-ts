import { FC } from "react";
import { StatusDocumentResponseType } from "../../types/types";
import './ContainerInfo.scss';

interface Props {
    statusDocuments: StatusDocumentResponseType | null;
    invalidFormat: string;
}

export const ContainerInfo: FC<Props> = ({statusDocuments, invalidFormat}) => {
  return (
    <section className="container-info">
      <h1 className="containerinfo__status">Статус доставки: {!invalidFormat && statusDocuments?.data[0].Status}</h1>
      <p className="containerinfo__another"><strong>Відправлено:</strong> {!invalidFormat && statusDocuments?.data[0].WarehouseSender}</p>
      <p className="containerinfo__another"><strong>Отримано:</strong> {!invalidFormat &&statusDocuments?.data[0].WarehouseRecipient}</p>
    </section>
  );
};
