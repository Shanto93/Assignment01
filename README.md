# Interfaces vs. Types in TypeScript: Key Differences

When working with TypeScript, you'll often need to define custom shapes for objects, functions, or classes. Two primary tools for this are `interfaces` and `type aliases`. While they seem similar, they have distinct use cases and behaviors.

## 1. Basic Syntax

### Interface
```typescript
interface User {
  id: number;
  name: string;
}

### Type
```typescript
type User = {
  id: number;
  name: string;
}

## 2. Similarities

Both `interface` and `type` can:

- Describe the shape of an object
- Be extended/merged
- Be used for type checking
- Support optional and readonly properties

## 3. Key Differences
### 1. Extending
### Interface
Interfaces are extendable through extends, and they can also merge declarations (open-ended).

```typescript
interface Person {
  name: string;
}

interface Person {
  age: number;
}

// Final shape: { name: string; age: number }
