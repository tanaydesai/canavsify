# Canvasify
This is a customizable portfolio website template that allows anyone to easily create their own portfolio canvas. You can edit and add the content you want by modifying the values in the `safariTabs`, `notesTabs`, and `picTabs` arrays in the `content.js` file located in the `components` folder.

## Instructions

To customize the content of your portfolio website, follow these steps:

1. Navigate to the `components` folder.
2. Open the `content.js` file.
3. Locate the `safariTabs`, `notesTabs`, and `picTabs` arrays.

```jsx
// Example safariTabs array
const safariTabs = [
  {
    title: 'About',
    content: 'Add your about information here.',
  },
  {
    title: 'Projects',
    content: 'Add your projects information here.',
  },
  // Add more tabs as needed
];