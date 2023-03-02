import AddIcon from '@mui/icons-material/Add';
import { Fab, IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import Model from './Model';

const Add = () => {
    const [open,setOpen] = useState(false)
  return (
    <>
      <Tooltip onClick={()=>setOpen(true)} title="Add" sx={{
        position:"fixed",
        bottom:25,
        left:{xs:"calc(40%)",md:15  }
      }}>
        <IconButton>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </IconButton>
      </Tooltip>

      <Model opens={open} setOpens={setOpen} />
    </>
  );
};

export default Add;
