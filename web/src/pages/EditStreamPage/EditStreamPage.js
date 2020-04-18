import StreamsLayout from 'src/layouts/StreamsLayout'
import EditStreamCell from 'src/components/EditStreamCell'

const EditStreamPage = ({ id }) => {
  return (
    <StreamsLayout>
      <EditStreamCell id={id} />
    </StreamsLayout>
  )
}

export default EditStreamPage
