import userAva from './images/tick-ava.png';
import './ticket.css';

const Tickets = () => {
    return (
        <div className="right-body ticket-body">
            <div className="ticket-heading">
                <h3 className="ticket-title">All tickets</h3>
                <div className="ticket-sort">
                    <p>Sort</p>
                    <p>Filter</p>
                </div>
            </div>
            <table className="ticket-list">
                <tr className='ticket-table-top'>
                    <td>Ticket details</td>
                    <td>Customer name</td>
                    <td>Date</td>
                    <td>Priority</td>
                </tr>
                <tr className="ticket-item">
                    <td className="ticket-user">
                        <img className="ticket-ava" src={userAva} alt="user avatar" />
                        <div>
                            <h4 className="post-quest">Contact Email not Linked</h4>
                            <h4 className="post-last">Updated 1 day ago</h4>
                        </div>
                    </td>
                    <td className="ticket-about">
                        <h4 className="user-name">Tom Cruise</h4>
                        <h4 className="user-status">on 24.05.2019</h4>
                    </td>
                    <td className="ticket-date">
                        <h4 className="user-date">May 26, 2019</h4>
                        <h4 className="user-time">6:30 PM</h4>
                    </td>
                    <td>
                        <span className="user-priority">High</span>
                    </td>
                </tr>
                <tr className="ticket-item">
                    <td className="ticket-user">
                        <img className="ticket-ava" src={userAva} alt="user avatar" />
                        <div>
                            <h4 className="post-quest">Contact Email not Linked</h4>
                            <h4 className="post-last">Updated 1 day ago</h4>
                        </div>
                    </td>
                    <td className="ticket-about">
                        <h4 className="user-name">Tom Cruise</h4>
                        <h4 className="user-status">on 24.05.2019</h4>
                    </td>
                    <td className="ticket-date">
                        <h4 className="user-date">May 26, 2019</h4>
                        <h4 className="user-time">6:30 PM</h4>
                    </td>
                    <td>
                        <span className="user-priority">High</span>
                    </td>
                </tr>
                <tr className="ticket-item">
                    <td className="ticket-user">
                        <img className="ticket-ava" src={userAva} alt="user avatar" />
                        <div>
                            <h4 className="post-quest">Contact Email not Linked</h4>
                            <h4 className="post-last">Updated 1 day ago</h4>
                        </div>
                    </td>
                    <td className="ticket-about">
                        <h4 className="user-name">Tom Cruise</h4>
                        <h4 className="user-status">on 24.05.2019</h4>
                    </td>
                    <td className="ticket-date">
                        <h4 className="user-date">May 26, 2019</h4>
                        <h4 className="user-time">6:30 PM</h4>
                    </td>
                    <td>
                        <span className="user-priority">High</span>
                    </td>
                </tr>
                <tr className="ticket-item">
                    <td className="ticket-user">
                        <img className="ticket-ava" src={userAva} alt="user avatar" />
                        <div>
                            <h4 className="post-quest">Contact Email not Linked</h4>
                            <h4 className="post-last">Updated 1 day ago</h4>
                        </div>
                    </td>
                    <td className="ticket-about">
                        <h4 className="user-name">Tom Cruise</h4>
                        <h4 className="user-status">on 24.05.2019</h4>
                    </td>
                    <td className="ticket-date">
                        <h4 className="user-date">May 26, 2019</h4>
                        <h4 className="user-time">6:30 PM</h4>
                    </td>
                    <td>
                        <span className="user-priority">High</span>
                    </td>
                </tr>
                <tr className="ticket-item">
                    <td className="ticket-user">
                        <img className="ticket-ava" src={userAva} alt="user avatar" />
                        <div>
                            <h4 className="post-quest">Contact Email not Linked</h4>
                            <h4 className="post-last">Updated 1 day ago</h4>
                        </div>
                    </td>
                    <td className="ticket-about">
                        <h4 className="user-name">Tom Cruise</h4>
                        <h4 className="user-status">on 24.05.2019</h4>
                    </td>
                    <td className="ticket-date">
                        <h4 className="user-date">May 26, 2019</h4>
                        <h4 className="user-time">6:30 PM</h4>
                    </td>
                    <td>
                        <span className="user-priority">High</span>
                    </td>
                </tr>
                <tr className="ticket-item">
                    <td className="ticket-user">
                        <img className="ticket-ava" src={userAva} alt="user avatar" />
                        <div>
                            <h4 className="post-quest">Contact Email not Linked</h4>
                            <h4 className="post-last">Updated 1 day ago</h4>
                        </div>
                    </td>
                    <td className="ticket-about">
                        <h4 className="user-name">Tom Cruise</h4>
                        <h4 className="user-status">on 24.05.2019</h4>
                    </td>
                    <td className="ticket-date">
                        <h4 className="user-date">May 26, 2019</h4>
                        <h4 className="user-time">6:30 PM</h4>
                    </td>
                    <td>
                        <span className="user-priority">High</span>
                    </td>
                </tr>
                <tr className="ticket-item">
                    <td className="ticket-user">
                        <img className="ticket-ava" src={userAva} alt="user avatar" />
                        <div>
                            <h4 className="post-quest">Contact Email not Linked</h4>
                            <h4 className="post-last">Updated 1 day ago</h4>
                        </div>
                    </td>
                    <td className="ticket-about">
                        <h4 className="user-name">Tom Cruise</h4>
                        <h4 className="user-status">on 24.05.2019</h4>
                    </td>
                    <td className="ticket-date">
                        <h4 className="user-date">May 26, 2019</h4>
                        <h4 className="user-time">6:30 PM</h4>
                    </td>
                    <td>
                        <span className="user-priority">High</span>
                    </td>
                </tr>
                <tr className="ticket-item">
                    <td className="ticket-user">
                        <img className="ticket-ava" src={userAva} alt="user avatar" />
                        <div>
                            <h4 className="post-quest">Contact Email not Linked</h4>
                            <h4 className="post-last">Updated 1 day ago</h4>
                        </div>
                    </td>
                    <td className="ticket-about">
                        <h4 className="user-name">Tom Cruise</h4>
                        <h4 className="user-status">on 24.05.2019</h4>
                    </td>
                    <td className="ticket-date">
                        <h4 className="user-date">May 26, 2019</h4>
                        <h4 className="user-time">6:30 PM</h4>
                    </td>
                    <td>
                        <span className="user-priority">High</span>
                    </td>
                </tr>
                <tr className="ticket-item">
                    <td className="ticket-user">
                        <img className="ticket-ava" src={userAva} alt="user avatar" />
                        <div>
                            <h4 className="post-quest">Contact Email not Linked</h4>
                            <h4 className="post-last">Updated 1 day ago</h4>
                        </div>
                    </td>
                    <td className="ticket-about">
                        <h4 className="user-name">Tom Cruise</h4>
                        <h4 className="user-status">on 24.05.2019</h4>
                    </td>
                    <td className="ticket-date">
                        <h4 className="user-date">May 26, 2019</h4>
                        <h4 className="user-time">6:30 PM</h4>
                    </td>
                    <td>
                        <span className="user-priority">High</span>
                    </td>
                </tr>
                <tr className="ticket-item">
                    <td className="ticket-user">
                        <img className="ticket-ava" src={userAva} alt="user avatar" />
                        <div>
                            <h4 className="post-quest">Contact Email not Linked</h4>
                            <h4 className="post-last">Updated 1 day ago</h4>
                        </div>
                    </td>
                    <td className="ticket-about">
                        <h4 className="user-name">Tom Cruise</h4>
                        <h4 className="user-status">on 24.05.2019</h4>
                    </td>
                    <td className="ticket-date">
                        <h4 className="user-date">May 26, 2019</h4>
                        <h4 className="user-time">6:30 PM</h4>
                    </td>
                    <td>
                        <span className="user-priority">High</span>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Tickets; 