
import Banner from '@/components/banner/Banner'
import Catalog from '@/components/catalog/Catalog'
import OurPc from '@/components/pc/OurPc'
import NewProducts from '@/components/product/NewProducts'
import SaleProducts from '@/components/product/SaleProducts'
import React from 'react'

export default function Home() {
  return (
    <>
      <Banner />
      <Catalog />
      <OurPc />
      <NewProducts />
      <SaleProducts />
    </>
  )
}
