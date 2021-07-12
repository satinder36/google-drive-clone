import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import firebase from "firebase";
import { storage, db, auth, provider } from "./firebase";
import FilesView from "./components/FilesView";
import googleDriveLogo from "./media/googleDriveLogo.png";

function App() {
  //authentication
  // displayName: "satinder",
  // email: "ssatinder1996@gmail.com",
  // emailVerified: "true",
  // phoneNumber: null,
  // photoUrl:
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/NYCS-bull-trans-S-Std.svg/1200px-NYCS-bull-trans-S-Std.svg.png",
  const [user, setUser] = useState({
  displayName: "satinder",
  email: "ssatinder1996@gmail.com",
  emailVerified: "true",
  phoneNumber: null,
  photoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/NYCS-bull-trans-S-Std.svg/1200px-NYCS-bull-trans-S-Std.svg.png",
  });
  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user);
      });
    }
  };

  return (
    <div className="App">
      {user ? (
        <div>
          <Header userPhoto={user.photoUrl} />
          <div className="app_main">
            <Sidebar />
            <FilesView />
          </div>
        </div>
      ) : (
        <div className='app__login'>
          <img src={googleDriveLogo} width="200px" height="200px"></img>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
