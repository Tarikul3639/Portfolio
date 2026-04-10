export function HeroBackground() {
    return (
        <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <div className="absolute left-1/4 top-0 h-125 w-125 rounded-full bg-primary/20 blur-[120px] opacity-50" />
        </div>
    );
}