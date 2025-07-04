import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import MarketplaceCard from '@/components/MarketplaceCard';
import { Search, Filter, Plus } from 'lucide-react-native';

export default function MarketplaceScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const buyers = [
    {
      id: '1',
      buyerName: 'East Africa Exports',
      cropType: 'Maize',
      price: 0.45,
      distance: 12,
      rating: 4.8,
      quantity: '500 kg',
    },
    {
      id: '2',
      buyerName: 'Fresh Harvest Co.',
      cropType: 'Tomatoes',
      price: 0.65,
      distance: 8,
      rating: 4.6,
      quantity: '200 kg',
    },
    {
      id: '3',
      buyerName: 'Green Valley Foods',
      cropType: 'Beans',
      price: 0.82,
      distance: 15,
      rating: 4.9,
      quantity: '300 kg',
    },
    {
      id: '4',
      buyerName: 'Local Market Hub',
      cropType: 'Onions',
      price: 0.35,
      distance: 5,
      rating: 4.4,
      quantity: '150 kg',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Crops' },
    { id: 'maize', label: 'Maize' },
    { id: 'tomatoes', label: 'Tomatoes' },
    { id: 'beans', label: 'Beans' },
    { id: 'vegetables', label: 'Vegetables' },
  ];

  const handleBuyerPress = (buyerId: string) => {
    // Handle buyer selection
    console.log('Selected buyer:', buyerId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Marketplace" />
      
      <View style={styles.content}>
        <View style={styles.searchSection}>
          <View style={styles.searchContainer}>
            <Search size={20} color="#666" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search crops or buyers..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Filter size={20} color="#4CAF50" />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filtersScroll}
        >
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter.id}
              style={[
                styles.filterChip,
                selectedFilter === filter.id && styles.activeFilterChip,
              ]}
              onPress={() => setSelectedFilter(filter.id)}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedFilter === filter.id && styles.activeFilterText,
                ]}
              >
                {filter.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.headerSection}>
          <Text style={styles.resultsText}>
            {buyers.length} buyers found
          </Text>
          <TouchableOpacity style={styles.addButton}>
            <Plus size={20} color="#4CAF50" />
            <Text style={styles.addButtonText}>List Crop</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.buyersList}
          showsVerticalScrollIndicator={false}
        >
          {buyers.map((buyer) => (
            <MarketplaceCard
              key={buyer.id}
              buyerName={buyer.buyerName}
              cropType={buyer.cropType}
              price={buyer.price}
              distance={buyer.distance}
              rating={buyer.rating}
              quantity={buyer.quantity}
              onPress={() => handleBuyerPress(buyer.id)}
            />
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
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  filterButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  filtersScroll: {
    marginBottom: 16,
  },
  filterChip: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  activeFilterChip: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  filterText: {
    fontSize: 14,
    color: '#666',
  },
  activeFilterText: {
    color: '#fff',
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  resultsText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E8',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  addButtonText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '500',
  },
  buyersList: {
    flex: 1,
  },
});