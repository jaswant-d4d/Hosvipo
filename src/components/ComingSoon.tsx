export function ComingSoon({ name = "", showHeader = false }) {
    return (
        <div className="flex flex-col bg-white">

            {/* Header */}
            {showHeader && (
                <header className="px-6 lg:px-10 ">
                    <img
                        src="/logo.png"
                        alt="Hospivo"
                        className="h-14 lg:h-16 object-contain"
                    />
                </header>
            )}

            {/* Content */}
            <div className="flex items-center flex-1">

                {/* Left */}
                <div className="flex w-full lg:w-2/5 items-center px-6 xl:px-12 py-10">

                    <div className="max-w-xl">

                        {name && (
                            <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                                {name}
                            </span>
                        )}

                        <h1 className="mt-5 text-5xl font-bold leading-tight text-slate-900 lg:text-7xl">
                            Coming <br className=""/>
                            <span className="text-primary">Soon</span>
                        </h1>

                        <p className="mt-5 font-medium lg:font-semibold text-xl lg:text-2xl 2xl:text-3xl text-slate-600 leading-relaxed">
                            We're working hard to bring something amazing for you.
                        </p>

                        <div className="mt-6 h-1 w-32 rounded-full bg-primary" />

                        <p className="mt-8 text-base lg:text-lg text-slate-500 leading-8">
                            Stay tuned! Our new platform is on the way to make
                            healthcare smarter, faster, and better for everyone.
                        </p>

                    </div>

                </div>

                {/* Right Image */}
                <div className="hidden lg:flex w-3/5 items-center justify-center p-8">

                    <img
                        src="/coming-soon-bg.png"
                        alt="Coming Soon"
                        className="w-full max-w-4xl object-contain"
                    />

                </div>

            </div>

        </div>
    );
}