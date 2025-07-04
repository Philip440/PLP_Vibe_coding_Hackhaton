import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import LanguageSelector from '@/components/LanguageSelector';
import { User, MapPin, Phone, Mail, Settings, Bell, Shield, CircleHelp as HelpCircle, LogOut } from 'lucide-react-native';

export default function ProfileScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [offlineMode, setOfflineMode] = useState(false);

  const profileData = {
    name: 'John Kamau',
    location: 'Nakuru, Kenya',
    phone: '+254 712 345 678',
    email: 'john.kamau@gmail.com',
    farmSize: '5 acres',
    primaryCrops: ['Maize', 'Beans', 'Tomatoes'],
    joinDate: 'Member since Jan 2024',
  };

  const menuItems = [
    { id: 'notifications', label: 'Notifications', icon: Bell, hasSwitch: true },
    { id: 'offline', label: 'Offline Mode', icon: Shield, hasSwitch: true },
    { id: 'language', label: 'Language', icon: Settings, hasComponent: true },
    { id: 'help', label: 'Help & Support', icon: HelpCircle, hasArrow: true },
    { id: 'logout', label: 'Logout', icon: LogOut, hasArrow: true, isDestructive: true },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Profile" />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <User size={32} color="#4CAF50" />
            </View>
          </View>
          
          <Text style={styles.profileName}>{profileData.name}</Text>
          <Text style={styles.joinDate}>{profileData.joinDate}</Text>
          
          <View style={styles.profileDetails}>
            <View style={styles.detailItem}>
              <MapPin size={16} color="#666" />
              <Text style={styles.detailText}>{profileData.location}</Text>
            </View>
            <View style={styles.detailItem}>
              <Phone size={16} color="#666" />
              <Text style={styles.detailText}>{profileData.phone}</Text>
            </View>
            <View style={styles.detailItem}>
              <Mail size={16} color="#666" />
              <Text style={styles.detailText}>{profileData.email}</Text>
            </View>
          </View>
        </View>

        <View style={styles.farmInfoSection}>
          <Text style={styles.sectionTitle}>Farm Information</Text>
          <View style={styles.farmInfoCard}>
            <View style={styles.farmInfoItem}>
              <Text style={styles.farmInfoLabel}>Farm Size</Text>
              <Text style={styles.farmInfoValue}>{profileData.farmSize}</Text>
            </View>
            <View style={styles.farmInfoItem}>
              <Text style={styles.farmInfoLabel}>Primary Crops</Text>
              <View style={styles.cropsContainer}>
                {profileData.primaryCrops.map((crop, index) => (
                  <View key={index} style={styles.cropTag}>
                    <Text style={styles.cropText}>{crop}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>

        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Settings</Text>
          <View style={styles.settingsCard}>
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.settingItem,
                  item.isDestructive && styles.destructiveItem,
                ]}
              >
                <View style={styles.settingLeft}>
                  <item.icon
                    size={20}
                    color={item.isDestructive ? '#F44336' : '#666'}
                  />
                  <Text
                    style={[
                      styles.settingLabel,
                      item.isDestructive && styles.destructiveLabel,
                    ]}
                  >
                    {item.label}
                  </Text>
                </View>
                
                <View style={styles.settingRight}>
                  {item.hasSwitch && item.id === 'notifications' && (
                    <Switch
                      value={notificationsEnabled}
                      onValueChange={setNotificationsEnabled}
                      trackColor={{ false: '#E0E0E0', true: '#4CAF50' }}
                    />
                  )}
                  {item.hasSwitch && item.id === 'offline' && (
                    <Switch
                      value={offlineMode}
                      onValueChange={setOfflineMode}
                      trackColor={{ false: '#E0E0E0', true: '#4CAF50' }}
                    />
                  )}
                  {item.hasComponent && item.id === 'language' && (
                    <LanguageSelector />
                  )}
                  {item.hasArrow && (
                    <Text style={styles.arrow}>→</Text>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Your Stats</Text>
          <View style={styles.statsCard}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>47</Text>
              <Text style={styles.statLabel}>Successful Deals</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>4.8</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>$12,450</Text>
              <Text style={styles.statLabel}>Total Revenue</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  profileSection: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginVertical: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E8F5E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  joinDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  profileDetails: {
    width: '100%',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  farmInfoSection: {
    marginBottom: 24,
  },
  farmInfoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  farmInfoItem: {
    marginBottom: 16,
  },
  farmInfoLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  farmInfoValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  cropsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cropTag: {
    backgroundColor: '#E8F5E8',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  cropText: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: '500',
  },
  settingsSection: {
    marginBottom: 24,
  },
  settingsCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  destructiveItem: {
    borderBottomWidth: 0,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingLabel: {
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
  },
  destructiveLabel: {
    color: '#F44336',
  },
  settingRight: {
    alignItems: 'center',
  },
  arrow: {
    fontSize: 18,
    color: '#666',
  },
  statsSection: {
    marginBottom: 24,
  },
  statsCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});