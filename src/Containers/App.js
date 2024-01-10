import Layout from "../Layouts/MainLayout";
import Sidebar from "../Componentes/Sidebar/Sidebar";
import PageContainer from "./PagesContainer";
import { useState } from "react";
import Page from "../Pages/Components/Page";
import { Typography, Box } from "@mui/material";
import SidebarContainers from "./SidebarContainers";
import { MainContext } from "../Context/Index";

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

          <PageContainer>
            <Page pageNumber={pageNumber} index={0}>
              <Box
                sx={{
                  backgroundImage: `url(${require("../Assets/PageImage1.jpg")})`,
                  height: "100vh", 
                  backgroundSize:"cover",
                  backgroundPosition:"center",
                  backgroundRepeat:"no-repeat",
                }}
              >
                <Typography variant="h3" sx={{ textAlign: "center" , color:"primary.main" , paddingTop:"20px" }}>
                صفحه اصلی
              </Typography>  
              </Box>
            
            </Page>
            <Page pageNumber={pageNumber} index={1}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                درباره من
              </Typography>
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
          </PageContainer>
        </Layout>
      </div>
    </MainContext.Provider>
  );
}

export default App;
