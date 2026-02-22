import { FileText, BarChart3, Table } from "lucide-react";

const items = [
  { icon: <BarChart3 className="h-6 w-6" />, title: "Explained Variance Plot", desc: "A chart showing cumulative variance retained vs number of components." },
  { icon: <Table className="h-6 w-6" />, title: "Reduced Dataset", desc: "The dataset transformed with the optimal number of PCA components." },
  { icon: <FileText className="h-6 w-6" />, title: "Accuracy Comparison", desc: "A report comparing model accuracy on original vs reduced data." },
];

const DeliverablesSection = () => (
  <section className="px-4 py-14">
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-6 text-2xl font-bold">Deliverables</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="mb-3 text-accent-foreground" style={{ color: "hsl(var(--accent))" }}>{item.icon}</div>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DeliverablesSection;
