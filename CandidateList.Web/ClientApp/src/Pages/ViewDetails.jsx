import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useStatusCount } from '../components/CandidateStatusContext'


const ViewDetails = () => {

    const [candidate, setCandidate] = useState({})
    const [status, setStatus] = useState('Pending')
    const { id } = useParams()
    const { firstName, lastName, email, phoneNumber, notes } = candidate
    const { refreshCounts } = useStatusCount()

    useEffect(() => {
        const getById = async () => {
            const { data } = await axios.get(`/api/candidate/get-by-id?id=${id}`)
            setCandidate(data)
        }

        getById()
    }, [])

    const decisionMade = async (decision) => {
        await axios.post(`/api/candidate/accept-or-reject?id=${id}&&decision=${decision}`)
        setStatus(decision)
        refreshCounts()
    }

    return (
        <div className="container" style={{ marginTop: '80px' }}>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Name: {firstName} {lastName}</h4>
                        <h4>Email: {email}</h4>
                        <h4>Phone: {phoneNumber}</h4>
                        <h4>Status: {status}</h4>
                        <h4>Notes:</h4>
                        <p>{notes}</p>
                        {status === 'Pending' &&
                            <div>
                                <button className="btn btn-primary" onClick={() => decisionMade('Accepted')}>Accept</button>
                                <button className="btn btn-danger" onClick={() => decisionMade('Rejected')}>Reject</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewDetails