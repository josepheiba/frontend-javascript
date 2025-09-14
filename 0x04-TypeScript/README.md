# 0x04. Typescript

This project contains TypeScript exercises covering basic types, interfaces, classes, functions, DOM manipulation, generic types, namespaces, declaration merging, and ambient namespaces.

## Learning Objectives

- Basic types in TypeScript
- Interfaces, Classes, and functions
- How to work with the DOM and TypeScript
- Generic types
- How to use namespaces
- How to merge declarations
- How to use an ambient Namespace to import an external library
- Basic nominal typing with TypeScript

## Requirements

- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- All files will be transpiled on Ubuntu 18.04
- TS scripts will be checked with jest (version 24.9.*)
- Code should use the .ts extension when possible
- The TypeScript compiler should not show any warning or error when compiling the code

## Tasks

### 0. Creating an interface for a student
**File:** `task_0/js/main.ts`

Create a Student interface and render a table with student data using vanilla JavaScript.

### 1. Let's build a Teacher interface
**File:** `task_1/js/main.ts`

Create Teacher and Directors interfaces with readonly properties and optional attributes.

### 2. Extending the Teacher class
**File:** `task_1/js/main.ts`

Extend Teacher interface to create Directors interface and implement printTeacher function.

### 3. Printing teachers
**File:** `task_1/js/main.ts`

Create printTeacher function and StudentClass with proper interfaces.

### 4. Writing a class
**File:** `task_1/js/main.ts`

Implement StudentClass with constructor and methods described through interfaces.

### 5. Advanced types Part 1
**File:** `task_2/js/main.ts`

Create DirectorInterface and TeacherInterface with classes and employee creation function.

### 6. Creating functions specific to employees
**File:** `task_2/js/main.ts`

Implement type predicates and work execution functions.

### 7. String literal types
**File:** `task_2/js/main.ts`

Create string literal types for subjects and teachClass function.

### 8. Ambient Namespaces
**Files:** `task_3/js/main.ts`, `task_3/js/interface.ts`, `task_3/js/crud.d.ts`

Work with ambient namespaces and external libraries using TypeScript declarations.

### 9. Namespace & Declaration merging
**Files:** `task_4/js/subjects/*.ts`, `task_4/js/main.ts`

Implement namespace declaration merging across multiple files.

### 10. Update task_4/js/main.ts
**File:** `task_4/js/main.ts`

Create subject constants and demonstrate usage with cTeacher object.

### 11. Brand convention & Nominal typing
**File:** `task_5/js/main.ts`

Implement brand properties for nominal typing with credit interfaces.

## Usage

To build and run any task:

```bash
cd task_X
npm install
npm run build
```

## Author

ALX Software Engineering Program - TypeScript Module
