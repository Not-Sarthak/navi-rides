import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { whatsapp } from 'assets';

interface ReactWhatsappProps {
    number: string;
  }
  
  function ReactWhatsapp({ number }) {
    const url = `https://wa.me/${number}?text=Hi`;
    return <a href={url}><img src={whatsapp} style={{width: "30px"}}/></a>;
  }
  
  export default ReactWhatsapp;