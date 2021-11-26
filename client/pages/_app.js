import '../styles/globals.css'; // global css file
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap
import '../styles/compStyles/footer.scss'; // (all) footer
import '../styles/compStyles/navbar.scss'; // (HOME) navigation bar
import '../styles/compStyles/dashboardnavbar.scss'; // (DASH) (component) navigation bar
import '../styles/compStyles/dashboardprofilepage.scss'; // (DASH) (component W/ CONTENT) profile page
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
