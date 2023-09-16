import ReactGoogleMapComponent from "./ReactGoogleMapComponent";
import ThreeJSViewport from "./ThreeJSViewport";
export const metadata = {
    title: "Home",
};

export default function HomePage() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6">
            {/* Card 1 - three.js viewport */}
            <div className="flex flex-col items-center m-2 w-full md:w-1/2 aspect-w-1 aspect-h-1">
                <div
                    className="aspect-content flex items-center justify-center"
                    style={{ width: "100%", height: "100%" }}
                >
                    <div
                        id="viewport"
                        style={{ width: "100%", height: "402px" }}
                        className="mb-4 border border-gray-400 rounded-md "
                    >
                        <ThreeJSViewport />
                    </div>
                </div>
                <div className="font-semibold leading-7 text-indigo-600 md:text-center">
                    Orientation
                </div>
            </div>

            {/* Card 2 - Google Maps Service */}
            <div className="flex flex-col items-center m-2 w-full md:w-1/2 aspect-w-1 aspect-h-1">
                <div
                    className="aspect-content flex items-center justify-center"
                    style={{ width: "100%", height: "100%" }}
                >
                    <div
                        id="map"
                        style={{ width: "100%", height: "352px" }}
                        className="mb-4 border border-gray-400 rounded-md "
                    >
                        {/* Google Maps Client Component */}
                        <ReactGoogleMapComponent />
                    </div>
                </div>
                <div className="font-semibold leading-7 text-indigo-600 md:text-center">
                    Location
                </div>
            </div>
        </div>
    );
}
