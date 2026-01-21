export default function TestPage() {
  return (
    <div className="min-h-screen bg-navy-dark text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Test Page</h1>
      <p className="text-lg mb-4">If you can see this styled, Tailwind is working.</p>
      <div className="bg-gold text-navy-dark p-4 rounded">
        <p>This should be a gold box with navy text.</p>
      </div>
    </div>
  );
}
