interface TestProps { text: string }

export function Test({
  text,
}: TestProps) {
  return (
    <div
      className="text-2xl"
      data-testid="test-component-root"
    >
      {text}
    </div>
  );
}
