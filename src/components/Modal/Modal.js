import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

const Modal = ({ isOpen = false, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('overlay')}></div>
            <div className={cx('body')}>{children}</div>
        </div>
    );
};

export default Modal;
