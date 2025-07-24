import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
const NoteCard = ({ note, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.time}>{note.time}</Text>
        {/* {note.locked && <Icon name="lock" size={16} color="#666" />} */}
      </View>
      <Text style={styles.title} numberOfLines={1}>{note.title}</Text>
      {note.items && (
        <View style={styles.itemsContainer}>
          {note.items.slice(0, 2).map((item:any, index:any) => (
            <Text key={index} style={styles.item} numberOfLines={1}>• {item}</Text>
          ))}
          {note.items.length > 2 && <Text style={styles.moreItems}>+ {note.items.length - 2} more</Text>}
        </View>
      )}
    </TouchableOpacity>
  );
};

const cardMargin = 8;
const cardWidth = (Dimensions.get('window').width / 2) - (cardMargin * 2);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    margin: cardMargin,
    width: cardWidth,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  time: {
    color: '#666',
    fontSize: 12,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 14,
  },
  itemsContainer: {
    marginLeft: 4,
  },
  item: {
    fontSize: 12,
    color: '#555',
    marginBottom: 2,
  },
  moreItems: {
    fontSize: 11,
    color: '#888',
    fontStyle: 'italic',
  }
});

export default NoteCard;