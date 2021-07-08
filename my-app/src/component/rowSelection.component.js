import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';

const SingleRowSelectionGrid = () => {
    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 10,
        maxColums: 6,
    });

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid {...data} />
        </div>
    );
}

export default SingleRowSelectionGrid;