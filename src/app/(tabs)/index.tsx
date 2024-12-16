import { FlatList, Image, ScrollView, StyleSheet } from 'react-native';

import { Text, View } from 'react-native';
import products from '@/assets/data/products';
import React from 'react';
import Colors from '@/src/constants/Colors';
import ProductListItem from '@/src/components/ProductListItem';
export default function TabOneScreen() {
  return (
    <FlatList data={products} renderItem={({ item }) => <ProductListItem product={item} /> } numColumns={2} contentContainerStyle={{ gap: 10, padding: 10 }} columnWrapperStyle={{ gap: 10 }}/>
  );
}
