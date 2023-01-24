import Logo from '../../assets/Images/logo.svg';
import search from '../../assets/Images/search-icon.svg';
import notification from '../../assets/Images/notifications.svg';
import avatar from  '../../assets/Images/avatar.png';
import './header.css';

const Header = () => {
    return (
        <header className="site-header">
            <div className="container">
                <div className="site-header__inner">
                    <a className="logo" href={'./index.html'}>
                        <img className="logo__img" src={Logo} alt={'site logo'} />
                        <p>Dashboard Kit</p>
                    </a>
                    <div className='site-header__right'>
                        <p className='site-header__title'>
                            Overview
                        </p>
                        <div className='site-header__acc'>
                            <img className='site-header__icon search' src={search} alt={'search icon'} />
                            <img className='site-header__icon notif' src={notification} alt={'notification'} />
                            <p className='user-name'>
                                Jones Ferdinand
                            </p>
                            <img className='site-header__icon avatar' src={avatar} alt={'user profile'} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;