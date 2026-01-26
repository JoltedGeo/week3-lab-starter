import { StyleSheet } from "react-native";

// TODO: Make a Props type for the props of our StudentCard component

// TODO: Make a FunFact component that takes an optional text prop (no need for a type for this prop, just use inline typing)
// This prop is a helper that will render null if no text is provided or if the text is an empty string (or only whitespace, use .trim() to check).
// If there is text, render a Text component with the style styles.funFact that displays "Fun fact: " followed by the text prop.

export default function StudentCard(/*TODO: Add props here (use destructuring)*/) {
  // TODO: Use descructuring to extract values from the student
  // If values need to be modified or altered for display (ex: a default value added if no github is specified),
  // you can do that directly in the tsx code below, or create new variables here
  // if the values will be used in the log function as well, create variables for them here

  // TODO: Create a function called logStudentInfo that logs a formatted summary of the student to the console
  // Example output:
  // Student: John Smith | year 2 | full-time | program: Diploma in Software Development | github: github.com/johnsmith
  // Interests: Web Development, Mobile Development, Game Development
  // Courses: CPRG 101, CPRG 202, CPRG 303 (once that field has been added)
  // Fun fact: I have a black belt in karate.

  // TODO: Create the TSX for the student card layout
  // There should be a Pressable as the root element, with onPress set to the logStudentInfo function created above
  // Inside the Pressable, create the following elements:
  // A View for the top row, containing:
  //   A Text for the student's name
  //   A Text for the student's year (this will act as a badge)
  // A Text for the student's status (full-time/part-time)
  // A Text for the student's program name (once that field has been added)
  // A Text for the student's GitHub (or "GitHub: N/A" if none is specified)
  // A Text for the student's interests (display only the first four interests, separated by commas)
  // A Text for the course labels (once that field has been added)
  // The FunFact component created above, passing in the fun fact text
  return null;
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
