import * as React from 'react';
import Grid from '@mui/material/Grid';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete'

import { useNotificationContext, types } from '../../contexts/NotificationContext.js';

import { getAll, remove } from '../../services/ticketService.js';

export default function SupportTickets() {
    const [tickets, setTickets] = React.useState([]);

    const { addNotification } = useNotificationContext();

    const deleteTicket = React.useCallback(
        (params) => () => {
            remove(params.id).then(() => {
                setTickets((prevRows) => prevRows.filter((row) => row.id !== params.id));
                addNotification("Ticket is deleted successfully", types.success);
            }).catch(err => addNotification(err.message));
        },
        [addNotification],
    );

    const columns = React.useMemo(
        () => [
            { field: 'name', headerName: 'Name', flex: 1, editable: false },
            { field: 'email', headerName: 'Email', flex: 1, editable: false },
            { field: 'message', headerName: 'Message', flex: 1, editable: false },
            {
                field: 'actions', headerName: 'Actions', type: "actions", width: 100, editable: false, getActions: (params) => [
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={deleteTicket(params)}
                    />,
                ]
            },
        ], [deleteTicket]);

    React.useEffect(() => {
        getAll()
            .then(res => setTickets(res));
    }, []);

    return (
        <Grid container>
            <Grid item lg={2} />
            <Grid item xs={12} lg={8} sx={{ mt: 10 }}>
                <DataGrid
                    autoHeight
                    rowsPerPageOptions={[]}
                    rows={tickets}
                    columns={columns}
                    hideFooter={true}
                />
            </Grid>
            <Grid item lg={2} />
        </Grid>
    );
}
