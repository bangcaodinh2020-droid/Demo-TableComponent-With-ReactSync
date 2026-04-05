import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Info from "./pages/info";
import Demo2 from "./pages/demo2";
import Demo3 from "./pages/demo3";
import Demo1 from "./pages/demo1";


import BaseComponent, {MessageType, BaseApp} from "@bangcao2020/reactsync";
import type {BaseProps} from "@bangcao2020/reactsync";
import {createData} from "./components/mockData";


export default class App extends BaseApp {
  
    override onNotified(event:any) : void
      {
        super.onNotified(event);
      
       
      }
  onSynchronized(): void {
   
   
  }
  
        
  render(){
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/demo1" element={<Demo1 />} />
      <Route path="/demo2" element={<Demo2 />} />
      <Route path="/demo3" element={<Demo3 />} />
     
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}
}