import HomePage from "./home/homePage";
import ManagePage from "./manage/managePage";
import ProfilePage from "./profile/profilePage";

export default function MainPage() {
  return (
    <main className="bg-gray-100 bg-opacity-75 p-2" style={{ minHeight: '100vh' }}>
      <HomePage />
      {/* <ManagePage /> */}
      <ProfilePage />
    </main>
  )
}