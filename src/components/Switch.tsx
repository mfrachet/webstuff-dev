export interface SwitchProps {
  onChange: (checked: boolean) => void;
  label: string;
  checked: boolean;
}

export const Switch = ({ label, onChange, checked }: SwitchProps) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <span className="sr-only">{label}</span>
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-300"></div>
    </label>
  );
};
