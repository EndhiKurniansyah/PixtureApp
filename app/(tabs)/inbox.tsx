import React from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Pastikan Anda memiliki library ini

export default function Index() {
  const messages = [
    { id: '1', name: 'User 1', preview: '1 new message', badge: 1 },
    { id: '2', name: 'User 2', preview: 'Hallo', badge: 0 },
    { id: '3', name: 'User 3', preview: '2 new message', badge: 2 },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.messageContainer}>
      <Ionicons name="person-circle-outline" size={40} color="#004D40" />
      <View style={styles.messageContent}>
        <Text style={styles.messageTitle}>{item.name}</Text>
        <Text style={styles.messagePreview}>{item.preview}</Text>
      </View>
      {item.badge > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.badge}</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabActive}>Mail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabInactive}>Update</Text>
        </TouchableOpacity>
      </View>
      
      <TextInput style={styles.searchBar} placeholder="Search for users" />

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="white" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="search" size={24} color="white" />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="bookmark" size={24} color="white" />
          <Text style={styles.navText}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="mail" size={24} color="white" />
          <Text style={styles.navText}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person" size={24} color="white" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#E8F5E9',
  },
  tab: {
    marginHorizontal: 10,
  },
  tabActive: {
    color: '#006400',
    fontWeight: 'bold',
  },
  tabInactive: {
    color: '#8A8A8A',
  },
  searchBar: {
    backgroundColor: '#F0F0F0',
    margin: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    height: 40,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  messageContent: {
    flex: 1,
    marginLeft: 10,
  },
  messageTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004D40',
  },
  messagePreview: {
    fontSize: 14,
    color: '#7D7D7D',
  },
  badge: {
    backgroundColor: '#006400',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#004D40',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: 'white',
    fontSize: 12,
  },
});
