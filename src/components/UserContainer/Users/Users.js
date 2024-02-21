import {User} from "../User/User";
import {useEffect, useState} from "react";
// import axios from "axios";
// import {axiosService} from "../../../service/axiosService";
// import {urls} from "../../../constant/urls";
import {userService} from "../../../service/userService";
import {UserDetails} from "../UserDetails/UserDetails";
import css from './Users.module.css'

const Users = () => {
    const [users,setUsers] = useState([])
    const [userDetails, setUserDetails]=useState(null)
    useEffect(()=>{
        userService.getAll().then(({data}) => setUsers (data))
    },[])
    const getCurrentUser = (user)=>{
        setUserDetails(user)
    }

    return (
        <div className={css.Users}>
            <div>
                {users.map(user => <User key={user.id} user={user} getCurrentUser={getCurrentUser}/>)}
            </div>

            <hr/>
            {userDetails && <UserDetails userDetails={userDetails}/> }
        </div>
    );
};

export {Users};