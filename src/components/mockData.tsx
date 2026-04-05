

export function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return [name, calories, fat, carbs, protein ];
}



export const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
export function AddRow(num: number){
  for(let i =0; i < num; i++)
  rows.push(createData('Frozen yoghurt', 159, 6.0, 24, 4.0));
  return rows
}
export const columns = ["Header 1", "Header 2", "Header 3", "Header 4", "Header 5"  ];
export const actions = [{label:"Delete", type:"deleteARow"}, {label:"View", type:"viewARow"}, {label:"MoveTo", type:"moveARow", },]
export const styles = {table:"table table-dark table-hover", tbody:"", tr:"", th:"bg-danger", td:"", button:"rounded bg-danger"  }

export const rows2 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  
];

export const columns2 = ["Column 1", "Column 2", "Column 3" ];
export const actions2 = [{label:"Delete", type:"deleteARow"}, {label:"View", type:"viewARow"}, {label:"Edit", type:"editARow"}, {label:"Return", type:"moveARow", },]
