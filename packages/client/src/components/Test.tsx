interface TestProps { text: string }

export function Test({
  text,
}: TestProps) {
  return (
    <div className="text-2xl">
      {text}
    </div>
  );
}
