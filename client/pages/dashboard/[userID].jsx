import { useRouter } from "next/router";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import ProfilePage from "../../components/dashboard/profilepage";
const UserDash = () => {
    const router = useRouter();
    const { userID } = router.query;
    return (<>
        <DashboardLayout children={<ProfilePage userID={userID}/>}/>
    </>)
}
export default UserDash;

UserDash.getLayout = function getLayout(page) {
    const router = useRouter();
    const { userID } = router.query;
    return (
        <DashboardLayout>
            <ProfilePage userID={userID}>{page}</ProfilePage>
        </DashboardLayout>
    )
}