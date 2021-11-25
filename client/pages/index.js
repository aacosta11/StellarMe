import Layout from "../components/Layout"
import Homepage from "../components/homepage/Homepage"
export default function Home() {
  return (
    <div>
      <Layout children={<Homepage/>}/>
    </div>
  )
}
