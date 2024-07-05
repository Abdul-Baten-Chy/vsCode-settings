import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TaskBoard from "./task/TaskBoard";
export default function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TaskBoard /> // এখানে মেইন টেবিল রেন্ডার করা হয়েছে ।
      </div>
      <Footer />
    </>
  );
}
