const UserList = ({user}) => {

   // console.log('prop getting trough ',user)

    const genderColor =() => {
        if(user.gender === 'male' ){
            return 'bg-blue'  
        } 
        return 'bg-pink'
    }

   // console.log('here is name', user.name)

    return (  
        <div>
            <li className={genderColor(user)}>
                <img src={user.picture.large} alt=''/>
                <h3>{(user.name.title) + ' ' + (user.name.first) + ' ' + (user.name.last)}</h3>
                <p>{user.email}</p>

            </li>

        </div>
    );
}
 
export default UserList;
