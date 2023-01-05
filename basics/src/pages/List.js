import React from "react";

const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}
/*
 * props를 받아 처리 할 수 있다.
    const User = (props) => {
        return (
            <tr>
                <td>{props.userData.name}</td>
                <td>{props.userData.email}</td>
            </tr>
        )
    } 
 */

const UserList = () => {
    const users = [
        {
            email: "test1@gmail.com",
            name: "test1"
        },
        {
            email: "test2@gmail.com",
            name: "test2"
        },
        {
            email: "test3@gmail.com",
            name: "test3"
        },
        {
            email: "test4@gmail.com",
            name: "test4"
        }
    ]

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map( (userData) => { return <User userData={userData} />} )}
            </tbody>
        </table>
    )
};

export default UserList;