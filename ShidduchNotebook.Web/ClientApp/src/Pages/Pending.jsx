import axios from 'axios'
import { useState, useEffect } from 'react'
import PendingRow from '../components/PendingRow'

const Pending = () => {

    const [pendingCandidates, setPendingCandidates] = useState([])

    useEffect(() => {
        const getPendingCandidates = async () => {
            const { data } = await axios.get('/api/shidduch/researching')
            setPendingCandidates(data)
        }

        getPendingCandidates()
    }, [])

    return (
        <div className="container" style={{ marginTop: '80px' }}>
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                   {pendingCandidates.map(c => <PendingRow key={c.id} candidate={c}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default Pending