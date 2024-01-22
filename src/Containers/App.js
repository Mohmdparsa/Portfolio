import Layout from "../Layouts/MainLayout";
import Sidebar from "../Componentes/Sidebar/Sidebar";
import PageContainer from "./PagesContainer";
import { useState , useEffect} from "react";
import Page from "../Pages/Components/Page";
import { Typography } from "@mui/material";
import SidebarContainers from "./SidebarContainers";
import { MainContext } from "../Context/Index";
import DrawerActionButton from "../Componentes/Drawer/DrawerActionButton";
import SwipeableViews from 'react-swipeable-views';
import {Home , About , MyPortfolio} from "../Pages/Index"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';




function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue);
  };

 
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
    useEffect(()=>{
      if(isMdUp){
         setDrawerOpen(false)
      }
    },[isMdUp])

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
                    <Home helmetTitle="وب سایت شخصی امیرعلی آذرمنش"/>
          
            </Page>
            <Page pageNumber={pageNumber} index={1}>
            <About helmetTitle="وب سایت شخصی | درباره من"/>
            </Page>
            <Page pageNumber={pageNumber} index={2}>
          <MyPortfolio helmetTitle="وب سایت شخصی | نمونه کارها"/>
            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                نظرات
              </Typography>
            </Page>
            <Page pageNumber={pageNumber} index={4}>
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
