import HeroSection from './HeroSection/HeroSection';
import AppFooter from '@components/Footer/AppFooter';

import { getFooterData_index } from '@utils/resources/footerData';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import ProductsSection from './ProductsSection/ProductsSection';

const Index = () => {
  const { content } = useGlobalCtx();
  const footerData = getFooterData_index(content);

  return (
    <>
      <HeroSection />

      <ProductsSection />

      <AppFooter data={footerData} />
    </>
  );
};

export default Index;
