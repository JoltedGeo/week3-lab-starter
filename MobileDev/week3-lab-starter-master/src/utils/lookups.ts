// This file contains helper functions to create lookup maps for programs and courses,
// as well as functions to generate display labels for them.
// It will be used once all group members have finished their sections.
/*
import { courses } from "../data/courses";
import { programs } from "../data/programs";
import type { CourseId, ProgramId } from "../types/common";
import type { Course } from "../types/course";
import type { Program } from "../types/program";

export function buildProgramMap(): Record<ProgramId, Program> {
  const map: Record<ProgramId, Program> = {};
  for (const p of programs) map[p.id] = p;
  return map;
}

export function buildCourseMap(): Record<CourseId, Course> {
  const map: Record<CourseId, Course> = {};
  for (const c of courses) map[c.id] = c;
  return map;
}

export function courseLabel(course: Course | undefined): string {
  if (!course) return "(unknown course)";
  return `${course.code} — ${course.title}`;
}

export function programLabel(program: Program | undefined): string {
  if (!program) return "(unknown program)";
  return program.name;
}
*/
