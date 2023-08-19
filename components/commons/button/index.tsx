import {FaArrowRight} from "react-icons/fa";
interface ButtonProps extends React.AllHTMLAttributes<HTMLButtonElement> {
    variant?: string;
}

const MyButton = ({children, className, variant, ...props}: ButtonProps) => {
    if (variant === "BORDER")
        return <button className={`border rounded-md text-sm text-white px-4 py-2 ${className}`} {...props}>{children}</button>
    return <button className={`bg-white text-[#0E372D] text-sm rounded-md py-2 px-4 flex justify-center items-center ${className}`} {...props}>{children}<span className={'ml-2'}><FaArrowRight className={'bg-white'} /></span></button>
}

export {MyButton};