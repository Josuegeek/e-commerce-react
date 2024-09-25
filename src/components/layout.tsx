import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex min-h-screen min-w-full justify-center">
            <div className="flex flex-col w-full max-w-[1280px]">
                <Header />
                <main className="flex-grow p-4">
                    {children}
                </main>
                <Footer />
            </div>

        </div>
    );
};

export default Layout;