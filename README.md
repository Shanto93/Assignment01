# Interfaces vs. Types in TypeScript: Key Differences

When working with TypeScript, you'll often need to define custom shapes for objects, functions, or classes. Two primary tools for this are `interfaces` and `type aliases`. While they seem similar, they have distinct use cases and behaviors.

## 1. Basic Syntax

### Interface
```typescript
interface User {
  id: number;
  name: string;
}
```
### Type
```typescript
type User = {
  id: number;
  name: string;
}
```

## 2. Similarities

Both `interface` and `type` can:

- Describe the shape of an object
- Be extended/merged
- Be used for type checking
- Support optional and readonly properties

## 3. Key Differences
### 1. Extending
### Interface:
Interfaces are extendable through extends, and they can also merge declarations (open-ended).

```typescript
interface Person {
  name: string;
}

interface Person {
  age: number;
}

// Final shape: { name: string; age: number }
```
### type:
Types cannot be reopened or merged, but they can be extended via intersections.

```typescript
type Animal = {
  name: string;
};

type Dog = Animal & {
  breed: string;
};
```
### 2. Declaration Merging
Only interface supports declaration merging.

```typescript
interface Window {
  title: string;
}

interface Window {
  size: number;
}

// Merged into one interface
const win: Window = {
  title: 'My App',
  size: 800
};

```
This is useful in extending types from libraries like React or Node.

### 3. Union & Intersection Types

### type:
Supports unions and intersections, making it more flexible for advanced compositions.

```typescript
type Status = 'success' | 'error' | 'loading';
type Result<T> = T & { status: Status };

```
### Interface:
Does not support union types directly.

### 4. Implementation in Classes
Both interface and type can be implemented by classes, but interface is typically preferred.

```typescript
interface Flyable {
  fly(): void;
}

class Bird implements Flyable {
  fly() {
    console.log('Flying');
  }
}
```

### 5. Primitive and Tuple Aliases
### Interface:
interface can't do this:

```typescript
interface ID = string | number;
```
### type:
Only type can alias primitives, tuples, and unions:
```typescript
type ID = string | number;
type Point = [number, number];
```
