import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import {Header} from "@app/components/Header";
import {Footer} from "@app/components/Footer";
import {AppContextProvider} from "@app/contexts/AppContext";
import {CreateFeeItem} from "@app/components/CreateFeeItem";
import {Slide, ToastContainer} from "react-toastify";
import {Metadata} from "next";

type Props = Readonly<{ children: React.ReactNode }>;

export const metadata: Metadata = {
    title: 'Fee Tracking',
    description: 'Fee Tracking',
};

export default function RootLayout({children}: Props) {
    return (
        <html lang="en" className="relative h-full">
        <body>
        <div className="flex flex-col w-full max-w-lg min-h-screen mx-auto shadow-lg">
            <AppContextProvider>
                <Header/>
                {children}
                <Footer/>
                <CreateFeeItem/>
            </AppContextProvider>
        </div>
        <ToastContainer
            position="bottom-center"
            autoClose={5000}
            limit={1}
            hideProgressBar
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme="light"
            transition={Slide}
            style={{
                marginBottom: "2rem",
                marginLeft: "1rem",
                width: "92%"
            }}
        />
        </body>
        </html>
    );
}
