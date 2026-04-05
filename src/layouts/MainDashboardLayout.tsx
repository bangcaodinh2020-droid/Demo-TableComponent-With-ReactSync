//import { BaseComponent } from "../components/BaseComponent";
import BaseComponent from "@bangcao2020/reactsync";

import type {BaseProps} from "@bangcao2020/reactsync";
import MenuBar from "../components/dashboard/MenuBar";
import { Box, Grid, } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const menuItems=[
    {title:"Overview", path:"/home"},
    {title:"Pagination", path:"/demo1"},
    {title:"Move a row", path:"/demo2"},
    {title:"Edit a row", path:"/demo3"},


]

const Item = styled(Paper)(({ theme }) => ({
  height:'100%',
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const range = (start: number, end: number): number[]=>{
     const begin = (start >=0) ? start: 0;
     if(end <= begin)
        return [];
     return Array.from({ length: end - begin}, (_, i) => begin + i);
}


export default class MainDashboardLayout extends BaseComponent {
  state = {
    data:{
      count: 1,

    },
    row:range(0,1000),

   };
    constructor(props:BaseProps)
  {
    super(props);
    //this.setState({row: AddRow(20)});
  }
  override clickHandler(): void {
      //this.send({message:"hello", id: this.props.id});
  }

  override onNotified(event:any) : void
    {
      //alert("On receivered " + event.senderId);
      //this.state.data.count +=1;
      //this.send({message:"hello", receiverId: "",senderId: this.props.id, data:this.state.data}); 
  
    }
  render () {

    const {children } = this.props;
     return(
      

        <Box sx={{ flexGrow: 1, height: "100vh"}}>
        <Grid container spacing={2}>
        <Grid size={10}></Grid>
        <Grid size={2}></Grid>

        </Grid>
          
        <Grid container spacing={2}>
        
        <Grid size={{ xs: 0, sm:0, md: 2}} sx={{height: "100vh", display: { xs: 'none', md: 'block' }}}>
           <Item><MenuBar id="menuBar" data={menuItems}></MenuBar></Item>
        </Grid>
        <Grid size={{ xs: 12, sm:12, md: 10 }}>
         <Item>{children} 
          
         
          
          {/* {this.state.row.map((n, index) =>(
                  <CounterComponent id={"counterBtn" + index} data={{syncers:["counterBtn" + (index+1) , "counterBtn" + (index+2)]}}>Count</CounterComponent>
                
          ))} */}
           
         
          </Item>
        </Grid>
      </Grid>
    </Box>
         


      
    )
  }  
} 