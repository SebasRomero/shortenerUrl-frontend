import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';


export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 300 }} color={'black'} role="document" onClick={toggleDrawer(false)}>
            <div className="p-4">
                <h1 className="text-2xl font-bold">To be considered:</h1>
                <br />
                <div className="text-xl pl-4">
                    <p>
                        As this is a demo, some points have not been taken into account
                        appropriately, in order to economize.
                    </p>
                    <br />
                    <ul>
                        <li className="py-2">- The url is not "short" as it should because this is a demo.</li>
                        <li className="py-2">- The short url will live only 1 hour to keep the db empty.</li>
                        <li className="py-2">- This short url should not be used as a real one.</li>
                    </ul>
                </div>
            </div>

        </Box>
    );

    return (
        <div className='pl-4 pt-4'>
            <Button style={{color: "black", background: "#06ffb4"}} onClick={toggleDrawer(true)}>Read me</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}