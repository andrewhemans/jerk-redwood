import { Link, routes } from '@redwoodjs/router'

import Bands from 'src/components/Bands'

export const QUERY = gql`
  query POSTS {
    bands {
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

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center">
      {'No bands yet. '}
      <Link
        to={routes.newBand()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ bands }) => {
  return <Bands bands={bands} />
}
