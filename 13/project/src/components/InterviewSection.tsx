import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  { q: "What problem does PCA solve?", a: "PCA solves the problem of too many features (high dimensionality). It reduces the number of features while keeping the most important information, making data easier to visualize and models faster to train." },
  { q: "What is explained variance?", a: "Explained variance tells you how much of the original data's information is captured by each principal component. A higher explained variance ratio means that component carries more useful information." },
  { q: "Why is scaling required for PCA?", a: "PCA finds directions of maximum variance. If features have different scales, the one with larger values will dominate. Scaling ensures all features contribute equally to the analysis." },
  { q: "PCA vs Feature Selection — what's the difference?", a: "Feature selection picks a subset of original features, while PCA creates entirely new features (components) by combining the originals. PCA can capture more information in fewer dimensions but the new features are harder to interpret." },
  { q: "What are PCA limitations?", a: "PCA assumes linear relationships between features, is sensitive to scaling, creates components that are hard to interpret, and may not work well when the important patterns are non-linear." },
];

const InterviewSection = () => (
  <section className="px-4 py-14" style={{ background: "hsl(var(--question-bg))" }}>
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-6 text-2xl font-bold">Interview Questions</h2>
      <div className="space-y-3">
        {questions.map((item, i) => (
          <QuestionCard key={i} question={item.q} answer={item.a} />
        ))}
      </div>
    </div>
  </section>
);

const QuestionCard = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl border bg-card p-4 shadow-sm cursor-pointer"
      style={{ borderColor: "hsl(var(--question-border))" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-semibold">{question}</h3>
        <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </div>
      {open && <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{answer}</p>}
    </div>
  );
};

export default InterviewSection;
