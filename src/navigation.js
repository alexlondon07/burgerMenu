import {  StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

import Products from './product';
import ProductsDetail from './product-detail';

//Tabs
import Tab1 from './tab-1';
import Tab2 from './tab-2';
import Tab3 from './tab-3';

//Alone
import Settings from './settings';

    export const Stack = StackNavigator({
        Products: { screen: Products },
        ProductsDetail: { screen: ProductsDetail },
    },
    {
      initialRouteName: 'Products',
    });

    export const Tabs = TabNavigator({
        Tab1: { screen: Tab1 },
        Tab2: { screen: Tab2 },
        Tab3: { screen: Tab3 },
    },{
        order: ['Tab1', 'Tab2', 'Tab3']
    });
  
    export const Drawer = DrawerNavigator({
        Stack: { screen: Stack },
        Tabs: { screen: Tabs },
        Settings: { screen: Settings },
    });
