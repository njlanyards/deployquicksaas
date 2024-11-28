import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "./modest.css";
import "./layout.css"

const DashboardLayout = async ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full relative">
            <div className="flex flex-col min-h-screen">
                {/* Main content section */}
                <div className="flex-grow">
                    <Navbar />
                    <div className="blog">
                        <div className="w-full md:w-1/2 mx-auto ">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default DashboardLayout;