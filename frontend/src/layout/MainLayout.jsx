import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const MainLayout = ({
  children
}) => {

  return (

    <div className="main-layout">

      <Sidebar />

      <div className="main-content">

        <Navbar />

       <main className="main-body">
          {children}
        </main>

      </div>

    </div>
  );
};

export default MainLayout;