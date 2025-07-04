import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Send, Bot, User } from 'lucide-react-native';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AgriConnect assistant. How can I help you today?',
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: inputText,
        isUser: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, userMessage]);
      setInputText('');

      // Simulate AI response
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: getAIResponse(inputText),
          isUser: false,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const getAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('pest') || lowerQuery.includes('insect')) {
      return 'For pest control, I recommend using integrated pest management (IPM). Use beneficial insects, crop rotation, and organic pesticides like neem oil. What specific pest are you dealing with?';
    }
    
    if (lowerQuery.includes('weather') || lowerQuery.includes('rain')) {
      return 'Based on current weather patterns, expect moderate rainfall this week. It\'s a good time for planting maize. Make sure to prepare proper drainage for your fields.';
    }
    
    if (lowerQuery.includes('price') || lowerQuery.includes('market')) {
      return 'Current market prices: Maize - $0.45/kg, Beans - $0.82/kg, Tomatoes - $0.65/kg. Prices are trending upward due to seasonal demand. Would you like specific buyer recommendations?';
    }
    
    if (lowerQuery.includes('fertilizer') || lowerQuery.includes('soil')) {
      return 'For healthy soil, use compost and organic fertilizers. Test your soil pH first. Most crops prefer 6.0-7.0 pH. Add lime if too acidic, sulfur if too alkaline.';
    }
    
    return 'I can help you with crop advice, pest control, market prices, weather updates, and connecting you with buyers. What specific farming challenge are you facing?';
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer} showsVerticalScrollIndicator={false}>
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageContainer,
              message.isUser ? styles.userMessage : styles.botMessage,
            ]}
          >
            <View style={styles.messageHeader}>
              {message.isUser ? (
                <User size={16} color="#fff" />
              ) : (
                <Bot size={16} color="#4CAF50" />
              )}
              <Text style={styles.messageText}>{message.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Ask me anything about farming..."
          multiline
          maxLength={500}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Send size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  messagesContainer: {
    flex: 1,
    padding: 16,
  },
  messageContainer: {
    marginBottom: 12,
    padding: 12,
    borderRadius: 12,
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#4CAF50',
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  messageText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 8,
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});