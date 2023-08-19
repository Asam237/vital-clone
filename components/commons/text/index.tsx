interface TextProps extends React.AllHTMLAttributes<HTMLElement> {
    variant?: string
}

const MyText = ({variant, className, children, ...props}: TextProps) => {
    if (variant === "TITLE")
        return <h4 className={`text-white font-normal text-5xl ${className}`} {...props}>{children}</h4>
    if (variant === "LOGO")
        return <h4 className={`text-white font-bold text-base ${className}`} {...props}>{children}</h4>
    return <p className={`${className} text-base font-light text-gray-300`} {...props}>{children}</p>
}

export {MyText}