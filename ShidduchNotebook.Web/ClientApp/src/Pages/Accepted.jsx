import axios from 'axios'
import { useState, useEffect } from 'react'
import AcceptedRow from '../components/AcceptedRow'

const Accepted = () => {
    const [acceptedCandidates, setAcceptedCandidates] = useState([])
    const [toggleNotes, setToggleNotes] = useState(true)

    useEffect(() => {
        const getAcceptedCandidates = async () => {
            const { data } = await axios.get('/api/candidate/accepted')
            setAcceptedCandidates(data)
        }

        getAcceptedCandidates()
    }, [])

    return (
        <div className="container" style={{marginTop: '80px'}}>
            <div>
                <h1>Accepted</h1>
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
                           {acceptedCandidates.map(p => <AcceptedRow key={p.id} candidate={p} showNotes={toggleNotes}/>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Accepted