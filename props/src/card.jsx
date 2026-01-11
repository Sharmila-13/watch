import users from './App.jsx';
function Card(props){
    return(
        <>
        <div className='card'>
            <span className={props.online ? 'online':'offline'}>
                {props.online?'online':'offline'}
            </span><br />
            <img src={props.profile} alt="" />
            <h2>{props.name}</h2>
            <i>{props.role}</i>    
            <p>{props.city}</p>
        <div className='btn'>
            <button>Message</button>
            <button>Follow</button>
        </div>
        <div className='skills'>
            <h4>SKILL</h4>
        <ul>
            {props.skill?.map((skills,index)=>(
                <li key={index}>{skills}</li>
            ))}
        </ul>
        </div>
        </div>
        </>
    )
}
export default Card