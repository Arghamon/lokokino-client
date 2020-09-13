import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/storage';
import Routes from './routes';
import AppModal from './components/Modal/AppModal';
import { CLOSE_MODAL } from './store/modal/actions';
import { firebaseConfig } from './plugins/firebase';

function App() {

  const { data, name, closable } = useSelector(state => state.modal);

  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);

  const dispatch = useDispatch();

  const closeModal = () => dispatch(CLOSE_MODAL())

  return (
    <div className="App">
      <Routes />
      <AppModal data={data} name={name} close={closeModal} closable={closable} />
    </div>
  );
}

export default App;
