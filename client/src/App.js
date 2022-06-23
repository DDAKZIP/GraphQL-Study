import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import * as GQL from "./apollo/gqls/user";

function App() {
    const { loading, data, refetch } = useQuery(GQL.GET_USERS);
    const [addUser] = useMutation(GQL.ADD_USER);

    const [text, setText] = useState({
        userId: "",
        userName: "",
    });

    const handleUserIdChange = (e) => {
        setText({
            ...text,
            userId: e.target.value,
        });
    };

    const handleUserNameChange = (e) => {
        setText({
            ...text,
            userName: e.target.value,
        });
    };

    const handleUserCreateClick = async (e) => {
        const data = await addUser({
            variables: { userId: text.userId, userName: text.userName },
        });
        console.log(data);
        refetch();
    };

    return (
        <div>
            <h2>🚀 Apollo app 🚀</h2>
            {loading ||
                data.users.map((user, index) => {
                    return (
                        <h2 key={index}>
                            {user.userId} /{user.userName}
                        </h2>
                    );
                })}
            <input type="text" onChange={(e) => handleUserIdChange(e)} />
            <input type="text" onChange={(e) => handleUserNameChange(e)} />
            <button onClick={handleUserCreateClick}>유저 등록</button>
        </div>
    );
}

export default App;
