import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

// Info Content
import BasicInformation from './Info/BasicInformation';
import History from './Info/History';
import Mission from './Info/Mission';
import Vision from './Info/Vision';

const Info: NextPage = () => {
  
  const router = useRouter();
  const info_pages = router.query.info;
    
  function InfoContent() {
    if (info_pages == 'basic_information') {
      return <BasicInformation/>;
    } else if (info_pages == 'history') {
      return <History/>;
    } else if (info_pages == 'mission') {
      return <Mission/>;
    } else if (info_pages == 'vision') {
      return <Vision/>;
    } else {
      router.push('?page=info&info=basic_information')
    }
  }
  return (
    <>
      <Head>
        
      </Head>
      <h1> เกี่ยวกับโรงเรียน </h1>
      {InfoContent()}
    </>
  )
}

export default Info