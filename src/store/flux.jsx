import { toast } from "react-toastify";
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            users: null,
            currentUser: null,
            seletedUser: {
                name: 'John Doe',
                username: 'john.doe@gmail.com',
                password: '123456'
            }
        },
        actions: {
            onSubmitRegister: data => console.log(data),
            onSubmitOther: data => console.log(data),
            login: () => setStore({
                currentUser: {
                    username: 'lrodriguez@4geeks.co'
                }
            }),
            logout: () => setStore({ currentUser: null }),
            getUsers: async () => {
                try {

                    const response = await toast.promise(
                        fetch('https://jsonplaceholder.typicode.com/users'),
                        {
                            pending: 'Promise is pending',
                            success: 'Promise resolved 👌',
                            error: 'Promise rejected 🤯'
                        }
                    );
                    const data = await response.json();
                    setStore({ users: data })

                } catch (error) {

                }
            },
        }
    }
}

export default getState