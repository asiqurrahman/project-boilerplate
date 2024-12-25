import styled from "styled-components";
import googleSignIn from "@/firebase/authentication/googleAuth";

function Index() {
  return (
    <div>
      <h1 style={{ color: "white" }} onClick={() => googleSignIn()}>
        Index
      </h1>
    </div>
  );
}

export default Index;
