import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";

export default function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={< Home />} />
                <Route path="/sp" element={<SaoPaulo />} />

            </Routes>

        </BrowserRouter>
    );
}