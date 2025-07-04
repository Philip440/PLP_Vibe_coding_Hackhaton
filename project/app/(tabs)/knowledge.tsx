import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import ChatBot from '@/components/ChatBot';
import { MessageCircle, BookOpen, TrendingUp, Bug, Cloud } from 'lucide-react-native';

export default function KnowledgeScreen() {
  const [activeTab, setActiveTab] = useState('chat');

  const knowledgeCategories = [
    {
      id: 'pest-control',
      title: 'Pest Control',
      icon: Bug,
      color: '#FF5722',
      articles: 15,
    },
    {
      id: 'weather',
      title: 'Weather & Climate',
      icon: Cloud,
      color: '#2196F3',
      articles: 12,
    },
    {
      id: 'market-trends',
      title: 'Market Trends',
      icon: TrendingUp,
      color: '#4CAF50',
      articles: 8,
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
      icon: BookOpen,
      color: '#9C27B0',
      articles: 20,
    },
  ];

  const recentArticles = [
    {
      id: '1',
      title: 'Integrated Pest Management for Maize',
      category: 'Pest Control',
      readTime: '5 min',
      isNew: true,
    },
    {
      id: '2',
      title: 'Optimal Irrigation Techniques',
      category: 'Best Practices',
      readTime: '8 min',
      isNew: false,
    },
    {
      id: '3',
      title: 'Understanding Seasonal Price Patterns',
      category: 'Market Trends',
      readTime: '6 min',
      isNew: true,
    },
    {
      id: '4',
      title: 'Preparing for the Rainy Season',
      category: 'Weather & Climate',
      readTime: '4 min',
      isNew: false,
    },
  ];

  const tabs = [
    { id: 'chat', label: 'AI Assistant', icon: MessageCircle },
    { id: 'library', label: 'Knowledge Base', icon: BookOpen },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Knowledge Hub" />
      
      <View style={styles.content}>
        <View style={styles.tabContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.tab,
                activeTab === tab.id && styles.activeTab,
              ]}
              onPress={() => setActiveTab(tab.id)}
            >
              <tab.icon
                size={20}
                color={activeTab === tab.id ? '#4CAF50' : '#666'}
              />
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab.id && styles.activeTabText,
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {activeTab === 'chat' ? (
          <ChatBot />
        ) : (
          <ScrollView style={styles.libraryContent} showsVerticalScrollIndicator={false}>
            <View style={styles.categoriesSection}>
              <Text style={styles.sectionTitle}>Browse Categories</Text>
              <View style={styles.categoriesGrid}>
                {knowledgeCategories.map((category) => (
                  <TouchableOpacity key={category.id} style={styles.categoryCard}>
                    <View style={[styles.categoryIcon, { backgroundColor: category.color + '20' }]}>
                      <category.icon size={24} color={category.color} />
                    </View>
                    <Text style={styles.categoryTitle}>{category.title}</Text>
                    <Text style={styles.categoryCount}>{category.articles} articles</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.recentSection}>
              <Text style={styles.sectionTitle}>Recent Articles</Text>
              <View style={styles.articlesList}>
                {recentArticles.map((article) => (
                  <TouchableOpacity key={article.id} style={styles.articleCard}>
                    <View style={styles.articleHeader}>
                      <Text style={styles.articleTitle}>{article.title}</Text>
                      {article.isNew && (
                        <View style={styles.newBadge}>
                          <Text style={styles.newBadgeText}>New</Text>
                        </View>
                      )}
                    </View>
                    <View style={styles.articleMeta}>
                      <Text style={styles.articleCategory}>{article.category}</Text>
                      <Text style={styles.articleReadTime}>{article.readTime} read</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>
        )}
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
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 12,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#E8F5E8',
  },
  tabText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
  },
  activeTabText: {
    color: '#4CAF50',
    fontWeight: '500',
  },
  libraryContent: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  categoriesSection: {
    marginBottom: 24,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 4,
  },
  categoryCount: {
    fontSize: 12,
    color: '#666',
  },
  recentSection: {
    marginBottom: 24,
  },
  articlesList: {
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  articleCard: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  articleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    flex: 1,
    marginRight: 8,
  },
  newBadge: {
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  newBadgeText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  articleMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  articleCategory: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: '500',
  },
  articleReadTime: {
    fontSize: 12,
    color: '#666',
  },
});