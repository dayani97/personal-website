 import clsx from "clsx";
import "./App.css";
import "./i18n";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Biography from "./components/Biography";
import Footer from "./components/Footer/Footer";
export interface Props{className?:string;}
const App= ({className}:Props)=>  {
  return (
    <div className={clsx(className,"flex flex-col min-h-screen")}>
      <Header />
      <div className={clsx(className,"flex-1")}>
        <Hero />
        <Biography />
      </div>
      <Footer />
    </div>
  );
}

export default App;
