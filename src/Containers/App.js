import Layout from "../Layouts/MainLayout";
import Sidebar from "../Componentes/Sidebar/Sidebar";
import PageContainer from "./PagesContainer";
import { useState } from "react";
import Page from "../Pages/Components/Page";
import { Typography } from "@mui/material";
import SidebarContainers from "./SidebarContainers";
import { MainContext } from "../Context/Index";
import DrawerActionButton from "../Componentes/Drawer/DrawerActionButton";
import SwipeableViews from 'react-swipeable-views';
import {Home , About} from "../Pages/Index"


function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue);
  };
  return (
    <MainContext.Provider
      value={{ pageNumber, handlePageNumber, drawerOpen, setDrawerOpen }}
    >
      <div className="App">
        <Layout>
          <SidebarContainers>
            <Sidebar
              pageNumber={pageNumber}
              handlePageNumber={handlePageNumber}
            />
          </SidebarContainers>
          <DrawerActionButton />

          <PageContainer>
            <SwipeableViews 
            index={pageNumber}
            onChangeIndex={handlePageNumber}
            >
                   <Page pageNumber={pageNumber} index={0}>
                    <Home/>
          
            </Page>
            <Page pageNumber={pageNumber} index={1}>
            <About/>
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                رزومه من
              </Typography>
            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                نمونه کارها
              </Typography>
            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                نظرات
              </Typography>
            </Page>
            <Page pageNumber={pageNumber} index={5}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                ارتباط با من
              </Typography>
            </Page>
            </SwipeableViews>
       
          </PageContainer>
        </Layout>
      </div>
    </MainContext.Provider>
  );
}

export default App;
