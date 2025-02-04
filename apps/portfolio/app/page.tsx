import { Button } from 'design-system';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">My Portfolio</h1>
      <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
    </div>
  );
}