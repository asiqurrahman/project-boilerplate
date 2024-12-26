import styled from "styled-components";
import { googleSignIn, logOut } from "@/firebase/authentication/googleAuth";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "@/reduxStore/userSlice";
import { selectProfilePic } from "@/reduxStore/userSlice";

function Index() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const userPhoto = useSelector(selectProfilePic);

  return (
    <div style={{ color: "white" }}>
      {isAuthenticated ? (
        <h1 onClick={() => logOut()}>Log out</h1>
      ) : (
        <h1 onClick={() => googleSignIn()}>Sign in</h1>
      )}
    </div>
  );
}

export default Index;
