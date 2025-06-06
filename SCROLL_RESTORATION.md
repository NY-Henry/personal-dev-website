# Scroll Restoration Implementation

This implementation provides intelligent scroll restoration behavior for your React Router application. Here's how it works:

## Features

### 🔄 **Smart Navigation Behavior**

- **New Page Navigation (PUSH)**: When users click links to navigate to new pages, the page starts from the top
- **Browser Back/Forward (POP)**: When users use browser back/forward buttons, they return to exactly where they left off

### ⚡ **Performance Optimized**

- Throttled scroll position saving (100ms by default)
- Memory management with automatic cleanup of old positions
- Passive scroll event listeners for better performance

### 🎛️ **Customizable Options**

- `smoothScrollOnNewPage`: Enable smooth scrolling when navigating to new pages
- `debounceMs`: Customize the scroll position saving frequency

## Implementation Details

### How It Works

1. **Navigation Type Detection**: Uses React Router's `useNavigationType()` to distinguish between:

   - `PUSH`: New page navigation (links, programmatic navigation)
   - `POP`: Browser back/forward buttons

2. **Scroll Position Storage**:

   - Stores scroll positions in a `Map` with route keys
   - Automatically saves current position before navigating away
   - Limits stored positions to prevent memory leaks

3. **Restoration Logic**:
   - **New pages**: Scroll to top (instant or smooth)
   - **Back navigation**: Restore exact previous scroll position

### Usage

The scroll restoration is automatically enabled in your `Layout` component:

```tsx
// Basic usage (current implementation)
useScrollRestoration();

// With custom options
useScrollRestoration({
  smoothScrollOnNewPage: true,
  debounceMs: 150,
});
```

### Return Values

The hook also returns utility functions:

```tsx
const { scrollToTop, getScrollPosition, clearScrollHistory } =
  useScrollRestoration();

// Scroll to top programmatically
scrollToTop(true); // smooth scroll
scrollToTop(false); // instant scroll

// Get current page's scroll position
const position = getScrollPosition();

// Clear all stored scroll positions
clearScrollHistory();
```

## Browser Compatibility

- ✅ Chrome, Firefox, Safari, Edge (modern versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Supports both `instant` and `smooth` scroll behaviors

## Memory Management

- Automatically limits stored positions to 50 entries
- Cleans up old positions using FIFO (First In, First Out)
- Removes event listeners on component unmount

## Testing the Implementation

To test the scroll restoration:

1. **New Page Navigation Test**:

   - Navigate to a long page (e.g., Services or Portfolio)
   - Scroll down halfway
   - Click a navigation link to go to another page
   - ✅ **Expected**: New page starts from the top

2. **Back Navigation Test**:

   - From the new page, click the browser's back button
   - ✅ **Expected**: Returns to the exact scroll position where you left off

3. **Multiple Navigation Test**:
   - Navigate through several pages, scrolling on each
   - Use back/forward buttons to navigate
   - ✅ **Expected**: Each page remembers its scroll position

## Customization Options

If you want to modify the behavior, you can update the `Layout.tsx` file:

```tsx
// For smooth scrolling on new pages
useScrollRestoration({ smoothScrollOnNewPage: true });

// For less frequent position saving (better performance)
useScrollRestoration({ debounceMs: 200 });

// For both options
useScrollRestoration({
  smoothScrollOnNewPage: true,
  debounceMs: 150,
});
```

## Technical Notes

- Uses `setTimeout` instead of `requestAnimationFrame` for scroll restoration to ensure DOM is fully rendered
- Throttles scroll events to balance responsiveness with performance
- Handles page unload events to save positions before browser closes
- Works with React Router v6+ and v7+

This implementation provides a smooth, professional user experience that matches modern web application standards!
