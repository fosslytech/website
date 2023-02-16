import HeroSection from './HeroSection/HeroSection';
import AppFooter from '@components/Footer/AppFooter';

import { getFooterData_index } from '@utils/resources/footerData';
import useGlobalCtx from 'src/store/global/use-global-ctx';

const Index = () => {
  const { content } = useGlobalCtx();
  const footerData = getFooterData_index(content);

  return (
    <>
      <HeroSection />

      <AppFooter data={footerData} />
    </>
  );
};

export default Index;
