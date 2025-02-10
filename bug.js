```javascript
// in your main app.js file
import 'tailwindcss/tailwind.css';

// ... your app code
```

```html
<!-- in your component file -->
<div class="bg-red-500 p-4">
  <!-- Your content here -->
</div>
```

This will cause the Tailwind CSS styles to be applied. However, if you are using a CSS framework alongside Tailwind CSS (such as Bootstrap, MaterialUI etc.), ensure they are properly configured to avoid style conflicts.  Incorrect order of CSS imports or conflicting class names can lead to unexpected behavior.