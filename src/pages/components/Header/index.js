import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '../../components/Notifications';

import mobillslogo from '../../../assets/mobills-logo.svg';

import { Container, Content, Profile } from './styles';

function Header() {
  return (
      <Container>
          <Content>
              <nav>
                 <img src={mobillslogo} alt = "Mobills"/>
                  <Link to="/dashboard">DASHBOARD</Link>
              </nav>

              <aside>
                  <Notifications/>
                  
                  <Profile>
                      <div>
                          <strong>Cezario Luiz</strong>
                          <Link to="/profile">Meu Pefil</Link>
                      </div>

                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg" alt=""/>
                  </Profile>
              </aside>
          </Content>
      </Container>
  );
}

export default Header;