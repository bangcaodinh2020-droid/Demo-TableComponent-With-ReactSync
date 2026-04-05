import BaseComponent, {ButtonComponent, 
  MessageType, 
  TestComponent, 
  TableComponent, 
  CounterComponent, 
  ViewRowComponent,
  PaginationComponent
} from "@bangcao2020/reactsync";
import MainDashboardLayout from "../layouts/MainDashboardLayout";
export default function Demo1() {
  const styles = {table:"table table-dark table-hover", tbody:"", tr:"", th:"bg-danger", td:"", button:"rounded bg-danger"  }
  return <MainDashboardLayout id="mainLayout" data={{}} >
       
        <h1>Demo - Customize table, pagination</h1>
                  <ViewRowComponent id="viewRow11" 
                  data={{fromTableName:"tableData", 
                  fields:["Col 1", "Col 2", "Col 3"],
                  styles:{parentDiv:"bg-info", label:"text-dark", labelValue:"text-dark"}
                  }}>View 1</ViewRowComponent>
        
                  <TableComponent id="testTable11" 
                  data={{tableName:"tableData", 
                  tableTarget:"table2", 
                  syncers:["viewRow11", "viewRow12", "testTable12"],
                  actions:[{label:"Delete", type:"deleteARow"}, {label:"View", type:"viewARow"}],
                  styles:{table:"table table-info table-hover", tbody:"", tr:"", th:"bg-primary", td:"", button:"rounded bg-primary border border-0 mx-1"  },
                  }}> My Table</TableComponent>
                  
                   <PaginationComponent id={"pagination11"} 
                   data={{rowsPerPage:10,
                    numOfPageNode:4, 
                    tableName:"tableData", 
                    syncers:["testTable11"], 
                    styles:{button:"page-link text-info"}}}></PaginationComponent>
                   
                   <ViewRowComponent id="viewRow12" data={{}}>View 2</ViewRowComponent>
                  
       </MainDashboardLayout>
  
  
}