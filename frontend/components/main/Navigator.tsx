import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText, { ListItemTextProps } from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useSelector } from 'react-redux';
import { RootState } from 'lib/store/modules';
import { ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';

const Navigator = () => {
    const company = useSelector((state: RootState) => state.company.company)
    const user = useSelector((state: RootState) => state.user.user)
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    const Nav = styled(List)<{ component?: React.ElementType }>({
        '& .MuiListItemIcon-root': {
            minWidth: 24,
            marginRight: 11,
        },
    });
    const CustomListItemText = styled(ListItemText)<{ component?: React.ElementType }>({
        '& span': {
            fontSize: 18,
            fontWeight: 'bold'
        }
    })
    const CustomExpandLess = styled(ExpandLess)<{ component?: React.ElementType }>({
        fontSize: 24
    })
    const CustomExpandMore = styled(ExpandMore)<{ component?: React.ElementType }>({
        fontSize: 24
    })

    return (
        <Nav
            sx={{ width: '100%', maxWidth: 280, height: '100%', bgcolor: '#f96726', color: '#fff', fontFamily: 'NotoSans' }}
            component="nav"
            aria-labelledby="nested-list-subheader">
            <ListItem sx={{ textAlign: 'center' }}>
                <ListItemText primary={'토마토컴퍼니'}
                    primaryTypographyProps={{
                        fontSize: 36,
                        fontWeight: 'bold',
                        letterSpacing: '-0.9px',
                    }} />
            </ListItem>
            <ListItemButton>
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                <CustomListItemText primary="나의 OKR" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <CustomListItemText primary={`${user.groupString} OKR`} />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <CustomListItemText primary="전체 OKR" />
                {open ? <CustomExpandLess /> : <CustomExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ backgroundColor: '#f78755' }}>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <CustomListItemText primary="한국지사" />
                        {open ? <CustomExpandLess /> : <CustomExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding sx={{ backgroundColor: '#f7a47f' }}>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <CustomListItemText primary="서울본부" />
                                {open ? <CustomExpandLess /> : <CustomExpandMore />}
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <CustomListItemText primary="경기본부" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <CustomListItemText primary="충북본부" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <CustomListItemText primary="미국지사" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <CustomListItemText primary="중국지사" />
                    </ListItemButton>
                </List>
            </Collapse>
        </Nav>
    );
}
export default Navigator;