declare module 'react-native-masonry-list' {
  import { ComponentType } from 'react';
    import { StyleProp, ViewStyle } from 'react-native';

  interface MasonryListProps<T = any> {
    data: T[];
    renderItem: ({ item, i }: { item: T; i: number }) => React.ReactNode;
    keyExtractor?: (item: T, index: number) => string;
    columns?: number;
    spacing?: number;
    style?: StyleProp<ViewStyle>;
    refreshing?: boolean;
    onRefresh?: () => void;
    onEndReached?: () => void;
    onEndReachedThreshold?: number;
  }

  const MasonryList: ComponentType<MasonryListProps>;
  export default MasonryList;
}