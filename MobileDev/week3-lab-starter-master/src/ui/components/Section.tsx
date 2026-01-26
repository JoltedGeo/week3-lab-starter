// This file is used to manually create sections in our scollable list. Try to understand how it works.

import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Section({ title, subtitle, children }: Props) {
  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <View style={styles.body}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: 10,
  },
  header: {
    gap: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
  },
  subtitle: {
    fontSize: 13,
    opacity: 0.7,
  },
  body: {
    gap: 10,
  },
});
