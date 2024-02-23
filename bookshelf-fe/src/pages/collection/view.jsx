import { useParams } from "react-router-dom";

import Header from "../../components/header";
import PathBar from "../../components/pathBar";
import Footer from "../../components/footer";

function View() {
  let { bookId } = useParams();

  return (
    <>
      <Header />
      <PathBar />
      <div>
        <h2>Book ID: {bookId}</h2>
      </div>
      <Footer />
    </>
  );
}

export default View;
