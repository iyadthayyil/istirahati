import * as React from "react";
import { useState } from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Appbar, Card, Menu, Headline, withTheme } from "react-native-paper";

import data from "../data.js";

const width = Dimensions.get("window").width;

function HomeScreen({ route, navigation, theme }) {
  const { userName } = route.params;

  const [visible, setVisible] = useState(0);

  const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

  _openMenu = () => setVisible(1);

  _closeMenu = () => setVisible(0);

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="الاستراحات" />
        <Menu
          visible={visible}
          onDismiss={_closeMenu}
          anchor={
            <Appbar.Action icon={MORE_ICON} color="white" onPress={_openMenu} />
          }
        >
          <Menu.Item
            icon="exit-to-app"
            onPress={() => navigation.navigate("الدخول")}
            title="خروج"
          />
        </Menu>
      </Appbar.Header>
      <ScrollView
        style={[styles.container, { backgroundColor: theme.background }]}
        contentContainerStyle={styles.content}
      >
        <Headline>مرحبًا {userName}</Headline>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {data.map(item => (
            <Card style={styles.card} onPress={() => navigation.navigate("تفاصيل الاستراحة", {data: item})}>
              <Card.Cover source={item.image} />
              <Card.Title title={item.name} />
            </Card>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: 4
  },
  card: {
    margin: 4,
    width: width / 2 - 12
  }
});

export default withTheme(HomeScreen);
