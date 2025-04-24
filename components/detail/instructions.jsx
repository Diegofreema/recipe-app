import { FlatList, StyleSheet, Text, View } from 'react-native';

export const Instructions = ({ instructions }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instructions</Text>
      <FlatList
        data={instructions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <Text style={{ color: 'black', marginBottom: 10, fontSize: 15 }}>
              {item?.position}
            </Text>
            <Text style={{ color: 'black', marginBottom: 10 }}>
              {item?.display_text}
            </Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, gap: 20 }}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginBottom: 20,
  },
  container: {
    marginTop: 10,
  },
});
