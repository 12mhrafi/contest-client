import useAxiosPublic from "./useAxiosPublic";


const useUsers = () => {
    const axiosPublic = useAxiosPublic();
    
    const addUser = (signedUser) => {
        const userInfo = {
            name:signedUser.displayName,
            email:signedUser.email
          }
          axiosPublic.post("/users", userInfo)
          .then(res => {
            console.log(res.data)
          })
    
    }

  return addUser;
}

export default useUsers