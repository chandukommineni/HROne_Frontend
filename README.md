# Json Schema Builder

A React-based visual builder for creating and previewing JSON schemas dynamically. Users can add, remove, and nest fields, and see the resulting JSON schema in real-time.

## Features

- Add, remove, and nest fields of various types (string, number, nested)
- Mark fields as required
- Live JSON schema preview
- Responsive layout

## Folder Structure

```
src/
  components/
    JsonSchemaBuilder.jsx
    SchemaField.jsx
    common/
      Button.jsx
      Input.jsx
      Select.jsx
      Toggle.jsx
      JsonViewer.jsx
  utils/
    schemaUtils.js
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to use the app.

## Usage

- Click **Add Field** to add a new field.
- Choose the type (string, number, nested).
- For nested fields, click **Add Nested Field** inside the parent.
- Click **Submit** to see the schema in the console and clear the form.

## Customization

- Modify `src/utils/schemaUtils.js` to change schema generation logic.
- Update or extend field types in `SchemaField.jsx` and related components.