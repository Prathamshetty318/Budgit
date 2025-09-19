import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PublicLayout({children})
{
    return(
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="flex-glow">{children}</main>
            <Footer/>
        </div>
    );
}


export default PublicLayout;