import Header from "../components/header";
import PathBar from "../components/pathBar";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Header />
      <PathBar />
      <div>
        <p>Hello, World! This is Home</p>
      </div>
      <Footer />
    </>
  )
}

export default Home;