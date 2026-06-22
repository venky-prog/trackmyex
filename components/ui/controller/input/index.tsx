"use client";
import React from "react";
import {
  useController,
  Controller,
  Control,
  FieldValues,
  FieldPath,
} from "react-hook-form";
import { Input, InputField, IInputProps } from "../../input";
import { FormControl, FormControlError, FormControlErrorText } from "../../form-control";

/**
 * Props for the ControllerInput component
 * @template TFieldValues - The shape of the form data
 * @template TName - The path to the field in the form data
 */
interface ControllerInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  /** The control object from useForm hook */
  control: Control<TFieldValues>;
  /** The field name/path in the form data */
  name: TName;
  /** Placeholder text for the input */
  placeholder?: string;
  /** Additional input props */
  inputProps?: Omit<IInputProps, "placeholder">;
}

/**
 * Type-safe controlled input component using react-hook-form
 *
 * @example
 * ```tsx
 * const { control } = useForm<LoginForm>();
 *
 * <ControllerInput
 *   control={control}
 *   name="email"
 *   placeholder="Enter email"
 *   inputProps={{ size: 'md' }}
 * />
 * ```
 */
function ControllerInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: ControllerInputProps<TFieldValues, TName>) {
  const { control, name, placeholder, inputProps } = props;
  const { field, fieldState } = useController({
    control,
    name,
  });

  console.log(fieldState.error)

  return (
    <FormControl isInvalid={!!fieldState.error}>
      <Input {...inputProps}>
        <InputField
          placeholder={placeholder}
          value={field.value ?? ""}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
        />
      </Input>
      <FormControlError>
        <FormControlErrorText>
          {fieldState.error?.message}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}

export { ControllerInput };
export type { ControllerInputProps };
