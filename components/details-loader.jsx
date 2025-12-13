import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import React from 'react';
import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';

const { height } = Dimensions.get('window');
const Spacer = ({ height = 16 }) => <MotiView style={{ height }} />;
export const DetailsLoader = () => {
  return (
    <MotiView
      transition={{
        type: 'timing',
      }}
      style={styles.top}
      animate={{ backgroundColor: '#ffffff' }}
    >
      <Skeleton
        colorMode="light"
        height={height * 0.25}
        width={'100%'}
        radius={10}
      />
      <Spacer />
      <Skeleton colorMode="light" height={30} width={250} />
      <Spacer />
      <FlatList
        data={[...Array(8).keys()]}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.toString()}
        scrollEnabled={false}
        renderItem={() => (
          <Skeleton colorMode="light" height={45} width={'100%'} radius={10} />
        )}
        ItemSeparatorComponent={() => <Spacer />}
      />
    </MotiView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  top: {
    flex: 1,
  },
});
