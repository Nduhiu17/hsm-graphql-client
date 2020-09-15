import React, {useEffect} from 'react';
import MaterialTable from 'material-table';
import AddIcon from '@material-ui/icons/Add';
import VisibilityIcon from '@material-ui/icons/Visibility';
import history from '../utils/history'

export default function AppTable({columns,data}) {

  const [state, setState] = React.useState({
    columns: columns,
    data: data,
  });

  const handleClick = (id) => {
      history.push(`/patients/${id}`)
  }

  return (
    <MaterialTable
      title="Patients"
      actions={[
        {
          icon: () => <VisibilityIcon />,
          tooltip: 'View Patient Details',
          onClick: (event, rowData) => handleClick(rowData.id)
        }
      ]}
      options={{
        actionsColumnIndex: -1
      }}
      filtering
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
