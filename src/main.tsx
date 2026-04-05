import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import {columns, columns2, rows, rows2, actions, styles , AddRow, } from "./components/mockData";


ReactDOM.createRoot(document.getElementById("app")!).render(
  <BrowserRouter>
    
    <App id="appLayout" data={{ syncData:{
                      mode:"production",
                      tableData:{rows:AddRow(10), columns: columns},
                      table2:{rows: rows2, columns: columns2},
                      
                      }}}/>
  
  </BrowserRouter>
);