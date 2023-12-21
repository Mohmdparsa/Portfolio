import Layout from "./Componentes/Layouts/MainLayout";
import Sidebar from "./Componentes/Sidebar"
import ContentContainer from "./Componentes/ContentContainer"
import { useState } from "react";

function App() {
  const [value , setValue] = useState(0)
  const handleChange = (event , newValue)=>{
    setValue(newValue)
  }
  return (
    <div className="App">
      <Layout>
        <Sidebar value={value} handleChange={handleChange}/>
        <ContentContainer/>
      </Layout>
    </div>
  );
}

export default App;
