import { Header, CardComponent, AvatarsList, CustomTable } from '@/components'
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

  const mockTableData = {
    headers: ['Nome', 'E-mail', 'Ações'],
    rows: [
      [
        <span>Nome 1</span>,
        <span>nome1@email.com</span>,
        <button>Ação</button>,
      ],
      [
        <span>Nome 2</span>,
        <span>nome2@email.com</span>,
        <button>Ação</button>,
      ],
      [
        <span>Nome 3</span>,
        <span>nome3@email.com</span>,
        <button>Ação</button>,
      ],
    ],
  }
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>Card</CardComponent>
        <CardComponent>
          <AvatarsList listData={mockListData} />
        </CardComponent>
        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>
      </Container>
      <h1>Home</h1>
    </>
  )
}

export default Home
