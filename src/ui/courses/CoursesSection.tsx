import Section from "../components/Section";
import CourseList from "./CourseList";

export default function CoursesSection() {
  // TODO: Write the tsx code to render a Section component
  // Inside the Section, render the CourseList component
  return (
    <Section title="Courses" subtitle="Programming Courses">
      <CourseList />
    </Section>
  );
}
