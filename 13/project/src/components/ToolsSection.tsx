const tools = [
  { name: "Python", desc: "Programming language" },
  { name: "Scikit-learn", desc: "PCA & Logistic Regression" },
  { name: "Matplotlib", desc: "Plotting charts" },
  { name: "OpenCV", desc: "Alternative PCA option" },
];

const ToolsSection = () => (
  <section className="px-4 py-14">
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-6 text-2xl font-bold">Tools You'll Need</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {tools.map((t) => (
          <div key={t.name} className="rounded-xl border border-border bg-card p-4 text-center shadow-sm">
            <p className="font-semibold">{t.name}</p>
            <p className="mt-1 text-xs text-muted-foreground">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ToolsSection;
