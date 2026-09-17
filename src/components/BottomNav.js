import React from "react";

import { Pressable, View, Text } from "react-native";

import { styles } from "../theme/styles";
import { colors } from "../theme/colors";

import { Ionicons } from "@expo/vector-icons";

export default function BottomNav({ current, onNavigate, onCreate }) {
  const items = [
    ["home-outline", "Home", "home"],
    ["heart-outline", "Favoritos", "favoritos"],
    ["search-outline", "Explorar", "explore"],
    ["person-outline", "Perfil", "profile"],
  ];

  return (
    <View style={styles.bottomNav}>
      {items.map(([icon, label, key]) => (
        <Pressable
          key={key}
          onPress={() => onNavigate(key)}
          style={styles.navItem}
        >
          <Ionicons
            name={current === key ? icon.replace("-outline", "") : icon}
            size={21}
            color={current === key ? colors.primary : colors.muted}
          />
          <Text
            style={{ color: current === key ? colors.primary : colors.muted }}
          >
            {label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
