import DashboardNavbar from "./DashboardNavbar";
import Footer from "../Footer";
const DashboardLayout = ({children}) => {
    return (<>
    <DashboardNavbar />
    <main>{children}</main>
    <Footer />
    </>)
}
export default DashboardLayout;