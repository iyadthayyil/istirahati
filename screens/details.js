import * as React from "react";
import { View, Image, Linking } from "react-native";
import { Appbar, List, FAB, Headline, withTheme } from "react-native-paper";

function DetailsScreen({ route, navigation }) {
  const { data } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="تفاصيل الاستراحة" />
      </Appbar.Header>
      <View>
        <Image
          resizeMode="cover"
          style={{ height: 200 }}
          source={data.image}
        ></Image>
        <View style={{ margin: 16 }}>
          <Headline>{data.name}</Headline>
          <List.Section>
            <List.Item
              left={props => <List.Icon {...props} icon="map-marker" />}
              title={data.address}
            />
            <List.Item
              left={props => <List.Icon {...props} icon="phone" />}
              title={data.mobile}
            />
          </List.Section>
          <FAB
            icon="google-maps"
            label="موقع الاستراحة"
            onPress={() => Linking.openURL(data.location)}
          />
        </View>
      </View>
    </View>
  );
}

export default withTheme(DetailsScreen);
