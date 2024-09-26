import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    
    return (
        <div className="flex min-h-screen min-w-full justify-center text-gray-700">
            <div className="flex flex-col w-full">
                <Header cartItemNumber={1} />
                <main className="flex-grow p-4">
                    {children}
                </main>
                <Footer />
            </div>

        </div>
    );
};

export default Layout;