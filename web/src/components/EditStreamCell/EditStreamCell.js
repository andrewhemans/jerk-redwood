import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import StreamForm from 'src/components/StreamForm'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    stream: stream(id: $id) {
      id
      createdAt
      title
      body
      when
      link
      authorId
    }
  }
`
const UPDATE_POST_MUTATION = gql`
  mutation UpdateStreamMutation($id: Int!, $input: UpdateStreamInput!) {
    updateStream(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ stream }) => {
  const [updateStream, { loading, error }] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.streams())
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { authorId: parseInt(input.authorId), })
    updateStream({ variables: { id, input: castInput } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Stream {stream.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <StreamForm stream={stream} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
