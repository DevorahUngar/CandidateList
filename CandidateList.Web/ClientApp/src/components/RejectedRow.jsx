const RejectedRow = ({ candidate, showNotes }) => {
    const { firstName, lastName, phoneNumber, email, notes } = candidate

    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{phoneNumber}</td>
            <td>{email}</td>
            {showNotes && <td>{notes}</td>}
        </tr>
    )
}

export default RejectedRow