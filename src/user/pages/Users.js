import React from 'react';
import UsersList from '../components/UsersList'

const Users = () => {

    const USERS = [
        {
            id: 'u1',
            name: 'Rafael',
            image: 'https://scontent-dub4-1.xx.fbcdn.net/v/t1.0-9/61063672_2463091397058978_8398696672019873792_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=sIhAlPUXng4AX-MgjIP&_nc_ht=scontent-dub4-1.xx&oh=989d7f90321a45e164695cf4005a29b3&oe=5F8136DC',
            places: 1
        },
        {
            id: 'u2',
            name: 'Kurva',
            image: 'https://scontent-dub4-1.xx.fbcdn.net/v/t1.0-9/105297355_794394091090879_2366680234858043933_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=LjkeveIW_yEAX__A2ti&_nc_ht=scontent-dub4-1.xx&oh=0bcab8e060cb62b0c3b4fffb236a4cdd&oe=5F7E6088',
            places: 1
        }
    ]
    // image: 'https://hatrabbits.com/wp-content/uploads/2017/01/random-word-1.jpg'

    return <UsersList items={USERS}/>

};

export default Users;
