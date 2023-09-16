import Link from "next/link";

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* GitHub Contribute Info */}
            <div className="flex justify-center items-center bg-gray-900 px-6 py-2.5 sm:px-3.5">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white">
                    <p className="text-sm leading-6">
                        <strong className="font-semibold">GitHub</strong>
                        <svg
                            viewBox="0 0 2 2"
                            className="mx-2 inline h-0.5 w-0.5 fill-current"
                            aria-hidden="true"
                        >
                            <circle cx={1} cy={1} r={1} />
                        </svg>
                        Contribute to us, the application is still in
                        development.
                    </p>
                    <a
                        href="https://github.com/pratikiran/aerothon-pwa-application-remote"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-none rounded-full bg-white px-3.5 py-1 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                    >
                        Repo <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>

            {/* Main Page Content */}
            <main className="flex-1 grid place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-600">
                        Aerothon
                    </h2>
                    <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
                        Flymatics
                    </h1>
                    <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg max-w-lg mx-auto">
                        This app offers real-time sensor data and visuals from a
                        drone server, alongside essential configuration and
                        calibration tools.
                    </p>

                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/home"
                            className="rounded-xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        >
                            Go to Home
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
