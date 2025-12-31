import { Component } from 'react'
import UserProfile from "./Components/UserProfile"
import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
  {
    uniqueNo: 5,
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D35AQHKVfnUHV8cNg/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1675687166547?e=1760878800&v=beta&t=mJ-Sd7ccxw7DFWyUr4swowlDKMR4QLRyKXKRqjkvLzA",
    name: 'Kalit Singh',
    role: 'Mern-Stack Developer',
  },
  
]


class App extends Component{
  state = {
    searchInput: "",
    userDetailsList: initialUserDetailsList,
  } 

  onSearchInput = (event) => {
    const searchInput = event.target.value; 
    console.log(searchInput);
    this.setState({searchInput: searchInput});

  }
onDeleteUser = (uniqueNo) => {
  console.log("Delete Function Called", uniqueNo);
  const {userDetailsList} = this.state; 
   const filterUserData = userDetailsList.filter((eachUser) => eachUser.uniqueNo !== uniqueNo);
  this.setState({userDetailsList: filterUserData});
}
  render(){
    const {userDetailsList, searchInput} = this.state ;
    
    // Search Functionality
    const filteredUserDetails = userDetailsList.filter((eachUser) => {
      return eachUser.name.toLowerCase().includes(searchInput.toLowerCase());
    })

    // handling Empty User Details List 
    const isfilterDetailListEmpty = filteredUserDetails.length === 0;

    return(
      <>
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input onChange={this.onSearchInput} value={searchInput} type="search" name="query" className="search-bar" />
        <ul className="list-container">
          {isfilterDetailListEmpty ? <li style={{color: '#827272', 'font-style': "italic", width: '270px'}}>No User Found...</li> : 
            filteredUserDetails.map((eachUser) => (
              <UserProfile key={eachUser.uniqueNo} userDetails={eachUser} onDeleteUser={this.onDeleteUser} />
            ))
          }
        </ul>
      </div>  
      
      </>
    )
  }
}

export default App
