
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ScrollArea } from '@/components/ui/scroll-area';

const Settings = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 9876543210'
  });

  const [notifications, setNotifications] = useState({
    push: true,
    email: true,
    sms: false,
    orderUpdates: true,
    promotions: true,
    appUpdates: false
  });

  const [preferences, setPreferences] = useState({
    language: 'english',
    currency: 'inr',
    theme: 'light'
  });

  const [privacy, setPrivacy] = useState({
    twoFA: false,
    dataSharing: true
  });

  const [rating, setRating] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-bakery">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-babyPink-500 to-lightBrown-600 bg-clip-text text-transparent mb-8 text-center">
            Settings
          </h1>

          <Tabs defaultValue="account" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5 bg-white/80">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
              <TabsTrigger value="privacy">Privacy</TabsTrigger>
            </TabsList>

            {/* Account Settings */}
            <TabsContent value="account" className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lightBrown-800">🔐 Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Edit Profile */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-lightBrown-700">Edit Profile</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={profile.name}
                          onChange={(e) => setProfile({...profile, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profile.email}
                          onChange={(e) => setProfile({...profile, email: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={profile.phone}
                          onChange={(e) => setProfile({...profile, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    <Button className="btn-primary">Update Profile</Button>
                  </div>

                  <Separator />

                  {/* Change Password */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-lightBrown-700">Change Password</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                    </div>
                    <Button className="btn-primary">Change Password</Button>
                  </div>

                  <Separator />

                  {/* Quick Actions */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="h-20 flex flex-col">
                      <span className="text-lg mb-1">📍</span>
                      Manage Addresses
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col">
                      <span className="text-lg mb-1">💳</span>
                      Payment Methods
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col">
                      <span className="text-lg mb-1">❤️</span>
                      Wishlist
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Orders & Purchase Settings */}
            <TabsContent value="orders" className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lightBrown-800">📦 Order & Purchase Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="h-24 flex flex-col">
                      <span className="text-2xl mb-2">📋</span>
                      <span className="font-semibold">Order History</span>
                      <span className="text-sm text-gray-500">View all orders</span>
                    </Button>
                    <Button variant="outline" className="h-24 flex flex-col">
                      <span className="text-2xl mb-2">🚚</span>
                      <span className="font-semibold">Track Orders</span>
                      <span className="text-sm text-gray-500">Live tracking</span>
                    </Button>
                    <Button variant="outline" className="h-24 flex flex-col">
                      <span className="text-2xl mb-2">🛒</span>
                      <span className="font-semibold">Saved Carts</span>
                      <span className="text-sm text-gray-500">Resume shopping</span>
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-lightBrown-700">Referral Program</h3>
                    <div className="bg-babyPink-50 p-4 rounded-lg">
                      <p className="text-lightBrown-700 mb-2">Your Referral Code:</p>
                      <div className="flex items-center space-x-2">
                        <Input value="CAKE123" readOnly />
                        <Button size="sm">Copy</Button>
                      </div>
                      <p className="text-sm text-lightBrown-600 mt-2">
                        Share with friends and earn ₹100 for each successful referral!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Settings */}
            <TabsContent value="notifications" className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lightBrown-800">🔔 Notifications Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-base font-medium">Push Notifications</Label>
                        <p className="text-sm text-gray-500">Receive notifications on your device</p>
                      </div>
                      <Switch
                        checked={notifications.push}
                        onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-base font-medium">Email Notifications</Label>
                        <p className="text-sm text-gray-500">Get updates via email</p>
                      </div>
                      <Switch
                        checked={notifications.email}
                        onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-base font-medium">SMS Notifications</Label>
                        <p className="text-sm text-gray-500">Receive SMS updates</p>
                      </div>
                      <Switch
                        checked={notifications.sms}
                        onCheckedChange={(checked) => setNotifications({...notifications, sms: checked})}
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-base font-medium">Order Status Updates</Label>
                        <p className="text-sm text-gray-500">Delivery and shipping notifications</p>
                      </div>
                      <Switch
                        checked={notifications.orderUpdates}
                        onCheckedChange={(checked) => setNotifications({...notifications, orderUpdates: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-base font-medium">Promotions & Offers</Label>
                        <p className="text-sm text-gray-500">Special deals and discounts</p>
                      </div>
                      <Switch
                        checked={notifications.promotions}
                        onCheckedChange={(checked) => setNotifications({...notifications, promotions: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-base font-medium">App Updates</Label>
                        <p className="text-sm text-gray-500">New features and announcements</p>
                      </div>
                      <Switch
                        checked={notifications.appUpdates}
                        onCheckedChange={(checked) => setNotifications({...notifications, appUpdates: checked})}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* App Preferences */}
            <TabsContent value="preferences" className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lightBrown-800">🌐 App Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <Label className="text-base font-medium">Language Selection</Label>
                      <RadioGroup
                        value={preferences.language}
                        onValueChange={(value) => setPreferences({...preferences, language: value})}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="english" id="english" />
                          <Label htmlFor="english">English</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="hindi" id="hindi" />
                          <Label htmlFor="hindi">Hindi</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="tamil" id="tamil" />
                          <Label htmlFor="tamil">Tamil</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Label className="text-base font-medium">Currency</Label>
                      <RadioGroup
                        value={preferences.currency}
                        onValueChange={(value) => setPreferences({...preferences, currency: value})}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="inr" id="inr" />
                          <Label htmlFor="inr">Indian Rupee (₹)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="usd" id="usd" />
                          <Label htmlFor="usd">US Dollar ($)</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Label className="text-base font-medium">Theme</Label>
                      <RadioGroup
                        value={preferences.theme}
                        onValueChange={(value) => setPreferences({...preferences, theme: value})}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="light" id="light" />
                          <Label htmlFor="light">Light Mode</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="dark" id="dark" />
                          <Label htmlFor="dark">Dark Mode</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="system" id="system" />
                          <Label htmlFor="system">System Default</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Help & Support */}
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lightBrown-800">🛠️ Help & Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="h-16 flex flex-col">
                      <span className="text-lg mb-1">📞</span>
                      Contact Support
                    </Button>
                    <Button variant="outline" className="h-16 flex flex-col">
                      <span className="text-lg mb-1">❓</span>
                      FAQ / Help Center
                    </Button>
                    <Button variant="outline" className="h-16 flex flex-col">
                      <span className="text-lg mb-1">🐛</span>
                      Report an Issue
                    </Button>
                    <Button variant="outline" className="h-16 flex flex-col">
                      <span className="text-lg mb-1">💬</span>
                      Chat Support
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-lightBrown-700">Rate Our App</h3>
                    <div className="flex items-center space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setRating(star)}
                          className={`text-2xl ${
                            star <= rating ? 'text-yellow-400' : 'text-gray-300'
                          } hover:text-yellow-400 transition-colors`}
                        >
                          ⭐
                        </button>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">
                      Your feedback helps us improve the app experience
                    </p>
                  </div>

                  <Separator />

                  <div className="text-center space-y-2">
                    <h4 className="font-semibold text-lightBrown-700">About App</h4>
                    <p className="text-sm text-gray-600">CakeNest v2.1.0</p>
                    <p className="text-xs text-gray-500">© 2024 CakeNest. All rights reserved.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Privacy & Security */}
            <TabsContent value="privacy" className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lightBrown-800">🛡️ Privacy & Security</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-base font-medium">Two-Factor Authentication (2FA)</Label>
                      <p className="text-sm text-gray-500">Add extra security to your account</p>
                    </div>
                    <Switch
                      checked={privacy.twoFA}
                      onCheckedChange={(checked) => setPrivacy({...privacy, twoFA: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-base font-medium">Data Sharing</Label>
                      <p className="text-sm text-gray-500">Allow data for analytics and improvements</p>
                    </div>
                    <Switch
                      checked={privacy.dataSharing}
                      onCheckedChange={(checked) => setPrivacy({...privacy, dataSharing: checked})}
                    />
                  </div>

                  <Separator />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="h-16 flex flex-col">
                      <span className="text-lg mb-1">📱</span>
                      Login Sessions
                    </Button>
                    <Button variant="outline" className="h-16 flex flex-col">
                      <span className="text-lg mb-1">🔒</span>
                      App Permissions
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <Button variant="outline" className="w-full">
                      Privacy Policy & Terms of Service
                    </Button>
                    <Button variant="destructive" className="w-full">
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
