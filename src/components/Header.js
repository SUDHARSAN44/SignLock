import React from 'react';
import { Box, Column, Heading } from 'gestalt';
import { navigate, Link } from '@reach/router';
import logo from '../images/singlock.png'

import 'gestalt/dist/gestalt.css';

const Header = () =>  {
    return (<Box display="flex" direction="row" paddingY={2} color={'lightGray'}>
    <Column span={10}>
      <Box padding={3}>
        <Heading size="lg">
        <Link to="/" className='profileLink'><Heading size="lg"><img className='logo' src={logo} alt="" /></Heading></Link>

        </Heading>
      </Box>
    </Column>
    </Box>);
}

export default Header;