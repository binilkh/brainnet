import React from 'react';
import Modal from 'react-modal';
import ModalButtun from './ModalButtun';
import styles from './styles.css';


class PopUp extends React.Component {
  constructor() {
    super();

    this.state = { modalOpened: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({ modalOpened: !prevState.modalOpened }));
  }

  render() {
    const { photo } = this.props;
    const photoLink = `http://kottayamtaxi.in/Brainnet/images/${photo}`;
    return (
      <span>
        <ModalButtun handleClick={this.toggleModal}>
          Photo
        </ModalButtun>
        <Modal
          className={styles.Modal}
          isOpen={this.state.modalOpened}
          onRequestClose={this.toggleModal}
          contentLabel=""
          overlayClassName="Overlay"
        >
          <img
            className={styles.imgStyle}
            onClick={this.toggleModal}
            src={photoLink}
            alt='image displayed in modal'
          />
        </Modal>
        </span>
    );
  }
}

export default PopUp;