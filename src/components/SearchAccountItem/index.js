import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SearchAccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/276123415_1026618044607161_8935125298062252965_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xU68ldn6IuwAX_NOOH7&_nc_oc=AQlamYQ9sby5EdFPD3x5_BmUtGmjuWmO6zITl7pdfRrp7eJgojPkIyr4EYmlDjmwv71lQfvxLDhtacrlE-yNLRPY&_nc_ht=scontent.fdad3-4.fna&oh=00_AT-GW_9feJlB4qlL-w80YDWemp8jG2KfWCNZ-UD6ZubPSg&oe=62926055"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Duong Quang Loc</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>quangloc2708</span>
            </div>
        </div>
    );
}

export default AccountItem;
