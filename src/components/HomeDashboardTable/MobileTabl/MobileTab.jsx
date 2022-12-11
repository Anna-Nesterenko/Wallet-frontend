import {
  ContainerMobileTabl,
  CardBox,
  TypographyCard,
  Span,
  ContainerEmpty
} from './MobileTabl.styled'
import { useId } from 'react'
import EllipsisText from 'react-ellipsis-text'

const MobileTabl = ({ data }) => {
  const unid = useId()

  if (data.length > 0) {
    const card =
      // data &&
      data.map(({ type, category, comment, amount, balance, date }) => {
        const time = date
        const newDate = new Date(time).toLocaleDateString()

        return (
          <ContainerMobileTabl sx={{ minWidth: 280 }} isType={type ? '+' : '-'}>
            <CardBox key={unid}>
              <TypographyCard>
                Date <Span> {newDate}</Span>
              </TypographyCard>
              <TypographyCard>
                Type <Span>{type ? '+' : '-'}</Span>
              </TypographyCard>
              <TypographyCard>
                Category <Span>{category.name}</Span>
              </TypographyCard>
              <TypographyCard>
                Comment
                <Span>
                  <EllipsisText text={comment} length={'20'} />
                </Span>
              </TypographyCard>
              <TypographyCard>
                Sum <Span isType={type ? '+' : '-'}>{amount.toFixed(2)}</Span>
              </TypographyCard>
              <TypographyCard>
                Balance <Span>{balance.toFixed(2)}</Span>
              </TypographyCard>
            </CardBox>
          </ContainerMobileTabl>
        )
      })
    return card
  } else {
    return (
      <ContainerEmpty sx={{ minWidth: 280 }}>
        There are no recorded transactions. Click the{' '}
        <span style={{ color: 'var(--accentPrimary' }}>green button </span> in
        the lower right corner ↓ and make the first entry!
      </ContainerEmpty>
    )
  }
}
export default MobileTabl