import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

const SuggestedAccounts = ({ lable, onSeeMore, data = [] }) => {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('lable')}>{lable}</p>
            {data.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}

            <p className={cx('more-btn')} onClick={onSeeMore}>
                See all
            </p>
        </div>
    );
};

SuggestedAccounts.propTypes = {
    lable: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default SuggestedAccounts;
