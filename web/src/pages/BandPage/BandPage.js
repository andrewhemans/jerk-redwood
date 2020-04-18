import BandsLayout from 'src/layouts/BandsLayout'
import BandCell from 'src/components/BandCell'

const BandPage = ({ id }) => {
  return (
    <BandsLayout>
      <BandCell id={id} />
    </BandsLayout>
  )
}

export default BandPage
