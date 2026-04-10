interface Props { scrollWidth: number }

export function ProgressBar({ scrollWidth }: Props) {
    return (
        <div className="absolute top-0 left-0 w-full h-0.5 z-50">
            <div
                className="h-full bg-primary shadow-[0_0_8px_#00eeff] transition-all duration-100"
                style={{ width: `${scrollWidth}%` }}
            />
        </div>
    );
}