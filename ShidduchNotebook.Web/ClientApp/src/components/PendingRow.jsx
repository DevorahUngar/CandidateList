import { Link } from "react-router-dom"

const PendingRow = ({ candidate }) => {
    return (
        <tr>
            <td>
                <Link to={`/viewdetails/${candidate.id}`}>View Details</Link>
            </td>
            <td>{candidate.firstName}</td>
            <td>{candidate.lastName}</td>
            <td>{candidate.phoneNumber}</td>
            <td>{candidate.email}</td>
        </tr>
    )
}

export default PendingRow