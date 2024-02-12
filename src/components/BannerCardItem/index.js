import './index.css'

const Banner = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails
  const {id} = cardDetails.id
  return (
    <div className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button>submit</button>
    </div>
  )
}
