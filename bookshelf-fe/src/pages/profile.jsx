import Avatar from "react-avatar";

import Header from "../components/header";
import PathBar from "../components/pathBar";
import Footer from "../components/footer";

function Profile() {
  return (
    <>
      <Header />
      <PathBar />
      <div className="flex flex bg-white p-7">
        <div className="mr-auto border border-black p-10">
          <Avatar size="150" round={true} name="Tafif" />
          <h1 className="font-bold">Tafif Assiddiqi</h1>
          <p className="italic">"Shine Bright Like A Diamond"</p>
        </div>
        <div className="flex-1 justify-end border border-black p-10">
          <h3 className="font-semibold">Profile</h3>
          <p>Name: Tafif</p>
          <p>Position: Backend Developer</p>
          <p>Country: US</p>
          <p>Age: 20 years old</p>
          <h5>Social Media</h5>
          <div className="flex justify-center">
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Github</p>
            <p>Youtube</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
