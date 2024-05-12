import axios from 'axios'
import { useState, useEffect } from 'react'
import RejectedRow from '../components/RejectedRow'

const Rejected = () => {
    const [rejectedCandidates, setRejectedCandidates] = useState([])
    const [toggleNotes, setToggleNotes] = useState(true)

    useEffect(() => {
        const getRejectedCandidates = async () => {
            const { data } = await axios.get('/api/shidduch/saidno')
            setRejectedCandidates(data)
        }

        getRejectedCandidates()
    }, [])

    return (
        <div className="container" style={{marginTop: '80px'}}>
            <div>
                <h1>Rejected</h1>
                <div>
                <button className="btn btn-success" onClick={() => setToggleNotes(!toggleNotes)}>Toggle Notes</button>
                    <table className="table table-hover table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                {toggleNotes && <th>Notes</th>}
                            </tr>
                        </thead>
                        <tbody>
                           {rejectedCandidates.map(p => <RejectedRow key={p.id} candidate={p} showNotes={toggleNotes} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Rejected