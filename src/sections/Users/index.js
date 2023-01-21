import { useEffect, useState } from "react"
import UserList from './components/UsersList'

function UsersSection() {

  const [user, setUser] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(data => setUser(data.results))
  }, []);

  // console.log('here are some users ',user.results)


  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">

      <ul className="users-list">
          { user.map((user) => {
            return <UserList key={user.email} user={user} />;
          })}
      </ul>
      </div>
    </section>
  )
}

export default UsersSection