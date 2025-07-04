import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MapPin, Star, Truck } from 'lucide-react-native';

interface MarketplaceCardProps {
  buyerName: string;
  cropType: string;
  price: number;
  distance: number;
  rating: number;
  quantity: string;
  onPress: () => void;
}

export default function MarketplaceCard({
  buyerName,
  cropType,
  price,
  distance,
  rating,
  quantity,
  onPress,
}: MarketplaceCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.buyerName}>{buyerName}</Text>
        <View style={styles.ratingContainer}>
          <Star size={16} color="#FFC107" />
          <Text style={styles.rating}>{rating}</Text>
        </View>
      </View>
      
      <Text style={styles.cropType}>Looking for: {cropType}</Text>
      <Text style={styles.price}>${price.toFixed(2)} per kg</Text>
      <Text style={styles.quantity}>Quantity needed: {quantity}</Text>
      
      <View style={styles.footer}>
        <View style={styles.locationContainer}>
          <MapPin size={14} color="#666" />
          <Text style={styles.distance}>{distance} km away</Text>
        </View>
        <View style={styles.logisticsContainer}>
          <Truck size={14} color="#4CAF50" />
          <Text style={styles.logistics}>Logistics available</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  buyerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
  cropType: {
    fontSize: 14,
    color: '#4CAF50',
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 4,
  },
  quantity: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distance: {
    marginLeft: 4,
    fontSize: 12,
    color: '#666',
  },
  logisticsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logistics: {
    marginLeft: 4,
    fontSize: 12,
    color: '#4CAF50',
  },
});