"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function PageLoader({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Loader loading={loading} variant="full" size={50} />
            {!loading && children}
        </>
    );
}