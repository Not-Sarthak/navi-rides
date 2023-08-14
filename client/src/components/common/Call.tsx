import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { whatsapp } from 'assets';
import CallIcon from '@mui/icons-material/Call';

interface CallProps {
    number: string;
  }
  
  function Call({ number }) {
    const url = `tel:${number}`;
    return <a href={url}><CallIcon /></a>;
  }
  
  export default Call;