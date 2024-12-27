import './App.css';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import BookForm from './components/BookForm';
import ListOfBooks from './components/ListOfBooks';

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<ListOfBooks />} ></Route>
            <Route path="/create" element={<BookForm />} ></Route>
            <Route path="/book/:bookId" element={<BookForm />} ></Route>
        </Routes>
    </>
  );
}

export default App;