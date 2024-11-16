type Case = string | number;

type SwitchCaseProps<T extends Case> = {
  value: T;
  caseBy: Partial<Record<T, JSX.Element | null>>;
  defaultComponent?: JSX.Element | null;
};

function SwitchCase<T extends Case>({
  value,
  caseBy,
  defaultComponent = null,
}: SwitchCaseProps<T>) {
  if (value == null) return defaultComponent;

  return caseBy[value] ?? defaultComponent;
}

export default SwitchCase;
