import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import MinasGerais from "./Paginas/MinasGerais";
import RiodeJaneiro from "./Paginas/RiodeJaneiro";
import EspiritoSanto from "./Paginas/EspiritoSanto";
import RioGrandedoSul from "./Paginas/RioGrandedoSul";
import Parana from "./Paginas/Parana";
import SantaCatarina from "./Paginas/SantaCatarina";

export default function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={< Home />} />
                <Route path="/sp" element={<SaoPaulo />} />
                <Route path="/mg" element={<MinasGerais />} />
                <Route path="/rj" element={<RiodeJaneiro />} />
                <Route path="/es" element={<EspiritoSanto />} />
                <Route path="/rs" element={<RioGrandedoSul />} />
                <Route path="/pr" element={<Parana />} />
                
            </Routes>

        </BrowserRouter>
    );
}