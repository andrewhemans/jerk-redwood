import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import BandForm from 'src/components/BandForm'

const CREATE_POST_MUTATION = gql`
  mutation CreateBandMutation($input: CreateBandInput!) {
    createBand(input: $input) {
      id
    }
  }
`

const NewBand = () => {
  const [createBand, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.bands())
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      authorId: parseInt(input.authorId),
    })
    createBand({ variables: { input: castInput } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Band</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <BandForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBand
