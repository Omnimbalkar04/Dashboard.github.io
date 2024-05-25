import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scence/global/Topbar";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./scence/global/Sidebar";
import Dashboard from "./scence/dashboard";
import Team from "./scence/team";
import Invoices from "./scence/invoices";
import Contacts from "./scence/contacts";
import Calendar from "./scence/calendar";
import FAQ from "./scence/faq";
import Bar from "./scence/bar";
import Form from "./scence/form";
import Line from "./scence/line";
import Pie from "./scence/pie";
import Geography from "./scence/geography";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/geography" element={<Geography/>} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
