import { PiEye, PiEyeClosedDuotone } from "react-icons/pi";
import Checkbox from "@/Components/Checkbox";
import TextInput from "@/Components/TextInput";
import { useState } from "react";
import { PasswordInputProps } from "@/types";

const PasswordInput = ({
    value,
    onChange,
    className,
    error,
    name
}: PasswordInputProps) => {
    const [isShow, setIsShow] = useState<boolean>(false);
    return (
        <div className="relative flex">
            <TextInput
                name={name}
                className={className}
                type={!isShow ? "password" : "text"}
                value={value}
                onChange={onChange}
                error={error}
            />
            <label className="absolute flex items-center justify-center p-1 text-center transition-colors rounded-full cursor-pointer hover:bg-primary-400 hover:dark:bg-primary-950 right-2 top-2 hover:bg-opacity-20 ease-in">
                <Checkbox
                    name="showPassword"
                    checked={isShow}
                    onChange={(e) => setIsShow(e.target.checked)}
                    className="hidden"
                />
                <span className="block text-primary-700">
                    {isShow ? <PiEye /> : <PiEyeClosedDuotone />}
                </span>
            </label>
        </div>
    );
};

export default PasswordInput;
