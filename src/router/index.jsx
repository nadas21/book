import { Routes, Route } from "react-router-dom";
import { Card } from "../components/card";
import { Kitob } from "../components/kitob";
import { New } from "../components/new";
import { Single } from "../pages/single";
import { Home } from "../pages/home";
import { Head } from "../components/head";


export const RouteWrapper = () => {
return (
    <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route path="/jadid" element={<Card/>}/>
    <Route path="/sovet" element={<Kitob/>}/>
    <Route path="/btn/:id" element={<New/>}/>
    </Routes>
)
}