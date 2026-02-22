import { BarChart3, Database, Target } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/20" />
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
          <Target className="h-4 w-4 text-primary" />
          Task 13 — Internship Guide
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          PCA — Dimensionality Reduction
        </h1>
        <p className="mx-auto max-w-xl text-lg text-muted-foreground">
          Learn how to reduce the number of features in a dataset while keeping the important information. Follow the steps below to complete your task.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <StatCard icon={<Database className="h-5 w-5" />} label="Dataset" value="MNIST / Digits" />
          <StatCard icon={<BarChart3 className="h-5 w-5" />} label="Method" value="PCA" />
          <StatCard icon={<Target className="h-5 w-5" />} label="Outcome" value="Feature Compression" />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3 shadow-sm">
    <div className="text-primary">{icon}</div>
    <div className="text-left">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-sm font-semibold">{value}</p>
    </div>
  </div>
);

export default HeroSection;
