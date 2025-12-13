import { View, Text, FlatList, useWindowDimensions } from 'react-native';
import React from 'react';
import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';

export const RecipeLoader = () => {
  const { width } = useWindowDimensions();
  const containerWidth = (width - 60) / 2;
  return (
    <MotiView
      transition={{
        type: 'timing',
      }}
    >
      <FlatList
        data={[...Array(6).keys()]}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.toString()}
        scrollEnabled={false}
        renderItem={() => (
          <Skeleton
            colorMode="light"
            // transition={{
            //   translateX: {
            //     type: 'spring',
            //   },
            // }}
            height={containerWidth * 1.3}
            width={containerWidth}
          />
        )}
        contentContainerStyle={{ gap: 15, marginTop: 30 }}
        numColumns={2}
        columnWrapperStyle={{ gap: 15 }}
      />
    </MotiView>
  );
};
