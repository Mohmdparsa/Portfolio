import Layout from "./Componentes/Layouts/MainLayout";
import Sidebar from "./Componentes/Sidebar"
import ContentContainer from "./Componentes/ContentContainer"
import { useState } from "react";
import TabPanel from "./Componentes/Tabs/TabPanel";
import { Typography } from "@mui/material";

function App() {
  const [value , setValue] = useState(0)
  const handleChange = (event , newValue)=>{
    setValue(newValue)
  }
  return (
    <div className="App">
      <Layout>
        <Sidebar value={value} handleChange={handleChange}/>
        <ContentContainer> 
        <TabPanel value={value} index={0}>
          <Typography variant="h3" sx={{textAlign:"center"}}>
            صفحه اصلی
          </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <Typography variant="h3" sx={{textAlign:"center"}}>
            درباره من
          </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
          <Typography variant="h3" sx={{textAlign:"center"}}>
            رزومه من
          </Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
          <Typography variant="h3" sx={{textAlign:"center"}}>
           نمونه کارها
          </Typography>
      </TabPanel>
      <TabPanel value={value} index={4}>
          <Typography variant="h3" sx={{textAlign:"center"}}>
            نظرات
          </Typography>
      </TabPanel>
      <TabPanel value={value} index={5}>
          <Typography variant="h3" sx={{textAlign:"center"}}>
            ارتباط با من
          </Typography>
      </TabPanel>
        </ContentContainer>
      </Layout>
    </div>
  );
}

export default App;
