import { PiEye, PiEyeClosedDuotone } from "react-icons/pi";
import Checkbox from "./Checkbox";
import TextInput from "./TextInput";
import { ChangeEventHandler, useState } from "react";

const PasswordInput = ({value, onChange, className}:{value:string, onChange:ChangeEventHandler, className:string}) => {
    const [isShow, setIsShow] = useState<boolean>(false);
    return (
        <div className="relative flex">
            <TextInput
                className={className}
                type={!isShow ? "password" : "text"}
                value={value}
                onChange={onChange}
            />
            <label className="absolute flex items-center justify-center p-1 text-center transition-colors rounded-full cursor-pointer hover:bg-gray-400 right-2 top-2">
                <Checkbox
                    name="showPassword"
                    checked={isShow}
                    onChange={(e) => setIsShow(e.target.checked)}
                    className="hidden"
                />
                <span className="block text-gray-700">
                    {isShow ? <PiEye /> : <PiEyeClosedDuotone />}
                </span>
            </label>
        </div>
    );
};

export default PasswordInput;
