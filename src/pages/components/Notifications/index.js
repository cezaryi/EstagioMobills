import React, {useState} from 'react';

import { MdNotifications } from 'react-icons/md';

import { Container, Badge, NotificationList, Scroll, Notification } from './styles';

function Notifications() {
    const [visible, setVisible] = useState(false);

    function handleToggleVisible() {
        setVisible(!visible);
    }

  return (
      <Container>
          <Badge onClick={handleToggleVisible} hasUnread>
              < MdNotifications color="#2962FF" size={20}/>
          </Badge>

          <NotificationList visible={visible}>
            <Scroll>
              <Notification unread>
                  <p>
                      Voce possui uma cobrança.
                  </p>
                  <time>
                      2 horas
                  </time>
                  <button type="button">
                      Maracar como lida
                  </button>
              </Notification>
              <Notification>
                  <p>
                      Voce possui uma cobrança.
                  </p>
                  <time>
                      2 horas
                  </time>
                  <button type="button">
                      Maracar como lida
                  </button>
              </Notification>
              <Notification>
                  <p>
                      Voce possui uma cobrança.
                  </p>
                  <time>
                      2 horas
                  </time>
                  <button type="button">
                      Maracar como lida
                  </button>
              </Notification>
              <Notification>
                  <p>
                      Voce possui uma cobrança.
                  </p>
                  <time>
                      2 horas
                  </time>
                  <button type="button">
                      Maracar como lida
                  </button>
              </Notification>
              <Notification>
                  <p>
                      Voce possui uma cobrança.
                  </p>
                  <time>
                      2 horas
                  </time>
                  <button type="button">
                      Maracar como lida
                  </button>
              </Notification>
              <Notification>
                  <p>
                      Voce possui uma cobrança.
                  </p>
                  <time>
                      2 horas
                  </time>
                  <button type="button">
                      Maracar como lida
                  </button>
              </Notification>
            </Scroll>
          </NotificationList>
      </Container>
  );
}

export default Notifications;