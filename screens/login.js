import * as React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import { TextInput, Button, HelperText, withTheme } from "react-native-paper";

function LoginScreen({ navigation, theme }) {
  const [userName, setUserName] = useState(0);
  const [password, setPassword] = useState(0);
  const [loading, setLoading] = useState(0);

  const [userNameError, setUserNameError] = useState(0);
  const [passwordError, setPasswordError] = useState(0);

  return (
    <View>
      <View
        style={{
          height: 150,
          backgroundColor: theme.colors.primary,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ color: "white", fontSize: 50 }}>استراحتي</Text>
      </View>
      <View style={{ margin: 16 }}>
        <TextInput
          label="اسم المستخدم"
          mode="outlined"
          value={userName}
          onChangeText={text => {
            setUserNameError(0);
            setUserName(text);
          }}
          error={userNameError}
        />
        <HelperText type="error" visible={userNameError}>
          لا يمكنك ترك هذه الخانة فارغة!
        </HelperText>
        <TextInput
          label="كلمة المرور"
          mode="outlined"
          secureTextEntry
          value={password}
          error={passwordError}
          onChangeText={text => {
            setPasswordError(0);
            setPassword(text);
          }}
        />
        <HelperText type="error" visible={passwordError}>
          لا يمكنك ترك هذه الخانة فارغة!
        </HelperText>
        <Button
          icon={loading ? '' : 'key'}
          style={{ height: 50, justifyContent: "center" }}
          mode="contained"
          loading={loading}
          onPress={() => {
            if (!userName) setUserNameError(1);
            if (!password) setPasswordError(1);

            if (userName && password) {
              setLoading(1);
              setTimeout(function() {
                setLoading(0);
                navigation.navigate("الاستراحات", { userName });
              }, 2000);
            }
          }}
        >
          دخول
        </Button>
      </View>
    </View>
  );
}

export default withTheme(LoginScreen);
