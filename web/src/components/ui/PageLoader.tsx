"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function PageLoader({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500); // Simulate a loading delay of 1.5 seconds
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Loader loading={loading} variant="full" size={50} />
            {!loading && children}
        </>
    );
}