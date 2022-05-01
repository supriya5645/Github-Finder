import React from 'react'
import { useContext} from 'react'
import Spinner from '../spinner'
import UserItem from './UserItem'
import GithubContext from '../../../context/github/GithubContext'

function UserResults() {
  const { users, loading } = useContext(GithubContext)

  // useEffect(()=>{
  // //  fetchUsers()

  // }, [])

  
  if(!loading){
    return (


      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3
      md:grid-cols-2">{users.map((users)=>(
        
       <UserItem key={users.id} user={users}/>
      ))} </div>
    )
  } else{
   return <Spinner/>
  }
  
}

export default UserResults
