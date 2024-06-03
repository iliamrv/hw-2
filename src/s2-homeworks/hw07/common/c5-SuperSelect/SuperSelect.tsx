import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
} from "react";
import s from "./SuperSelect.module.css";

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[];
  onChangeOption?: (option: any) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  className,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions: any[] = options
    ? options.map((o) => (
        <option
          id={"hw7-option-" + o.id}
          className={s.option}
          key={o.id}
          value={o.id}
        >
          {o.value}
        </option>
      ))
    : []; // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChangeOption) {
      // Find the option object corresponding to the selected value
      const selectedOption = options?.find(
        (o) => o.id.toString() === e.target.value
      );
      // Call onChangeOption with the selected option's id (or any other relevant property)
      if (selectedOption) {
        onChangeOption(selectedOption.id);
      }
    }
  };

  const finalSelectClassName = s.select + (className ? " " + className : "");

  return (
    <select
      className={finalSelectClassName}
      onChange={onChangeCallback}
      {...restProps}
    >
      {mappedOptions}
    </select>
  );
};

export default SuperSelect;
