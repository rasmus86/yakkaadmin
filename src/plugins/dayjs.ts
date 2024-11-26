import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import 'dayjs/locale/en'; // Replace 'en' with your locale

dayjs.extend(relativeTime);

dayjs.locale('en'); // Replace 'en' with your locale

export default dayjs;
