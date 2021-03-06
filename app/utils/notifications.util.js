import { remote } from 'electron';
import settings from 'electron-settings';
import { NotificationTypes, Phases } from '../containers/enums';

export const triggerNotification = phase => {
  const notificationType = settings.get(
    'system.notificationType',
    NotificationTypes.PHASE_CHANGES_NO_WINDOW
  );

  let title, body, notification;
  switch (phase) {
    case Phases.FOCUS:
      title = 'Focus phase over';
      body = 'Time to take a break';
      break;
    case Phases.SHORT_BREAK:
      title = 'Short break phase over';
      body = 'Back to focus!';
      break;
    case Phases.LONG_BREAK:
      title = 'Long break phase over';
      body = 'Back to focus!';
      break;
  }

  switch (notificationType) {
    case NotificationTypes.PHASE_CHANGES_ALL: {
      notification = new Notification(title, { body });
      break;
    }
    case NotificationTypes.PHASE_CHANGES_NO_WINDOW: {
      const win = remote.getCurrentWindow();
      const isFocused = win.isFocused();
      if (!isFocused) notification = new Notification(title, { body });
      break;
    }
  }
};
