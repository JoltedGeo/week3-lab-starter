import { Pressable, StyleSheet, Text, View } from "react-native";
import type { Student } from "../../types/student";

type Props = {
  student: Student;
};

function FunFact({ text }: { text?: string }) {
  if (!text || !text.trim()) return null;
  return <Text style={styles.funFact}>Fun fact: {text}</Text>;
}

export default function StudentCard({ student }: Props) {
  const { name, year, status, interests, githubUsername, funFact } = student;

  const displayGithub = githubUsername
    ? `github.com/${githubUsername}`
    : "GitHub: N/A";
  const statusDisplay = status === "Full-time" ? "full-time" : "part-time";
  const interestsDisplay = interests.slice(0, 4).join(", ");

  const logStudentInfo = () => {
    console.log(`Student: ${name} | year ${year} | ${statusDisplay}`);
    console.log(`Interests: ${interestsDisplay}`);
    console.log(`GitHub: ${displayGithub}`);
    if (funFact) {
      console.log(`Fun fact: ${funFact}`);
    }
  };

  return (
    <Pressable style={styles.card} onPress={logStudentInfo}>
      <View style={styles.topRow}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.badge}>Year {year}</Text>
      </View>
      <Text style={styles.meta}>{statusDisplay}</Text>
      <Text style={styles.meta}>{displayGithub}</Text>
      <Text style={styles.meta}>{interestsDisplay}</Text>
      <FunFact text={funFact} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 12,
    gap: 6,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: "800",
  },
  badge: {
    fontSize: 12,
    opacity: 0.75,
  },
  meta: {
    fontSize: 12,
    opacity: 0.75,
  },
  funFact: {
    marginTop: 2,
    fontSize: 12,
    opacity: 0.65,
  },
});
