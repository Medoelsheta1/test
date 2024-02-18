import AltLink from '../../helper/AltLink'

const DashLinks = (props) => {
  return (
    <div className='dashLinks mt-3 d-flex flex-column justify-content-center align-items-center'>
        {props.links.map((ele) => {
            return <AltLink text={ele} />   
        })}
        
    </div>
  )
}

export default DashLinks