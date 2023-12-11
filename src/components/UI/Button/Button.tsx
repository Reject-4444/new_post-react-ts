import { FC } from "react";
import './Button.scss';
import { Loader } from "../Loader/Loader";

interface Props {
    children: string;
    isLoading: boolean;
}

export const Button: FC<Props> = ({children, isLoading}) => {
    return <button disabled={!!isLoading} type="submit" className="button">{!isLoading ? children : <Loader styles="loader" />}</button>
}