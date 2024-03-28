import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function NotFoundPage() {
    return (
        <>
        <div>
            <div>
                <Navbar />
                <div className="mt-[5rem] text-white">
                    NOT FOUND
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}