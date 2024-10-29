import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import { constants } from '../../CONSTANTS';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Static Page
          </Typography>
          <Box component="div" sx={{ display: 'flex', gap: 5 }}>
            <Typography variant="body2" component="p">
              <NavLink to={`/`}>HOME</NavLink>
            </Typography>
            {constants.map((page: string, index) => (
              <Typography key={index} variant="body2" component="p">
                <NavLink to={`/${page}`}>{page.toUpperCase()}</NavLink>
              </Typography>
            ))}
            <Typography variant="body2" component="p">
              <NavLink to={`/editPage`}>ADMIN</NavLink>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
