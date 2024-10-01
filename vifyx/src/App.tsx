import { useSelector } from 'react-redux'
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./components/layout/Layout"
import MainPage from "./pages/MainPage/MainPage"
import MyBlogPage from "./pages/MyBlogPage/MyBlogPage"

function App() {
  // const data = await blogsService.getAll()
  // console.log(data);
  const user = useSelector(({user}) => user)
  console.log(user);
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="tracked" element={<MainPage />} />
        <Route path="my-blog" element={<MyBlogPage />} />
        <Route path="collection" element={<MyBlogPage />} />
        <Route path="company" element={<MyBlogPage />} />
        <Route path="ratings" element={<MyBlogPage />} />
      </Route>
    </Routes>
  );
}

export default App;
