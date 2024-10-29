import { Container } from '@mui/material';
import './App';
import NavBar from './components/NavBar/NavBar';
import StaticPage from './containers/StaticPage/StaticPage';
import { Route, Routes } from 'react-router-dom';
import EditPage from './containers/EditPage/EditPage';

const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<StaticPage />} />
          <Route path="/:name" element={<StaticPage />} />
          <Route path={'/editPage'} element={<EditPage />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
