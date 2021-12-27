import * as React from 'react';
import Grid from '@mui/material/Grid';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

import { useNotificationContext, types } from '../../contexts/NotificationContext.js';

import { create, getAll, remove, update } from '../../services/channelsService.js';

export default function ChannelsTable() {
    const [channels, setChannels] = React.useState([]);
    const [editRowsModel, setEditRowsModel] = React.useState({});

    const { addNotification } = useNotificationContext();

    const handleEditRowsModelChange = React.useCallback((model) => {
        setEditRowsModel(model);
    }, []);

    const deleteChannel = React.useCallback(
        (params) => () => {
            if (params.row.link === "" || params.row.name === "") {
                setChannels((prevRows) => prevRows.filter((row) => row.id !== params.id));
                return;
            }
            remove(params.id).then(() => {
                setChannels((prevRows) => prevRows.filter((row) => row.id !== params.id));
                addNotification("Channel is delete successfully", types.success);
            }).catch(err => addNotification(err.message));
        },
        [addNotification],
    );

    const saveChannel = React.useCallback(
        (params) => () => {
            if (params.row.link === "" || params.row.name === "") return;
            if (params.id === 0 && params.row.link !== "" && params.row.name !== "") {
                create(params.row)
                    .then(addNotification("Channel is added successfully", types.success))
                    .catch(err => addNotification(err.message))
            } else {
                update(params.id, params.row)
                    .then(() => addNotification("Channel is updated successfully", types.success))
                    .catch(err => addNotification(err.message));
            }
        },
        [addNotification],
    );

    const columns = React.useMemo(
        () => [
            { field: 'name', headerName: 'Name', flex: 1, editable: true },
            { field: 'link', headerName: 'Link', flex: 1, editable: true },
            {
                field: 'actions', headerName: 'Actions', type: "actions", width: 100, editable: false, getActions: (params) => [
                    <GridActionsCellItem
                        icon={<SaveIcon />}
                        label="Save"
                        onClick={saveChannel(params)}
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={deleteChannel(params)}
                    />,
                ]
            },
        ], [deleteChannel, saveChannel]);

    React.useEffect(() => {
        getAll()
            .then(res => setChannels(res));
    }, []);


    const handleAddRow = React.useCallback(() => {
        setChannels((prevRows) => [...prevRows, { id: 0, name: "", link: "" }]);
    }, []);


    return (
        <Grid container>
            <Grid item lg={2} />
            <Grid item xs={12} lg={8} sx={{ mt: 10 }}>
                <DataGrid
                    autoHeight
                    rowsPerPageOptions={[]}
                    rows={channels}
                    columns={columns}
                    editRowsModel={editRowsModel}
                    editMode="cell"
                    onEditRowsModelChange={handleEditRowsModelChange}
                    hideFooter={true}
                />
                <Button onClick={handleAddRow} variant="outlined" sx={{ mt: 2, }} startIcon={<AddCircleOutlinedIcon />}>Add channel</Button>
            </Grid>
            <Grid item lg={2} />
        </Grid>
    );
}
