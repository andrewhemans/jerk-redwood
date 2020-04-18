import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import BandForm from 'src/components/BandForm'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    band: band(id: $id) {
      id
      createdAt
      active
      bandName
      homeTown
      about
      genre
      website
      bandcamp
      instagram
      authorId
    }
  }
`
const UPDATE_POST_MUTATION = gql`
  mutation UpdateBandMutation($id: Int!, $input: UpdateBandInput!) {
    updateBand(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ band }) => {
  const [updateBand, { loading, error }] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.bands())
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { authorId: parseInt(input.authorId), })
    updateBand({ variables: { id, input: castInput } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Band {band.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <BandForm band={band} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
