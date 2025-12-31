import "./index.css"

const UserProfile = props =>{ 
   const { userDetails, onDeleteUser} = props;
 const {imageUrl, name, role} = userDetails;

 const onDelete = () => {
    console.log("Delete Button Clicked");
    onDeleteUser(userDetails.uniqueNo);
 }
    return(
        <li className="user-card-container">
            <img src={imageUrl} className="profile-pic" alt="profile-pic" />
            <div className="user-dedails-container">
                <h1 className="user-name">{name}</h1>
                <p className="user-designation">{role}</p> 
            </div> 
            <button onClick={onDelete} type="button" className="delete-button">
                <img src="https://assets.ccbp.in/frontend/react-js/cross-img.png" alt="cross" className="delete-img" />
            </button>
        </li>
    )
} 

export default UserProfile