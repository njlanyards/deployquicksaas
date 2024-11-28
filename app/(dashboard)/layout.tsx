import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const DashboardLayout = async ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full relative">
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow">
                    <Navbar />
                    {children}
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default DashboardLayout;