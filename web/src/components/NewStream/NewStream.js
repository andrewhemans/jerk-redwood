import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import StreamForm from 'src/components/StreamForm'

const CREATE_POST_MUTATION = gql`
  mutation CreateStreamMutation($input: CreateStreamInput!) {
    createStream(input: $input) {
      id
    }
  }
`

const NewStream = () => {
  const [createStream, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.streams())
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { authorId: parseInt(input.authorId), })
    createStream({ variables: { input: castInput } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Stream</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <StreamForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewStream
