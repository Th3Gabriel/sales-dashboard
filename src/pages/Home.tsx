import { Header, CardComponent, AvatarsList } from '@/components'
import { currencyConverter } from '@/utils'
import { Container } from '@mui/material'

function Home() {
  const mockListData = [
    {
      avatar: '/avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(1234.54),
    },
    {
      avatar: '/avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(3234.54),
    },
    {
      avatar: '/avatar.svg',
      name: 'Nome Sobrenome 3',
      subtitle: currencyConverter(3421.54),
    },
  ]
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>Card</CardComponent>
        <CardComponent>
          <AvatarsList listData={mockListData} />
        </CardComponent>
      </Container>
      <h1>Home</h1>
    </>
  )
}

export default Home
