import { StatusBar } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Splash from './normal/Splash';
import Logoscreen from './normal/LogoScreen';
import Carscreen from './normal/CarScreen';
import Login from './normal/Login';
import Verification from './normal/Verification';
import Parent from './normal/Parent';
import Dashboard from './Starting screens/Dashboard';
import Orders from './Starting screens/Orders';
import Payment from './Starting screens/Payment';
import MyDatePicker from './Starting screens/Datepicker';
import App from './Starting screens/Datepicker';
import Delivered from './Payment Screens/Delivered';
import Returned from './Payment Screens/Returned';
import Accepted from './Order Screens/Accepted';
import Shipped from './Order Screens/Shipped';
import Delivered1 from './Order Screens/Delivered1';
import Cancel1 from './Order Screens/Cancel1';
import Returned1 from './Order Screens/Returned1';
import Profile from './Profile/Profile';
import MyProfile from './Profile/MyProfile';
import Alternatenumber from './Profile/Alternatenumber';
import Primarynumber from './Profile/Primarynumber';
import Shopeprofile from './Shope_profile/Shopeprofile';
import Editaddress from './Shope_profile/Editadress';
import Editnumber from './Shope_profile/Editnumber';
import Bankdetails from './Bank screens/Bankdetails';
import Contact from './Bank screens/Contact';
import Profitshare from './Profile/Profitshare';
import Profitcontact from './Profile/ProfitContact';
import Setting from './Profile/Setting';
import Help from './Profile/Help';
import Contacthelp from './Profile/Contact';
import Feedback from './Profile/Feedback';
import Offline from './Starting screens/Offline';


const Stack = createStackNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Splash' component={Splash} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Logoscreen' component={Logoscreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Carscreen' component={Carscreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Login' component={Login} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Verification' component={Verification} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Parent' component={Parent} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Delivered' component={Delivered} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Returned' component={Returned} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Accepted' component={Accepted} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Shipped' component={Shipped} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Delivered1' component={Delivered1} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Cancel1' component={Cancel1} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Returned1' component={Returned1} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Profile' component={Profile} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='MyProfile' component={MyProfile} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Primaryedit' component={Primarynumber} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Alteredit' component={Alternatenumber} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Shopeprofile' component={Shopeprofile} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Editaddress' component={Editaddress} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Editnumber' component={Editnumber} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Bank' component={Bankdetails} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Contact' component={Contact} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Profit' component={Profitshare} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Profitc' component={Profitcontact} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Setting' component={Setting} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Help' component={Help} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Contact1' component={Contacthelp} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Feedback' component={Feedback} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Offline' component={Offline} options={{ ...TransitionPresets.SlideFromRightIOS }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator