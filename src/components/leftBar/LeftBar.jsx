import './leftBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNewspaper,
  faHandshakeSimple
} from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';

const Leftbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <span>Bio</span>
          </div>
          <div className="item">
            <span>Other Platforms:</span>
          </div>
          <div className="item">
            <span>Friends</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <div className="news">
            <FontAwesomeIcon
              icon={faNewspaper}
              className="faIcon"
              size="lg"
              fixedWidth
            />
            <span>News</span>
          </div>
          <div className="item">
            <span>some news here</span>
          </div>
          <div className="item">
            <span>some news here</span>
          </div>
          <div className="item">
            <span>some news here</span>
          </div>
          <div className="item">
            <span>some news here</span>
          </div>
          <div className="item">
            <span>some news here</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <div className="dev">
            <FontAwesomeIcon
              icon={faHandshakeSimple}
              className="faIcon"
              size="lg"
              fixedWidth
            />
            <span>Dev Resources For You</span>
          </div>
          <div className="item">
            <span>some resources here</span>
          </div>
          <div className="item">
            <span>some resources here</span>
          </div>
          <div className="item">
            <span>some resources here</span>
          </div>
          <div className="item">
            <span>some news here</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
