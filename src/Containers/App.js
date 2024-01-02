import Layout from "../Layouts/MainLayout";
import Sidebar from "../Componentes/Sidebar/Sidebar";
import ContentContainer from "./ContentContainer";
import { useState } from "react";
import TabPanel from "../Componentes/Tabs/TabPanel";
import { Typography } from "@mui/material";
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
            <Sidebar pageNumber={pageNumber} handlePageNumber={handlePageNumber} />
          </SidebarContainers>

          <ContentContainer>
            <TabPanel pageNumber={pageNumber} index={0}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                صفحه اصلی
              </Typography>
            </TabPanel>
            <TabPanel pageNumber={pageNumber} index={1}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                درباره من
              </Typography>
            </TabPanel>
            <TabPanel pageNumber={pageNumber} index={2}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                رزومه من
              </Typography>
            </TabPanel>
            <TabPanel pageNumber={pageNumber} index={3}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                نمونه کارها
              </Typography>
            </TabPanel>
            <TabPanel pageNumber={pageNumber} index={4}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                نظرات
              </Typography>
            </TabPanel>
            <TabPanel pageNumber={pageNumber} index={5}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                ارتباط با من
              </Typography>
            </TabPanel>
          </ContentContainer>
        </Layout>
      </div>
    </MainContext.Provider>
  );
}

export default App;
