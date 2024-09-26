
import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

    const handleSearchClick = async () => {

    }

    return (
        <div className="flex min-h-screen min-w-full justify-center text-gray-700">
            <div className="flex flex-col w-full h-screen">
                <Header cartItemNumber={1} onSearchClick={handleSearchClick} />
                <div className="flex-grow overflow-y-scroll">
                    <main className="flex flex-grow p-4 justify-center">
                        {children}
                    </main>
                    <Footer />
                </div>

            </div>

        </div>
    );
};

export default Layout;