import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import { Truck, MapPin, Clock, DollarSign, Package } from 'lucide-react-native';

export default function LogisticsScreen() {
  const [selectedService, setSelectedService] = useState('delivery');

  const logisticsOptions = [
    {
      id: '1',
      provider: 'AgriTransport',
      service: 'Standard Delivery',
      price: 25,
      duration: '2-3 days',
      distance: '12 km',
      rating: 4.8,
      description: 'Reliable transport for your crops',
    },
    {
      id: '2',
      provider: 'FarmLogistics',
      service: 'Express Delivery',
      price: 35,
      duration: '1-2 days',
      distance: '12 km',
      rating: 4.9,
      description: 'Fast delivery with cold storage',
    },
    {
      id: '3',
      provider: 'Rural Connect',
      service: 'Bulk Transport',
      price: 45,
      duration: '3-4 days',
      distance: '12 km',
      rating: 4.6,
      description: 'Best for large quantities',
    },
  ];

  const serviceTypes = [
    { id: 'delivery', label: 'Delivery', icon: Truck },
    { id: 'pickup', label: 'Pickup', icon: Package },
    { id: 'storage', label: 'Storage', icon: Package },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Logistics" />
      
      <View style={styles.content}>
        <View style={styles.serviceSelector}>
          <Text style={styles.sectionTitle}>Service Type</Text>
          <View style={styles.serviceOptions}>
            {serviceTypes.map((service) => (
              <TouchableOpacity
                key={service.id}
                style={[
                  styles.serviceOption,
                  selectedService === service.id && styles.activeServiceOption,
                ]}
                onPress={() => setSelectedService(service.id)}
              >
                <service.icon
                  size={20}
                  color={selectedService === service.id ? '#fff' : '#4CAF50'}
                />
                <Text
                  style={[
                    styles.serviceText,
                    selectedService === service.id && styles.activeServiceText,
                  ]}
                >
                  {service.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.routeInfo}>
          <Text style={styles.sectionTitle}>Route Information</Text>
          <View style={styles.routeCard}>
            <View style={styles.routeItem}>
              <MapPin size={16} color="#4CAF50" />
              <Text style={styles.routeText}>From: Your Farm (Nakuru)</Text>
            </View>
            <View style={styles.routeItem}>
              <MapPin size={16} color="#FF5722" />
              <Text style={styles.routeText}>To: East Africa Exports (Nairobi)</Text>
            </View>
            <View style={styles.routeItem}>
              <Package size={16} color="#666" />
              <Text style={styles.routeText}>Cargo: 500 kg Maize</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Available Options</Text>
        <ScrollView style={styles.optionsList} showsVerticalScrollIndicator={false}>
          {logisticsOptions.map((option) => (
            <TouchableOpacity key={option.id} style={styles.optionCard}>
              <View style={styles.optionHeader}>
                <View style={styles.providerInfo}>
                  <Text style={styles.providerName}>{option.provider}</Text>
                  <Text style={styles.serviceName}>{option.service}</Text>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.price}>${option.price}</Text>
                  <Text style={styles.priceLabel}>total</Text>
                </View>
              </View>
              
              <Text style={styles.description}>{option.description}</Text>
              
              <View style={styles.optionDetails}>
                <View style={styles.detailItem}>
                  <Clock size={14} color="#666" />
                  <Text style={styles.detailText}>{option.duration}</Text>
                </View>
                <View style={styles.detailItem}>
                  <MapPin size={14} color="#666" />
                  <Text style={styles.detailText}>{option.distance}</Text>
                </View>
                <View style={styles.detailItem}>
                  <Text style={styles.ratingText}>⭐ {option.rating}</Text>
                </View>
              </View>
              
              <TouchableOpacity style={styles.selectButton}>
                <Text style={styles.selectButtonText}>Select This Option</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    marginTop: 20,
  },
  serviceSelector: {
    marginBottom: 16,
  },
  serviceOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  serviceOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    minWidth: 100,
    justifyContent: 'center',
  },
  activeServiceOption: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  serviceText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  activeServiceText: {
    color: '#fff',
  },
  routeInfo: {
    marginBottom: 16,
  },
  routeCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  routeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  routeText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  optionsList: {
    flex: 1,
  },
  optionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  optionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  providerInfo: {
    flex: 1,
  },
  providerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  serviceName: {
    fontSize: 14,
    color: '#4CAF50',
    marginTop: 2,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  priceLabel: {
    fontSize: 12,
    color: '#666',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  optionDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#666',
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
  },
  selectButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  selectButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});