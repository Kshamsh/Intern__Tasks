import React,{useState} from 'react';
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  const items = [
  { name: "Home",
    link: "www.google.com",
    svg : "/assets/home.svg", 
    id : "1"},
  { name: "About",
  link: "www.yandex.com",
  svg : "../assets/info-circle-line.svg",
  id : "2" },
  { name: "Pages",
  link: "www.kek.com",
  svg : "../assets/copy-line.svg",
  id : "3" },
  { name: "Portfolio",
  link: "www.lol.com",
  svg : "../assets/briefcase-line.svg",
  id : "4" },
  { name: "FAQ",
  link: "www.youtube.com",
  svg : "../assets/question-mark.svg",
  id : "5" },
  { name: "Contact",
  link: "www.vk.com",
  svg : "../assets/phone-line.svg",
  id : "6" },
  ];

  const [burgerState,setBurgerState] = useState(false)
  return (
    <BrowserRouter>
        <Navbar active={burgerState} setActive={setBurgerState}/>
        <Sidebar items={items} active={burgerState}/>
    </BrowserRouter>
  );
}

export default App;
