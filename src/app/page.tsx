import Banner from '@/components/banner/Banner'
import Catalog from '@/components/catalog/Catalog'
import MiniFilter from '@/components/filter/miniFilter'
import OurPc from '@/components/pc/OurPc'
import NewProducts from '@/components/product/NewProducts'
import SaleProducts from '@/components/product/SaleProducts'
import Service from '@/components/service/Service'
import VideoCarusel from '@/components/video-carusel/VideoCarusel'

export default function Home() {
  return (
    <>
      <Banner />
      <Catalog />
      <OurPc />
      <NewProducts />
      <SaleProducts />
      <MiniFilter />
      <Service />
      <VideoCarusel />
    </>
  )
}
