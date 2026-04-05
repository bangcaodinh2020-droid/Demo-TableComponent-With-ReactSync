import BaseComponent, {ButtonComponent, 
  MessageType, 
  TestComponent, 
  TableComponent, 
  CounterComponent, 
  ViewRowComponent,
  PaginationComponent
} from "@bangcao2020/reactsync";
import MainDashboardLayout from "../layouts/MainDashboardLayout";
export default function Demo2() {
  const styles = {table:"table table-dark table-hover", tbody:"", tr:"", th:"bg-danger", td:"", button:"rounded bg-danger"  }
  const actions = [{label:"Delete", type:"deleteARow"}, {label:"View", type:"viewARow"}, {label:"MoveTo", type:"moveARow", },]

  return <MainDashboardLayout id="mainLayout" data={{}} >
       
        <h1>Demo  - Move data between tables</h1>
                  <ViewRowComponent id="viewRow21" 
                  data={{fromTableName:"tableData", 
                  fields:["Col 1", "Col 2", "Col 3"],
                  styles:{parentDiv:"bg-danger", label:"text-light", labelValue:"text-info"}
                  }}>View 1</ViewRowComponent>
        
                  <TableComponent id="testTable21" 
                  data={{tableName:"tableData", 
                  tableTarget:"table2", 
                  syncers:["viewRow21", "viewRow22", "testTable22"],
                  actions:actions,
                  styles:styles,
                  }}> My Table</TableComponent>
                  
                   <PaginationComponent id={"pagination21"} 
                   data={{rowsPerPage:10,
                    numOfPageNode:4, 
                    tableName:"tableData", 
                    syncers:["testTable21"], 
                    styles:{button:"page-link text-dark"}}}></PaginationComponent>
                   
                   <ViewRowComponent id="viewRow22" data={{}}>View 2</ViewRowComponent>
                  <TableComponent 
                  id="testTable22" 
                  data={{tableName:"table2", 
                  tableTarget:"tableData", 
                  syncers:["viewRow21", "viewRow22"],
                  actions:[],
                  columns:["H1", "h2", "h3", "h4"]
                  } }> Table 2</TableComponent> 
                  <PaginationComponent id={"pagination22"} 
                  data={{rowsPerPage:10, 
                  numOfPageNode:4, 
                  tableName:"table2", 
                  syncers:["testTable22"],
                  styles:{button:"page-link text-dark"},
                  }}></PaginationComponent>
       </MainDashboardLayout>
  
  
}