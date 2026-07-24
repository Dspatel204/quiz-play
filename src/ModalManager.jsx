import React from 'react';

import ModalLogin from './components/Modals/LoginModal';
import ModalRegister from './components/Modals/RegisterModal';
import ModalEntry from './components/Modals/EntryModal';
import QuizModal from './components/Modals/QuizModal';

const ModalManager = ({ closeFn, modal = '', openLoginModal = () => null, openRegisterModal = () => null, openQuizModal = () => null }) => {
  const isQuizOpen = modal.startsWith('modal-quiz-');
  const quizId = isQuizOpen ? modal.replace('modal-quiz-', '') : '';

  return (
    <>
      <ModalLogin
        closeFn={closeFn}
        open={modal === 'modal-login'}
        openRegisterModal={openRegisterModal}
        openQuizModal={() => openQuizModal('kbc-quiz')}
      />
      <ModalRegister
        closeFn={closeFn}
        open={modal === 'modal-register'}
        openLoginModal={openLoginModal}
        openQuizModal={() => openQuizModal('science-quiz')}
      />
      <ModalEntry closeFn={closeFn} open={modal === 'modal-entry'} />
      <QuizModal closeFn={closeFn} open={isQuizOpen} quizId={quizId} />
    </>
  );
};

export default ModalManager;
