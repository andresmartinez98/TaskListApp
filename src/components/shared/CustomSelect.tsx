type Props = {
  options: string[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const CustomSelect = ({ options, value, onChange }: Props) => {
  return (
    <select value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </option>
      ))}
    </select>
  );
};
