import React from 'react';
import { useFieldArray, Controller } from 'react-hook-form';
import { X, Plus } from 'lucide-react';
import Input from '../common/Input';
import Select from '../common/Select';
import Toggle from '../common/Toggle';
import Button from '../common/Button';

const SchemaField = ({ fieldIndex, nestingLevel = 0, control, register, errors, remove }) => {
  const { fields: nestedFields, append: appendNested, remove: removeNested } = useFieldArray({
    control,
    name: `fields.${fieldIndex}.nested`
  });

  const addNestedField = () => {
    appendNested({
      name: '',
      type: '',
      required: false,
      nested: []
    });
  };

  const fieldPath = `fields.${fieldIndex}`;
  const fieldErrors = errors?.fields?.[fieldIndex];

  return (
    <div
      className={`space-y-3 p-4 rounded border ${
        nestingLevel > 0 ? 'ml-4 bg-gray-50 border-l-4 border-blue-300' : 'bg-white border-gray-200'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <Controller
            name={`${fieldPath}.name`}
            control={control}
            render={({ field, fieldState }) => (
              <Input
                value={field.value}
                onChange={field.onChange}
                placeholder="Field name"
                error={fieldState.error?.message}
              />
            )}
          />
        </div>
        <div className="w-28">
          <Controller
            name={`${fieldPath}.type`}
            control={control}
            render={({ field, fieldState }) => (
              <Select
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?.message}
              >
                <option value="string">string</option>
                <option value="number">number</option>
                <option value="nested">nested</option>
              </Select>
            )}
          />
        </div>
        <div className="flex items-center pt-2">
          <Controller
            name={`${fieldPath}.required`}
            control={control}
            render={({ field }) => (
              <Toggle
                checked={field.value || false}
                onChange={field.onChange}
              />
            )}
          />
        </div>
        <button
          type="button"
          onClick={() => remove(fieldIndex)}
          className="p-1 text-gray-500 hover:text-red-500 transition-colors mt-2"
        >
          <X size={16} />
        </button>
      </div>
      <Controller
        name={`${fieldPath}.type`}
        control={control}
        render={({ field: typeField }) =>
          typeField.value === 'nested' &&
          nestedFields.map((nestedField, nestedIndex) => (
            <SchemaField
              key={nestedField.id}
              fieldIndex={`${fieldIndex}.nested.${nestedIndex}`}
              control={control}
              register={register}
              errors={fieldErrors}
              remove={(index) => removeNested(index)}
              nestingLevel={nestingLevel + 1}
            />
          ))
        }
      />
      <Controller
        name={`${fieldPath}.type`}
        control={control}
        render={({ field: typeField }) =>
          typeField.value === 'nested' && (
            <div className="pt-2">
              <Button
                onClick={addNestedField}
                variant="primary"
                className="w-full"
                type="button"
              >
                <Plus size={16} className="mr-2" />
                Add Nested Field
              </Button>
            </div>
          )
        }
      />
    </div>
  );
};

export default SchemaField;