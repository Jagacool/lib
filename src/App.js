import { useEffect, useState } from "react";
import { Navigate, Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "./firebase";

import Login from "./components/Login";
import Books from "./components/Books";
import Dashboard from "./components/Dashboard";
import Members from "./components/Members";
import Sidebar from "./components/Sidebar";

import { Box, Stack } from "@mui/system";

const App = () => {
  const { currentUser } = useAuth();
  const [booksData, setBooksData] = useState([]);
  const [membersData, setMembersData] = useState([]);

  useEffect(() => {
    async function firestoreData() {
      let tempMembers = [];
      let tempBooks = [];
      try {
        const q1 = query(collection(db, "members"), orderBy("memId"));
        const querySnapshot1 = await getDocs(q1);
        querySnapshot1.forEach((doc) => {
          tempMembers.push(doc.data());
        });
        const q2 = query(collection(db, "books"), orderBy("bookId"));
        const querySnapshot2 = await getDocs(q2);
        querySnapshot2.forEach((doc) => {
          tempBooks.push(doc.data());
        });
      }
      catch (err) {
        console.log(err);
      }
      setMembersData(tempMembers);
      setBooksData(tempBooks);
    }
    firestoreData();
  }, []);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  const Layout = () => {
    return (
      <Stack direction={"row"}>
        <Box >
          <Sidebar />
        </Box>
        <Box sx={{ flex: 6 }}>
          <Outlet />
        </Box>
      </Stack>
    )
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RequireAuth><Layout /></RequireAuth>,
      children: [
        {
          path: "/",
          element: <Dashboard booksData={booksData} membersData={membersData} />
        },
        {
          path: "/books",
          element: <Books booksData={booksData} setBooksData={setBooksData} />
        },
        {
          path: "/members",
          element: <Members membersData={membersData} setMembersData={setMembersData} />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
