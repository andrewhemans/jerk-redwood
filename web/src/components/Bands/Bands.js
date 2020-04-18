import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_POST_MUTATION = gql`
  mutation DeleteBandMutation($id: Int!) {
    deleteBand(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const BandsList = ({ bands }) => {
  const [deleteBand] = useMutation(DELETE_POST_MUTATION)

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete band ' + id + '?')) {
      deleteBand({ variables: { id }, refetchQueries: ['POSTS'] })
    }
  }

  return (
    <div className="bg-white text-gray-900 border rounded-lg overflow-x-scroll">
      <table className="table-auto w-full min-w-3xl text-sm">
        <thead>
          <tr className="bg-gray-300 text-gray-700">
            <th className="font-semibold text-left p-3">id</th>
            <th className="font-semibold text-left p-3">createdAt</th>
            <th className="font-semibold text-left p-3">active</th>
            <th className="font-semibold text-left p-3">bandName</th>
            <th className="font-semibold text-left p-3">homeTown</th>
            <th className="font-semibold text-left p-3">about</th>
            <th className="font-semibold text-left p-3">genre</th>
            <th className="font-semibold text-left p-3">website</th>
            <th className="font-semibold text-left p-3">bandcamp</th>
            <th className="font-semibold text-left p-3">instagram</th>
            <th className="font-semibold text-left p-3">authorId</th>
            <th className="font-semibold text-left p-3">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {bands.map((band) => (
            <tr
              key={band.id}
              className="odd:bg-gray-100 even:bg-white border-t"
            >
              <td className="p-3">{truncate(band.id)}</td>
              <td className="p-3">{timeTag(band.createdAt)}</td>
              <td className="p-3">{truncate(band.active)}</td>
              <td className="p-3">{truncate(band.bandName)}</td>
              <td className="p-3">{truncate(band.homeTown)}</td>
              <td className="p-3">{truncate(band.about)}</td>
              <td className="p-3">{truncate(band.genre)}</td>
              <td className="p-3">{truncate(band.website)}</td>
              <td className="p-3">{truncate(band.bandcamp)}</td>
              <td className="p-3">{truncate(band.instagram)}</td>
              <td className="p-3">{truncate(band.authorId)}</td>
              <td className="p-3 pr-4 text-right whitespace-no-wrap">
                <nav>
                  <ul>
                    <li className="inline-block">
                      <Link
                        to={routes.band({ id: band.id })}
                        title={'Show band ' + band.id + ' detail'}
                        className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                      >
                        Show
                      </Link>
                    </li>
                    <li className="inline-block">
                      <Link
                        to={routes.editBand({ id: band.id })}
                        title={'Edit band ' + band.id}
                        className="text-xs bg-gray-100 text-blue-600 hover:bg-blue-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                      >
                        Edit
                      </Link>
                    </li>
                    <li className="inline-block">
                      <a
                        href="#"
                        title={'Delete band ' + band.id}
                        className="text-xs bg-gray-100 text-red-600 hover:bg-red-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                        onClick={() => onDeleteClick(band.id)}
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BandsList
