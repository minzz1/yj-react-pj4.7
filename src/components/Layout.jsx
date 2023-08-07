import Footer from "./Footer";
import Header from "./Header";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";


 
export default function Layout({children}) {
    return ( 
    <>
        <Header />
        <div className="relative">
            <div className="px-layout-padding ">{children}</div>
            <div className="absolute top-0 left-0 h-64 w-layout-padding">
                <LeftSide/>
            </div>
            <div className="absolute top-0 right-0 h-96 w-layout-padding">
                <RightSide />
            </div>
        </div>

        <Footer />
    </>
    )
}