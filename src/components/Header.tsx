import styled from 'styled-components'
import { pxTorem } from '@/utils'
import { Logo } from '@/components'
import { Link } from 'react-router-dom'
import { Avatar, Box, Container } from '@mui/material'

const StyleHeader = styled.header`
  background-color: ${(props) => props.theme.appBackground};
  border-bottom: ${pxTorem(1)} solid ${(props) => props.theme.appBackground};
  margin-bottom: ${pxTorem(37)};
  width: 100%;
`

function Header() {
  return (
    <StyleHeader>
      <Container maxWidth="lg">
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            height: pxTorem(64),
          }}
        >
          <Link to="/home">
            {' '}
            <Logo height={30} width={73} />{' '}
          </Link>
          <Link to="/perfil">
            <Avatar
              alt="AVATAR"
              src="/avatar.svg"
              sx={{ width: pxTorem(40), height: pxTorem(40) }}
            />
          </Link>
        </Box>
      </Container>
    </StyleHeader>
  )
}

export default Header
