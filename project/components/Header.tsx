import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Bell, Wifi, WifiOff } from 'lucide-react-native';

interface HeaderProps {
  title: string;
  isOnline?: boolean;
}

export default function Header({ title, isOnline = true }: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.statusIcons}>
        {isOnline ? (
          <Wifi size={20} color="#4CAF50" />
        ) : (
          <WifiOff size={20} color="#F44336" />
        )}
        <Bell size={20} color="#666" style={styles.notificationIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#4CAF50',
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    marginLeft: 12,
  },
});