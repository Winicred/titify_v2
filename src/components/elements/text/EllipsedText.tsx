interface EllipsedTextProps {
    children: string;
    className?: string;
    title?: string;
}

const EllipsedText = ({children, className, ...props}: EllipsedTextProps) => {
    return (
        <span className={`max-w-full text-ellipsis overflow-hidden ${className}`} {...props}>
            {children}
        </span>
    );
}

export default EllipsedText;