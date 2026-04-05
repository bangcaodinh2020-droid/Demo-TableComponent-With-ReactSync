import BaseComponent, {ButtonComponent, 
  MessageType, 
  TestComponent, 
  TableComponent, 
  CounterComponent, 
  ViewRowComponent,
  PaginationComponent
} from "@bangcao2020/reactsync";
import MainDashboardLayout from "../layouts/MainDashboardLayout";


export default function Home() {
  const styles = {table:"table table-dark table-hover", tbody:"", tr:"", th:"bg-danger", td:"", button:"rounded bg-danger"  }
   const actions = [{label:"Delete", type:"deleteARow"}, {label:"View", type:"viewARow"},]

  return <MainDashboardLayout id="mainLayout" data={{}} >
        <h1>Basic demo - View, delete a row</h1>
          <ViewRowComponent id="viewRow1" 
          data={{fromTableName:"tableData", 
          fields:["Col 1", "Col 2", "Col 3"],
          styles:{}
          }}>View 1</ViewRowComponent>

          <TableComponent id="testTable" 
          data={{tableName:"tableData", 
          tableTarget:"table2", 
          actions:actions,
          syncers:["viewRow1", "viewRow2", "testTable2"],
          
          }}> My Table</TableComponent>
          
           
          <TableComponent 
          id="testTable2" 
          data={{tableName:"table2", 
          tableTarget:"tableData", 
          syncers:["viewRow2", "viewRow1"],
          actions:[],
          columns:["H1", "h2", "h3", "h4"]
          } }> Table 2</TableComponent> 
        
           
       </MainDashboardLayout>
  
  
}