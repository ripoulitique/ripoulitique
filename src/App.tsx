import { Routes, Route } from "react-router-dom";
import MainNavBar from "./components/custom/navbar";
import HomePage from "./pages/home.page";
import SearchPage from "./pages/search.page";
import PoliticProfilePage from "./pages/politicProfile.page";
import ContactPage from "./pages/contact.page";
import ChartPage from "./pages/chart.page";
import NerdSpacePage from "./pages/nerdspace/nerdspace.page";

// TODO:
// rajouter des politiques et des polissoneries
// formulaire d'ajoute de politique avec un gform embed en iframe
// consulter un avocat spécialisé en droit de la presse
// évoluer vers une construction associative
// établir une procédure de retrait d'urgence
// donner un buy me a coffee pour les procédures juridiques potentielles

function App() {
  return (
    <div className="min-h-screen bg-background">
      <MainNavBar />
      <main className="p-8 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search/:politicId" element={<PoliticProfilePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/chart" element={<ChartPage />} />
          <Route path="/nerd" element={<NerdSpacePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
