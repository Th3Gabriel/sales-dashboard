import { pxTorem } from '@/utils'
import { StyledH2, StyledSpan } from '@/components'
import { Avatar, Box } from '@mui/material'
import { AvatarsListsProps } from '@/types'

function AvatarList(props: AvatarsListsProps) {
  return (
    <>
      {props.listData.map((item, index) => (
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            padding: `${pxTorem(12)} 0`,
            key: { index },
          }}
        >
          <Box>
            <Avatar
              alt={item.name}
              src={item.avatar}
              sx={{
                width: pxTorem(48),
                height: pxTorem(48),
                marginRight: pxTorem(16),
              }}
            />
          </Box>
          <Box>
            <StyledH2>{item.name}</StyledH2>
            <StyledSpan>{item.subtitle}</StyledSpan>
          </Box>
        </Box>
      ))}
    </>
  )
}

export default AvatarList
