import {
  createContext,
  useState,
  useEffect
} from "react";

const AuthContext =
  createContext();

export const AuthProvider =
({ children }) => {

  const [user, setUser] =
    useState(null);

  const [token, setToken] =
    useState(
      localStorage.getItem("token")
    );

  const login = (
 tokenData,
 userData
) => {

 localStorage.setItem(
  "token",
  tokenData
 );

 localStorage.setItem(
  "user",
  JSON.stringify(userData)
 );

 setToken(tokenData);

 setUser(userData);
};

const logout = () => {

 localStorage.clear();

 setToken(null);

 setUser(null);
};

useEffect(()=>{

 const token =
 localStorage.getItem("token");

 const user =
 localStorage.getItem("user");

 if(token){

  setToken(token);

 }

 if(user){

  setUser(
   JSON.parse(user)
  );

 }

},[]);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated:
          !!token
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;