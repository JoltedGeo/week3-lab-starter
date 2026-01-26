import { Pressable, StyleSheet, Text, View } from "react-native";
import type { Course } from "../../types/course";

// TODO: Make a Props type for the props of our CourseCard component
type Props = {
  course: Course;
};

export default function CourseCard({ course }: Props) {
  // TODO: Use descructuring to extract values from the course
  // If values need to be modified or altered for display (ex: term number to "Term X"),
  // you can do that directly in the tsx code below, or create new variables here
  // if the values will be used in the log function as well, create variables for them here
  const { code, credits = 3, title, description, term, delivery, prerequisites, programIds, note } = course;

  const termDisplay = term ? `Term ${term}` : undefined;
  const deliveryDisplay = delivery ? `${delivery}` : undefined;
  const metaText = [termDisplay, deliveryDisplay].filter(Boolean).join(" | ");
  const prereqText = prerequisites && prerequisites.length > 0 ? prerequisites.join(", ") : undefined;
  const programText = programIds && programIds.length > 0 ? programIds.join(", ") : undefined;

  // TODO: Create a function called logCourseInfo that logs a formatted summary of the course to the console
  // Example output:
  // Course: CPRG 303 | Mobile Application Development | credits: 3 | Term 2 | In-person
  // Prereqs: CPRG 202, CPRG 101 (displaying the ids initially is fine)
  // Programs: Diploma in Software Development, Degree in Computer Science (once that field has been added)
  // Note: This course is required for the Software Development program.
  function logCourseInfo() {
    console.log(`Course: ${code} | ${title} | credits: ${credits} | ${metaText}`);
    if (prereqText) console.log(`Prereqs: ${prereqText}`);
    if (programText) console.log(`Programs: ${programText}`);
    if (note) console.log(`Note: ${note}`);
  }

  // TODO: Create the TSX for the course card layout
  // There should be a Pressable as the root element, with onPress set to the logCourseInfo function created above
  // Inside the Pressable, create the following elements:
  // A View for the top row, containing:
  //   A Text for the course code
  //   A Text for the number of credits
  // A Text for the course title
  // A Text for the course description
  // A Text for the term and delivery method
  // A Text for the pre-requisite labels
  // A Text for the program labels (once that field has been added to the Course interface)
  // (The three text components above should use the meta style)
  // If there is a note, a Text for the note

  return (
    <Pressable style={styles.card} onPress={logCourseInfo}>
      <View style={styles.topRow}>
        <Text style={styles.code}>{code}</Text>
        <Text style={styles.credits}>{credits}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{description}</Text>
      {metaText && <Text style={styles.meta}>{metaText}</Text>}
      {prereqText && <Text style={styles.meta}>Prerequisites: {prereqText}</Text>}
      {programText && <Text style={styles.meta}>Programs: {programText}</Text>}
      {note && <Text style={styles.note}>{note}</Text>}
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
    alignItems: "baseline",
  },
  code: {
    fontSize: 14,
    fontWeight: "800",
  },
  credits: {
    fontSize: 12,
    opacity: 0.75,
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
  },
  desc: {
    fontSize: 13,
    opacity: 0.85,
    lineHeight: 18,
  },
  meta: {
    fontSize: 12,
    opacity: 0.7,
  },
  note: {
    marginTop: 2,
    fontSize: 12,
    opacity: 0.65,
  },
});
