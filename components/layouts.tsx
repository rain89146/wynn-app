export function SectionLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container flex flex-col max-w-5xl w-full mx-auto">
            {children}
        </div>
    )
}

export function LandscapeSectionLayout({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`w-full relative ${className}`}>
            <div className="container flex flex-col max-w-5xl w-full mx-auto gap-10 py-20">
                {children}
            </div>
        </div>
    )
}

export function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col flex-1 items-center justify-center">
            {children}
        </div>
    )
}