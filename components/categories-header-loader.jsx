import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { Skeleton } from 'moti/skeleton';
import { scaleFontSize } from '@/utils';
import { MotiView } from 'moti';

export const CategoriesHeaderLoader = () => {
  return (
    <MotiView
      transition={{
        type: 'timing',
      }}
    >
      <FlatList
        data={[...Array(8).keys()]}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.toString()}
        renderItem={() => (
          <Skeleton
            colorMode="light"
            // transition={{
            //   translateX: {
            //     type: 'spring',
            //   },
            // }}
            height={scaleFontSize(28)}
            width={scaleFontSize(60)}
          />
        )}
        contentContainerStyle={{ gap: 15, marginTop: 15 }}
      />
    </MotiView>
  );
};
