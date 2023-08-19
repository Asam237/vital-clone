import {FaChevronRight} from "react-icons/fa";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: string;
}

const MyButton = ({children, className, variant, ...props}: ButtonProps) => {
    if (variant === "BORDER")
        return <button type="button" className={`border rounded-md text-sm text-gray-300 border-gray-600 px-4 py-2 ${className}`} {...props}>{children}</button>
    return <button type="button" className={`bg-white text-[#0E372D] text-sm rounded-md py-2 px-4 flex justify-center items-center ${className}`} {...props}>{children}<span className={'ml-2'}><FaChevronRight size={10} className={'bg-white'} /></span></button>
}

export {MyButton};