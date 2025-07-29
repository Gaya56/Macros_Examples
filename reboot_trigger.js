import xapi from 'xapi';

// Schedule reboot at 6:00 AM Monday to Friday
const scheduleReboot = () => {
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  weekdays.forEach(day => {
    xapi.Command.Schedule.Recurrence.Create({
      DayOfWeek: day,
      Time: '06:00',
      Description: 'Scheduled Reboot',
      Command: 'xCommand SystemUnit Reboot'
    });
  });

  console.log('Reboot schedule set for weekdays at 6:00 AM.');
};

scheduleReboot();
