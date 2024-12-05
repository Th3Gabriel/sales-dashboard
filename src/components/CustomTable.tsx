import styled from 'styled-components'
import { pxTorem } from '@/utils'
import { CustomTableProps } from '@/types'

const CustomTableWrapper = styled.div`
  overflow-x: auto;
  width: 100%;
  table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      heigh: ${pxTorem(48)};
      padding: 0 ${pxTorem(8)} 0 0;
      text-align: left;
      &:last-child {
        text-align: right;
        padding: 0;
      }
    }
    th {
      color: ${(props) => props.theme.typographies.subtitle};
      font-weight: 600;
    }

    tr {
      border-bottom: ${pxTorem(1)} solid
        ${(props) => props.theme.appDefaultStroke};
      &:last-child {
        border-bottom: none;
      }
    }
  }
`

const CustomTable: React.FC<CustomTableProps> = ({ headers, rows }) => {
  return (
    <CustomTableWrapper>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </CustomTableWrapper>
  )
}

export default CustomTable
