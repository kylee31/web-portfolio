import { HashRouter, Routes, Route } from "react-router-dom";
import MainProject from "./page/MainProject";
import Profile from "./page/Profile";
import GroupProject from "./page/GroupProject";
import Layout from "./component/Layout";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route index path="/" element={<MainProject />} />
          <Route path="/group/" element={<GroupProject />} />
          <Route path="/profile/" element={<Profile />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
