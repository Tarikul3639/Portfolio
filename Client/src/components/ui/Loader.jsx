import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import HashLoader from "react-spinners/HashLoader";

const Loader = ({ loading, variant, size }) => {
    if (!loading) return null;

    if (variant === "full") {
        return (
            <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50">
                <PulseLoader
                    color="#00c896"
                    size={size}
                    speedMultiplier={0.9}
                    loading={true}
                />
            </div>
        );
    }

    if (variant === "small") {
        return (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y- w-full h-full flex /items-center justify-center bg-background-light dark:bg-background-dark z-50">
                <HashLoader
                    size={size}
                    color="#00c896"
                    loading={true}
                    speedMultiplier={0.9}
                />
            </div>
        );
    }

    return null;
};

export default Loader;
