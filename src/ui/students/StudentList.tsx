import { StyleSheet, View } from "react-native";
import { students } from "../../data/students";
import StudentCard from "./StudentCard";

export default function StudentList() {
  const sortedStudents = [...students].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <View style={styles.list}>
      {sortedStudents.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 10,
  },
});
