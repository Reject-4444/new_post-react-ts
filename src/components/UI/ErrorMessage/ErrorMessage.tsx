import { Dispatch, FC, SetStateAction, useEffect } from "react";
import './ErrorMessage.scss';

interface Props {
    isError: string;
    invalidFormat: string;
    setIsShowingError: Dispatch<SetStateAction<boolean>>;
}

export const ErrorMessage:FC<Props> = ({isError, invalidFormat, setIsShowingError}) => {
    useEffect(() => {
        setTimeout(() => {
            setIsShowingError(false);
        }, 3000);
    }, [setIsShowingError]);

    return (
        <div className="error-message">
            <button className="error-message__button" onClick={() => setIsShowingError(false)}>x</button>
            <p className="error-message__info">{isError ? isError : invalidFormat}</p>
        </div>
    )
}