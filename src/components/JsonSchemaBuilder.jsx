
import React, { useCallback } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Plus } from 'lucide-react';
import SchemaField from './SchemaField';
import Button from '../common/Button';
import JsonViewer from '../common/JsonViewer';
import { generateJsonSchema } from "../utils/schemaUtils";

const JsonSchemaBuilder = () => {
  const { control, register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      fields: []
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'fields'
  });

  const watchedFields = watch('fields');

  const addField = () => {
    append({
      name: '',
      type: '',
      required: false,
      nested: []
    });
  };

  const onSubmit = (data) => {
    const schema = generateJsonSchema(data.fields);
    console.log('JSON', { fields: data.fields, schema });
    alert('Form submitted! Check the console for details.');
    remove()
  };

  const jsonOutput = generateJsonSchema(watchedFields);

  return (
    <div className="min-h-screen bg-white flex">
      <div className="w-1/2 p-6 border-r border-gray-200">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {fields.map((field, index) => (
            <SchemaField
              key={field.id}
              fieldIndex={index}
              control={control}
              register={register}
              errors={errors}
              remove={remove}
            />
          ))}
          <Button
            onClick={addField}
            variant="primary"
            className="w-full"
            type="button"
          >
            <Plus size={16} className="mr-2" />
            Add Field
          </Button>
          <div className="pt-4">
            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div className="w-1/2 p-6">
        <JsonViewer json={jsonOutput} />
      </div>
    </div>
  );
};

export default JsonSchemaBuilder;