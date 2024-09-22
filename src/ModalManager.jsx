import React from 'react';

import ModalLogin from './components/Modals/LoginModal';
import ModalRegister from './components/Modals/RegisterModal';
import ModalEntry from './components/Modals/EntryModal';

const ModalManager = ({ closeFn, modal = '' }) => {
  console.log('ModalManager - modal prop:', modal);

  return (
    <>
      <ModalLogin closeFn={closeFn} open={modal === 'modal-login'} />
      <ModalRegister closeFn={closeFn} open={modal === 'modal-register'} />
      <ModalEntry closeFn={closeFn} open={modal === 'modal-entry'} />
    </>
  );
};


export default ModalManager;
