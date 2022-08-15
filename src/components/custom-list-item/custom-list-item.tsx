import React, {FC, useState} from 'react';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {Collapse} from "@mui/material";
import StarBorder from "@mui/icons-material/StarBorder";

interface CustomListItemProps {
    primaryName: string,
}

const CustomListItem: FC<CustomListItemProps> = ({primaryName}) => {

    const [openList, setOpenList] = useState(false);

    const handleClick = () => {
        setOpenList(!openList);
    };

    return (
        <List>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={primaryName} primaryTypographyProps={{
                    style: {
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }
                }} />
                {openList ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse in={openList} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{pl: 4}}>
                        <ListItemText primary="Starred"/>
                    </ListItemButton>
                    <ListItemButton sx={{pl: 4}}>
                        <ListItemText primary="Starred"/>
                    </ListItemButton>
                    <ListItemButton sx={{pl: 4}}>
                        <ListItemText primary="Starred"/>
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
};

export default CustomListItem;
