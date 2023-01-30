import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({
  auth: null,
  setAuth: () => {},
  user: null,
});

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    
    const isAuth = async () => {
        try{
          console.log('Hellpo')
            const res = await fetch('/userloggedin', {
                method: 'GET',
                headers: {
                  "Content-type": 'application/json',
                  Accept: 'application/json'
                },
                credentials: 'include'
          
              })

              //const data = await res.json()
              console.log('Auth',res)
              if(res.status === 200){
                setAuth(true)
              }
              else{
                setAuth(false)
              }
        }
        catch (err){
            console.log(err)
            setAuth(false)
        }
    };

    isAuth();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export {useAuth};