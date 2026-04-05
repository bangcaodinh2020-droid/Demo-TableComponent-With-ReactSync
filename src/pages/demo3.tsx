import BaseComponent, {ButtonComponent, 
  MessageType, 
  TestComponent, 
  TableComponent, 
  CounterComponent, 
  ViewRowComponent,
  EditRowComponent,
  PaginationComponent
} from "@bangcao2020/reactsync";
import MainDashboardLayout from "../layouts/MainDashboardLayout";


export default function Demo3() {
  const styles = {table:"table table-success table-hover", tbody:"", tr:"", th:"bg-success", td:"", button:"rounded bg-success"  }
  const actions = [{label:"Edit", type:"editARow"}]
  return <MainDashboardLayout id="mainLayout" data={{}} >
       
          <h1>Demo - Edit row data</h1>
           <EditRowComponent id="viewRow32"
             data={{
              styles:{button:"bg-success rounded"},

             }}>View Edit</EditRowComponent>
          

          <TableComponent id="testTable31" 
          data={{tableName:"tableData", 
          tableTarget:"table2", 
          syncers:["viewRow31", "viewRow32", "testTable32"],
          actions:actions,
          styles:styles,
          }}> My Table</TableComponent>
          
            <PaginationComponent id={"pagination31"} 
            data={{rowsPerPage:10,
            numOfPageNode:4, 
            tableName:"tableData", 
            syncers:["testTable31"], 
            styles:{button:"page-link text-success"}}}>

            </PaginationComponent>
            

           

         


       </MainDashboardLayout>
  
  
}