import { useRouter } from "next/router";
import Layout from "../../components/homepage/Layout";
import DashboardHeader from "../../components/dashboard/DashboardNavbar";
import ProfilePage from "../../components/dashboard/profilepage";
const UserDash = () => {
    const router = useRouter();
    const { userID } = router.query;
    return (<>
        <Layout children={userID}/>
    </>)
}
export default UserDash;