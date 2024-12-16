import { View, Text } from 'react-native'
import React from 'react'
import { Image, StyleSheet } from 'react-native';
import products from '@/assets/data/products';
import Colors from '@/src/constants/Colors';
import { Product } from '@/assets/food-ordering-asset-bundle/Food Ordering Asset bundle/types';

export default function ProductListItem(props:{product: Product}) {
    return (
      <View style={{ alignItems: 'center' ,backgroundColor: 'white', flex:1 }} >
        <Image source={{ uri: props.product.image || 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png' }} style={{ width: '100%', aspectRatio:1, alignSelf:'center'}} />
        <View style={{ paddingLeft: '2%', alignSelf:'flex-start'}} >
          <Text>{props.product.name}</Text>
          <Text style={{ color:  Colors.light.tint ,fontWeight:'bold' }} >${props.product.price}</Text>
        </View>
      </View>
    );
}
