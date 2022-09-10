import './style.css';

export default function ColumnRight() {

    const job = [
        {
            name: 'HTML, CSS',
            time: '1 year'
        },
        {
            name: 'JavaScript',
            time: '1 year'
        },
        {
            name: 'ReactJS',
            time: '2 month'
        },
        {
            name: 'Photoshop Adobe',
            time: '6 month'
        },
        {
            name: 'Illustrator Adobe',
            time: '5 month'
        }
    ]

    return (
        <div className="row l-8 position-row m-12 c-12" >
            <div className="col white-box" ></div>
            <div className="col name-box" >
                <h1>Pham Duc Anh</h1>
                <p>Fresher Front-end</p>
            </div>
            <div className="col" style={{width: '100%'}}>
                <h1 className="title-right">Qualification</h1>
                <hr className="hr-right"/>
                <p>Team-working.<br/>
                    Work with responsible, careful, throughtful, always try to finish the job.<br/>
                    Know how to use HTML, CSS, JavaScript, git and ReactJS.<br/>
                    Creative thinking, willing to learn.<br/>
                    Communication skills, can work in team or independently.<br/>
                    Know how to arange, the work, management, save time and active.
                </p>
            </div>
            <div className="col" style={{width: '100%'}}>
                <h1 className="title-right">Computer Skils</h1>
                <hr className="hr-right"/>
                <table style={{width: "100%"}}>
                    <thead>
                        <tr>
                            <td><h4>Program</h4></td>
                            <td><h4>Time</h4></td>
                        </tr>
                    </thead>
                        
                    <tbody>
                        {job.map((job, index) => {
                            return (
                                <tr key={index}>
                                    <td>{job.name}</td>
                                    <td>{job.time}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="col" style={{width: '100%'}}>
                <h1 className="title-right">Education</h1>
                <hr className="hr-right"/>
                <p>2018 - 2022: Yersin University</p>
                <p>Majors: Information Technology</p>
            </div>
            <div className="col" style={{width: '100%'}}>
                <h1 className="title-right">Project</h1>
                <hr className="hr-right"/>
                <p>Link: <a href="https://ruathien2.github.io/anime3/">https://ruathien2.github.io/anime3/</a></p>
            </div>
            <div className="col white-box" ></div>
        </div>
    )
}