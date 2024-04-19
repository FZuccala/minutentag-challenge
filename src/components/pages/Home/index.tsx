import React from 'react'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import HomeOrganism from '@/components/organisms/Home'
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@/components/atoms/icons/home';
import BagIcon from '@/components/atoms/icons/bag';
import SettingsIcon from '@/components/atoms/icons/settings';
import CheckoutIcon from '@/components/atoms/icons/checkout';
type Props = {}

const HomePage = (props: Props) => {
  return (
    <DefaultLayout
    bottomBarSlot={<>
        <BottomNavigationAction
      icon={<HomeIcon />}
    />
    <BottomNavigationAction
      icon={<SettingsIcon />}
    />
    <BottomNavigationAction
      icon={<BagIcon />}
    />
    <BottomNavigationAction icon={<CheckoutIcon />} /></>}
    >
        <HomeOrganism />
    </DefaultLayout>
  )
}

export default HomePage