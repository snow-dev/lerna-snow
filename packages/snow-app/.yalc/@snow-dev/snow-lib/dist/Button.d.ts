import { FC } from "react";
export interface IButton {
    label?: string;
    onHandleCLick?: () => void;
}
declare const Button: FC<IButton>;
export default Button;
