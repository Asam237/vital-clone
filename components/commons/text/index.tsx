interface TextProps extends React.AllHTMLAttributes<HTMLElement> {
    variant?: string
}

const MyText = ({variant, className, children, ...props}: TextProps) => {
    if (variant === "TITLE")
        return <h4 className={`text-white font-normal text-3xl sm:text-4xl md:text-5xl xl:text-6xl ${className}`} {...props}>{children}</h4>
    if (variant === "LOGO")
        return <h4 className={`text-white font-bold text-3xl ${className}`} {...props}>{children}</h4>
    return <p className={`${className} text-base font-light text-gray-300`} {...props}>{children}</p>
}

export {MyText}