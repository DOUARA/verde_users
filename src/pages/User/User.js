import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Heading } from "../../elements";
import { useUsers } from "../../hooks";
import { Header, Navigation } from "../../components";

const User = () => {
    
    const params = useParams();

    const userId = params.id;
    
    const { user, fetchSingleUser, loading } = useUsers();
    
    useEffect(() => {
        fetchSingleUser(userId);
    }, [fetchSingleUser, userId]);


    return (
        <>  
            <Header />
            <Navigation navList = {["Settings", "User Details"]}/>
            <Heading text="User Details" />
            { loading ? "Loading..." : 
            <div className="flex  px-4 py-2">
                <img className="mr-4 w-40" alt={user.name} src={user.profileImage ? user.profileImage : "https://placehold.co/600x400"} />
                <div class="font-medium text-sm">
                    <p>Name: {user?.name}</p>
                    <p>Username: {user?.username}</p>
                    <p>Email: {user?.email}</p>
                    <p>Phone: {user?.phone}</p>
                    <p>Address: {`${user?.address?.street}, ${user?.address?.suite}, ${user?.address?.city}`}</p>
                    <p>Website: {user?.website}</p>
                </div>
            </div>
            }
        </>
    )

}

export default User;