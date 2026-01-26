# SAIT Directory App – Lab Activity

## Overview

In this lab, you will work in **groups** to build a small **SAIT directory app** using **React Native + TypeScript**.

The goal of this lab is to:

- Practice **TypeScript fundamentals** (types, interfaces, arrays, objects, optional fields)
- Practice **React Native basics** (`View`, `Text`, `Pressable`, props, lists)
- Learn a **real-world Git collaboration workflow**
- See how multiple independently built pieces come together into a single app

This lab is intentionally **hands-on and practice-focused**. The emphasis is on learning and understanding the patterns, not rushing to “finish” everything.

---

## ⚠️ Important: Turn Off AI Autocomplete

**Before you start**, please disable AI code autocomplete tools in your editor (Copilot, Cursor, Tabnine, etc.).

This lab is designed for you to:

- Read the TODO comments
- Think through the code yourself
- Practice writing TypeScript and React Native manually

The comments are detailed enough that autocomplete would likely complete the entire task for you in one shot. If you let autocomplete write everything for you, you will miss the learning part.

You may still use AI **sparingly** to:

- Explain an error message or a high level concept
- Generate sample data (see Step 2)

---

## High-Level App Structure

The app displays multiple **sections**, each representing a SAIT-related entity:

- Programs
- Courses
- Staff
- Students

Each entity has:

- A **type definition** in `/types`
- A **data file** in `/data`
- UI components in `/ui/<entity>/`
  - `Section`
  - `List`
  - `Card`

All components already exist and return `null`, so the app runs immediately.  
Your job is to **fill them in**.

---

## Group Roles (Decide First)

Form groups of **3–4 students**.

Each person must fully own **one entity**:

- Programs
- Courses
- Instructors / Staff
- Students

You are responsible for **everything related to your entity**:

- Defining its types
- Creating its sample data
- Implementing its UI components

---

## Git Workflow (High Level)

1. **One person** in your group forks the repository on GitHub
2. Everyone else clones **that fork**
3. Each person creates their **own branch** for their entity
4. You commit only your own work (comitting after each step is recommended)
5. You merge everyone’s work together at the end

You may use:

- VS Code’s built-in Source Control
- GitHub Desktop
- git cli commands directly (not recommended)

(Do **not** work directly on `main`.)

---

## Implementation Steps

### Step 1 – Define Your Types

In `/types/<entity>.ts`:

- Create an **Id type** (e.g. `CourseId`, `ProgramId`)
- Define the **interface** exactly as described in the TODO comments
- Use:
  - Optional fields where indicated
  - Shared types from `common.ts` (such as `DeliveryMethod` and `School`)

Focus on correctness and clarity.

---

### Step 2 – Add Sample Data

In `/data/<entity>.ts`:

- Create **at least 3–5 realistic entries**
- IDs should be unique strings
- Values should ideally look like real SAIT data

💡 **Tip:**  
You may copy your finished interface and ask an AI tool to generate sample data that matches it.  
This is a good use of AI and can save time.

---

### Step 3 – Build the UI Components

In `/ui/<entity>/` you will implement:

- `<Entity>Section`
- `<Entity>List`
- `<Entity>Card`

Follow the TODO comments carefully.

Requirements:

- Use only `View`, `Text`, and `Pressable` (as well as our custom components like `Section`)
- Pass data using **props**
- Render lists by mapping over arrays
- Use the provided styles

Each **Card** component must:

- Log a **formatted summary** to the console when pressed
- Handle optional fields cleanly (do not assume values exist)

---

## Merging Your Work

When everyone has finished their entity:

1. Push your branch
2. Open a pull request into `main`
3. Review and merge together as a group
4. Resolve conflicts collaboratively if they appear

After merging, everyone pulls the final version.

---

## Optional Final Step (Only If Time Allows)

If there is time at the end of the lab:

- Connect entities together using IDs
  - Courses → Programs
  - Students → Courses
  - Instructors → Courses
- Uncomment and use the provided utility helpers
- Display cross-entity information in cards

⚠️ This step is **optional** and not required for completion.

---

## What Matters Most

✅ Correct TypeScript types  
✅ Clean component structure  
✅ Meaningful Git commits  
✅ Working app structure  
✅ Understanding _why_ things are written this way

This lab is about learning the **patterns and workflow**, not just producing output.

---

## Ask for Help Early

If you are stuck:

- Talk with your group
- Ask questions during lab
- Do not silently struggle

This is a learning space.
