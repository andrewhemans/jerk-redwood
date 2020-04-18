import StreamsLayout from 'src/layouts/StreamsLayout'
import StreamCell from 'src/components/StreamCell'

const StreamPage = ({ id }) => {
  return (
    <StreamsLayout>
      <StreamCell id={id} />
    </StreamsLayout>
  )
}

export default StreamPage
