import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackParamList = {
  Product: undefined;
  Details: undefined;
};

export type ProductStackProps = NativeStackScreenProps<
  StackParamList,
  "Product"
>;

export type DetailsStackProps = NativeStackScreenProps<
  StackParamList,
  "Details"
>;
