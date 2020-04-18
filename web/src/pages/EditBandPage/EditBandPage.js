import BandsLayout from 'src/layouts/BandsLayout'
import EditBandCell from 'src/components/EditBandCell'

const EditBandPage = ({ id }) => {
  return (
    <BandsLayout>
      <EditBandCell id={id} />
    </BandsLayout>
  )
}

export default EditBandPage
