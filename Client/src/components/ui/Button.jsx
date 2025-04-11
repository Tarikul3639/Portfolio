import PropTypes from 'prop-types';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({ text, onClick, variant = "primary", disabled = false, icon, className = "" }) => {
    const variants = {
        primary: "bg-primary inline-flex items-center justify-center whitespace-nowrap text-sm duration-300 font-medium ring-offset-background transition-all active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 isolation-auto border-2 border-primary overflow-hidden h-11 px-8 z-10 text-primary-foreground hover:bg-primary-light hover:text-primary-foreground  hover:cursor-pointer",

        secondary: "z-10 inline-flex items-center justify-center whitespace-nowrap text-sm duration-300 font-medium ring-offset-background transition-all active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative isolation-auto border-2 border-primary before:absolute before:w-full before:transition-all before:duration-500 before:-left-full hover:before:left-0 before:rounded-full before:bg-primary before:-z-10 before:aspect-square hover:before:scale-150 overflow-hidden hover:text-primary-foreground focus:before:left-0 focus:before:scale-150 focus:text-primary-foreground active:before:left-0 active:before:scale-150 active:text-primary-foreground h-11 px-8",

        secondary2: "inline-flex items-center justify-center whitespace-nowrap duration-300 font-medium ring-offset-background transition-all active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 isolation-auto text-secondary-foreground bg-secondary hover:bg-secondary-light overflow-hidden h-11 px-8 z-10",

        moving: "inline-flex text-black items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative before:absolute before:w-[150%] before:h-[500%] before:bg-[conic-gradient(from_90deg,_#00000000_70%,_#0b4ee619_80%,_#00DCFF_100%)] before:animate-spin before:duration-3000 after:absolute after:w-[calc(100%-5px)] after:h-[calc(100%-5px)] after:bg-primary after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2  h-15 px-8 z-10 before:-translate-x-1/2 before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:z-[-1] after:z-[-1] !text-black rounded-lg overflow-hidden",
    };

    return (
        <button
            onClick={onClick}
            className={twMerge(
                clsx(
                    variants[variant],
                    className,
                    disabled && variants.disabled
                )
            )}
            disabled={disabled}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'moving', 'secondary2']),
    disabled: PropTypes.bool,
    icon: PropTypes.node,
    className: PropTypes.string, 
};

export default Button;
