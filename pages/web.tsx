import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';

// My Template
import My_HeaderImage from './../template/HeaderImage';
import My_Alert from './../template/Alert';
import My_Navbar from './../template/Navbar';
import My_Footer from './../template/Footer';

// My Content
import Home from './../content/Home';
import News from './../content/News';
import Contact from  './../content/Contact';
import Info from './../content/Info';
import Personnel from './../content/Personnel';
import Ita from './../content/Ita';

const Welcome: NextPage = () => {
  
  // if page
  const router = useRouter();
  const pages = router.query.page;
  
  function Content() {
    if (pages == 'home' || pages == '' || pages == undefined) {
      return <Home/>;
    } else if (pages == 'news') {
      return <News/>;
    } else if (pages == 'contact') {
      return <Contact/>;
    } else if (pages == 'info') {
      return <Info/>;
    } else if (pages == 'personnel') {
      return <Personnel/>;
    } else if (pages == 'ita') {
      return <Ita/>;
    } else {
      router.push('/web')
    }
  }

  return (
    <>
      <Container fluid="lg">

        <My_HeaderImage/>  {/* Header Image */}
        <My_Alert/>  {/* Alert */}
        <My_Navbar/>  {/* Navbar */}

        <div className="my-connent">
          {Content()}  {/* Conoent */}
        </div>
        
        <My_Footer/>  {/* Footer */}

      </Container>
      
    </>
  )
}

export default Welcome

