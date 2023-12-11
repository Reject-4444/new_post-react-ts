import { FC } from 'react';
import './Loader.scss';

interface Props {
    styles: string;
}
export const Loader:FC<Props> = ({styles}) => {
    return (
        <div className={styles}></div>
    )
}