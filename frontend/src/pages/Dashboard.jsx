import {
  useEffect,
  useState
} from "react";

import MainLayout
from "../layout/MainLayout";

import DashboardCard
from "../dashboard/DashboardCard";

import {
  getDashboard
}
from "../services/dashboardService";

function Dashboard() {

  const [stats,setStats] =
    useState(null);

  useEffect(()=>{

    loadDashboard();

  },[]);

  const loadDashboard =
  async()=>{

    try{

      const response =
      await getDashboard();

      setStats(
       response.data
      );

    }catch(error){

      console.log(error);

    }
  };

  return (

    <MainLayout>

      <div
        className="
        dashboard-container"
      >

        <DashboardCard
          title="Products"
          value={
            stats?.totalProducts || 0
          }
        />

        <DashboardCard
          title="Categories"
          value={
            stats?.totalCategories || 0
          }
        />

        <DashboardCard
          title="Added Today"
          value={
            stats?.productsAddedToday || 0
          }
        />

      </div>

    </MainLayout>

  );
}

export default Dashboard;